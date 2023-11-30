import {
  saveTask,
  getTasks,
  onGetPost
} from '../js/config.js'

const postForm = document.getElementById('post-form');
const postContainer = document.getElementById('post-container');
const carouselItems = document.querySelectorAll('.inner_card');


window.addEventListener('DOMContentLoaded', async () => {
  onGetPost((querySnapshot) => {
    let pintarPublicacion = '';

    const latestPosts = [];

    querySnapshot.forEach(doc => {
      const datos = doc.data();
      latestPosts.push({
        title: datos.title,
        imgUrl: datos.imgUrl
      });

      pintarPublicacion += `
        <div class="posts_content">
          <h3>${datos.title}</h3>
          <p>${datos.description}</p>
          <img class="fluid" src="${datos.imgUrl}">
        </div>
      `;
    });

    postContainer.innerHTML = pintarPublicacion;

    // Get the latest 6 posts
    const latestSixPosts = latestPosts.slice(0, 6);

    // Update carousel items with the latest 6 posts data
    carouselItems.forEach((carouselItem, index) => {
      const postData = latestSixPosts[index];

      // Append to the existing inner HTML content
      carouselItem.innerHTML += `
        <h3 class="carousel-content_title">${postData.title}</h3>
        <img class="fluid carousel_img" src="${postData.imgUrl}">
      `;
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
