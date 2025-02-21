document.addEventListener('DOMContentLoaded', function() {
    const skillsSpan = document.getElementById('skills');
    const labels = skillsSpan.getElementsByTagName('label');

    // Array of texts to cycle through
    const texts = [
        'Hard Working',
        'Efficient',
        'Lazy',
        'Creative',
        'Innovative',
        'Dedicated'
    ];

    let currentTextIndex = 0;
    let currentText = texts[currentTextIndex];
    let textIndex = 0;
    let isTyping = true;

    // Speed settings (milliseconds)
    const typeSpeed = 50; // Speed for typing characters
    const removeSpeed = 50; // Speed for removing characters
    const pauseDuration = 2000; // Pause duration between typing and removing

    // Function to update the text of all labels character by character
    function updateText() {
        if (isTyping) {
            if (textIndex < currentText.length) {
                const newText = currentText.substring(0, textIndex + 1);
                Array.from(labels).forEach(label => {
                    label.textContent = newText;
                });
                textIndex++;
                setTimeout(updateText, typeSpeed); // Continue typing
            } else {
                isTyping = false;
                setTimeout(() => {
                    updateText(); // Start removing characters
                }, pauseDuration); // Wait before removing characters
            }
        } else {
            if (textIndex > 0) {
                const newText = currentText.substring(0, textIndex);
                Array.from(labels).forEach(label => {
                    label.textContent = newText;
                });
                textIndex--;
                setTimeout(updateText, removeSpeed); // Continue removing
            } else {
                // Move to the next text in the array
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                currentText = texts[currentTextIndex];
                textIndex = 0;
                isTyping = true;
                updateText(); // Start typing the next text
            }
        }
    }

    // Start typing the first text
    updateText();
});
