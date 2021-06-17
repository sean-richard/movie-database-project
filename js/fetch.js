function getAllMovies(){
    fetch(`https://wide-celestial-board.glitch.me/movies`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            domSomething(data);
        })
        .catch(error => console.error(error));
}

function postMovies(data) {
    fetch('https://wide-celestial-board.glitch.me/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(
            getAllMovies
        )
        .catch((error) => {
            console.error('Error:', error);
        });

}

