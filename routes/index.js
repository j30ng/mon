const express = require('express');
const {launch, iphone6} = require('../browser');

const router = express.Router();

router.get('/google.png', async function (req, res, next) {
  try {
    const symbol = req.query.symbol || 'ixic';
    const browser = await launch(process.env.http_proxy);
    const page = await browser.newPage();
    await page.emulate(iphone6);
    const response = await page.goto(`https://www.google.com/search?hl=en&q=${symbol}`)
    if (!response.ok()) {
      res.write(`${response.status()}: ${response.text()}`);
      return;
    }
    res.contentType('png');
    res.send(await page.screenshot());
  } catch {
    typeof response !== 'undefined' && response.close();
    typeof page !== 'undefined' && page.close();
    typeof browser !== 'undefined' && browser.close();
  }
});

module.exports = router;
