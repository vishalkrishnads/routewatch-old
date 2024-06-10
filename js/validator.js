document.addEventListener('DOMContentLoaded', (event) => {
    const tokenInput = document.getElementById('token');
    const iconElement = document.getElementById('icon');

    tokenInput.addEventListener('input', () => {
        if (tokenInput.value.trim() !== '') {
            // If there is a value, display the icon
            iconElement.style.display = 'block';
        } else {
            // If there is no value, hide the icon
            iconElement.style.display = 'none';
        }
    });
});
