const moviesUrl = "https://striveschool-api.herokuapp.com/api/movies/";
const horrorMoviesUrl = "https://striveschool-api.herokuapp.com/api/movies/horror";
const comedyMoviesUrl = "https://striveschool-api.herokuapp.com/api/movies/comedy";
const musicMoviesUrl = "https://striveschool-api.herokuapp.com/api/movies/music";



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
    await getallHorrorMovies();
    await getallMusicMovies();
    await getallComedyMovies();
  };
