/* tip amount jquery

    $("#tip-amount").text("$" + izracunata vrijednost tipa)


    total amount per person 

    $("#total-amount-per-person").text("$" + izracunata vrijednost po osobi)

*/

/* GETTING THE BILL PRICE FUNCTION */

var percTip = "";
var bill = "";
var people = "";

$(document).on("input", "#bill", function () {
  bill = $("#bill").val();
  getResult();
  resetResult();
});

$(document).on("input", "#people", function () {
  people = $("#people").val();
  getResult();
  resetResult();
});

$(document).on("input", "#custom", function () {
  percTip = $("#custom").val();
  getResult();
  resetResult();
});

$("#5").click(function () {
  percTip = 5;
  getResult();
});

$("#10").click(function () {
  percTip = 10;
  getResult();
});

$("#15").click(function () {
  percTip = 15;
  getResult();
});

$("#25").click(function () {
  percTip = 25;
  getResult();
});

$("#50").click(function () {
  percTip = 50;
  getResult();
});

function getResult() {
  if (percTip != "" && bill != "" && people != "") {
    /* TIP AMOUNT PER PERSON */
    var decimalTip = percTip / 100;
    var tipAmountPerPerson = (bill * decimalTip) / people;
    var tipAmount = bill * decimalTip;
    $("#tip-amount").text("$" + tipAmountPerPerson.toFixed(2));
    /* TOTAL AMOUNT PER PERSON */
    var total = +bill + +tipAmount;
    var totalPerPerson = total / people;
    $("#total-amount-per-person").text("$" + totalPerPerson.toFixed(2));
  } else {
  }
}

$("#reset").on("click", function () {
  percTip = 0;
  bill = 0;
  people = 0;
  $("#tip-amount").text("$0.00");
  $("#total-amount-per-person").text("$0.00");
  $("#bill").val("");
  $("#people").val("");
  $(".button").removeClass("active");
  $("#custom").val("");
});

$(".button").on("click", function () {
  $(".button").removeClass("active");
  $("#custom").removeClass("active");
  $(this).addClass("active");
});

function resetResult() {
  if (bill == "" || people == "") {
    $("#tip-amount").text("$0.00");
    $("#total-amount-per-person").text("$0.00");
  }
}
