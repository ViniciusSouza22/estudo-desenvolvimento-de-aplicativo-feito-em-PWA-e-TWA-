// Dados das músicas
const musicas = [
    {
        id: 1,
        title: "never gonna give you up",
        artist: "Rick Astley",
        album: "never gonna give you up",
        duration: "0:50",
        cover: "https://cdn-images.dzcdn.net/images/cover/7aa94ac100f152ecbe7d3a7b6f894641/0x1900-000000-80-0-0.jpg",
        audio: "https://r13---sn-pmcg-4vgl.googlevideo.com/videoplayback?expire=1751314063&ei=L5piaIPsBofo6dsPh7yE2Qw&ip=176.6.138.144&id=o-AKKodPMqMhwc_q7X91MyS-I9UP8Xs8ErryajYF4TcoY2&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AY1jyLNyASp6qt02Cu2B480J6LL_cWII-GqrIAWbpEI6yW0Z7NpQN2--E9QZdO5PVYihPkr4CTBNuLvm&spc=l3OVKQuGR1L7NF7s1f4BH6cTawP5fG37cQBJSLJwrCtGp3gdCLlXPws&vprv=1&svpuc=1&mime=video%2Fmp4&ns=TTBXateXNOap7-MTqAmKaKYQ&rqh=1&cnr=14&ratebypass=yes&dur=321.108&lmt=1740330259606633&fexp=24350590,24350737,24350827,24350961,24351316,24351318,24351528,24351907,24352102,24352220,24352236,24352322,24352334,24352335,24352390,24352392,24352447,24352457,24352459,24352466,51331020&c=MWEB&sefc=1&txp=5438534&n=D4dQ0cjruPBuug&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIhANKrkHhGwuyeZZQWzP11f7WDLY1QdX_F87vpg5jQeLCeAiBPgs8ZBkIHAcXdD48P35XAZWZ8qsyNyhBB10T8YaV3-w%3D%3D&pot=MnQ_-xnBCFnDAj_H8RRh-VXZL4sEUNabe8LL9Rp6Lezl8wEhwspaBLzGDNZA3agq50n10J1Q-dbU6b9sjHwZAyLdh42DvCihNWRDA_qRn0kE4KH8RVsTrsrJQ37djSMxyyN59nHOsKLSdbSF5jbnFPJMQy_2vA==&redirect_counter=1&cm2rm=sn-wgq5251wog-j50e7e&rrc=80&req_id=9ef7b1314c3ba3ee&cms_redirect=yes&cmsv=e&met=1751292798,&mh=Q2&mip=45.234.80.244&mm=29&mn=sn-pmcg-4vgl&ms=rdu&mt=1751292581&mv=m&mvi=13&pl=24&rms=rdu,au&lsparams=met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=APaTxxMwRAIgICQfhCEL53XT9IB68nMGDS8cs5dy-3_qPuPkj4sNhxQCIBupTiQ47WjXVwq9PXA3lPsXUqbDEqYZI3zBU-U0mogo"
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
