
import http from "k6/http";
import { check, sleep } from "k6";

const BASE_URL = __ENV.BASE_URL || "http://localhost:3000";

export const options = {
  stages: [
    { duration: "15s", target: 5 },
    { duration: "20s", target: 10 },
    { duration: "20s", target: 25 },
    { duration: "15s", target: 25 },
    { duration: "15s", target: 0 },
  ],

  thresholds: {
    http_req_failed: ["rate<0.01"],
    http_req_duration: ["p(95)<1000"],
    checks: ["rate>0.99"],
  },

  userAgent: "Dentiva-k6-LoadTest/1.0",
};

export default function () {
  const response = http.get(`${BASE_URL}/`, {
    headers: {
      Accept: "text/html",
    },
    tags: {
      page: "homepage",
    },
    timeout: "10s",
  });

  check(response, {
    "Homepage returns HTTP 200": (r) =>
      r.status === 200,

    "Response contains HTML": (r) =>
      typeof r.body === "string" &&
      r.body.includes("<html"),

    "Response contains clinic name": (r) =>
      typeof r.body === "string" &&
      r.body.includes("بشار المسالمة"),

    "Response time under 1 second": (r) =>
      r.timings.duration < 1000,
  });

  sleep(1);
}
