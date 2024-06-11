import { hasAccount, addAccount } from '../db.js'

document.addEventListener('DOMContentLoaded', () => {
    if (hasAccount()) window.location.replace('/visual.html')

    // UI validation
    const tokenInput = document.getElementById('token');
    const icon = document.getElementById('icon');

    tokenInput.addEventListener('keypress', (event) => {
        if (tokenInput.value.trim() !== '') {
            icon.style.display = 'block';
        } else {
            icon.style.display = 'none';
        }

        if(event.key === 'Enter') add(tokenInput.value.trim())
    });

    const demoButton = document.getElementById('demo-button');
    demoButton.addEventListener('click', () => continueWithDemo())

});

function continueWithDemo() {
    addAccount('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDg1ODI0NjUsIm5iZiI6MTcxNzA0NjQ2NSwiaWF0IjoxNzE3MDQ2NDY1LCJpZGVudGl0eSI6IjBkZWNkZGNmZGYyNDFhNjAifQ.g3khyJgOkNvZny6Vh579cuQj1HLLGSDeauZbfZri9jw')
    window.location.replace('/visual.html')
}

function add(token) {
    addAccount(token);
    window.location.replace('/visual.html')
}
