// Caso deseje adicionar alguma animação ao carregar a página ou scroll suave entre as seções
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
  
  
