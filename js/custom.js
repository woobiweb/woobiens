/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {

  'use strict';

  Drupal.behaviors.woobienes = {
    attach: function(context, settings) {

      // Custom code here

    }
  };

  $('#collapseLeggere').collapse({
    toggle: false
  })

})(jQuery, Drupal);

//////////////////////// JAVASCRIPT
'use strict';

const homeLink = document.getElementsByClassName('nav__link');

/*
change Home link with Opita Link
add opita class to home
 */

// console.log(homeLink);
for (const link of homeLink) {
  const att = link.getAttribute('data-drupal-link-system-path');
  if (att === '<front>') {
    link.innerHTML = 'OPITA';
    link.setAttribute('class', 'nav__link opita')
  }
}
// console.log(menu);


