$(document).ready(function() {

  $(document).submit(function() {
    var age = $("#age").val();
    var gender = $("#gender").val();
    var preference = $("#preference").val();

    if (age <= 25) {
      if (gender === 'male' && 'preference' === 'straight') {
        $("#celebresult").empty();
        $("#victoriajustice").show();
      }
      else if (gender === 'male' && 'preference' === 'homosexual') {
        $("#celebresult").empty();
        $("#nickjonas").show();
      }
      else if (gender === 'female' && 'preference' === 'straight') {
        $("#celebresult").empty();
        $("#nickjonas").show();
      }
      else if (gender === 'female' && 'preference' === 'homosexual') {
        $("#celebresult").empty();
        $("#victoriajustice").show();
      }
      else {
        $("#celebresult").empty();
        $("#victoriajustice").show();
      }
    }
  });
});
