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
    let actor = document.querySelector('#actors').value;
    let genre = document.querySelector('#genre').value;
    let director = document.querySelector('#director').value;
    let quote = document.querySelector('#quote').value;
    let year = document.querySelector('#year').value;
    // let poster = document.querySelector('#poster').value;

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
                <button data-id="${id}" name="edit" type="submit" class="btn btn-danger btn-circle btn-sm deleteBtn" onclick="deleteBtn(event)">X</button>
</div>
    <img src="${poster}" class="card-img-top-fluid">
    <div class="card-block">
    <h5 class="card-header" ondblclick="makeEdit(event)" onblur="makeReadOnly(event)">${movieName} (${year})</h5><br>
    </div>
    <ul class="list-group list-group-flush"
    <li  class="group-item" data-id="${id}" data-atr="genre" ondblclick="makeEdit(event)" onblur="makeReadOnly(event)">Genre: ${genre}</li>
    <li  class="group-item" data-id="${id}" data-atr="director" ondblclick="makeEdit(event)" onblur="makeReadOnly(event)">Director: ${director}</li>
    <li class="group-item" data-id="${id}" data-atr="actors" ondblclick="makeEdit(event)" onblur="makeReadOnly(event)" >Cast: ${actors}</li>
    <li class="group-item" data-id="${id}" data-atr="quote" ondblclick="makeEdit(event)" onblur="makeReadOnly(event)" >"${quote}"</li>
    <li class="group-item" data-id="${id}" data-atr="rating" ondblclick="makeEdit(event)" onblur="makeReadOnly(event)" >Rating </li>
    </ul>
</div>

`)
    }
}

function makeEdit(e){
    e.target.contentEditable = true;

    //Ajax POST request here, save e.html
}

function makeReadOnly(e){
    e.target.contentEditable = false;
   let changeData = e.target.innerText.split(':');
   if (changeData.length > 1){
       changeData = changeData[1]
   }else{
       changeData = changeData[0];
   }
   let targetAtr = e.target.getAttribute('data-atr');
   let createObj = {};
   createObj[targetAtr] = changeData;
   let changedId = e.target.getAttribute('data-id');
        editMovie(createObj, changedId);
}

function deleteBtn(e){
    let movieId = e.target.getAttribute('data-id');
    console.log(movieId);
    deleteMovie(movieId);
}

// $(document).ready(function() {
//     $(.deleteBtn)
// }