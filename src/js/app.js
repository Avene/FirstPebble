Pebble.addEventListener('ready',
  function(e) {
    console.log('PebbleKit JS ready!');
  }
);

Pebble.addEventListener('appmessage',
  function(e){
    console.log('AppMessage received!');
  }
);
