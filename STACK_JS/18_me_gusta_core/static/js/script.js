// con el selector se selecciona todo
const posts = document.querySelectorAll('.post');

// Iteramos sobre cada publicación para encapsular la lógica de sus botones
posts.forEach((post) => {
  // Usamos querySelector dentro de cada publicación individual
  const btnLike = post.querySelector('.btn-like');
  const likeCountSpan = post.querySelector('.like-count');

  // Asignamos el evento onclick al botón de la publicación correspondiente
  btnLike.onclick = function () {
    let currentLikes = parseInt(likeCountSpan.innerText);
    likeCountSpan.innerText = currentLikes + 1;
  };
});