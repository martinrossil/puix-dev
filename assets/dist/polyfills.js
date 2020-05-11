/* eslint-disable */
(function() 
{
    'use strict';
    function loadCustomElements() {
        var customElements = document.createElement("script");
        customElements.src = './customElements.js';
        customElements.onload = loadBundleVersion;
        document.body.appendChild(customElements);
    }

    function loadBundleVersion() {
        var bundleScript = document.createElement('script');
        if ('noModule' in bundleScript) {
            bundleScript.src = 'es6.' + VERSION + '.js';
            bundleScript.type = 'module';
        } else {
            bundleScript.src = 'es5.' + VERSION + '.js';
        }
        document.body.appendChild(bundleScript);
    }

    function testCustomElements() {
        if(!window.customElements) {
            loadCustomElements();
        } else {
            loadBundleVersion();
        }
    }

    if (typeof window.CustomEvent !== "function") {
        function CustomEvent ( event, params ) {
            params = params || { bubbles: false, cancelable: false, detail: undefined };
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
            return evt;
        }
        CustomEvent.prototype = window.Event.prototype;
        window.CustomEvent = CustomEvent;
    }
    testCustomElements();
})();