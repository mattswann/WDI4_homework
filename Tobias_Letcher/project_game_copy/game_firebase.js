
var myDataRef = new Firebase('https://p7jw01xt31s.firebaseio-demo.com/');
var myFirebaseRef = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com/");
myFirebaseRef.set({
  title: "Hello World!",
  author: "Firebase",
  location: {
    city: "San Francisco",
    state: "California",
    zip: 94103
  }
});

myFirebaseRef.child("location/city").on("value", function(snapshot) {
  alert(snapshot.val());  // Alerts "San Francisco"
});