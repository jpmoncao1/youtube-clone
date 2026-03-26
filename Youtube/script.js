const videos = [
  {
    title: "Clone do YouTube com HTML, CSS e JavaScript",
    channel: "Canal Dev Academico",
    category: "Frontend",
    views: "15 mil visualizacoes",
    publishedAt: "ha 2 dias",
    duration: "12:45",
    description: "Interface principal inspirada no YouTube com layout responsivo e estrutura semantica.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    avatar: "DA",
    embed: "https://www.youtube.com/embed/f02mOEt11OQ",
  },
  {
    title: "Como funcionam APIs REST em plataformas de video",
    channel: "Software Hub",
    category: "Backend",
    views: "8,2 mil visualizacoes",
    publishedAt: "ha 1 semana",
    duration: "18:20",
    description: "Conceitos de autenticacao, rotas, integracao entre servicos e fluxo de dados.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
    avatar: "SH",
    embed: "https://www.youtube.com/embed/7YcW25PHnAA",
  },
  {
    title: "Modelagem de banco de dados para streaming",
    channel: "DB Academy",
    category: "Banco de Dados",
    views: "6,1 mil visualizacoes",
    publishedAt: "ha 5 dias",
    duration: "10:11",
    description: "Estrutura de tabelas, relacionamento entre entidades e consultas para plataformas de video.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80",
    avatar: "DB",
    embed: "https://www.youtube.com/embed/HXV3zeQKqGY",
  },
  {
    title: "Algoritmos de recomendacao em plataformas como YouTube",
    channel: "Tech Logic",
    category: "Algoritmos",
    views: "9,7 mil visualizacoes",
    publishedAt: "ha 3 dias",
    duration: "14:59",
    description: "Introducao a recomendacao, relevancia, engajamento e personalizacao de catalogo.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    avatar: "TL",
    embed: "https://www.youtube.com/embed/aircAruvnKk",
  },
  {
    title: "Prototipo UI UX de interface inspirada no YouTube",
    channel: "Design Academy",
    category: "UI/UX",
    views: "4,4 mil visualizacoes",
    publishedAt: "ha 6 dias",
    duration: "09:34",
    description: "Hierarquia visual, contraste, espacamento e padroes de usabilidade para produtos digitais.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    avatar: "UX",
    embed: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
  },
  {
    title: "Engenharia de Software aplicada a plataformas de video",
    channel: "Engenharia em Foco",
    category: "Arquitetura",
    views: "11 mil visualizacoes",
    publishedAt: "ha 4 dias",
    duration: "16:40",
    description: "Requisitos, qualidade, manutencao, arquitetura e visao de produto para sistemas de streaming.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    avatar: "EF",
    embed: "https://www.youtube.com/embed/O753uuutqH8",
  },
  {
    title: "Microsservicos e escalabilidade em sistemas de midia",
    channel: "Cloud Vision",
    category: "Backend",
    views: "13,5 mil visualizacoes",
    publishedAt: "ha 2 semanas",
    duration: "22:08",
    description: "Escalabilidade horizontal, processamento assincrono e distribuicao de carga.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    avatar: "CV",
    embed: "https://www.youtube.com/embed/9JeznWz3kNQ",
  },
  {
    title: "Boas praticas de frontend para plataformas de conteudo",
    channel: "Interface Lab",
    category: "Frontend",
    views: "7,8 mil visualizacoes",
    publishedAt: "ha 8 dias",
    duration: "11:27",
    description: "Componentizacao, desempenho, acessibilidade e padroes visuais em interfaces modernas.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    avatar: "IL",
    embed: "https://www.youtube.com/embed/zJSY8tbf_ys",
  },
  {
    title: "Arquitetura de sistemas web modernos",
    channel: "Stack Master",
    category: "Arquitetura",
    views: "12,3 mil visualizacoes",
    publishedAt: "ha 5 dias",
    duration: "19:32",
    description: "Separacao de camadas, servicos, componentes e organizacao profissional de projetos.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    avatar: "SM",
    embed: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },
  {
    title: "Otimizacao de performance em interfaces web",
    channel: "Web Performance",
    category: "Frontend",
    views: "5,9 mil visualizacoes",
    publishedAt: "ha 1 semana",
    duration: "13:18",
    description: "Boas praticas para reduzir tempo de carregamento e melhorar a experiencia do usuario.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    avatar: "WP",
    embed: "https://www.youtube.com/embed/0fONene3OIA",
  },
  {
    title: "Projetando dashboards e plataformas de conteudo",
    channel: "UX Studio",
    category: "UI/UX",
    views: "3,7 mil visualizacoes",
    publishedAt: "ha 9 dias",
    duration: "08:42",
    description: "Organizacao de blocos, legibilidade e navegação em produtos com muito conteudo.",
    image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=1200&q=80",
    avatar: "US",
    embed: "https://www.youtube.com/embed/3fumBcKC6RE",
  },
  {
    title: "Consultas SQL para plataformas com grande volume",
    channel: "SQL Class",
    category: "Banco de Dados",
    views: "10,4 mil visualizacoes",
    publishedAt: "ha 3 semanas",
    duration: "17:06",
    description: "Indices, joins e consultas otimizadas para bases de dados de sistemas de streaming.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    avatar: "SC",
    embed: "https://www.youtube.com/embed/ztHopE5Wnpc",
  },
];

