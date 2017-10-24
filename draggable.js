/*var $body = $('button_id');
$body.on('mousedown', function (evt) {
  $body.on('mouseup mousemove', function handler(evt) {
    if (evt.type === 'mouseup') {
      // click
    } else {
      // drag
    }
    $body.off('mouseup mousemove', handler);
  });
});*/
var cursorX;
var cursorY;
document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
}
function movefunction(){
    var $body = $('#button_id');
    while (true){
    $body.on('mouseup mousemove', function handler(evt) {
        if (evt.type === 'mouseup') {
            alert("hey");
            break;       // click
          }   
          else {
            window.parent.document.getElementById("iframe_id").style.top = cursorX+ "px";
            window.parent.document.getElementById("iframe_id").style.left = cursorY+"px";    // drag
          }
    $body.off('mouseup mousemove', handler);
        });      
    }

}