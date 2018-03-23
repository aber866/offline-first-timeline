//Cuando se actualiza la pagina o se va a una diferente se ejecuta el fetch
self.addEventListener('fetch', function(event) {
    event.respondWith(
        //Siempre responde con un párrafo
        /* new Response('<p class="a-winner-is-me">Hello World!</p>', {
            headers: {'Content-Type': 'text/html'}
        }) */
        //Siempre responde con una imagen
        /* fetch('/imgs/dr-evil.gif') */
        fetch(event.request).then(function(response) {
            if (response.status === 404) {
              return new Response("Not found!");
            }
            return response;
        }).catch(function() {
            return new Response("Uh oh, that totally failed!");
        })
    );
});