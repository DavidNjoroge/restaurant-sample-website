$(document).ready(function() {
  $("#blanks form").submit(function() {
    /* Act on the event */
    var mod = $("input#model").val();

    var pet = $("input#pet").val();

    var sport = $("input#sport").val();

    var meal = $("input#meal").val();

    var movie = $("input#movies").val();
    event.preventDefault();


    var array = [mod, pet, sport, meal, movie]
    array[2]
    var love = []

    love.push(array[1])
    love.push(array[0])
    love.push(array[2])
    console.log(array);
    console.log(love);

  });
  $("button#davy").click(function() {
    /* Act on the event */
    $("ul#emmy").toArray();
  });
});