const shorts = [
  {
    title: "Navbar estilo YouTube",
    views: "120 mil visualizacoes",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Miniaturas mais profissionais",
    views: "83 mil visualizacoes",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Filtros com JavaScript",
    views: "67 mil visualizacoes",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Cards modernos para videos",
    views: "91 mil visualizacoes",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=900&q=80",
  },
];

const state = {
  search: "",
  category: "Todos",
  currentVideo: videos[0],
};

const pageLayout = document.querySelector(".page-layout");
const menuToggle = document.getElementById("menuToggle");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const videosGrid = document.getElementById("videosGrid");
const shortsRow = document.getElementById("shortsRow");
const categoryButtons = document.querySelectorAll(".category");
const resultsCounter = document.getElementById("resultsCounter");
const searchStatus = document.getElementById("searchStatus");
const emptyState = document.getElementById("emptyState");
const sidebarItems = document.querySelectorAll(".sidebar-item");
const videoFrame = document.getElementById("videoFrame");
const featuredTitle = document.getElementById("featuredTitle");
const featuredViews = document.getElementById("featuredViews");
const featuredPublishedAt = document.getElementById("featuredPublishedAt");
const featuredCategory = document.getElementById("featuredCategory");
const featuredAvatar = document.getElementById("featuredAvatar");
const featuredChannel = document.getElementById("featuredChannel");
const featuredDescription = document.getElementById("featuredDescription");
const toast = document.getElementById("toast");
const createButton = document.getElementById("createButton");
const notificationsButton = document.getElementById("notificationsButton");
const profileButton = document.getElementById("profileButton");
const likeButton = document.getElementById("likeButton");
const saveButton = document.getElementById("saveButton");
const shareButton = document.getElementById("shareButton");

function normalize(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");

  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    toast.classList.remove("visible");
  }, 2200);
}

