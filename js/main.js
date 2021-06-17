function load() {
    alert("Hold Up");
    // $(document).ready(function(e) {
    // e.preventDefault()
    //     $("#loading").html(`<img src="/assets/sunsin4.gif">`);
    getAllMovies();
}
load();

function domSomething(data) {
    $('#movies').html('');
    renderMovies(data);
}

function addMovies() {
    // don't submit the form, we just want to update the data
    let title = document.querySelector('#movieName').value;
    let actor = document.querySelector('#year').value;
    let genre = document.querySelector('#genre').value;
    let director = document.querySelector('#quote').value;
    let quote = document.querySelector('#cast').value;
    let year = document.querySelector('#director').value;
    let poster = document.querySelector('#poster').value;

    let newMovie = {
        title: title,
        year: year,
        genre: genre,
        director: director,
        quote: quote,
        actor: actor,
        // poster:,
    };
    console.log(newMovie);
    postMovies(newMovie);
}


function renderMovies(data) {
    for (let i = 0; i < data.length; i++) {
        let poster = data[i].poster;
        let movieName = data[i].title;
        let genre = data[i].genre;
        let director = data[i].director;
        let actors = data[i].actors;
        let year = data[i].year;
        let quote = data[i].quote;


        $('#movies').append(`



    <div class="card  col-4 mx-4 mb-4">
    <img src="${poster}" class="card-img-top-fluid">
    <div class="card-block">
    <h5 class="card-header">${movieName}</h5><br>
    </div>
    <ul class="list-group list-group-flush"
    <li class="list-group-item">Genre: ${genre}</li>
    <li class="list-group-item">Director: ${director}</li>
    <li class="list-group-item">Cast: ${actors}</li>
    <li class="list-group-item">"${quote}"</li>
    <li class="list-group-item">Year: ${year}</li>
    </ul>
</div>

`)
    }
}