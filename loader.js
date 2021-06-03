$(window).on("load", function () {
  document.getElementById("main").style.visibility = "hidden";
  /* Progress Bar animation */
  document.getElementById("loader").style.visibility = "visible";
  setTimeout(function () {
    document.getElementById("loader").style.visibility = "hidden";
    document.getElementById("main").style.visibility = "visible";
  }, 5000);
});

//  $(document).ready(function() {
//     //Preloader
//     preloaderFadeOutTime = 5000;
//     function hidePreloader() {
//     var preloader = $('#loader');
//     preloader.fadeOut(preloaderFadeOutTime);
//     }
//     hidePreloader();
//     });

//   $(document).on("ready", function () {

//   });
