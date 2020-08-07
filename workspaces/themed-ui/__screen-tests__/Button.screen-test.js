import puppeteer from 'puppeteer';

describe('Button', () => {
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
    await page.goto('http://localhost:9009/iframe.html?selectedKind=Button&selectedStory=Examples');
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });
});
