(function () {
    let jquery_version = '3.3.1';
    let site_url = 'http://127.0.0.1:8000/';
    let static_url = site_url + 'static/';
    let min_width = 100;
    let min_height = 100;

    function pocketConverter(msg) {

    }
    // Проверка, подключена ли jQuery.
    if(typeofwindow.jQuery !== 'undefined') {
        pocketConverter();
    } else {
        let conflict = typeof window.$ !== 'undefined';
        let script = document.createElement('script');
        script.src = '//ajax.googleapis.com/ajax/libs/jquery/' +    jquery_version + '/jquery.min.js';
        document.head.appendChild(script);
        let attempts = 15;
        (function(){
            if(typeof window.jQuery == 'undefined') {
                if(--attempts > 0) {
                    window.setTimeout(arguments.callee, 250)
                } else {
                    alert('An error occurred while loading jQuery')
                }
            } else {
                pocketConverter();
            }
        })();
    }
})()