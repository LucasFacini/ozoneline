//Animação ao carregar a página ou scroll suave entre as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


AOS.init({
    once: true,              
    duration: 800,           
    offset: 120,           
    throttleDelay: 99,       
    debounceDelay: 50,       
  });
  


  // Seleciona os elementos das bolinhas e a lista de benefícios
const dots = document.querySelectorAll('.dot');
const benefitsList = document.querySelector('.benefits-list');
const benefitItems = document.querySelectorAll('.benefit-item');

// Função para definir a bolinha ativa
function setActiveDot(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Função para detectar o item visível ao rolar horizontalmente
function updateActiveDotOnScroll() {
    benefitItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const itemVisible = rect.left >= 0 && rect.left < window.innerWidth; // Verifica se o item está visível

        if (itemVisible) {
            setActiveDot(index);
        }
    });
}

// Adiciona o ouvinte de evento 'scroll' à lista de benefícios
benefitsList.addEventListener('scroll', updateActiveDotOnScroll);

// Seleciona os elementos das bolinhas e a lista de produtos
const productDots = document.querySelectorAll('.products-scroll-indicator .dot');
const productsGrid = document.querySelector('.products-grid');
const productCards = document.querySelectorAll('.product-card');

// Função para definir a bolinha ativa
function setActiveProductDot(index) {
    productDots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Função para detectar o produto visível ao rolar horizontalmente
function updateActiveProductDotOnScroll() {
    productCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const itemVisible = rect.left >= 0 && rect.left < window.innerWidth; // Verifica se o produto está visível

        if (itemVisible) {
            setActiveProductDot(index);
        }
    });
}

// Adiciona o ouvinte de evento 'scroll' à lista de produtos
productsGrid.addEventListener('scroll', updateActiveProductDotOnScroll);




document.addEventListener('DOMContentLoaded', () => {
    const galleryScroll = document.querySelector('.gallery-scroll');
    const dotsContainer = document.querySelector('.gallery-scroll-indicator');
    const items = document.querySelectorAll('.gallery-item');
    
    // Cria as bolinhas dinamicamente
    items.forEach(() => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.gallery-scroll-indicator .dot');

    function updateActiveDot() {
        const scrollLeft = galleryScroll.scrollLeft;
        const itemWidth = items[0].offsetWidth;
        const currentIndex = Math.round(scrollLeft / itemWidth);

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    galleryScroll.addEventListener('scroll', updateActiveDot);

    // Inicializa os indicadores
    updateActiveDot();
});


