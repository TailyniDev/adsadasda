// Dados dos artistas
const artistas = [
    {
        id: 1,
        nome: "Gabriel Picolo",
        categoria: "artista",
        imagem: "fotos/picolo.jpg",
        descricao: "Gabriel Picolo é um ilustrador brasileiro famoso por fanarts de DC Comics, incorporando brasilidade em personagens como Ravena dançando samba.",
        conteudoExpandido: "Picolo, de São Paulo, tem milhões de seguidores no Instagram. Seu trabalho mistura cultura pop ocidental com referências brasileiras, promovendo diversidade."
    },
    {
        id: 2,
        nome: "Débora Fuzeti",
        categoria: "cosplayer",
        imagem: "fotos/debora.jpg",
        descricao: "Débora Fuzeti cria cosplays de games e animes com toques brasileiros, como trajes de carnaval geek.",
        conteudoExpandido: "Estrela das redes sociais conhecida pelos vídeos de cosplay postados na conta deborafuzeti do TikTok. Ela cria suas próprias fantasias e muitas vezes documenta o processo. Mais de 140.000 pessoas seguem seu perfil."
    },
    {
        id: 3,
        nome: "Cellbit",
        categoria: "influencer",
        imagem: "fotos/cellbitlore.jfif",
        descricao: "Famoso YouTuber, chamado Rafael Lange, que é criador do canal Cellbit, onde tem mais de 6 milhões de inscritos que assistem aos seus vlogs e gameplays.",
        conteudoExpandido: "Famoso YouTuber, chamado Rafael Lange, que é criador do canal Cellbit, onde tem mais de 6 milhões de inscritos que assistem aos seus vlogs e gameplays. Após focar sua produção de conteúdo na Twitch, seu canal de mesmo nome na plataforma passou a ser acompanhado por mais de 3.5 milhões de seguidores."
    },
    {
        id: 4,
        nome: "Carlos Daniel (Voice Makers)",
        categoria: "influencer",
        imagem: "fotos/carlosdaniel.jfif",
        descricao: "Criador do maior canal brasileiro de animações próprias e sátiras de animes e games: Voice Makers",
        conteudoExpandido: "Carlos Daniel é ator de voz original e lidera o canal Voice Makers, que possui mais de 8 milhões de seguidores nas redes sociais com seu conteúdo focado em dublagens e paródias geek."
    },
    {
        id: 5,
        nome: "Diney Paiva (Voice Makers)",
        categoria: "influencer",
        imagem: "fotos/dineypaiva.jfif",
        descricao: "Influencer, ator de voz e dublador conhecido por seu trabalho no Voice Makers e em outros projetos de dublagem.",
        conteudoExpandido: "lém de ser uma das vozes principais do Voice Makers, Diney Paiva atua como dublador profissional, contribuindo para a presença de dublagens de alta qualidade no cenário geek brasileiro."
    },
    {
        id: 6,
        nome: "Ljoga",
        categoria: "influencer",
        imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.twitch.tv%2FLJoga%2Fvideos%3Flang%3Dpt-br&psig=AOvVaw0KRuse7kvY1HGL-lHRM8ZB&ust=1761756694291000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOiW6bitx5ADFQAAAAAdAAAAABAK",
        descricao: "Criador de conteúdo de variedade na Twitch e amigo próximo de Alanzoka.",
        conteudoExpandido: "Conhecido por suas transmissões descontraídas e interações com a comunidade, Ljoga é uma figura popular no cenário de streaming brasileiro, focado principalmente em Just Chatting e games casuais."
    },
    {
        id: 7,
        nome: "FehDubs",
        categoria: "cosplayer",
        imagem: "fotos/feh.jfif",
        descricao: "Cosplayer e dubladora amadora que ganhou popularidade por suas dublagens e vídeos de comédia geek",
        conteudoExpandido: "FehDubs combina cosplay de personagens de anime e games com seu talento para dublagem, criando vídeos virais no TikTok e outras plataformas que celebram a cultura pop brasileira."
    },
    {
        id: 8,
        nome: "Felps",
        categoria: "influencer",
        imagem: "fotos/felps.jpg",
        descricao: "presidente de Felpepólis e Streamer",
        conteudoExpandido: "Há uma lenda que afirma que se você ir ao banheiro e falar 'Felps' cinco vezes e acender uma vela vermelha, o ser místico irá aparecer por 5 segundos e te dar bença."
    },
    {
        id: 9,
        nome: "Alanzoka - Streamer / GOAT",
        categoria: "influencer",
        imagem: "fotos/alanzoka.jpg",
        descricao: "<strong>O GOAT, o Nextage, né bb.</strong> Um dos maiores e mais carismáticos streamers do Brasil, conhecido pela variedade de games e reações hilárias.",
        conteudoExpandido: "Alan Ferreira, também conhecido como Alanzoka, domina a Twitch brasileira. Ele é aclamado por suas <strong>gameplays</strong> de terror, mantendo a comunidade engajada com sua autenticidade e humor. Suas frases de efeito e o carisma inconfundível o consolidaram como um ícone da cultura gamer brasileira, sendo frequentemente referenciado como o <strong>GOAT</strong> (Greatest Of All Time) pela sua base de fãs. É o verdadeiro 'Nextage né bb' do streaming nacional. "
    },
    {
        id: 10,
        nome: "MagicPhyra",
        categoria: "cosplayer",
        imagem: "fotos/magic.jpg",
        descricao: "Cosplayer brasileira conhecida pela fidelidade e detalhe de seus trajes de personagens de fantasia e jogos.",
        conteudoExpandido: "MagicPhyra é uma referência no cenário de cosplay, focando na confecção manual de armaduras e acessórios complexos, frequentemente destacada em eventos como a CCXP."
    },
    {
        id: 11,
        nome: "Naty",
        categoria: "cosplayer",
        imagem: "fotos/naty.jpg",
        descricao: "Criadora de conteúdo que explodiu no TikTok com esquetes de comédia geek, vlogs e desafios que fazem referência direta à cultura pop.",
        conteudoExpandido: "Naty se destaca pela sua autenticidade e pelo uso de humor ácido e referências a animes e séries em seus vídeos curtos. É uma das figuras femininas mais influentes na comunidade jovem do TikTok."
    },
    {
        id: 12,
        nome: "Nara_izumi",
        categoria: "cosplayer",
        imagem: "fotos/nara.jpeg",
        descricao: "Cosplayer popular nas redes sociais com foco em personagens de animes e mangás.",
        conteudoExpandido: "Nara Izumi utiliza plataformas como TikTok e Instagram para compartilhar seus cosplays e tutoriais de maquiagem, engajando uma grande comunidade de fãs de cultura japonesa."
    },
    {
        id: 14,
        nome: "Forever",
        categoria: "influencer",
        imagem: "fotos/forever.jfif",
        descricao: "Streamer e criador de conteúdo conhecido por gameplays e interações com a comunidade.",
        conteudoExpandido: "Focado em jogos variados e em colaborações com outros grandes nomes do cenário brasileiro de streaming. Cadê Forever Mapa?"
    },
    {
        id: 15,
        nome: "Bagi",
        categoria: "influencer",
        imagem: "fotos/bagi.jpg",
        descricao: "Streamer de jogos variados, conhecida por sua personalidade divertida, carisma e interações descontraídas com a comunidade da Twitch.",
        conteudoExpandido: "Bagi faz parte da nova geração de streamers de sucesso no Brasil. Seu conteúdo abrange desde jogos de terror e indie até sessões de Just Chatting, sendo uma figura constante em colaborações com outros grandes nomes do cenário."
    },
    {
        id: 16,
        nome: "Matt",
        categoria: "influencer",
        imagem: "fotos/matt.png",
        descricao: "Criador de conteúdo e streamer que faz lives com frequência na Twitch e é conhecido por seu relacionamento e parcerias com Bagi.",
        conteudoExpandido: "Matt consolidou sua carreira no streaming através de gameplays variadas e por ser um excelente host em transmissões colaborativas. Ele contribui para o cenário com humor e uma comunidade muito ativa."
    },
    {
        id: 17,
        nome: "Calango",
        categoria: "influencer",
        imagem: "fotos/calango.jpg",
        descricao: "Um dos criadores de conteúdo mais versáteis, famoso por seus vídeos de comédia, gameplays e pela sua participação em projetos de RPG na Twitch.",
        conteudoExpandido: "Calango, ou Léo Calango, é conhecido por seu humor único e por transitar entre o YouTube (com vídeos editados e vlogs) e a Twitch (com lives longas e participações em RP, como Ordem Paranormal)."
    },
    {
        id: 18,
        nome: "Felca",
        categoria: "influencer",
        imagem: "fotos/felca.webp",
        descricao: "YouTuber que ganhou notoriedade recente por vídeos de comédia, sátiras de tendências e, principalmente, por abordar de forma crítica a adultização e o conteúdo infantil.",
        conteudoExpandido: "Felca utiliza o humor e o sarcasmo para comentar temas complexos, como no caso em que viralizou ao replicar a estética de influencers que buscam adultizar a imagem para o público jovem, gerando um importante debate social."
    },
    {
        id: 19,
        nome: "Daishikawa",
        categoria: "influencer",
        imagem: "fotos/daishikawa.jpg",
        descricao: "Canal de horror, mistério e narrativas sombrias — com contos, teorias e exploração do lado obscuro da internet. ",
        conteudoExpandido: "Daishikawa é um projeto solo de criação de conteúdo focado no universo do terror, horror analógico, creepypastas e fenômenos estranhos da internet. A cada semana, ele publica vídeos que caminham entre o sombrio e o provocativo, mesclando narrativas de mistério, análises de séries/arg’s e teorias que exploram “o lado escuro da internet”. Com edição cuidadosa, ambientações tensas e uma estética marcante, Daishikawa trabalha para instigar o medo e a curiosidade no público."
    },
    {
        id: 20,
        nome: "Brubs",
        categoria: "artista",
        imagem: "fotos/brubs.jpg",
        descricao: "Desenhista talentoso com um canal no YouTube focado em tutoriais de desenho, speedpaints e dicas de arte digital, inspirando milhares de novos artistas.",
        conteudoExpandido: "Brubs faz um trabalho excelente em desmistificar o processo de criação de arte. Seu canal é um arsenal de histórias animadas sobre suas experiencias."
    },
    {
        id: 21,
        nome: "TazerCraft",
        categoria: "influencer",
        imagem: "fotos/tazer.jfif",
        descricao: "Dupla de criadores de conteúdo (Mike e Pac) pioneira em gameplays de Minecraft no Brasil, com um público infantil e juvenil massivo.",
        conteudoExpandido: "Mike e Pac construíram um império no YouTube com foco em histórias e desafios dentro do Minecraft. O TazerCraft é um dos canais com maior longevidade e sucesso no nicho de games no país."
    },
    {
        id: 22,
        nome: "Goularte",
        categoria: "influencer",
        imagem: "fotos/goularte.jfif",
        descricao: "Criador de conteúdo conhecido por seus vídeos de reação, comentários e análises de memes e cultura da internet com um estilo de humor acelerado.",
        conteudoExpandido: "Goularte se especializou em comentar o que está em alta na internet, muitas vezes com edições frenéticas e reações exageradas. E atualmente resume histórias de jogos Indies ou de horros psicológico."
    },
    {
        id: 23,
        nome: "Hamlet",
        categoria: "influencer",
        imagem: "fotos/hamlet.jpg",
        descricao: "Canal de resenhas, reações e comentários sobre desenhos, séries e cultura pop. ",
        conteudoExpandido: "Hamlet ARL é um criador de conteúdo brasileiro que combina paixão por animações, séries e cultura nerd com reflexões pessoais e análises. Ele produz vídeos de resenha, reação, “rabiscos tortos” (formatos de conversa) e debates sobre obras da infância e adolescência, como Cartoon Network, além de temas mais amplos do entretenimento. Com uma linguagem acessível e envolvente, Hamlet busca conectar fãs nostálgicos e novos espectadores através de suas interpretações e experiências culturais. "
    },
    {
        id: 24,
        nome: "HueStation",
        categoria: "influencer",
        imagem: "fotos/souzones.jpg",
        descricao: "Canal famoso por análises aprofundadas, críticas e vídeos de curiosidades sobre jogos e cultura pop em geral.",
        conteudoExpandido: "O Souzones se destaca pela qualidade da pesquisa e edição de seus vídeos. Eles cobrem a história de franquias, teorias de fãs e eventos do mundo geek com seriedade e humor."
    },
    {
        id: 25,
        nome: "Core",
        categoria: "influencer",
        imagem: "fotos/core.jfif",
        descricao: "Criador de conteúdo que produz análises detalhadas e ensaios sobre jogos, com foco especial em RPGs e narrativas complexas.",
        conteudoExpandido: "Core é conhecido por seus vídeos longos e aprofundados, quase documentários, que exploram a filosofia e o design por trás dos jogos. É uma referência para quem busca uma visão crítica sobre a indústria gamer."
    },
    {
        id: 26,
        nome: "ViralQuest",
        categoria: "influencer",
        imagem: "fotos/viralquest.png",
        descricao: "Canal focado em mistérios, casos não resolvidos e lendas urbanas, atraindo o público que ama suspense e o lado obscuro da internet.",
        conteudoExpandido: "ViralQuest mantém o público cativo com narrativas tensas e bem pesquisadas. O canal é um dos líderes em conteúdo de mistério e terror no YouTube brasileiro."
    },
    {
        id: 27,
        nome: "Yun li",
        categoria: "artista",
        imagem: "fotos/yung.jfif",
        descricao: "Rapper com duas faces: o lado sério, introspectivo e o lado 'shit trap' de zoeira. Sua trilogia 'BONDA' é considerada, por mim, como uma obra-prima que marcou o cenário.",
        conteudoExpandido: "Yun Li (ou Vittor Chavons) é um artista versátil que explora temas de vida, superação e animes com um toque filosófico em álbuns como Validation. Ele é elogiado por sua autenticidade e por ter inspirado muitos artistas no meio geek, usando o Rap Geek como veículo para expressar emoções profundas"
    },
    {
        id: 28,
        nome: "Zedin",
        categoria: "influencer",
        imagem: "fotos/zedin.png",
        descricao: "...",
        conteudoExpandido: "..."
    },{
        id: 29,
        nome: "AniRap",
        categoria: "artista",
        imagem: "fotos/ani.jpg",
        descricao: "Um dos maiores canais brasileiros de Rap Geek, que reúne diversos artistas para criar músicas baseadas em personagens e sagas de animes.",
        conteudoExpandido: "O canal AniRap é um fenômeno de audiência. Eles são responsáveis por popularizar o gênero no Brasil, com produções de alta qualidade que narram histórias épicas de animes como Naruto, Dragon Ball e Blue Lock."
    },
    {
        id: 30,
        nome: "7Minutoz",
        categoria: "artista",
        imagem: "fotos/7.jpg",
        descricao: "Canal líder em Rap Geek e Rap Nerd, famoso por criar músicas com temas de super-heróis, games e principalmente animes, acumulando milhões de visualizações.",
        conteudoExpandido: "O 7Minutoz (com Lucas A.R.T.) é uma potência na criação de conteúdo temático, com rimas bem escritas e produção musical profissional, sendo o principal responsável por dar voz aos fãs do gênero no Brasil."
    },
    {
        id: 31,
        nome: "Henrique Mendonça ",
        categoria: "artista",
        imagem: "fotos/henrique.jfif",
        descricao: "Rapper conhecido por suas músicas temáticas com foco em jogos e animes, muitas vezes trazendo a perspectiva do vilão ou de personagens secundários.",
        conteudoExpandido: "."
    },
    {
        id: 32,
        nome: "Chrono",
        categoria: "artista",
        imagem: "fotos/chrono.jpg",
        descricao: "Rapper que se destaca por trazer uma abordagem profunda e teatral, focando em personagens específicos de animes e games, explorando seus dilemas e poder.",
        conteudoExpandido: "Chrono é mestre em construir narrativas complexas em suas faixas, cobrindo desde figuras conhecidas (Bleach, Sonic) até jogos cultuados. Seu trabalho é caracterizado por um estilo vocal marcante e por se aprofundar na psicologia dos personagens."
    },
    {
        id: 33,
        nome: "Seijinho",
        categoria: "influencer",
        imagem: "fotos/seijinho.jpg",
        descricao: "Criador de conteúdo que se dedica a fazer as pessoas darem 'gostosas webgargalhadas' com seus reacts humorísticos a filmes, séries e a cultura pop.",
        conteudoExpandido: "Embora tenha raízes em eSports e jogos de luta, Seijinho se consolidou no YouTube e na Twitch com reações e comentários cômicos sobre trailers, filmes de terror ruins e tendências da internet. Ele entrega entretenimento puro com um carisma inconfundível."
    },
    {
        id: 34,
        nome: "F0rsaken",
        categoria: "influencer",
        imagem: "fotos/forsaken.jfif",
        descricao: "Jogador profissional de Valorant, conhecido por sua mira precisa e clutches incríveis, um dos talentos brasileiros mais promissores na modalidade.",
        conteudoExpandido: "F0rsaken é um duelist de alto impacto, peça chave em sua equipe no cenário competitivo de Valorant. Ele representa a força da nova geração de jogadores brasileiros em eSports globais."
    },
    {
        id: 35,
        nome: "Sacy",
        categoria: "influencer",
        imagem: "fotos/sacy.webp",
        descricao: "Lenda do eSports, Sacy é um dos jogadores brasileiros de Valorant mais respeitados no mundo, multicampeão e conhecido por sua inteligência e liderança.",
        conteudoExpandido: "Sacy é sinônimo de excelência e consistência, tendo sido peça fundamental nas maiores conquistas do Brasil no Valorant, incluindo o título mundial de 2022. Sua visão de jogo é lendária."
    },{
        id: 36,
        nome: "Aspas",
        categoria: "influencer",
        imagem: "fotos/aspas.png",
        descricao: "O Fenômeno! GIRA ASPAS! O maior duelista que o Brasil já produziu, conhecido por sua mecânica impecável, agressividade e lances inacreditáveis no Valorant.",
        conteudoExpandido: "O 'GOAT' do Valorant brasileiro. Aspas é uma força da natureza no jogo, com um nível de habilidade individual que o coloca entre os melhores do mundo. Quando ele 'gira' no mapa, é certeza de highlights e vitórias esmagadoras. Ele é o puro suco do talento nacional."
    },
    {
        id: 37,
        nome: "VMZ",
        categoria: "artista",
        imagem: "fotos/vmz.jpg",
        descricao: "Rapper e produtor musical com um foco intenso em animes e cultura japonesa, conhecido pela qualidade das suas produções.",
        conteudoExpandido: "VMZ é um dos rappers mais populares do nicho, com músicas que frequentemente entram nas paradas de sucesso. Ele utiliza batidas modernas e letras que celebram os momentos mais marcantes dos animes."
    },
    {
        id: 38,
        nome: "MHRap",
        categoria: "artista",
        imagem: "fotos/mh.jpg",
        descricao: "Rapper com um estilo de voz distinto, que produz músicas sobre animes e personagens de forma muito narrativa e intensa.",
        conteudoExpandido: "MHRap é conhecido por dar vida às histórias dos personagens através de suas rimas, com um foco especial em animes shonen e batalhas épicas, sendo uma voz importante no Rap Geek."
    },
    {
        id: 40,
        nome: "M4rkim",
        categoria: "artista",
        imagem: "fotos/m4.jpg",
        descricao: "Músico e rapper com um estilo versátil, conhecido por abordar tanto animes quanto games em suas composições, sendo um nome forte na comunidade.",
        conteudoExpandido: "M4rkim transita bem entre o rap e outros gêneros musicais, sempre mantendo a essência geek. Sua capacidade de se adaptar a diferentes temas o torna popular em várias subcomunidades."
    },
    {
        id: 41,
        nome: "Felicia Rock",
        categoria: "artista",
        imagem: "fotos/felicia.jpg",
        descricao: "Cantora e rapper feminina que se destaca por suas músicas com temas de animes e jogos, muitas vezes trazendo a perspectiva de personagens femininas fortes.",
        conteudoExpandido: "Felicia Rock é uma voz poderosa e necessária no Rap Geek, quebrando barreiras e oferecendo músicas que celebram a força feminina no universo pop e nerd."
    },
    {
        id: 42,
        nome: "Wendlly",
        categoria: "artista",
        imagem: "fotos/Wendlly.jfif",
        descricao: "Rapper com um estilo dinâmico e versátil, capaz de abordar temas complexos de animes, usando batidas que variam do rap ao piseiro geek (como em seu hit da Nobara).",
        conteudoExpandido: "Wendlly é conhecido pela sua técnica vocal, mas também pela sua ousadia em experimentar gêneros, como o 'Piseiro Geek'. Ele cria músicas que unem narrativas de animes (Demon Slayer, Jujutsu Kaisen) com flows modernos e originais."
    },
    {
        id: 43,
        nome: "Hugo Canuto",
        categoria: "artista",
        imagem: "fotos/hugo.jpg",
        descricao: "Ilustrador e quadrinista que ganhou reconhecimento internacional por misturar a mitologia nórdica e grega com elementos da cultura e folclore brasileiro.",
        conteudoExpandido: "Hugo Canuto é o criador de 'O Filho de Odin' (The Son of Odin), onde ele reimagina Thor, Odin e outros deuses com traços e estética que remetem à arte e à cultura do nordeste brasileiro."
    },
    {
        id: 44,
        nome: "Kamaitachi",
        categoria: "artista",
        imagem: "fotos/kamaitachi.webp",
        descricao: "Cantor e compositor que mistura o estilo Indie/MPB com letras que abordam temas de animes, jogos e melancolia de forma poética.",
        conteudoExpandido: "Kamaitachi tem uma base de fãs muito fiel devido à sua originalidade. Suas músicas, como 'Morgana' e 'Sei Lá', utilizam a estética pop e geek para explorar sentimentos profundos."
    }
];

