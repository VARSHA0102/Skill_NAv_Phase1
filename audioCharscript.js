document.getElementById('audio-btn').addEventListener('click', function() {
    const msg = new SpeechSynthesisUtterance();
    msg.text = document.body.innerText; // Fetches all text on the page
    msg.lang = 'en-US'; // Set the language
    window.speechSynthesis.speak(msg);

    // Show the cancel button
    document.getElementById('cancel-btn').style.display = 'block';

    // Stop speech synthesis on cancel button click
    document.getElementById('cancel-btn').addEventListener('click', function() {
        window.speechSynthesis.cancel();
        this.style.display = 'none';
    });
});
