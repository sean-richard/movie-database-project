function getAllMovies(){
    fetch(`http://localhost:8080/movies`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            domSomething(data);
        })
        .catch(error => console.error(error));
}

function postMovies(data) {
    fetch('http://localhost:8080/movies', {
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


function deleteMovie(id) {
    fetch(`http://localhost:8080/movies`, {
        method: 'DELETE',
    })
        .then(_ =>
            getAllMovies()
        )
        .catch((error) => {
            console.error('Error:', error);
        });

}

function editMovie(data, id) {
    fetch(`http://localhost:8080/movies`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(_ =>
            getAllMovies()
        )
        .catch((error) => {
            console.error('Error:', error);
        });

}

function moviePoster(movieTitle) {
    fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=994a3469`)
        .then(response => response.json())
        .then(data => {
            console.log(data.Poster);
            return (data.Poster);

        })
        .catch(error => console.error(error));
}
