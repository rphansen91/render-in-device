(function main () {
    var demo = document.getElementById('demoUrlInput');
    var page = document.getElementById('pagewrap');
    var dFrame = document.getElementById('frameD');
    var mFrame = document.getElementById('frameM');
    demo.addEventListener('keyup', function (ev) {
        if (ev.which != 13) return;
        dFrame.src = '/demo?url=//' + ev.target.value;
        mFrame.src = '/demo?m=true&url=//' + ev.target.value;
        page.setAttribute('class', 'pagewrap pagewrapActive')
    })
})()