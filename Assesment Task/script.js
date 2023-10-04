// Handling click events for .dropdown-toggle elements
var dropdownToggle = document.querySelectorAll(".dropdown-toggle");
dropdownToggle.forEach(function (element) {
  element.addEventListener("click", function (e) {
    e.stopPropagation();
    e.preventDefault();

    var self = this;
    if (self.classList.contains("disabled") || self.disabled) {
      return false;
    }
    self.parentElement.classList.toggle("open");
  });
});

// Handling click events on the document to close open dropdowns
document.addEventListener("click", function (e) {
  if (document.querySelector(".dropdown.open")) {
    document.querySelector(".dropdown.open").classList.remove("open");
  }
});

// Handling click events for .nav-btn.nav-slider
var navSlider = document.querySelector(".nav-btn.nav-slider");
var overlay = document.querySelector(".overlay");
var nav = document.querySelector("nav");

navSlider.addEventListener("click", function () {
  overlay.style.display = "block";
  nav.classList.toggle("open");
});

overlay.addEventListener("click", function () {
  if (nav.classList.contains("open")) {
    nav.classList.remove("open");
  }
  this.style.display = "none";
});

/* Slider Script :: */
document.addEventListener("DOMContentLoaded", function () {
  // Slider module
  var SliderModule = (function () {
    var pb = {};
    pb.el = document.getElementById("slider");
    pb.items = {
      panels: pb.el.querySelectorAll(".slider-wrapper > li"),
    };

    // Interval for the slider
    var SliderInterval,
      currentSlider = 0,
      nextSlider = 1,
      lengthSlider = pb.items.panels.length;

    // Constructor for the slider
    pb.init = function (settings) {
      this.settings = settings || { duration: 8000 };
      var items = this.items,
        lengthPanels = items.panels.length,
        output = "";

      // Insert buttons for controlling the slider
      var controlButtons = document.getElementById("control-buttons");

      for (var i = 0; i < lengthPanels; i++) {
        output += "<li></li>";
      }

      controlButtons.innerHTML = output;
      controlButtons.getElementsByTagName("li")[0].classList.add("active");

      // Activate the slider
      activateSlider();

      // Event handling for the control buttons
      controlButtons.addEventListener("click", function (e) {
        var target = e.target;
        if (target.tagName === "LI") {
          var index = Array.from(target.parentNode.children).indexOf(target);
          if (index !== -1) {
            changePanel(index);
          }
        }
      });
    };

    // Function to activate the slider
    var activateSlider = function () {
      SliderInterval = setInterval(pb.startSlider, pb.settings.duration);
    };

    // Function for the animation
    pb.startSlider = function () {
      var items = pb.items,
        controlButtons = document
          .getElementById("control-buttons")
          .getElementsByTagName("li");

      if (nextSlider >= lengthSlider) {
        nextSlider = 0;
        currentSlider = lengthSlider - 1;
      }

      for (var i = 0; i < controlButtons.length; i++) {
        controlButtons[i].classList.remove("active");
      }
      controlButtons[nextSlider].classList.add("active");

      items.panels[currentSlider].style.display = "none";
      items.panels[nextSlider].style.display = "block";

      currentSlider = nextSlider;
      nextSlider += 1;
    };

    // Function to change the panel with the control buttons
    var changePanel = function (id) {
      clearInterval(SliderInterval);
      var items = pb.items,
        controlButtons = document
          .getElementById("control-buttons")
          .getElementsByTagName("li");

      if (id >= lengthSlider) {
        id = 0;
      } else if (id < 0) {
        id = lengthSlider - 1;
      }

      for (var i = 0; i < controlButtons.length; i++) {
        controlButtons[i].classList.remove("active");
      }
      controlButtons[id].classList.add("active");

      items.panels[currentSlider].style.display = "none";
      items.panels[id].style.display = "block";

      currentSlider = id;
      nextSlider = id + 1;
      activateSlider();
    };

    return pb;
  })();

  // Initialize the slider module with a duration of 4000 milliseconds
  SliderModule.init({ duration: 4000 });
});

/* Floating Button */
$(".menu-off").click(function () {
  $(this).removeClass("menu-off");
  $(this).addClass("menu-on");
  $(".floating-button-menu-close").addClass("menu-on");
});
$(".floating-button-menu-close").click(function () {
  $(this).addClass("menu-off");
  $(this).removeClass("menu-on");
  $(".floating-button-menu").toggleClass("menu-on");
});

/* Login Form :: */
function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}
