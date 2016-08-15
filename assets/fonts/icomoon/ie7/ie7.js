/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-home': '&#xe900;',
		'icon-home3': '&#xe902;',
		'icon-address-book': '&#xe944;',
		'icon-location': '&#xe947;',
		'icon-location2': '&#xe948;',
		'icon-compass': '&#xe949;',
		'icon-compass2': '&#xe94a;',
		'icon-map': '&#xe94b;',
		'icon-map2': '&#xe94c;',
		'icon-calendar': '&#xe953;',
		'icon-bubble': '&#xe96b;',
		'icon-bubbles': '&#xe96c;',
		'icon-bubbles2': '&#xe96d;',
		'icon-bubble2': '&#xe96e;',
		'icon-bubbles3': '&#xe96f;',
		'icon-bubbles4': '&#xe970;',
		'icon-user': '&#xe971;',
		'icon-cross': '&#xea0f;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
