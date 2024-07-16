document.addEventListener('DOMContentLoaded', () => {
    const rectangle1 = document.getElementById('rectangle1');
    const rectangle2 = document.getElementById('rectangle2');
    const toggleRectangleButton = document.getElementById('toggleRectangleButton');
    const textBackground1 = document.getElementById('textBackground1');
    const textBackground2 = document.getElementById('textBackground2');
    const toggleTextBackgroundButton = document.getElementById('toggleTextBackgroundButton');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const startPresentationButton = document.getElementById('startPresentationButton');
    const startPresentationContainer = document.getElementById('startPresentationContainer');

    toggleRectangleButton.addEventListener('click', () => {
        rectangle1.classList.toggle('hidden');
        rectangle2.classList.toggle('hidden');
    });

    toggleTextBackgroundButton.addEventListener('click', () => {
        textBackground1.classList.toggle('hidden');
        textBackground2.classList.toggle('hidden');
    });

    startPresentationButton.addEventListener('click', () => {
        backgroundMusic.play().catch(error => {
            console.error('Error al reproducir la música de fondo:', error);
        });
        startPresentationContainer.style.display = 'none';
    });
});
