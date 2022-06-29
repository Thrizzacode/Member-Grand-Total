"use strict";

// function addsuccess(){
//     alert("註冊成功");
// }
// function serch() {
//     alert("已累進＄xxx,尚須＄xxx即可成為卡友")
// }
window.addEventListener('load', function () {
  var form = document.querySelector("#form");
  var serch = document.querySelector("#serch");
  var regist = document.querySelector("#regist");
  var tel = document.querySelector(".phone");
  var amount = document.querySelector(".money");

  function check() {
    var telCheck = tel.value;
    var amountCheck = amount.value;

    if (!telCheck && !amountCheck) {
      alert('請輸入電話號碼和金額!');
    } else if (!telCheck) {
      alert('請輸入電話號碼!');
    } else if (!amountCheck) {
      alert('請輸入金額!');
    } else {
      return true;
    }
  }

  serch.addEventListener('click', function (e) {
    var telCheck = tel.value;
    var amountCheck = amount.value;
    check();

    if (amountCheck >= 3000) {
      alert("\u60A8\u5DF2\u7B26\u5408\u5361\u53CB\u8CC7\u683C!");
    } else if (telCheck && amountCheck) {
      alert("\u60A8\u8F38\u5165\u7684\u96FB\u8A71 ".concat(telCheck, " \u4ECA\u5929\u6D88\u8CBB\u7684\u91D1\u984D\u662F ").concat(amountCheck, "\u5143\n\u76EE\u524D\u5DF2\u7D2F\u7A4D ").concat(amountCheck, " \u5143\u9084\u6709 ").concat(3000 - amountCheck, " \u5143\u5373\u53EF\u6210\u70BA\u5361\u53CB!"));
    }
  });
  regist.addEventListener('click', function (e) {
    if (check()) {
      alert('註冊成功!');
    }
  });
});