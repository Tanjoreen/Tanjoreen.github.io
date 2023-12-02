document.addEventListener('DOMContentLoaded', function () {
    const historyButton = document.getElementById('historyButton');
    const popup = document.querySelector('.popup');
    const overlay = document.querySelector('.overlay');

    historyButton.addEventListener('click', function (event) {
        event.preventDefault();
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    overlay.addEventListener('click', function () {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
});
