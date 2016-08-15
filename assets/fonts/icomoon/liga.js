/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'home': '&#xe900;',
            'house': '&#xe900;',
            'home3': '&#xe902;',
            'house3': '&#xe902;',
            'address-book': '&#xe944;',
            'contact': '&#xe944;',
            'location': '&#xe947;',
            'map-marker': '&#xe947;',
            'location2': '&#xe948;',
            'map-marker2': '&#xe948;',
            'compass': '&#xe949;',
            'direction': '&#xe949;',
            'compass2': '&#xe94a;',
            'direction2': '&#xe94a;',
            'map': '&#xe94b;',
            'guide': '&#xe94b;',
            'map2': '&#xe94c;',
            'guide2': '&#xe94c;',
            'calendar': '&#xe953;',
            'date': '&#xe953;',
            'bubble': '&#xe96b;',
            'comment': '&#xe96b;',
            'bubbles': '&#xe96c;',
            'comments': '&#xe96c;',
            'bubbles2': '&#xe96d;',
            'comments2': '&#xe96d;',
            'bubble2': '&#xe96e;',
            'comment2': '&#xe96e;',
            'bubbles3': '&#xe96f;',
            'comments3': '&#xe96f;',
            'bubbles4': '&#xe970;',
            'comments4': '&#xe970;',
            'user': '&#xe971;',
            'profile2': '&#xe971;',
            'cross': '&#xea0f;',
            'cancel': '&#xea0f;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
