"use strict";

/** Navigation bar */
function onMenu() {
  document.body.classList.add("with--sidebar"); // add listener to disable scroll

  window.addEventListener('scroll', noscroll);
}

function offMenu() {
  document.body.classList.remove("with--sidebar"); // Remove listener to disable scroll

  window.removeEventListener('scroll', noscroll);
} // disable scroll window


function noscroll() {
  window.scrollTo(0, 0);
}
/** Nav Toggle(right) */


var toggle = document.getElementById('toggle');
var dropdown = document.getElementById('dropdown');
var toggleNavbar = document.getElementById('toggleNavbar');
document.body.addEventListener('click', function (evt) {
  if (toggle.getAttribute("expanded") == "false") {
    dropdown.classList.remove("show");
    toggle.setAttribute("expanded", "true");
  }
});
toggle.addEventListener('click', function (event) {
  if (toggle.getAttribute("expanded") == "true") {
    dropdown.classList.add("show");
    toggle.setAttribute("expanded", "false");
  } else {
    dropdown.classList.remove("show");
    toggle.setAttribute("expanded", "true");
  }

  event.stopPropagation();
}); 

// // localstorage
// var brainLocalStorage = localStorage.getItem('brain-dashboard') ? JSON.parse(localStorage.getItem('brain-dashboard')) : {
//   port: 5000,
//   ipAddress: '192.168.50.21'
// };
// localStorage.setItem('brain-dashboard', JSON.stringify(brainLocalStorage)); // Port PORT input

// var portInput = document.getElementById('portInput'); // IP Address input

// var ipInput = document.getElementById('ipInput'); // init input data value

// portInput.value = brainLocalStorage.port;
// ipInput.value = brainLocalStorage.ipAddress; // Modal 

// function call() {
//   new Modal({
//     el: document.getElementById('static-modal')
//   }).show();
// };
// function buttonOK() {
//   portInput.value = portInput.value;
//   ipInput.value = ipInput.value;
//   localStorage.setItem('brain-dashboard', JSON.stringify({
//     port: portInput.value,
//     ipAddress: ipInput.value
//   }));
//   setTimeout(function () {
//     location.reload();
//   }, 300);
// };

// function logout() {
//   localStorage.removeItem("premission");
//   setTimeout(function () {
//     location.reload();
//   }, 300);
// }
