
import { browser } from "k6/browser";
import { check, sleep } from "k6";

const BASE_URL = __ENV.BASE_URL || "http://localhost:3000";

export const options = {
  scenarios: {
    browser_test: {
      executor: "shared-iterations",
      vus: 1,
      iterations: 5,
      maxDuration: "2m",
      options: {
        browser: {
          type: "chromium",
        },
      },
    },
  },

  thresholds: {
    checks: ["rate==1"],
    browser_http_req_failed: ["rate<0.01"],
    browser_web_vital_lcp: ["p(90)<2500"],
    browser_web_vital_cls: ["p(90)<0.1"],
    browser_web_vital_fcp: ["p(90)<1800"],
  },
};

export default async function () {
  const page = await browser.newPage();

  try {
    const response = await page.goto(BASE_URL, {
      waitUntil: "domcontentloaded",
      timeout: 30000,
    });

    check(response, {
      "Homepage returns 200": (r) =>
        r !== null && r.status() === 200,
    });

    const heading = page.getByRole("heading", {
      name: /ابتسامتك/,
    });

    await heading.waitFor({
      state: "visible",
      timeout: 15000,
    });

    check(await heading.isVisible(), {
      "Hero heading visible": (v) => v === true,
    });

    const doctorImage = page.locator(
      'img[alt="الدكتور بشار المسالمة"]'
    );

    await doctorImage.waitFor({
      state: "visible",
      timeout: 15000,
    });

    check(await doctorImage.isVisible(), {
      "Doctor image visible": (v) => v === true,
    });

    const services = page.locator("#services");

    check((await services.count()) > 0, {
      "Services section exists": (v) => v === true,
    });

    const whatsapp = page.locator('a[href*="wa.me/"]');

    check((await whatsapp.count()) > 0, {
      "WhatsApp booking link exists": (v) => v === true,
    });

    await page.evaluate(() => {
      window.scrollTo(0, 500);
    });

    await sleep(1);

    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });

    await sleep(2);
  } finally {
    await page.close();
  }
}
