// Agrega un evento de clic al ícono de comentar para mostrar el modal
document.getElementById('comentar-icon').addEventListener('click', function () {
    $('#comentarModal').modal('show');
  });
    // Mostrar y ocultar el modal
    document.getElementById('toggle-publish').addEventListener('click', function () {
        document.getElementById('publish-modal').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
      });
  
      // Ocultar el modal al hacer clic fuera del contenido
      document.getElementById('overlay').addEventListener('click', function () {
        document.getElementById('publish-modal').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
      });

// Sección de publicar
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggle-publish');
    var publishSectionContainer = document.getElementById('publish-section-container');

    toggleButton.addEventListener('click', function () {
        // Cargar la sección de publicación cuando se hace clic en el botón
        loadPublishSection();
    });

    function loadPublishSection() {
        // Utiliza AJAX para cargar el contenido de publish-section.html
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'publish-section.html', true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Inserta el contenido en el contenedor
                publishSectionContainer.innerHTML = xhr.responseText;
            }
        };

        xhr.send();
    }
});

// Función de los botones guadar y publicar
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("save-button").addEventListener("click", function () {
        alert("Guardado con éxito");
    });
  
    document.getElementById("publish-button").addEventListener("click", function () {
        alert("Publicado con éxito");
    });
  });