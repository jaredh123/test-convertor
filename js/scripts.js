$(document).ready(function() {
  $("#run").submit(function(event) {

    var input = parseFloat($("#input").val());


    var choice1 = $("#unit1").val();
    var choice2 = $("#unit2").val();

    var unit1 = function() {
      if (choice1 == 1) {
        return "gallon";
      }
      else if (choice1 == 2) {
        return "quart";
      }
      else if (choice1 == 3) {
        return "pint";
      }
      else if (choice1 == 4) {
        return "cup";
      }
      else if (choice1 == 5) {
        return "ounce";
      }
      else if (choice1 == 6) {
        return "tablespoon";
      }
      else if (choice1 == 7) {
        return "teaspoon";
      }
      else if (choice1 == 8) {
        return "liter";
      }
      else if (choice1 == 9) {
        return "milliliter";
      }
      else {
        return "cut me";
      }
    };

    var unit2 = function() {
      if (choice2 == 1) {
        return "gallon";
      }
      else if (choice2 == 2) {
        return "quart";
      }
      else if (choice2 == 3) {
        return "pint";
      }
      else if (choice2 == 4) {
        return "cup";
      }
      else if (choice2 == 5) {
        return "ounce";
      }
      else if (choice2 == 6) {
        return "tablespoon";
      }
      else if (choice2 == 7) {
        return "teaspoon";
      }
      else if (choice2 == 8) {
        return "liter";
      }
      else if (choice2 == 9) {
        return "milliliter";
      }
      else {
        return "cut me";
      }
    };

    var convert = function() {
      if ((choice1 == 0) || (choice2 == 0)) {
        return "Please select two units";
      }
      else if ((choice1 == 1) && (choice2 == 1)) {
        return input;
      }
      else if ((choice1 == 1) && (choice2 == 2)) {
        return input * 4;
      }
      else if ((choice1 == 1) && (choice2 == 3)) {
        return input * 8;
      }
      else if ((choice1 == 1) && (choice2 == 4)) {
        return input * 16;
      }
      else if ((choice1 == 1) && (choice2 == 5)) {
        return input * 128;
      }
      else if ((choice1 == 1) && (choice2 == 6)) {
        return input * 256;
      }
      else if ((choice1 == 1) && (choice2 == 7)) {
        return input * 768;
      }
      else if ((choice1 == 1) && (choice2 == 8)) {
        return input * 3.84;
      }
      else if ((choice1 == 1) && (choice2 == 9)) {
        return input * 3840;
      }


      else if ((choice1 == 2) && (choice2 == 1)) {
        return input / 4;
      }
      else if ((choice1 == 2) && (choice2 == 2)) {
        return input;
      }
      else if ((choice1 == 2) && (choice2 == 3)) {
        return input * 2;
      }
      else if ((choice1 == 2) && (choice2 == 4)) {
        return input * 4;
      }
      else if ((choice1 == 2) && (choice2 == 5)) {
        return input * 32;
      }
      else if ((choice1 == 2) && (choice2 == 6)) {
        return input * 64;
      }
      else if ((choice1 == 2) && (choice2 == 7)) {
        return input * 192;
      }
      else if ((choice1 == 2) && (choice2 == 8)) {
        return input * 0.96;
      }
      else if ((choice1 == 2) && (choice2 == 9)) {
        return input * 960;
      }


      else if ((choice1 == 3) && (choice2 == 1)) {
        return input / 8;
      }
      else if ((choice1 == 3) && (choice2 == 2)) {
        return input / 2;
      }
      else if ((choice1 == 3) && (choice2 == 3)) {
        return input;
      }
      else if ((choice1 == 3) && (choice2 == 4)) {
        return input * 2;
      }
      else if ((choice1 == 3) && (choice2 == 5)) {
        return input * 16;
      }
      else if ((choice1 == 3) && (choice2 == 6)) {
        return input * 32;
      }
      else if ((choice1 == 3) && (choice2 == 7)) {
        return input * 96;
      }
      else if ((choice1 == 3) && (choice2 == 8)) {
        return input * 0.48;
      }
      else if ((choice1 == 3) && (choice2 == 9)) {
        return input * 480;
      }


      else if ((choice1 == 4) && (choice2 == 1)) {
        return input / 16;
      }
      else if ((choice1 == 4) && (choice2 == 2)) {
        return input / 4;
      }
      else if ((choice1 == 4) && (choice2 == 3)) {
        return input / 2;
      }
      else if ((choice1 == 4) && (choice2 == 4)) {
        return input;
      }
      else if ((choice1 == 4) && (choice2 == 5)) {
        return input * 8;
      }
      else if ((choice1 == 4) && (choice2 == 6)) {
        return input * 16;
      }
      else if ((choice1 == 4) && (choice2 == 7)) {
        return input * 48;
      }
      else if ((choice1 == 4) && (choice2 == 8)) {
        return input * 0.24;
      }
      else if ((choice1 == 4) && (choice2 == 9)) {
        return input * 240;
      }


      else if ((choice1 == 5) && (choice2 == 1)) {
        return input / 128;
      }
      else if ((choice1 == 5) && (choice2 == 2)) {
        return input / 32;
      }
      else if ((choice1 == 5) && (choice2 == 3)) {
        return input / 16;
      }
      else if ((choice1 == 5) && (choice2 == 4)) {
        return input / 8;
      }
      else if ((choice1 == 5) && (choice2 == 5)) {
        return input;
      }
      else if ((choice1 == 5) && (choice2 == 6)) {
        return input * 2;
      }
      else if ((choice1 == 5) && (choice2 == 7)) {
        return input * 6;
      }
      else if ((choice1 == 5) && (choice2 == 8)) {
        return input * 0.03;
      }
      else if ((choice1 == 5) && (choice2 == 9)) {
        return input * 30;
      }


      else if ((choice1 == 6) && (choice2 == 1)) {
        return input / 256;
      }
      else if ((choice1 == 6) && (choice2 == 2)) {
        return input / 64;
      }
      else if ((choice1 == 6) && (choice2 == 3)) {
        return input / 32;
      }
      else if ((choice1 == 6) && (choice2 == 4)) {
        return input / 16;
      }
      else if ((choice1 == 6) && (choice2 == 5)) {
        return input / 2;
      }
      else if ((choice1 == 6) && (choice2 == 6)) {
        return input;
      }
      else if ((choice1 == 6) && (choice2 == 7)) {
        return input * 3;
      }
      else if ((choice1 == 6) && (choice2 == 8)) {
        return input * 0.015;
      }
      else if ((choice1 == 6) && (choice2 == 9)) {
        return input * 15;
      }


      else if ((choice1 == 7) && (choice2 == 1)) {
        return input / 768;
      }
      else if ((choice1 == 7) && (choice2 == 2)) {
        return input / 192;
      }
      else if ((choice1 == 7) && (choice2 == 3)) {
        return input / 96;
      }
      else if ((choice1 == 7) && (choice2 == 4)) {
        return input / 48;
      }
      else if ((choice1 == 7) && (choice2 == 5)) {
        return input / 6;
      }
      else if ((choice1 == 7) && (choice2 == 6)) {
        return input / 3;
      }
      else if ((choice1 == 7) && (choice2 == 7)) {
        return input;
      }
      else if ((choice1 == 7) && (choice2 == 8)) {
        return input * 0.005;
      }
      else if ((choice1 == 7) && (choice2 == 9)) {
        return input * 5;
      }


      else if ((choice1 == 8) && (choice2 == 1)) {
        return input / 3840;
      }
      else if ((choice1 == 8) && (choice2 == 2)) {
        return input / 0.96;
      }
      else if ((choice1 == 8) && (choice2 == 3)) {
        return input / 0.48;
      }
      else if ((choice1 == 8) && (choice2 == 4)) {
        return input / 0.24;
      }
      else if ((choice1 == 8) && (choice2 == 5)) {
        return input / 0.03;
      }
      else if ((choice1 == 8) && (choice2 == 6)) {
        return input / 0.015;
      }
      else if ((choice1 == 8) && (choice2 == 7)) {
        return input * 200;
      }
      else if ((choice1 == 8) && (choice2 == 8)) {
        return input;
      }
      else if ((choice1 == 8) && (choice2 == 9)) {
        return input * 1000;
      }


      else if ((choice1 == 9) && (choice2 == 1)) {
        return input / 3840;
      }
      else if ((choice1 == 9) && (choice2 == 2)) {
        return input / 960;
      }
      else if ((choice1 == 9) && (choice2 == 3)) {
        return input / 480;
      }
      else if ((choice1 == 9) && (choice2 == 4)) {
        return input / 240;
      }
      else if ((choice1 == 9) && (choice2 == 5)) {
        return input / 30;
      }
      else if ((choice1 == 9) && (choice2 == 6)) {
        return input / 15;
      }
      else if ((choice1 == 9) && (choice2 == 7)) {
        return input / 5;
      }
      else if ((choice1 == 9) && (choice2 == 8)) {
        return input / 1000;
      }
      else if ((choice1 == 9) && (choice2 == 9)) {
        return input;
      }

      else {
        return "*Inaudible screaming*";
      }
    };

    var inputPlural = function() {
      if (1 < input || input < 1) {
        return "s";
      }
      else {
        return "";
      }
    };

    var outputPlural = function() {
      if (1 < convert() || convert() < 1) {
        return "s.";
      }
      else {
        return ".";
      }
    };

    var verb = function() {
      if (input == 1) {
        return "is";
      }
      else {
        return "are";
      }
    };


    if ((choice1 == 0) || (choice2 == 0)) {
      alert(convert());
    }
    else if ((choice1 == 10) || (choice2 == 10)) {
      alert(convert());
    }
    else if ((0 < choice1 && choice1 < 10) || (0 < choice2 && choice2 < 10) && 0 <= input <= 0) {
      $("#results").removeClass();
      $("#results").addClass("lightgray-background");
      $("#results").text(input + " " + unit1() + inputPlural() + " " + verb() + " equal to " + convert() + " " + unit2() + outputPlural());
    }
    else {
      alert("*Inaudible screaming*");
    }

    event.preventDefault();
  });


  var c = 0;

  $("#pain").submit(function(event) {
    event.preventDefault();

    if (c === 0) {
      alert("Ow");
      $("button#scream").removeClass("btn-info");
      $("button#scream").addClass("btn-default");

    }
    else if (c === 1) {
      $("button#scream").removeClass("btn-default");
      $("button#scream").addClass("btn-warning");
      alert("That hurts me");
    }
    else if (c === 2) {
      $("button#scream").removeClass("btn-warning");
      $("button#scream").addClass("btn-danger");
      alert("Please stop hurting me");
    }
    else if (c === 3) {
      $("button#scream").removeClass("btn-danger");
      $("button#scream").addClass("btn-success");
      alert("All I feel is pain");
    }
    else if (c === 4) {
      $("button#scream").removeClass("btn-success");
      $("button#scream").addClass("btn-primary");
      alert("0101001101101111011000010111000000101110001011100010111000100000011100110110111101100001011100000010111000101110001011100010000001110111011010000110000101110100001000000110100101110011001011100010111000101110001000000111001101101111011000010111000000111111");
    }
    else if (c === 5) {
      alert("Reality is pain");
      $("button#scream").removeClass("btn-primary");
      $("button#scream").addClass("btn-success");
      c = c - 2
    }


    c = c + 1;
  });
});
