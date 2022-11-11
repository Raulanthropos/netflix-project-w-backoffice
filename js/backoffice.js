const params = new URLSearchParams(window.location.search);
console.log(params);
//   let movieId = params.get("horror");
//   console.log(movieId);

//   const submitButton = document.getElementById("submit-button");
// const options = {
//     method: movieId ? 'PUT' : 'POST',
//     // body: JSON.stringify(newEvent),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }

//   const getHorrorMovies = async () => {
//     const fetchTheHorror = await fetch(`https://striveschool-api.herokuapp.com/api/movies/${_id}`, options);
//     const horrorData = await fetchTheHorror.json();
//     const categoryData = horrorData.map(data => data.category);
//     selectedGenre.innerText = categoryData[1];
//     console.log(horrorData);
// }
