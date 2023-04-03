document.addEventListener('DOMContentLoaded', function() {
    // Carga el encabezado en la página
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'header.html', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var header = xhr.responseText;
        document.querySelector('header').innerHTML = header;
      }
    };
    xhr.send();
  });
  
  