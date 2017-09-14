$(document).ready(function() {

    $("#formOne").submit(function(event) {
      console.log("djkfh");
      var age = parseInt($("input#age").val());
      var gender = $("select#gender").val();
      var preference = $("input:radio[name=preference]:checked").val();
      if (age <= 25) {
        if (gender === 'male' && 'preference' === 'straight') {
          // $("#celebresult").empty();
          $("#victoriajustice").show();
        }
        else if (gender === 'male' && 'preference' === 'homosexual') {
          // $("#celebresult").empty();
          $("#nickjonas").show();
        }
        else if (gender === 'female' && 'preference' === 'straight') {
          // $("#celebresult").empty();
          $("#nickjonas").show();
        }
        else if (gender === 'female' && 'preference' === 'homosexual') {
          // $("#celebresult").empty();
          $("#victoriajustice").show();
        }
        else {
          // $("#celebresult").empty();
          $("#victoriajustice").show();
        }
      }
      else {
        alert("Please input appropriate age");
      }
      event.preventDefault();
    });

})