// Função para criar os cards
function criarCards(artistasParaExibir) {
    const container = document.getElementById('cards-container');
    container.innerHTML = '';
    
    artistasParaExibir.forEach(artista => {
        const card = document.createElement('article');
        card.className = `card ${artista.categoria}`;
        card.setAttribute('role', 'article');
        card.setAttribute('aria-labelledby', `card${artista.id}-title`);
        
        const badgeClass = `badge-${artista.categoria}`;
        const badgeText = artista.categoria === 'artista' ? 'Artista' : 
                         artista.categoria === 'cosplayer' ? 'Cosplayer' : 'Influencer';
        
        card.innerHTML = `
            <div class="card-badge ${badgeClass}">${badgeText}</div>
            <div class="card-img-container">
                <img src="${artista.imagem}" alt="${artista.nome}">
            </div>
            <div class="card-content">
                <h3 id="card${artista.id}-title">${artista.nome}</h3>
                <p>${artista.descricao}</p>
                <button class="toggle-btn" data-id="${artista.id}" aria-expanded="false" aria-controls="content${artista.id}">
                    <span>Mais sobre</span>
                    <i class="fas fa-chevron-down"></i>
                </button>
            </div>
            <div class="card-expanded-content" id="content${artista.id}">
                <p>${artista.conteudoExpandido}</p>
            </div>
        `;
        
        container.appendChild(card);
    });
    
    // Adicionar eventos aos botões de toggle
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const contentId = this.getAttribute('aria-controls');
            const content = document.getElementById(contentId);
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            this.setAttribute('aria-expanded', !isExpanded);
            content.classList.toggle('active');
            
            // Alterar ícone
            const icon = this.querySelector('i');
            if (isExpanded) {
                icon.className = 'fas fa-chevron-down';
            } else {
                icon.className = 'fas fa-chevron-up';
            }
        });
    });
}

