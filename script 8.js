// Dados das músicas
const musicas = [
    {
        id: 1,
        title: "Crucifed",
        artist: "Jean-pierre barda",
        album: "especial",
        duration: "0:50",
        cover: "https://akamai.sscdn.co/uploadfile/letras/albuns/0/4/6/0/01649683432.jpg",
        audio: "https://r11---sn-pmcg-4vgs.googlevideo.com/videoplayback?expire=1751315464&ei=qJ9iaNfsBtjIzPsPwZDq2QI&ip=176.6.134.124&id=o-ADhyYQck5Rz8tH40n-_JqxHCegq0zCuiiNxEoN3RZ5TE&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AY1jyLMXjX9Pd_3_pVVhPCukId5F1e6l1Bi9imHKKR1smndOcGnv-aOnhu0PTDpieb3lZeZ92_EkJwSS&spc=l3OVKY4pdWyQI9vbbQxGCEsFaxrW1rQigKLUgoA2kJ_3g4BWDO8-NZQ&vprv=1&svpuc=1&xtags=heaudio%3Dtrue&mime=video%2Fmp4&ns=s7UQoFpTaPLzZ57D9MMEHVoQ&rqh=1&cnr=14&ratebypass=yes&dur=215.992&lmt=1739053977414557&fexp=24350590,24350737,24350827,24350961,24351316,24351318,24351528,24351907,24352102,24352220,24352236,24352321,24352334,24352336,24352394,24352396,24352447,24352457,24352466,51331020&c=MWEB&sefc=1&txp=5538534&n=Uq87o3F5CVDHnA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cxtags%2Cmime%2Cns%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRgIhAP_AIzOrlp1b_S-uZMfa6QD6zomeZ-H6vt-gwdmRMTcDAiEAyCC4iOdtArklhyUTFpb4SJxngKUUWVoSE8odAdb_J2A%3D&pot=MnSlxfAI2S_j_qX5qC8chCAP21Z7ENV0izLcPRqDvP6LfmkND3W0MKaO17hcqBtUIFZ2GZX7DHub3duF0FHewuZ3rL3bzLdix02eS8Beg2X1rJV9KyJBL1iLSmPnyU-dafuFXRStq10RQMEEcO13aHmyKJIWbA==&redirect_counter=1&cm2rm=sn-wgq5251wog-j50e7e&rrc=80&req_id=414ba55faef1a3ee&cms_redirect=yes&cmsv=e&met=1751293865,&mh=zS&mip=45.234.80.244&mm=29&mn=sn-pmcg-4vgs&ms=rdu&mt=1751293533&mv=m&mvi=11&pl=24&rms=rdu,au&lsparams=met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=APaTxxMwRAIgCXTCGb58ad9H2eR5wf9cWGsc-dxyQDfUXGEFJH6R86ICIBbHBIZeAZBYov44vyPSqFC_4GM1zRIvg2OBiCoIm0Jo"
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
