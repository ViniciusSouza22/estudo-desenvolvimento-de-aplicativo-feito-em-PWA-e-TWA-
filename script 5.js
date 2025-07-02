// Dados das músicas
const musicas = [
    {
        id: 1,
        title: "never gonna give you up",
        artist: "Rick Astley",
        album: "never gonna give you up",
        duration: "0:50",
        cover: "data:image/jpeg;base64,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",
        audio: "musicas/Rick Astleyに駆ける(MP3_160K).mp3"
    },
    
];

// Variáveis globais
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffleOn = false;

// Elementos do DOM
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const albumImage = document.getElementById('album-image');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');

// Inicializar player
function init() {
    loadTrack(currentTrackIndex);

    // Event listeners
    playBtn.addEventListener('click', togglePlay);
    prevBtn.addEventListener('click', previousTrack);
    nextBtn.addEventListener('click', nextTrack);
    shuffleBtn.addEventListener('click', toggleShuffle);
    progressBar.addEventListener('input', seekTo);

    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('loadedmetadata', updateDuration);
    audioPlayer.addEventListener('ended', nextTrack);
}

// Carregar música
function loadTrack(index) {
    const track = musicas[index];

    audioPlayer.src = track.audio;
    albumImage.src = track.cover;
    albumImage.alt = track.album;
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;
    durationEl.textContent = track.duration;
}

// Toggle play/pause
function togglePlay() {
    if (isPlaying) {
        audioPlayer.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    } else {
        audioPlayer.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    }
    isPlaying = !isPlaying;
}

// Música anterior
function previousTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + musicas.length) % musicas.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) {
        audioPlayer.play();
    } else {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        isPlaying = false;
    }
}

// Próxima música
function nextTrack() {
    if (isShuffleOn) {
        currentTrackIndex = Math.floor(Math.random() * musicas.length);
    } else {
        currentTrackIndex = (currentTrackIndex + 1) % musicas.length;
    }
    loadTrack(currentTrackIndex);
    if (isPlaying) {
        audioPlayer.play();
    } else {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        isPlaying = false;
    }
}

// Toggle shuffle
function toggleShuffle() {
    isShuffleOn = !isShuffleOn;
    shuffleBtn.classList.toggle('active', isShuffleOn);
}

// Buscar posição na música
function seekTo() {
    const seekTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
}

// Atualizar progresso
function updateProgress() {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress || 0;
    currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
}

// Atualizar duração
function updateDuration() {
    durationEl.textContent = formatTime(audioPlayer.duration);
}

// Formatar tempo
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', init);
