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
        let id = data[i].id;




        $('#movies').append(`

     <div id="editBtn" class="card  col-4 mx-4 mb-4">
           <div class="circle-btn">
                <button data-id="${id}" name="edit" type="submit" class="btn btn-danger btn-circle btn-sm deleteBtn" onclick="deleteBtn(this)">X</button>
</div>
    <img src="${poster}" class="card-img-top-fluid">
    <div class="card-block">
    <h5 class="card-header" ondblclick="makeEdit(this)" onblur="makeReadOnly(this)">${movieName} (${year})</h5><br>
    </div>
    <ul class="list-group list-group-flush"
    <li  class="group-item" ondblclick="makeEdit(this)" onblur="makeReadOnly(this)">Genre: ${genre}</li>
    <li  class="group-item" ondblclick="makeEdit(this)" onblur="makeReadOnly(this)">Director: ${director}</li>
    <li class="group-item" ondblclick="makeEdit(this)" onblur="makeReadOnly(this)" >Cast: ${actors}</li>
    <li class="group-item" ondblclick="makeEdit(this)" onblur="makeReadOnly(this)" >"${quote}"</li>
    <li class="group-item" ondblclick="makeEdit(this)" onblur="makeReadOnly(this)" >Rating </li>
    </ul>
</div>

`)
    }
}

function makeEdit(e){
    e.contentEditable = true;

    //Ajax POST request here, save e.html
}

function makeReadOnly(e){
    e.contentEditable = false;
}

function deleteBtn(e){
    let movieId = e.getAttribute('data-id');
    console.log(movieId);
    deleteMovie(movieId);
}

// $(document).ready(function() {
//     $(.deleteBtn)
// }