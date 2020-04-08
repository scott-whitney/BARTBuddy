console.log('connected')

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var grammar = '#JSGF V1.0;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.onresult = function (event) {
    var last = event.results.length - 1;
    var command = event.results[last][0].transcript;
    message.textContent = 'Voice Input: ' + command + '.';
    if (command.toLowerCase() === 'submit', 'Bart buddy, show me what you got') {
        // stationSwap();
        console.log('Im working');
        console.log(command.toLowerCase);
        console.log(event.results[last][0].transcript);
        stationSwap()
        message.textContent = "";

    };
    recognition.onspeechend = function () {
        recognition.stop();
    };
    recognition.onerror = function (event) {
        message.textContent = 'Error occurred in recognition: ' + event.error;
    }

}

document.querySelector('#btnGiveCommand').addEventListener('click', function () {
    recognition.start();
});
    