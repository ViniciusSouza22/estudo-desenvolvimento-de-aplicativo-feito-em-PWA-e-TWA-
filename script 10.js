// Dados das músicas
const musicas = [
    {
        id: 1,
        title: "Feitos um pro Outro",
        artist: "especial",
        album: "especial",
        duration: "0:50",
        cover: "https://cdn-images.dzcdn.net/images/cover/1ea2dbada6c911fbe55dcbe9a63d03df/0x1900-000000-80-0-0.jpg",
        audio: "https://r1---sn-wgq5251wog-j50e.googlevideo.com/videoplayback?expire=1751316536&ei=2KNiaO_MMafAzPsPpeza0AI&ip=176.6.140.9&id=o-AHd2hrgowgwYTUP2BFP7vfoI8XWDYuasha0pXksZBJvf&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&rms=au%2Cau&bui=AY1jyLOKIQqO92mkFUTYsVVJVwcpKC6fuuT3Vwb0Quostwu8nPflhZWS-lkJDN41SWFYfAlK_wyzymhv&spc=l3OVKcDEyS3sZsNaPEZJj_8Ea_2ISc3aubGGwNP-jL20Lti6vrpPsD8&vprv=1&svpuc=1&mime=video%2Fmp4&ns=NIn3pIIlPl1OtktzMgGmr-wQ&rqh=1&cnr=14&ratebypass=yes&dur=197.508&lmt=1716413582279389&fexp=51331020&c=MWEB&sefc=1&txp=6218224&n=B2iWWP4VYDvbXg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIgC0lZ6u8KPzRnFjCUQGCUVXulNicANwubFl13hQvz2U4CIQDFrhrNxHD-G176s_6Mk9vwID9d8ZSyRRsKuh3lUcz9hg%3D%3D&pot=MpABkPyYyI8DVROQwERwX-3LPItJAJE4Fvo5Aoe4VSDVC7Gl89JxmKEemrnklMYykD0YiDuKcHsamgSRw7ULPajXXRzBrJhGdqGEdhdWBJvb168uKUe5yNqO1Z6DDF_oMbYL0UfGWjde1u1x1BK5EVWxgsGbfXDT_XD04g9PlgWpaMpQUFjf2yvKudtx2RIdFH8p&cms_redirect=yes&met=1751294938,&mh=Jy&mip=45.234.80.244&mm=31&mn=sn-wgq5251wog-j50e&ms=au&mt=1751294490&mv=m&mvi=1&pcm2cms=yes&pl=24&lsparams=met,mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl,rms&lsig=APaTxxMwRgIhAKvtPYv-jiiBDlYTxHcPQ8VjvWzSmEUI5sHvT8WlDQy1AiEAuDZYKs5UKQfuwG3AgyjIKDeaIGtxCzl1dgqi6nraUH0%3D"
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
