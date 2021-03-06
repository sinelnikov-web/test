(function () {
    let jquery_version = '3.3.1';
    let site_url = 'http://127.0.0.1:8000/';
    let static_url = site_url + 'static/';
    let min_width = 100;
    let min_height = 100;

    function pocketConverter(msg) {
        // let css = jQuery('<link>');
        // css.attr({
        //     rel: 'stylesheet',
        //     type: 'text/css',
        //     href: 'https://sinelnikov-web.github.io/test/pocket-converter.css'
        // });
        // jQuery('head').append(css);
        box_html = `<div id="pocket-converter">
                        <a href="#" id="close-converter">&times;</a>
                        <h1>Pocket Converter</h1>
                        <div id="converter">
                            <div class="converter__field">
                                <input type="text" class="converter__input">
                                <select name="converter__select" id="select1">
                                    <option selected value="RUB">RUB</option>
                                    <option value="RUB">KZT</option>
                                    <option value="RUB">EUR</option>
                                    <option value="RUB">USD</option>
                                    <option value="RUB">UAH</option>
                                </select>
                            </div>
                            <div class="converter__field">
                                <input type="text" class="converter__input">
                                <select name="converter__select" id="select1">
                                    <option value="RUB">RUB</option>
                                    <option value="RUB">KZT</option>
                                    <option value="RUB">EUR</option>
                                    <option selected value="RUB">USD</option>
                                    <option value="RUB">UAH</option>
                                </select>
                            </div>
                        </div>
                    </div>`;
        jQuery('body').append(box_html);
        jQuery('#pocket-converter #close-converter').click(function () {
            jQuery('#pocket-converter').remove();
        });
    }

    // ????????????????, ???????????????????? ???? jQuery.
    if (typeof window.jQuery !== 'undefined') {
        pocketConverter();
    } else {
        let conflict = typeof window.$ !== 'undefined';
        let script = document.createElement('script');
        script.src = '//ajax.googleapis.com/ajax/libs/jquery/' + jquery_version + '/jquery.min.js';
        document.head.appendChild(script);
        let attempts = 15;
        (function () {
            if (typeof window.jQuery == 'undefined') {
                if (--attempts > 0) {
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