var alphabet = 'abcdefghijklmnopqrstuvxyz';

var getKey = function(msg) {
  var keyword = 'lemon'.split('');
  var encryptionKey = '';
  var j = 0;
  for(var i = 0; i < msg.length; i++) {
    if ( j >= keyword.length ){
      j = 0;
    }
    encryptionKey += keyword[j];
    j++;
  }
  console.log(encryptionKey);
  // -> lemonlemonle
};
getKey('attackatdawn');


var encrypt = function(msg) {

  // -> LXFOPVEFRNHR
};
encrypt(msg);

var decrypt = function(msg) {

};
