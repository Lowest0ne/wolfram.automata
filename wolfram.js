function colorRow( imageData, row, width )
{
  for ( var i = 0; i < width; i += 4 )
  {
    imageData.data[ ( row * width ) + i + 0 ] = 0;
    imageData.data[ ( row * width ) + i + 1 ] = 0;
    imageData.data[ ( row * width ) + i + 2 ] = 0;
    imageData.data[ ( row * width ) + i + 3 ] = 255;
  }

}

function makeWolfram()
{
  var canvas    = document.getElementById("wolfram");
  var context   = canvas.getContext("2d");
  var imageData = context.createImageData(100,100);
  var width     = imageData.width;
  var height    = imageData.height;

  for ( var row = 0; row < height; row += 1 )
  {
    colorRow( imageData, row, width );
  }

  context.putImageData(imageData,10,10);
}
