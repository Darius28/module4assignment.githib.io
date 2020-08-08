(function(window)
 {
  var speakWord = "Hello";
  var helloSpeaker = function speak(name) {
  console.log(speakWord + " " + name);
}
  helloSpeaker.window = helloSpeaker;
 })(window);
