//captura de botones que muestran mis modales
let showArtistModalBtn = document.getElementById('showArtistModal');
let showGenreModalBtn = document.getElementById('showGenreModal');

//captura de botones que cierran mis modales
closeModalButtons = document.querySelectorAll('.closeModal');

//captura de modales
let modalArtist = document.getElementById('artistModal');
let modalGenre = document.getElementById('genreModal');

//captura eventos
showArtistModalBtn.addEventListener('click', () => {
    modalArtist.style.display = 'block';
});

showGenreModalBtn.addEventListener('click', () => {
    modalGenre.style.display = 'block';
});

closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
        modalArtist.classList.add('fadeOutAnimation');
        modalGenre.classList.add('fadeOutAnimation');

        // Espera a que termine la animación
        setTimeout(() => {
            modalArtist.style.display = 'none';
            modalGenre.style.display = 'none';

            modalArtist.classList.remove('fadeOutAnimation');
            modalGenre.classList.remove('fadeOutAnimation');
        }, 1000); 
    });
});
