const puppeteer = require('puppeteer');

const launchArgs = [
  // Required for Docker version of Puppeteer
  '--no-sandbox',
  '--disable-setuid-sandbox',
  // This will write shared memory files into /tmp instead of /dev/shm,
  // because Docker’s default for /dev/shm is 64MB
  '--disable-dev-shm-usage'
];

const launch = (proxy) => puppeteer.launch({args: launchArgs.concat(proxy ? [`--proxy-server=${proxy}`] : [])});

module.exports = {launch, iphone6: puppeteer.devices['iPhone 6']};
