// Dados das músicas
const musicas = [
    {
        id: 1,
        title: "PSY x BLACKPINK x SUGA",
        artist: "especial",
        album: "especial",
        duration: "0:50",
        cover: "data:image/jpeg;base64,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",
        audio: "https://r4---sn-gpv7knee.googlevideo.com/videoplayback?expire=1751314586&ei=OpxiaNR09NWL2g-imcbRBg&ip=176.1.131.45&id=o-APSd4BrkCBb9gttIjkGDCHf7Tj12Kmu3oSvuErsHDaYv&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AY1jyLNej8uPVqLiH7zAVgPk5NPv4PqNwl5OAWY9ycnwkbmJmTRzwNQIMo_YpEAIefQDGb1XeD2jqfy4&spc=l3OVKYuXdwQ9WuHDA7PrDb124fDsHiyg4S3KHM_08jaVMV3GOPjhMHM&vprv=1&svpuc=1&mime=video%2Fmp4&ns=4oZGUxNOADUOSQUZZMARL54Q&rqh=1&cnr=14&ratebypass=yes&dur=236.216&lmt=1738087279940783&fexp=24350590,24350737,24350827,24350961,24351316,24351318,24351528,24351907,24352098,24352102,24352220,24352236,24352322,24352334,24352335,24352390,24352392,24352447,24352457,24352466,51331020&c=MWEB&sefc=1&txp=4538534&n=Z5sE1jqR8i_eAQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIhANtLsYoqfbPfRxkz0cNu7w5DA1ifF8kkEJ5J8JacvMx1AiB0DK9ZufNunBdHmBpWHLDoA9DgWTZ1GAfVR0DHEq1f7g%3D%3D&pot=MnSvqUgwRJv6X6-Vti5rmaMmmGjXRiwZi4FsNBpbjAKXRQI7nn70guqpVfkRZuetFJafZ0ZuMDdPuliVRKtUuLHoFNKVdLjsqW_ZJ6k0QIP9ceV53tPwmmWObJFMibND9AGyv5EY-3pFbS6iK15EQkLWqcqXuw==&cm2rm=sn-wgq5251wog-j50e7e,sn-pmcg-4vgl7d&rrc=80,80&req_id=15ded09e08a6a3ee&redirect_counter=2&cms_redirect=yes&cmsv=e&met=1751292988,&mh=1g&mip=45.234.80.244&mm=30&mn=sn-gpv7knee&ms=nxu&mt=1751292759&mv=m&mvi=4&pl=24&rms=nxu,au&lsparams=met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=APaTxxMwRAIge5fY5N5kaccL7o0vLpYM4j8YvQGgnaLNqbk8d4x1JfkCIG546gx7fkrlI-bsa6gl8xqQwFHjLJMaI73iBkEz8y9o"
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
