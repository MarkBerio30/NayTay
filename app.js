document.getElementById('reveal-button').addEventListener('click', function() {
    const videoContainer = document.getElementById('video-container');
    const audio = document.getElementById('valentine-audio');
    videoContainer.style.display = 'block';
    audio.play();
});