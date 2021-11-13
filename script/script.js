$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
jQuery.validator.setDefaults({
  debug: true,
  success: "valid",
});

$(document).ready(function () {
  $("#form").validate({
    rules: {
      cardnumber: {
        required: true,
      },
      expire: {
        required: true,
      },
      cvv: {
        required: true,
      },
    },
    messages: {
      cardnumber: "Неверный номер карты",
      expire: "Неверный формат MM/YY",
      cvv: "Поле обязательно",
    },
  });

  $("#btn").on("click", function () {
    if ($("#form").valid()) {
      confirm("Продолжить?");
      $("#btn").prop("disabled", true);
    } else {
      $("#btn").prop("disabled", false);
    }
  });
});

const form = document.getElementById("form");
form.addEventListener("change", () => {
  document.getElementById("btn").disabled = !form.checkValidity();
});

$("#cardnumber").on("keyup", function () {
  this.value = this.value.replace(/ /g, "");
  var number = this.value;
  this.value = number.replace(/\B(?=(\d{4})+(?!\d))/g, " ");
});

$("#expire").on("keyup", function () {
  this.value = this.value.replace(/ /g, "");
  var number = this.value;
  this.value = number.replace(/\B(?=(\d{2})+(?!\d))/g, "/");
});
