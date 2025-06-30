// Dados das músicas
const musicas = [
    {
        id: 1,
        title: "Take on Me (1985 Single Mix) (2015 Remaster)",
        artist: "Morten Harket",
        album: "A-ha Remix",
        duration: "0:50",
        cover: "img/Take on ME a-ha.jpeg",
        audio: "musicas/Take on Me (1985 Single Mix) (2015 Remaster).mp3"
    },
    {
        id: 2,
        title: "You Are the One (Remix)",
        artist: "Morten Harket",
        album: "A-ha Remix",
        duration: "4:12",
        cover: "img/a-ha.jpeg",
        audio: "musicas/You Are the One (Remix).mp3"
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
