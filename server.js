const http = require('http');
const Url = require('url');
const { fromNullable } = require('./utils/chain');
const demoDoc = require('./demo');
const SiteProps = require('./props');
const fileSync = require('./fileSync');
const fileErr = require('./fileErr');
const port = process.env.port || 9595;

const fileType = type => {
    switch (type) {
        case 'html': return 'text/html';
        case 'png': return 'image/png';
        case 'css': return 'text/css';
        case 'js': return 'text/javascript';
        default: return null;
    }
}

const sender = response => (content, type) => {
    response.writeHead(200, { "Content-Type": type || "text/html" });
    response.end(content);
}

http.createServer((request, response) => {
    const url = Url.parse(request.url, true);
    const end = sender(response);
    switch (url.pathname) {
        case '':
        case '/':
            return fileSync('client/index.html', 'utf-8')
            .fold(
                e => end(fileErr(e)),
                html => end(html)
            );
        case '/demo':
        case '/demo/':
            return demoDoc(SiteProps, url.query.url, url.query.m)
            .fold(
                e => end(fileErr(e)),
                html => end(html)
            )
        default:
            return fromNullable(url.pathname.split('.')[1])
            .chain(t => fromNullable(fileType(t)))
            .fold(
                e => end(fileErr(url.pathname + ' Not Found')),
                t => fileSync('client' + url.pathname)
                        .fold(e => end(fileErr(e)), c => end(c, t))
            )
    }
}).listen(port, console.log.bind(console, "Listening on http://locahost:" + port));