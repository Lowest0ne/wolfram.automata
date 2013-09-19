function evaluate()
{
  var doc = document.getElementById("wolfram");
  var ctx=doc.getContext("2d");
  ctx.fillStyle="#FF0000";
  ctx.fillRect(0,0,150,75);
}

function makeWolfram()
{
  evaluate();
}
