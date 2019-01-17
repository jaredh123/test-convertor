$(document).ready(function() {
  $("#run").submit(function(event) {

    var input = parseFloat($("#input").val());

    var choice1 = $("#unit1").val();

    var choice2 = $("#unit2").val();

    var convert = function(input) {
      if ((choice1 == 0) && (choice2 == 1)) {
        return "Please choose two units";
      }
      else if ((choice1 == 0) && (choice2 == 2)) {
        return "Please choose two units";
      }
      else if ((choice1 == 0) && (choice2 == 3)) {
        return "Please choose two units";
      }
      else if ((choice1 == 0) && (choice2 == 4)) {
        return "Please choose two units";
      }
      else if ((choice1 == 0) && (choice2 == 5)) {
        return "Please choose two units";
      }
      else if ((choice1 == 0) && (choice2 == 6)) {
        return "Please choose two units";
      }
      else if ((choice1 == 0) && (choice2 == 7)) {
        return "Please choose two units";
      }
      else if ((choice1 == 0) && (choice2 == 8)) {
        return "Please choose two units";
      }
      else if ((choice1 == 0) && (choice2 == 9)) {
        return "Please choose two units";
      }
      else if ((choice1 == 0) && (choice2 == 0)) {
        return "Please choose two units";
      }


      else if ((choice1 == 1) && (choice2 == 0)) {
        return "Please choose two units";
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


      else if ((choice1 == 2) && (choice2 == 0)) {
        return "Please choose two units";
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


      else if ((choice1 == 3) && (choice2 == 0)) {
        return "Please choose two units";
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


      else if ((choice1 == 4) && (choice2 == 0)) {
        return "Please choose two units";
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


      else if ((choice1 == 5) && (choice2 == 0)) {
        return "Please choose two units";
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


      else if ((choice1 == 6) && (choice2 == 0)) {
        return "Please choose two units";
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


      else if ((choice1 == 7) && (choice2 == 0)) {
        return "Please choose two units";
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


      else if ((choice1 == 8) && (choice2 == 0)) {
        return "Please choose two units";
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


      else if ((choice1 == 9) && (choice2 == 0)) {
        return "Please choose two units";
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


    var result = convert(input);
    alert(result);
    event.preventDefault();
  });
});
