const puppeteer = require('puppeteer');

const launch = () => puppeteer.launch({
  args: [
    // Required for Docker version of Puppeteer
    '--no-sandbox',
    '--disable-setuid-sandbox',
    // This will write shared memory files into /tmp instead of /dev/shm,
    // because Docker’s default for /dev/shm is 64MB
    '--disable-dev-shm-usage'
  ]
});

module.exports = {launch, iphone6: puppeteer.devices['iPhone 6']};
