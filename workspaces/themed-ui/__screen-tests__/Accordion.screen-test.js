import puppeteer from 'puppeteer';

describe('Accordion', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('looks right', async () => {
    await page.goto('http://localhost:9009/iframe.html?selectedKind=Accordion&selectedStory=Reference');
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });
});