// Filtragem e busca
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar cards
    criarCards(artistas);
    
    // Filtros por categoria
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover classe active de todos os botões
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            let artistasFiltrados;
            
            if (filter === 'all') {
                artistasFiltrados = artistas;
            } else {
                artistasFiltrados = artistas.filter(artista => artista.categoria === filter);
            }
            
            criarCards(artistasFiltrados);
        });
    });
    
    // Busca por nome
    document.getElementById('search-input').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const artistasFiltrados = artistas.filter(artista => 
            artista.nome.toLowerCase().includes(searchTerm)
        );
        
        criarCards(artistasFiltrados);
    });
    
    // Suporte a teclado para botões de toggle
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            const focusedElement = document.activeElement;
            if (focusedElement.classList.contains('toggle-btn')) {
                e.preventDefault();
                focusedElement.click();
            }
        }
    });
});

// ===== Acessibilidade: funcionalidades (alto contraste, tamanho da fonte, TTS, VLibras) =====
(function() {
  const btnContrast = document.getElementById('ac-contrast');
  const btnInc = document.getElementById('ac-a11y-increase');
  const btnDec = document.getElementById('ac-a11y-decrease');
  const btnTTS = document.getElementById('ac-tts');
  const btnVlibras = document.getElementById('ac-vlibras');
  const status = document.getElementById('accessibility-status');

  // Carregar preferências do localStorage
  const pref = {
    contrast: localStorage.getItem('acc_contrast') === '1',
    fontScale: parseFloat(localStorage.getItem('acc_fontScale') || '1'),
  };

  // Aplicar estado inicial
  function applyPreferences() {
    if (pref.contrast) document.body.classList.add('high-contrast');
    else document.body.classList.remove('high-contrast');

    document.documentElement.style.setProperty('--site-font-scale', pref.fontScale);
    btnContrast.setAttribute('aria-pressed', pref.contrast ? 'true' : 'false');
  }
  applyPreferences();

  // Alto contraste
  btnContrast.addEventListener('click', function() {
    pref.contrast = !pref.contrast;
    localStorage.setItem('acc_contrast', pref.contrast ? '1' : '0');
    applyPreferences();
    status.textContent = pref.contrast ? 'Alto contraste ativado' : 'Alto contraste desativado';
  });

  // Aumentar/Diminuir fonte (entre 0.8 e 1.6)
  btnInc.addEventListener('click', function() {
    pref.fontScale = Math.min(1.6, +(pref.fontScale + 0.1).toFixed(2));
    localStorage.setItem('acc_fontScale', pref.fontScale);
    applyPreferences();
    status.textContent = `Tamanho da fonte: ${(pref.fontScale*100).toFixed(0)}%`;
  });
  btnDec.addEventListener('click', function() {
    pref.fontScale = Math.max(0.8, +(pref.fontScale - 0.1).toFixed(2));
    localStorage.setItem('acc_fontScale', pref.fontScale);
    applyPreferences();
    status.textContent = `Tamanho da fonte: ${(pref.fontScale*100).toFixed(0)}%`;
  });

  // Text-To-Speech: lê títulos e parágrafos de maneira simples
  let synth = window.speechSynthesis;
  let ttsUtterance = null;
  let isSpeaking = false;

  function buildTextForTTS() {
    // Seleciona conteúdos relevantes (título do site + conteúdo principal)
    const title = document.querySelector('header .site-title')?.textContent || document.title;
    const mainTextNodes = Array.from(document.querySelectorAll('main p, main h1, main h2, main h3'));
    const text = [title].concat(mainTextNodes.map(n => n.textContent)).join('. ');
    return text;
  }

  btnTTS.addEventListener('click', function() {
    if (!('speechSynthesis' in window)) {
      alert('Navegador não suporta síntese de voz.');
      return;
    }

    if (!isSpeaking) {
      const text = buildTextForTTS();
      ttsUtterance = new SpeechSynthesisUtterance(text);
      // preferências (pode ajustar)
      ttsUtterance.rate = 1;
      ttsUtterance.pitch = 1;
      ttsUtterance.lang = 'pt-BR';

      ttsUtterance.onstart = () => {
        isSpeaking = true;
        btnTTS.setAttribute('aria-pressed', 'true');
        btnTTS.querySelector('i').className = 'fas fa-pause';
        status.textContent = 'Leitura iniciada';
      };

      ttsUtterance.onend = () => {
        isSpeaking = false;
        btnTTS.setAttribute('aria-pressed', 'false');
        btnTTS.querySelector('i').className = 'fas fa-play';
        status.textContent = 'Leitura finalizada';
      };

      ttsUtterance.onerror = () => {
        isSpeaking = false;
        btnTTS.setAttribute('aria-pressed', 'false');
        btnTTS.querySelector('i').className = 'fas fa-play';
        status.textContent = 'Erro na leitura';
      };

      synth.speak(ttsUtterance);
    } else {
      // Pausa / resume
      if (synth.paused) {
        synth.resume();
        btnTTS.querySelector('i').className = 'fas fa-pause';
        status.textContent = 'Leitura retomada';
      } else {
        synth.pause();
        btnTTS.querySelector('i').className = 'fas fa-play';
        status.textContent = 'Leitura pausada';
      }
    }
  });

  // Quando navegar embora da página, garantir stop
  window.addEventListener('beforeunload', function() {
    if (synth && synth.speaking) synth.cancel();
  });

  // Atalho teclado: A = toggla contraste; + / - para fonte; R para ler
  document.addEventListener('keydown', function(e) {
    // evitar interferir em inputs
    const tag = document.activeElement.tagName.toLowerCase();
    if (tag === 'input' || tag === 'textarea' || document.activeElement.isContentEditable) return;

    if (e.key === 'A' || e.key === 'a') {
      e.preventDefault();
      btnContrast.click();
    } else if (e.key === '+') {
      e.preventDefault();
      btnInc.click();
    } else if (e.key === '-') {
      e.preventDefault();
      btnDec.click();
    } else if (e.key === 'R' || e.key === 'r') {
      e.preventDefault();
      btnTTS.click();
    }
  });

  // VLibras: inicializar se script carregado
  btnVlibras.addEventListener('click', function() {
    try {
      if (window.VLibras && !document.querySelector('.vlibras-widget')) {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
      }
      // abrir o botão do VLibras (o widget cria elementos na página)
      status.textContent = 'VLibras ativado (procure o ícone de intérprete no canto da tela)';
    } catch (err) {
      console.warn('VLibras não disponível:', err);
      status.textContent = 'VLibras indisponível';
    }
  });

  // Acessibilidade: garantir foco visível por teclado (opcional melhoria)
  document.body.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') document.documentElement.classList.add('show-focus-outline');
  });
})();



