document.getElementById('nightModeButton').addEventListener('click', function() {
    var body = document.body;
    var isNightMode = body.classList.toggle('night-mode');
    document.querySelector('.ProfileCard').classList.toggle('night-mode');
    var nightModeButton = document.getElementById('nightModeButton');
    nightModeButton.src = isNightMode ? 'Assets/Night.png' : 'Assets/Day.png';
});