function makeGrid() {

  var tdH = $('#inputHeight').val();
  var tdW = $('#inputWeight').val();
  var table = $('#pixelCanvas');

  for (var h = 0; h < tdH; h++) {
    table.append("<tr></tr>");
    for (var w = 0; w < tdW; w++) {
      table.children().last().append("<td></td>");
    }
  }


  table.on("click", "td", function() {
    var color = $("input[type='color']").val();
    $(this).css("background", color);
  });
}

$("input[type='submit']").click(function(e) {
  e.preventDefault();
  makeGrid();
});


$('a').click(function () {
  $('tr').remove();
});
