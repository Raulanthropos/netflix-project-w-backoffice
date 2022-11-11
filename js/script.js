const comedyBtn = document.getElementById("comedy-btn");
const horrorBtn = document.getElementById("horror-btn");
const musicBtn = document.getElementById("music-btn");
let selectedGenre = document.getElementById("selected-genre");
const movieCoverGenre = document.querySelectorAll(".movie-cover-genre");
const hiddenPrompts = document.querySelectorAll(".d-none");

const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjY1N2Q0YmUzZDAwMTU4NDYwMGQiLCJpYXQiOjE2NjgwODUzMzUsImV4cCI6MTY2OTI5NDkzNX0.Gr11ODEGnFQLDHzWp7kIa-hafK6XaSswM75muzNXr5o",
    },
  };

const getMovieGenres = async () =>
{
    const fetchGenres = await fetch("https://striveschool-api.herokuapp.com/api/movies", options);
    const genresData = await fetchGenres.json();
    console.log(genresData, genresData[0], genresData[1], genresData[2]);
}

const getHorrorMovies = async () => {
    const fetchTheHorror = await fetch("https://striveschool-api.herokuapp.com/api/movies/horror", options);
    const horrorData = await fetchTheHorror.json();
    const categoryData = horrorData.map(data => data.category);
    const imgData = horrorData.map(data => data.imageUrl);
    console.log(imgData);
    selectedGenre.innerText = categoryData[1];
    movieCoverGenre.forEach(img => {
        img.innerHTML = `<img class="movie-cover movie-cover-genre" src="${imgData}">`
    })
    hiddenPrompts.forEach(prompt => {
        prompt.classList.remove("d-none");
    })
    console.log(horrorData);
}

const getComedyMovies = async () => {
    const fetchTheLaughter = await fetch("https://striveschool-api.herokuapp.com/api/movies/comedy", options);
    const laughData = await fetchTheLaughter.json();
    const categoryData = laughData.map(data => data.category);
    const imgData = laughData.map(data => data.imageUrl);
    console.log(imgData);
    selectedGenre.innerText = categoryData[0];
    movieCoverGenre.forEach(img => {
        img.innerHTML = `<img class="movie-cover movie-cover-genre" src="${imgData}">`
    })
    hiddenPrompts.forEach(prompt => {
        prompt.classList.remove("d-none");
    })
}

const getMusicMovies = async () => {
    const fetchTheMusic = await fetch("https://striveschool-api.herokuapp.com/api/movies/music", options);
    const musicData = await fetchTheMusic.json();
    const categoryData = musicData.map(data => data.category);
    const nameData = musicData.map(data => data.name);
    const descriptionData = musicData.map(data => data.description);
    const imgData = musicData.map(data => data.imageUrl);
    console.log(imgData);
    selectedGenre.innerText = categoryData[0];
    movieCoverGenre.forEach(img => {
        imgData.forEach(data => {
        img.innerHTML = `<img class="movie-cover movie-cover-genre" src="${data}">`
    })})
    hiddenPrompts.forEach(prompt => {
        prompt.classList.remove("d-none");
    })

}
musicBtn.addEventListener('click', getMusicMovies);
horrorBtn.addEventListener('click', getHorrorMovies);
comedyBtn.addEventListener('click', getComedyMovies);
