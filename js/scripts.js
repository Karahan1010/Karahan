// ResumeTemplate v1.0 ClearCareer
// url: clearcareer.ca
// by: Iskender Piyale-Sheard
// website: izzydoesizzy.com
// Created 06-27-2016


// If text is shown less, then show complete
//show less button
const Utils = {

  addClass: function(element, theClass) {
    element.classList.add(theClass);
  },

  removeClass: function(element, theClass) {
    element.classList.remove(theClass);
  },

  showMore: function(element, excerpt) {
    element.addEventListener("click", event => {
      const linkText = event.target.textContent.toLowerCase();
      event.preventDefault();

      console.log(this);
      if (linkText == "show more") {
        element.textContent = "Show less";
        this.removeClass(excerpt, "excerpt-hidden");
        this.addClass(excerpt, "excerpt-visible");
      } else {
        element.textContent = "Show more";
        this.removeClass(excerpt, "excerpt-visible");
        this.addClass(excerpt, "excerpt-hidden");
      }
    });
  }
};

const ExcerptWidget = {
  showMore: function(showMoreLinksTarget, excerptTarget) {
   const showMoreLinks = document.querySelectorAll(showMoreLinksTarget);

   showMoreLinks.forEach(function(link) {
     const excerpt = link.previousElementSibling.querySelector(excerptTarget);
     Utils.showMore(link, excerpt);
   });
  }
};

ExcerptWidget.showMore('.js-show-more', '.js-excerpt');

// Smooth Scroll Function
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
