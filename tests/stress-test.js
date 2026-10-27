
import http from "k6/http";
import { check, sleep } from "k6";

const BASE_URL = __ENV.BASE_URL || "http://localhost:3000";

export const options = {
  stages: [
    { duration: "20s", target: 25 },
    { duration: "30s", target: 50 },
    { duration: "30s", target: 100 },
    { duration: "20s", target: 100 },
    { duration: "20s", target: 0 },
  ],

  thresholds: {
    http_req_failed: ["rate<0.01"],
    http_req_duration: ["p(95)<1000"],
  },
};

export default function () {
  const response = http.get(`${BASE_URL}/`, {
    timeout: "10s",
  });

  check(response, {
    "Homepage returns 200": (r) => r.status === 200,
    "Response under 1 second": (r) =>
      r.timings.duration < 1000,
  });

  sleep(1);
}
