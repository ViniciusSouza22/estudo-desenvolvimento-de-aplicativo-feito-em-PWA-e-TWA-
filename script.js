// Dados das músicas e playlists
const musicData = {
    albums: [
        {
            id: 1,
            title: "CANNONBALL RUNNING",
            artist: "Nana Mizuki",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
        },
        {
            id: 2,
            title: "CONTEMPORARY EMOTION",
            artist: "Nana Mizuki",
            cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop"
        },
        {
            id: 3,
            title: "THE MUSIC",
            artist: "Nana",
            cover: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=300&h=300&fit=crop"
        }
    ],
    playlists: [
        {
            id: 1,
            title: "Forró 2.0",
            artists: "Wesley Safadão, João Gomes, Felipe Amorim, Z...",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop"
        },
        {
            id: 2,
            title: "PAGODEIRA",
            artists: "Grupo Menos É Mais, Ferrugem, Thiaguinho, Tur...",
            cover: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop"
        }
    ]
};

// Estado da aplicação
let currentTab = 'tudo';
let isPlaying = false;

// Elementos do DOM
const navTabs = document.querySelectorAll('.nav-tab');
const navItems = document.querySelectorAll('.nav-item');
const playControl = document.querySelector('.play-control');

// Inicializar aplicação
function init() {
    setupEventListeners();
    updateTime();
    console.log('Biblioteca Musical inicializada');
}

// Configurar event listeners
function setupEventListeners() {
    // Navegação superior
    navTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            switchTab(e.target.textContent.toLowerCase());
        });
    });

    // Navegação inferior
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            switchNavItem(item);
        });
    });

    // Controles do player
    playControl.addEventListener('click', togglePlay);

    // Cards clicáveis
    document.querySelectorAll('.album-card, .playlist-card, .artist-card').forEach(card => {
        card.addEventListener('click', (e) => {
            handleCardClick(e.currentTarget);
        });
    });

    console.log('Event listeners configurados');
}

// Alternar abas superiores
function switchTab(tabName) {
    currentTab = tabName;
    
    // Atualizar visual das abas
    navTabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.textContent.toLowerCase() === tabName) {
            tab.classList.add('active');
        }
    });

    // Filtrar conteúdo baseado na aba
    filterContent(tabName);
    console.log(`Aba alterada para: ${tabName}`);
}

// Filtrar conteúdo
function filterContent(tab) {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        switch(tab) {
            case 'música':
                // Mostrar apenas seções de música
                if (section.querySelector('.albums-grid, .artist-grid')) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
                break;
            case 'podcasts':
                // Mostrar apenas seções de podcasts
                section.style.display = 'none';
                break;
            default:
                // Mostrar tudo
                section.style.display = 'block';
        }
    });
}

// Alternar item da navegação inferior
function switchNavItem(selectedItem) {
    navItems.forEach(item => {
        item.classList.remove('active');
    });
    selectedItem.classList.add('active');
    
    const itemText = selectedItem.querySelector('span').textContent;
    console.log(`Item de navegação selecionado: ${itemText}`);
}

// Toggle play/pause
function togglePlay() {
    isPlaying = !isPlaying;
    playControl.textContent = isPlaying ? '⏸️' : '▶️';
    console.log(`Player ${isPlaying ? 'pausado' : 'tocando'}`);
}

// Lidar com clique em cards
function handleCardClick(card) {
    const title = card.querySelector('h3')?.textContent || 
                  card.querySelector('.playlist-info p')?.textContent ||
                  'Item selecionado';
    
    console.log(`Card clicado: ${title}`);
    
    // Adicionar efeito visual de clique
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
        card.style.transform = '';
    }, 150);
}

// Atualizar horário
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    const timeElement = document.querySelector('.time');
    if (timeElement) {
        timeElement.textContent = `${hours}:${minutes}`;
    }
}

// Simular carregamento de dados
function loadData() {
    console.log('Carregando dados da biblioteca...');
    // Simular delay de carregamento
    setTimeout(() => {
        console.log('Dados carregados com sucesso');
    }, 1000);
}

// Atualizar horário a cada minuto
setInterval(updateTime, 60000);

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    init();
    loadData();
});

// Funcionalidades adicionais para interatividade
document.addEventListener('scroll', () => {
    // Adicionar efeito de parallax ou animações durante scroll
    const scrollY = window.scrollY;
    const header = document.querySelector('.app-header');
    
    if (scrollY > 50) {
        header.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = '#121212';
        header.style.backdropFilter = 'none';
    }
});
