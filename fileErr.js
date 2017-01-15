module.exports = e => 
    `<body style="display: flex;align-items: center;justify-content: center;flex-direction:column;margin:0;font-size:24px;background-color:#111;color:#fff;font-family: sans-serif;font-weight: bold;">
        <img style="width: 200px;" src="//spoutable.com/wp-content/themes/spoutable/assets/site/headerlogo-white-193x44-2x.png">
        <p>${typeof e === 'string' ? e : 'Not Found'}</p>
    </body>`