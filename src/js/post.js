import {
  saveTask,
  getTasks,
  onGetPost
} from '../js/config.js'

const postForm = document.getElementById('post-form');
const postContainer = document.getElementById('post-container');
const carouselItems = document.querySelectorAll('.carousel-item');

window.addEventListener('DOMContentLoaded', async () => {
  onGetPost((querySnapshot) => {
    let pintarPublicacion = '';

    querySnapshot.forEach(doc => {
      const datos = doc.data();
      pintarPublicacion += `
        <div class="posts_content" >
          <h3>${datos.title}</h3>
          <p>${datos.description}</p>      
          <img class="fluid" src="${datos.imgUrl}">
        </div>
      `;

      // Update carousel items with the latest post data
      carouselItems.forEach(carouselItem => {
        carouselItem.innerHTML = `
          <div class="Carousel_content-title" >
            <h3>${datos.title}</h3>     
            <img class="fluid carousel_img" src="${datos.imgUrl}">
          </div>
        `;
      });
    });

    postContainer.innerHTML = pintarPublicacion;
  });
});

postForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = postForm['post-title'];
  const description = postForm['post-description'];
  const imgUrl = postForm['post-image'];

  saveTask(title.value, description.value, imgUrl.value);

  // This function clears the form each time we submit
  postForm.reset();
  alert("Publicado");
});
