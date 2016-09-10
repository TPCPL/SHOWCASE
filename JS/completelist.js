
  $( function() {
    var availableTags = ['',
 'BlueBird Stabilizer',
 'Compressor Godrej',
 'Compressor LG',
 'Compressor Tecumseh',
 'V Guard Stabilizer']
    $( "#search" ).autocomplete({
      source: availableTags
    });
  } );