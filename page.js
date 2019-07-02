$( '#url' ).on( 'input change', function() {
  var value = this.value;
  
  value = value.replace( /([.?\/+*|()\[\]\{\}])/g, '\\$1' );
  value = value.replace( /^https?/, 'https?' );

  $( '#regexp' ).val( value );
});


$( '#regexp' ).on( 'click', function() {
  this.select();
});