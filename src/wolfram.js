function CelluarAutomata( canvas_elem, rules ){
  this.canvas  = canvas_elem;
  this.width   = this.canvas.getAttribute('width');
  this.height  = this.canvas.getAttribute('height');
  this.context = this.canvas.getContext("2d");
  this.image   = this.context.createImageData(this.width, this.height);

  this.rule_array = rules;
}

CelluarAutomata.prototype.do_it = function(){
  // seed the first row
  this.image.data[this.width * 2 + 3] = 255;

  // run the loops
  this.celluarAutomata();

  this.context.putImageData(this.image,0,0);

};

CelluarAutomata.prototype.pixelAt = function( row, offset )
{
  return ( row * this.width * 4 ) + ( offset  );
};

CelluarAutomata.prototype.generateRule = function( pixel )
{
  var result = 0;

  result += ( this.image.data[ pixel + 7 ] ) ? 1 : 0;
  result += ( this.image.data[ pixel + 3 ] ) ? 2 : 0;
  result += ( this.image.data[ pixel - 1 ] ) ? 4 : 0;

  return result;
};

CelluarAutomata.prototype.genColor = function( rule )
{
  return ( rule ? 255 : 0 );
};

CelluarAutomata.prototype.colorRow = function( row )
{
  // the width is the actual pixel width
  // time four because each pixel is RGBA
  for ( var i = 0; i < this.width * 4; i += 4 )
  {
    // what is the combination from the last row?
    result = this.generateRule( this.pixelAt( row - 1, i ) );

    // apply the selected color to the current pixel
    // pixels are zero (RGBA) by default, we only need 0xFF alpha
      this.image.data[ this.pixelAt( row, i ) + 3 ] = this.genColor( this.rule_array[ result ]);
  }
};

CelluarAutomata.prototype.celluarAutomata = function()
{
  for (var row = 1; row < this.height; row += 1 )
  {
    this.colorRow( row );
  }
};

function makeWolfram(canvas_elem, rule_array_arg)
{
  automata = new CelluarAutomata( canvas_elem, rule_array_arg );
  automata.do_it();
}


