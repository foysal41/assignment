$(document).ready(function () {
  $("#calculator-form").submit(function (event) {
    event.preventDefault();

    let num1 = parseFloat($("#num1").val());
    let num2 = parseFloat($("#num2").val());
    let operation = $("#operation").val();

    let result;
    if (operation === "addition") {
      result = num1 + num2;
    } else if (operation === "subtraction") {
      result = num1 - num2;
    } else if (operation === "multiplication") {
      result = num1 * num2;
    } else if (operation === "divition") {
      if (num2 === 0) {
        $("#result").html(
          '<div class="alert alert-danger" role="alert"> Cannot Divide by zero! </div>'
        );
        return;
      }
      result = num1 / num2;
    } else {
      $("#result").html(
        '<div class="alert alert-danger" role="alert">Please select an operation!</div>'
      );
      return;
    }

    $("#result").html(
      '<div class="alert alert-success" role="alert"> Result: ' +
        result +
        "</div>"
    );
  });
});
