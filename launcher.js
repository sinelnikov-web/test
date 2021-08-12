(function () {
    if (window.pocketConverter !== undefined) {
        pocketConverter();
    } else {
        document.body.appendChild(document.createElement('script'))
            .src = 'D:\\frontend\\webinar\\converter_plugin\\pocket-converter.js';
    }
})();