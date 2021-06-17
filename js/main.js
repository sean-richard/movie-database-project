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
    showMovie(data);
}

function showMovie(data) {
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