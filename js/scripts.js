$(document).ready(function() {
  $("#inputs").submit(function(event) {
    event.preventDefault();

    var conversions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var is = ["1", 1];
    var vs = ["5", 5];
    var xs = ["10", 10];
    var ls = ["50", 50];
    var cs = ["100", 100];
    var ds = ["500", 500];
    var ms = ["1000", 1000];
    var one = ["I"];
    var five = ["V"];
    var ten = ["X"];
    var fifty = ["L"];
    var hundred = ["C"];
    var fiveHundred = ["D"];
    var thousand = ["M"];

    // output("POTATO");

    var input1 = $("#input1").val();
    input1 = input1.replace ( /[1]/g, "I" );
    input1 = input1.replace ( /[5]/g, "V" );
    input1 = input1.replace ( /[10]/g, "X" );
    input1 = input1.replace ( /[50]/g, "L" );
    input1 = input1.replace ( /[100]/g, "C" );
    input1 = input1.replace ( /[500]/g, "D" );
    input1 = input1.replace ( /[1000]/g, "M" );
    input1 = input1.replace ( /[2]/g, "II");
    input1 = input1.replace ( /[3]/g, "III" );
    input1 = input1.replace ( /[4]/g, "IV" );
    input1 = input1.replace ( /[6]/g, "VI" );
    input1 = input1.replace ( /[7]/g, "VII" );
    input1 = input1.replace ( /[8]/g, "VIII" );
    input1 = input1.replace ( /[9]/g, "IX" );
    input1 = input1.replace ( /[11]/g, "XI" );
    input1 = input1.replace ( /[12]/g, "XII" );
    input1 = input1.replace ( /[13]/g, "XIII" );
    input1 = input1.replace ( /[14]/g, "XIV" );
    input1 = input1.replace ( /[15]/g, "XV" );
    input1 = input1.replace ( /[16]/g, "XVI" );
    input1 = input1.replace ( /[17]/g, "XVII" );
    input1 = input1.replace ( /[18]/g, "XVIII" );
    input1 = input1.replace ( /[19]/g, "XIX" );
    input1 = input1.replace ( /[20]/g, "XX" );
    input1 = input1.replace ( /[21]/g, "XXI" );
    input1 = input1.replace ( /[22]/g, "XXII" );
    input1 = input1.replace ( /[23]/g, "XXIII" );
    input1 = input1.replace ( /[24]/g, "XIV" );
    input1 = input1.replace ( /[25]/g, "XV" );
    // input1 = input1.replace ( /[^0-9]/g, '' );

    //"1", "2", "3", "4", "5", "6", "7", "8", "9", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"//
    // PUT THE COMMA BACK ON THE 9 WHEN UNHIDING THE REST OF THE ARRAY, ANISE




    //
    // if () {
      //
      // }

      $("#output").text(input1)

    });
  })
