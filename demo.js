const fileSync = require('./fileSync');

const ios = 'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3';

const demoDoc = (props, url, isMobile) => 
    fileSync('demo.html', 'utf-8')
    .map(c => c.replace(/SITE_PROPS/g, props))
    .map(c => c.replace(/EMBED_URL/g, url))
    .map(c => c.replace(/navigator.userAgent/g, isMobile?ios:''))

module.exports = demoDoc;