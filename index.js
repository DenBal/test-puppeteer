const puppeteer = require('puppeteer')

puppeteer.launch().then(async browser=> {
    const page = await browser.newPage()
    await page.setViewport({ width: 1920, height: 960})
    await page.goto('https://www.shop.philips.ru')
    await page.screenshot({ path: './screenshots/page1.png', fullPage: true})
    await page.pdf({path: './pdfs/page1.pdf'})
    await browser.close()
})