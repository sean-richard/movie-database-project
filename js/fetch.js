function getAllMovies(){
    fetch(`https://wide-celestial-board.glitch.me/movies`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error(error));
}