const moviesUrl = "https://striveschool-api.herokuapp.com/api/movies/";
const horrorMoviesUrl = "https://striveschool-api.herokuapp.com/api/movies/horror";
const comedyMoviesUrl = "https://striveschool-api.herokuapp.com/api/movies/comedy";
const musicMoviesUrl = "https://striveschool-api.herokuapp.com/api/movies/music";
const params = new URLSearchParams(window.location.search)
const movieId = params.get('movieId');
const editBtn = document.getElementById("edit-button");
const deleteBtn = document.getElementById("delete-button");
const submitBtn = document.getElementById("submit-button");


const getallHorrorMovies = async() => {
  const response = await fetch(horrorMoviesUrl, {headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjY1N2Q0YmUzZDAwMTU4NDYwMGQiLCJpYXQiOjE2NjgwODUzMzUsImV4cCI6MTY2OTI5NDkzNX0.Gr11ODEGnFQLDHzWp7kIa-hafK6XaSswM75muzNXr5o",
    "Content-Type": "application/json"
  }});
  const listOfMovies = response.json();
  console.log(listOfMovies);
}

const getallComedyMovies = async() => {
  const response = await fetch(comedyMoviesUrl, {headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjY1N2Q0YmUzZDAwMTU4NDYwMGQiLCJpYXQiOjE2NjgwODUzMzUsImV4cCI6MTY2OTI5NDkzNX0.Gr11ODEGnFQLDHzWp7kIa-hafK6XaSswM75muzNXr5o",
    "Content-Type": "application/json"
  }});
  const listOfMovies = response.json();
  console.log(listOfMovies);
}

const getallMusicMovies = async() => {
  const response = await fetch(musicMoviesUrl, {headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjY1N2Q0YmUzZDAwMTU4NDYwMGQiLCJpYXQiOjE2NjgwODUzMzUsImV4cCI6MTY2OTI5NDkzNX0.Gr11ODEGnFQLDHzWp7kIa-hafK6XaSswM75muzNXr5o",
    "Content-Type": "application/json"
  }});
  const listOfMovies = response.json();
  console.log(listOfMovies);
}

const onFormSubmit = async (event) => {
    event.preventDefault();

    const newMovie = {
      name: document.getElementById("e-name").value,
      description: document.getElementById("description").value,
      category: document.getElementById("category").value,
      imageUrl: document.getElementById("image-url").value,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjY1N2Q0YmUzZDAwMTU4NDYwMGQiLCJpYXQiOjE2NjgwODUzMzUsImV4cCI6MTY2OTI5NDkzNX0.Gr11ODEGnFQLDHzWp7kIa-hafK6XaSswM75muzNXr5o",
        "Content-Type": "application/json"
      },
    };

    try {
      const response = await fetch(moviesUrl, options);
      if (response.ok) {
        alert("Your movie was added successfully!");
        console.log(moviesUrl);
      } else {
        throw new Error("Error! Please try again!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  window.onload = async () => {
      const options = {
        headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjY1N2Q0YmUzZDAwMTU4NDYwMGQiLCJpYXQiOjE2NjgwODUzMzUsImV4cCI6MTY2OTI5NDkzNX0.Gr11ODEGnFQLDHzWp7kIa-hafK6XaSswM75muzNXr5o",
        "Content-Type": "application/json"
      }}

      const optionPut = {
        method: 'PUT',
        headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjY1N2Q0YmUzZDAwMTU4NDYwMGQiLCJpYXQiOjE2NjgwODUzMzUsImV4cCI6MTY2OTI5NDkzNX0.Gr11ODEGnFQLDHzWp7kIa-hafK6XaSswM75muzNXr5o",
        "Content-Type": "application/json"
      }}

      const optionDelete = {
        method: 'DELETE',
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjY1N2Q0YmUzZDAwMTU4NDYwMGQiLCJpYXQiOjE2NjgwODUzMzUsImV4cCI6MTY2OTI5NDkzNX0.Gr11ODEGnFQLDHzWp7kIa-hafK6XaSswM75muzNXr5o",
          "Content-Type": "application/json"
        }
      }

 if (movieId) {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/movies/id/${movieId}`, options);
      const movie = await response.json();
      submitBtn.classList.add("d-none");
      document.getElementById("e-name").value = movie.name;
      document.getElementById("description").value = movie.description;
      document.getElementById("category").value = movie.category;
      document.getElementById("image-url").value = movie.imageUrl;
    }


  const editMovie = async () => {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/movies/${movieId}`, optionPut);    
    if (response.ok) {
      alert("The movie was edited successfully!")
    } else {
      throw new Error("Error! Please try again!");
    }
  }

  const deleteMovie = async () => {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/movies/${movieId}`, optionDelete);
    if(confirm("Do you really want to delete this movie?")) {
      if (response.ok) {
        alert("The movie was deleted successfully! RIP...")
      } else {
        throw new Error("Error! Please try again!")
      }
    }
  }

  editBtn.addEventListener('click', editMovie);
  deleteBtn.addEventListener('click', deleteMovie);
} 