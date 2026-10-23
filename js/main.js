"use strict";

console.log("main.js is running");

function greetHome() {
  const welcome = document.getElementById("welcomeMsg");
  if (!welcome) return;
  welcome.innerHTML = "Welcome to <strong>JNEC Events Hub</strong>!";
}

function bindRegisterExtras() {
  const resetBtn = document.querySelector("#regForm button[type='reset']");
  if (resetBtn) {
    resetBtn.addEventListener("click", function (e) {
      if (!confirm("Clear the whole form?")) {
        e.preventDefault();
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  greetHome();
  bindRegisterExtras();
});