function setFeaturedVideo(video) {
  state.currentVideo = video;
  videoFrame.src = video.embed;
  featuredTitle.textContent = video.title;
  featuredViews.textContent = video.views;
  featuredPublishedAt.textContent = video.publishedAt;
  featuredCategory.textContent = video.category;
  featuredAvatar.textContent = video.avatar;
  featuredChannel.textContent = video.channel;
  featuredDescription.textContent = video.description;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getFilteredVideos() {
  const searchTerm = normalize(state.search.trim());

  return videos.filter((video) => {
    const matchesCategory =
      state.category === "Todos" || video.category === state.category;

    const haystack = normalize(
      `${video.title} ${video.channel} ${video.category} ${video.description}`
    );

    const matchesSearch = !searchTerm || haystack.includes(searchTerm);
    return matchesCategory && matchesSearch;
  });
}

function createVideoCard(video) {
  const card = document.createElement("article");
  card.className = "video-card";
  card.tabIndex = 0;
  card.innerHTML = `
    <div class="video-card__thumb">
      <img src="${video.image}" alt="Miniatura do video ${video.title}" loading="lazy" />
      <span class="video-card__duration">${video.duration}</span>
    </div>
    <div class="video-card__body">
      <div class="video-card__avatar">${video.avatar}</div>
      <div class="video-card__content">
        <h3 class="video-card__title">${video.title}</h3>
        <p class="video-card__channel">${video.channel}</p>
        <p class="video-card__meta">${video.views} • ${video.publishedAt}</p>
        <p class="video-card__description">${video.description}</p>
      </div>
    </div>
  `;

  const openVideo = () => setFeaturedVideo(video);

  card.addEventListener("click", openVideo);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openVideo();
    }
  });

  return card;
}

function renderVideos() {
  const filteredVideos = getFilteredVideos();
  videosGrid.innerHTML = "";

  filteredVideos.forEach((video) => {
    videosGrid.appendChild(createVideoCard(video));
  });

  resultsCounter.textContent = `${filteredVideos.length} resultados encontrados`;
  searchStatus.textContent = state.search.trim()
    ? `Busca: ${state.search.trim()}`
    : `Categoria: ${state.category === "Todos" ? "Tudo" : state.category}`;
  emptyState.classList.toggle("hidden", filteredVideos.length > 0);

  const selectedStillVisible = filteredVideos.some(
    (video) => video.title === state.currentVideo.title
  );

  if (!selectedStillVisible && filteredVideos.length > 0) {
    setFeaturedVideo(filteredVideos[0]);
  }
}

function renderShorts() {
  shortsRow.innerHTML = "";

  shorts.forEach((short) => {
    const card = document.createElement("article");
    card.className = "short-card";
    card.tabIndex = 0;
    card.innerHTML = `
      <img src="${short.image}" alt="Imagem do short ${short.title}" loading="lazy" />
      <div class="short-card__content">
        <h3>${short.title}</h3>
        <p>${short.views}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      showToast(`Short aberto: ${short.title}`);
    });

    shortsRow.appendChild(card);
  });
}

function setCategory(categoryName) {
  state.category = categoryName;

  categoryButtons.forEach((button) => {
    const isSelected = button.dataset.category === categoryName;
    button.classList.toggle("selected", isSelected);
    button.setAttribute("aria-selected", String(isSelected));
  });

  renderVideos();
}

menuToggle.addEventListener("click", () => {
  pageLayout.classList.toggle("sidebar-collapsed");
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.search = searchInput.value;
  renderVideos();
});

searchInput.addEventListener("input", () => {
  state.search = searchInput.value;
  renderVideos();
});

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setCategory(button.dataset.category);
  });
});

sidebarItems.forEach((item) => {
  item.addEventListener("click", () => {
    sidebarItems.forEach((entry) => entry.classList.remove("active"));
    item.classList.add("active");
    showToast(`Menu: ${item.textContent}`);
  });
});

createButton.addEventListener("click", () => {
  showToast("Acao de criar video simulada.");
});

notificationsButton.addEventListener("click", () => {
  showToast("Voce tem 9 notificacoes.");
});

profileButton.addEventListener("click", () => {
  showToast("Perfil do usuario aberto.");
});

likeButton.addEventListener("click", () => {
  showToast(`Voce curtiu: ${state.currentVideo.title}`);
});

saveButton.addEventListener("click", () => {
  showToast("Video salvo em Assistir mais tarde.");
});

shareButton.addEventListener("click", async () => {
  const text = `${state.currentVideo.title} - ${state.currentVideo.embed}`;

  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      showToast("Link copiado para a area de transferencia.");
      return;
    } catch (error) {
      showToast("Nao foi possivel copiar automaticamente.");
      return;
    }
  }

  showToast("Copie manualmente o link do video.");
});

renderShorts();
setFeaturedVideo(state.currentVideo);
renderVideos();
