jQuery(document).ready(function () {
    var contactFormMessageEl = jQuery('.contact-form-result');
    if (contactFormMessageEl) {
        jQuery('html, body').animate({
            scrollTop: contactFormMessageEl.offset().top 
        }, 2000);
    }
});