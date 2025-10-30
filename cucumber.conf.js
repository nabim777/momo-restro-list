// cucumber.conf.js file

const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

setDefaultTimeout(60000)

// launch the browser
BeforeAll(async function () {
  global.browser = await chromium.launch({
      headless: true,
      slowMo: 1000,
  });
});

// close the browser
AfterAll(async function () {
   await global.browser.close();
});

// Create a new browser context and page per scenario
Before(async function () {
  global.context = await global.browser.newContext();
  await global.context.tracing.start({ screenshots: true, snapshots: true });
  global.page = await global.context.newPage();
});

// Cleanup after each scenario
After(async function (scenario) {
  if (scenario.result.status === 'FAILED') {
    await global.context.tracing.stop({ path: `trace-results/trace-${Date.now()}.zip` });
    // console.log('\x1b[31m--------------------Failed Scenario--------------------');
    // console.log(`"${scenario.pickle.name}"`);
    // console.log('-----------------------------------------------------\x1b[0m');
  }
  await global.page.close();
  await global.context.close();
});