setTimeout(() => {
    getAllMovies()
}, 1200);

setTimeout(() => {
    $('#addMovies').append(`<form style="width: 75%; margin-top: 10em;">
                <div class="form-group row">
                    <label class="col-4 col-form-label" for="movieName">Movie Name</label>
                    <div class="col-8">
                        <input id="movieName" name="movieName" type="text" class="form-control" placeholder="Movie Name">
                    </div>
                </div>
                <div class="form-group row"> 
                    <label for="year" class="col-4 col-form-label">Year</label>
                    <div class="col-8">
                        <input id="year" name="year" type="text" class="form-control" placeholder="Year Released">
                    </div>
                </div>
                <div class="form-group row"> 
                    <label for="poster" class="col-4 col-form-label">Poster</label>
                    <div class="col-8">
                        <input id="poster" name="poster" type="text" class="form-control" placeholder="Movie Poster">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="genre" class="col-4 col-form-label">Genre</label>
                    <div class="col-8">
                        <input id="genre" name="genre" type="text" class="form-control" placeholder="Genre">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="quote" class="col-4 col-form-label">Favorite Quote</label>
                    <div class="col-8">
                        <input id="quote" name="quote" type="text" class="form-control" placeholder="Favorite Quote">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="actors" class="col-4 col-form-label">Actors</label>
                    <div class="col-8">
                        <input id="actors" name="actors" type="text" class="form-control" placeholder="Cast">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="director" class="col-4 col-form-label">Director</label>
                    <div class="col-8">
                        <input id="director" name="text4" type="text" required="required" class="form-control" placeholder="Director">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="offset-4 col-8">
                        <button name="submit" type="button" class="btn btn-primary" onclick="addMovies()">Add a Movie</button>
                    </div>
                </div>
            </form>`)
}, 1400);

function domSomething(data) {
    $('#movies').html('');
    renderMovies(data);
}

function addMovies() {
    // don't submit the form, we just want to update the data
    let title = document.querySelector('#movieName').value;
    let actor = document.querySelector('#actors').value;
    let genre = document.querySelector('#genre').value;
    let director = document.querySelector('#director').value;
    let quote = document.querySelector('#quote').value;
    let year = document.querySelector('#year').value;
    let poster = document.querySelector('#poster').value;

    let newMovie = {
        title: title,
        year: year,
        genre: genre,
        director: director,
        quote: quote,
        actor: actor,
        poster: poster,
    };
    console.log(newMovie);
    postMovies(newMovie);
}


function renderMovies(data) {
    $('.giffy').css('display', 'none');
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
            <div class="card h-100 movie-card">
                    <div class="circle-btn">
                        <button data-id="${id}" name="edit" type="submit"
                                class="btn btn-danger btn-circle btn-sm deleteBtn" onclick="promptMe()">X
                        </button>
                    </div> <!--delete button-->
                    <img src="${poster}" class="card-img-top-fluid"  ondblclick="makeEdit(event)" onblur="makeReadOnly(event)">
                    <div class="card-body">
                        <h5 class="card-header" ondblclick="makeEdit(event)" onblur="makeReadOnly(event)">${movieName}
                            (${year})</h5><br>
                    
                    <ul class="list-group list-group-flush">
                    <li class="group-item" data-id="${id}" data-atr="genre" ondblclick="makeEdit(event)"
                        onblur="makeReadOnly(event)">Genre: ${genre}
                    </li>
                    <li class="group-item" data-id="${id}" data-atr="director" ondblclick="makeEdit(event)"
                        onblur="makeReadOnly(event)">Director: ${director}
                    </li>
                    <li class="group-item" data-id="${id}" data-atr="actors" ondblclick="makeEdit(event)"
                        onblur="makeReadOnly(event)">Cast: ${actors}
                    </li>
                    <li class="group-item" data-id="${id}" data-atr="quote" ondblclick="makeEdit(event)"
                        onblur="makeReadOnly(event)">"${quote}"
                    </li>
                    <li class="group-item" data-id="${id}" data-atr="rating" ondblclick="makeEdit(event)"
                        onblur="makeReadOnly(event)">Rating
                    </li>
                    </ul>
            </div> <!--card block-->
            </div> <!--card -->
           
`)
    }
}

function promptMe() {
    let userKnow = confirm("Are you sure you want to delete this movie?");
    if (userKnow === true) {
        deleteBtn(event);
    } else {
        return alert("Operation canceled");
    }
}

function makeEdit(e) {
    e.target.contentEditable = true;
    e.style.border = "1px solid #000"
    //Ajax POST request here, save e.html
}

function makeReadOnly(e) {
    e.target.contentEditable = false;
    let changeData = e.target.innerText.split(':');
    if (changeData.length > 1) {
        changeData = changeData[1]
    } else {
        changeData = changeData[0];
    }
    let targetAtr = e.target.getAttribute('data-atr');
    let createObj = {};
    createObj[targetAtr] = changeData;
    let changedId = e.target.getAttribute('data-id');
    editMovie(createObj, changedId);
}

function deleteBtn(e) {
    let movieId = e.target.getAttribute('data-id');
    console.log(movieId);
    deleteMovie(movieId);
}




