document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');
    
    menuBtn.addEventListener('click', () => {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const qaContainer = document.querySelector('.QnA ul');

    // Define questions and answers
    const qaData = [
        {
            question: 'What is your name?',
            answer: 'My name is Muhammad Abdullah.'
        },
        {
            question: 'What do you do?',
            answer: 'I am a developer.'
        },
        {
            question: 'What are your skills?',
            answer: 'I have skills in web development, programming, and more.'
        }
    ];

    // Function to create QA elements
    function createQAElements() {
        qaData.forEach(qa => {
            const li = document.createElement('li');
            const questionButton = document.createElement('button');
            questionButton.textContent = qa.question;
            questionButton.classList.add('question');

            const answerParagraph = document.createElement('p');
            answerParagraph.textContent = qa.answer;
            answerParagraph.classList.add('answer');

            li.appendChild(questionButton);
            li.appendChild(answerParagraph);
            qaContainer.appendChild(li);
        });
    }

    createQAElements();
});


document.addEventListener('DOMContentLoaded', () => {
    document.body.style.cursor = 'none';

    const cursor = document.createElement('div');
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.borderRadius = '50%';
    cursor.style.backgroundColor = 'green';
    cursor.style.position = 'absolute';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '1000';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX - 10}px`;
        cursor.style.top = `${e.pageY - 10}px`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.cursor = 'none';

    // Create cursor element
    const cursor = document.createElement('div');
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.borderRadius = '50%';
    cursor.style.backgroundColor = 'green';
    cursor.style.position = 'absolute';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '1000';
    document.body.appendChild(cursor);

    // Create arrow element
    const arrow = document.createElement('div');
    arrow.classList.add('arrow');
    document.body.appendChild(arrow);

    let lastX = 0, lastY = 0;
    let timeout;

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX - 10}px`;
        cursor.style.top = `${e.pageY - 10}px`;

        const deltaX = e.pageX - lastX;
        const deltaY = e.pageY - lastY;

        if (deltaX === 0 && deltaY === 0) return;

        let directionClass = '';
        let offsetX = 0, offsetY = 0; // Offset to move arrow away from cursor

        if (Math.abs(deltaX) > Math.abs(deltaY)) { 
            if (deltaX > 0) { // Right (0°)
                directionClass = 'right';
                offsetX = 25;
            } else { // Left (180°)
                directionClass = 'left';
                offsetX = -25;
            }
        } else { 
            if (deltaY > 0) { // Down (90°)
                directionClass = 'down';
                offsetY = 25;
            } else { // Up (270°)
                directionClass = 'up';
                offsetY = -25;
            }
        }

        arrow.className = `arrow ${directionClass}`;
        arrow.style.left = `${e.pageX + offsetX}px`;
        arrow.style.top = `${e.pageY + offsetY}px`;
        arrow.style.display = 'block';

        clearTimeout(timeout);
        timeout = setTimeout(() => {
            arrow.style.display = 'none';
        }, 1000);

        lastX = e.pageX;
        lastY = e.pageY;
    });
});