(function () {
    if (window.pocketConverter !== undefined) {
        pocketConverter();
    } else {
        document.body.appendChild(document.createElement('script'))
            .src = 'https://sinelnikov-web.github.io/test/pocket-converter.js?r=' + Math.floor(Math.random()*99999999999999999999);
    }
})();