(function( $, stLib, stIdentityObject ) {
  if ( typeof window.stIcon !== 'function' ) {
    window.stIcon = function( data, containerObj ) {
      var obj = stIdentityObject( data, containerObj );
     
      obj.iORegister('stIcon');
    };
  }
})( jQuery, window.stLib, stIdentityObject );
