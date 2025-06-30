// Dados das músicas
const musicas = [
    {
        id: 1,
        title: "Minha Alma Gêmea É Você",
        artist: "especial",
        album: "especial",
        duration: "0:50",
        cover: "https://cdn-images.dzcdn.net/images/cover/1ea2dbada6c911fbe55dcbe9a63d03df/0x1900-000000-80-0-0.jpg",
        audio: "https://r8---sn-pmcg-4vgs.googlevideo.com/videoplayback?expire=1751316196&ei=hKJiaLLoOcTf6dsP0PqTqAw&ip=176.6.141.164&id=o-AH_NkN1OX8MDpxYnd4GHnnkzVyhgpN8doG8tJBLbnjFy&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AY1jyLOVZthlMMRPSKq2Lf6F90ymnPGl49EB2fZE-4aCdiMdUwCQTPMhC1kw8oeoO2Q4aLfT7Mg8e8rV&spc=l3OVKcbCqZ_m9jAjhNf_dOxSg2k_QIqcPLlZJYgCv5opuHJhaMkeUcw&vprv=1&svpuc=1&mime=video%2Fmp4&ns=61IonE2Mj8umlTOGMYEoXYAQ&rqh=1&cnr=14&ratebypass=yes&dur=240.837&lmt=1749523884328540&fexp=24350590,24350737,24350827,24350961,24351316,24351318,24351528,24351907,24352102,24352220,24352236,24352258,24352262,24352321,24352334,24352335,24352394,24352396,24352447,24352457,24352466,51331020&c=MWEB&sefc=1&txp=1538534&n=F-oDS_2E48huew&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIhALZx5DQlDWGgkpYjkfLhEMHcokXw2Avdf328qwgT9iOOAiACxsg_nCbuSE_oizBLWbeUstZfHTR14dNFRfI839orWg%3D%3D&pot=MnSOd0vLpAznTI5LliWGqtndu6QxzdbrpZamRxnvJGIhHDgzk6uNKiCqi6GHlpjnqGC9wKz2CpE_I0waf8g_HhGef42kBxq7_JRlsFWvZ0-1WrXwwscbF3oPALWQbhkPkxg8kj-1-CzWlAbumLF9Taj7jzLsng==&redirect_counter=1&cm2rm=sn-wgq5251wog-j50e7l&rrc=80&req_id=f0f459f84e14a3ee&cms_redirect=yes&cmsv=e&met=1751294598,&mh=I8&mip=45.234.80.244&mm=29&mn=sn-pmcg-4vgs&ms=rdu&mt=1751294248&mv=m&mvi=8&pl=24&rms=rdu,au&lsparams=met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=APaTxxMwRgIhAMLzb3l6QChuGdpJzrwy2LxUocZ4P8qG2mpW_g63LysbAiEAs3fWUxNjM7jd36erTX5KHzQZz33hWfFXOZ8cdzY-0Dk%3D"
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
