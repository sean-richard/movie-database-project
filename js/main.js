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
    <div class="card col-4">
    <p class = "card-text text-break"><img src="${poster}"><br>
    ${movieName}<br>
    ${genre}<br>
    ${director}<br>
    ${actors}<br>
    "${quote}"<br>
    ${year}
</p>
</div>
    `)
    }
}