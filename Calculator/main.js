$(document).ready(function () {
  $("#calculator-form").submit(function (event) {
    event.preventDefault();

    let num1 = parseFloat($("#num1").val());
    let num2 = parseFloat($("#num2").val());
    let operation = $("#operation").val();
  });
});
