"use strict";

window.addEventListener('load', function () {
  var form = document.querySelector("#form");
  var serch = document.querySelector("#serch");
  var regist = document.querySelector("#regist");
  var tel = document.querySelector(".phone");
  var amount = document.querySelector(".money");

  function getData() {
    $.ajax({
      url: 'http://localhost:3000/users',
      method: 'GET',
      dataType: 'json',
      data: {}
    }).done(function (res) {
      console.log(res.length);
    }).fail(function (err) {
      console.log(err);
    });
  }

  getData();

  function checkPhone() {
    var telCheck = tel.value;
    var amountCheck = amount.value;

    if (!telCheck) {
      alert('請輸入電話號碼!');
      e.preventDefault();
    } else {
      return true;
    }
  }

  function checkAmount() {
    var telCheck = tel.value;
    var amountCheck = amount.value;

    if (!telCheck) {
      alert('請輸入金額!');
      e.preventDefault();
    } else {
      return true;
    }
  }

  function checkPhoneAmount() {
    var telCheck = tel.value;
    var amountCheck = amount.value;

    if (!telCheck && !amountCheck) {
      alert('請輸入電話號碼和金額!');
      e.preventDefault();
    } else if (!telCheck) {
      alert('請輸入電話號碼!');
      e.preventDefault();
    } else if (!amountCheck) {
      alert('請輸入金額!');
      e.preventDefault();
    } else {
      return true;
    }
  }

  $(regist).on('click', function () {
    checkPhone();

    if (amount.value) {
      alert('請不要輸入金額!');
      e.preventDefault();
    }

    $.ajax({
      url: 'http://localhost:3000/users',
      method: 'GET',
      dataType: 'json',
      data: {}
    }).done(function (res) {
      for (var i = 0; i < res.length; i++) {
        if ($(tel).val() === res[i].phone) {
          console.log(i);
          alert('已註冊過!');
          return;
        }
      }

      $.ajax({
        url: 'http://localhost:3000/users',
        method: 'POST',
        dataType: 'json',
        data: {
          phone: $(tel).val(),
          amount: 0
        }
      }).done(alert('註冊成功!'));
    }).fail(function (err) {
      console.log(err);
    });
  });
  $(serch).on('click', function () {
    var telCheck = tel.value;
    checkPhone();
    $.ajax({
      url: 'http://localhost:3000/users',
      method: 'GET',
      dataType: 'json',
      data: {}
    }).done(function (res) {
      console.log(res);

      for (var i = 0; i < res.length; i++) {
        console.log(res[i].phone);

        if ($(tel).val() === res[i].phone) {
          var amountCheck = res[i].amount;

          if (amountCheck >= 3000) {
            alert("\u60A8\u5DF2\u7B26\u5408\u5361\u53CB\u8CC7\u683C!");
            return;
          } else {
            alert("\u60A8\u8F38\u5165\u7684\u96FB\u8A71 ".concat(telCheck, " \u4ECA\u5929\u6D88\u8CBB\u7684\u91D1\u984D\u662F ").concat(amountCheck, "\u5143\n\u76EE\u524D\u5DF2\u7D2F\u7A4D ").concat(amountCheck, " \u5143\u9084\u6709 ").concat(3000 - amountCheck, " \u5143\u5373\u53EF\u6210\u70BA\u5361\u53CB!"));
            return;
          }
        }
      }

      alert('尚未註冊!');
    }).fail(function (err) {
      console.log(err);
    });
  });
  $(add).on('click', function () {
    checkPhoneAmount();
    $.ajax({
      url: 'http://localhost:3000/users',
      method: 'GET',
      dataType: 'json',
      data: {}
    }).done(function (res) {
      console.log(res);

      for (var i = 0; i < res.length; i++) {
        console.log(res[i].phone);

        if ($(tel).val() === res[i].phone) {
          var telCheck = tel.value;
          $.ajax({
            url: 'http://localhost:3000/users/' + (i + 1),
            method: 'PUT',
            dataType: 'json',
            data: {
              phone: $(tel).val(),
              amount: $(amount).val()
            }
          }).done(function () {
            alert('登記成功!');
          });
        }
      }
    }).fail(function (err) {
      console.log(err);
    });
  });
});