$(document).ready(function() {

    $("#formOne").submit(function(event) {
      $("#victoriajustice, #nickjonas, #channingtatum, #beyonce").hide();
      var age = parseInt($("input#age").val());
      debugger;
      var gender = $("select#gender").val();
      var preference = $("input:radio[name=preference]:checked").val();
      // var gender = "male";
      // var preference = "homosexual";
      if (age <= 25) {
        if (gender === "male" && preference === "straight") {
          $("#victoriajustice").show();
        } else if (gender === "male" && preference === "homosexual") {
          $("#nickjonas").show();
        } else if (gender === "female" && preference === "straight") {
          $("#nickjonas").show();
        } else if (gender === "female" && preference === "homosexual") {
          $("#victoriajustice").show();
        }
        else {
          $("#victoriajustice").show();
        }
      } else if (age > 25) {
        if (gender === "male" && preference === "straight") {
          $("#beyonce").show();
        } else if (gender === "male" && preference === "homosexual") {
          $("#channingtatum").show();
        } else if (gender === "female" && preference === "straight") {
          $("#channingtatum").show();
        } else if (gender === "female" && preference === "homosexual") {
          $("#beyonce").show();
        }
        else {
          $("#channingtatum").show();
        }
      } else {
        alert("Please enter age between 0-100")
      }

      event.preventDefault();
    });

})
