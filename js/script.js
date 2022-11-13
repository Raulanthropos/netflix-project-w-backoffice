const comedyBtn = document.getElementById("comedy-btn");
const horrorBtn = document.getElementById("horror-btn");
const musicBtn = document.getElementById("music-btn");
let selectedGenre = document.getElementById("selected-genre");
const movieCoverGenre = document.querySelectorAll(".movie-cover-genre");
const hiddenPrompts = document.querySelectorAll(".d-none");
const horrorUrl = "https://striveschool-api.herokuapp.com/api/movies/horror";
const comedyUrl = "https://striveschool-api.herokuapp.com/api/movies/comedy";
const musicUrl = "https://striveschool-api.herokuapp.com/api/movies/music";
const modalWindow = document.querySelectorAll(".modal");
const closeModal = document.querySelector(".close-modal");
console.log(movieCoverGenre);
const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjY1N2Q0YmUzZDAwMTU4NDYwMGQiLCJpYXQiOjE2NjgwODUzMzUsImV4cCI6MTY2OTI5NDkzNX0.Gr11ODEGnFQLDHzWp7kIa-hafK6XaSswM75muzNXr5o",
  },
};

const getHorrorMovies = async () => {
  const fetchTheHorror = await fetch(
    horrorUrl, options);
  const horrorData = await fetchTheHorror.json();
  console.log(horrorData);
  const categoryData = horrorData.map((data) => data.category);
  const imgData = horrorData.map((data) => data.imageUrl);
  selectedGenre.innerText = categoryData[1];
  for (let i = 0; i < imgData.length; i++) {
    movieCoverGenre[i].innerHTML = `<img class="movie-cover movie-cover-genre h-100" src="${imgData[i]}">`;
  }
  hiddenPrompts.forEach((prompt) => {
    prompt.classList.remove("d-none");
  });
};

const getComedyMovies = async () => {
  const fetchTheLaughter = await fetch(
    comedyUrl,
    options
  );
  const laughData = await fetchTheLaughter.json();
  const categoryData = laughData.map((data) => data.category);
  const imgData = laughData.map((data) => data.imageUrl);
  selectedGenre.innerText = categoryData[0];
  for (let i = 0; i < imgData.length; i++) {
    movieCoverGenre[i].innerHTML = `<img class="movie-cover movie-cover-genre h-100" src="${imgData[i]}">`;
  }
  hiddenPrompts.forEach((prompt) => {
    prompt.classList.remove("d-none");
  });
};

const getMusicMovies = async () => {
  const fetchTheMusic = await fetch(
    musicUrl,
    options
  );
  const musicData = await fetchTheMusic.json();
  const categoryData = musicData.map((data) => data.category);
  const nameData = musicData.map((data) => data.name);
  const descriptionData = musicData.map((data) => data.description);
  const imgData = musicData.map((data) => data.imageUrl);
  selectedGenre.innerText = categoryData[0];
  for (let i = 0; i < imgData.length; i++) {
    movieCoverGenre[i].innerHTML = `<img class="movie-cover movie-cover-genre h-100 onclick=getDetails()" src="${imgData[i]}">`;
  }
  hiddenPrompts.forEach((prompt) => {
    prompt.classList.remove("d-none");
  });
};

const details = async  () => {
    if (selectedGenre.innerText === "horror") {
        const fetchTheHorror = await fetch(horrorUrl, options);
          const horrorData = await fetchTheHorror.json();
          const categoryData = horrorData.map((data) => data.category);
          const nameData = horrorData.map((data) => data.name);
          const descriptionData = horrorData.map((data) => data.description);
          const imgData = horrorData.map((data) => data.imageUrl);
          const urlData = horrorData.map((data) => data._id);
          for (let i=0; i<horrorData.length; i++) {
            modalWindow.forEach(modal => {
          modal.innerHTML = `<div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header d-flex">
              <h5 class="modal-title">${nameData[i]}</h5>
              <h5 class="modal-subtitle col-12">${categoryData[i]}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <img class="movie-cover movie-cover-genre h-100 onclick=getDetails()" src="${imgData[i]}">
              <p>${descriptionData[i]}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <a class= "col btn btn-success" href="backoffice.html?movieId=${urlData[i]}">Edit</a>
            </div>
          </div>
        </div>`
        modal.classList.add("popup_active");
        console.log(modal);
      })
          }
    } else if (selectedGenre.innerText === "comedy") {
        const fetchTheComedy = await fetch(comedyUrl, options);
        const comedyData = await fetchTheComedy.json();
        const categoryData = comedyData.map((data) => data.category);
        const nameData = comedyData.map((data) => data.name);
        const descriptionData = comedyData.map((data) => data.description);
        const imgData = comedyData.map((data) => data.imageUrl);
        const urlData = comedyData.map((data) => data._id);
        for (let i=0; i<comedyData.length; i++) {
          modalWindow.innerHTML = `<div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header d-flex">
              <h5 class="modal-title">${nameData[i]}</h5>
              <h5 class="modal-subtitle col-12">${categoryData[i]}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <img class="movie-cover movie-cover-genre h-100 onclick=getDetails()" src="${imgData[i]}">
              <p>${descriptionData[i]}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <a class= "col btn btn-success" href="backoffice.html?movieId=${urlData[i]}">Edit</a>
            </div>
          </div>
        </div>`
        modalWindow.classList.add("popup_active");
    }} else {
        const fetchTheMusic = await fetch(musicUrl, options);
        const musicData = await fetchTheMusic.json();
        const categoryData = musicData.map((data) => data.category);
        const nameData = musicData.map((data) => data.name);
        const descriptionData = musicData.map((data) => data.description);
        const imgData = musicData.map((data) => data.imageUrl);
        const urlData = musicData.map((data) => data._id);
        for (let i=0; i<musicData.length; i++) {
          modalWindow[i].innerHTML = `<div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header d-flex">
              <h5 class="modal-title col-12">${nameData[i]}</h5>
              <h6 class="modal-subtitle col-12">${categoryData[i]}</h6>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <img class="movie-cover movie-cover-genre h-100 onclick=getDetails()" src="${imgData[i]}">
              <p>${descriptionData[i]}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <a class= "col btn btn-success" href="backoffice.html?movieId=${urlData[i]}">Edit</a>
            </div>
          </div>
        </div>`
        modalWindow[i].classList.add("popup_active");
    }
}
}
musicBtn.addEventListener("click", getMusicMovies);
horrorBtn.addEventListener("click", getHorrorMovies);
comedyBtn.addEventListener("click", getComedyMovies);

for (let i=0; i<movieCoverGenre.length; i++) {
    movieCoverGenre[i].addEventListener('click', details);
}

const closePopup = () => {
    modalWindow.innerHTML = ``;
    console.log(modalWindow);
  };


  closeModal.addEventListener('click', closePopup);