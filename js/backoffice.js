async function onFormSubmit(event) {  //Asynchronous function declaration, to be used inline in HTML
    event.preventDefault(); // Default form behavior is to refresh the page; that way, the data you input and you try to submit by clicking the button "Submit", get lost. Hence,
    // preventDefault() behavior - this is a built in js function.

    const newMovie = {  //This is an object to be used later on, with the keys being the ones found in the API objects
      name: document.querySelector("#name").value,
      description: document.querySelector("#description").value,
      category: document.querySelector("#genre").value,
      imageUrl: document.querySelector("#imageUrl").value,
    };

    const options = { // The declaration of the 2nd parameter, to be used in a future fetch
      method: "POST",
      body: JSON.stringify(newMovie), // This converts the newMovie into json, to easily be implemented to the API, when needed
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZkMTAyNGQ0YmUzZDAwMTU4NDYwZjgiLCJpYXQiOjE2NjgwOTE5NDEsImV4cCI6MTY2OTMwMTU0MX0.et2nZ7DRAkHpdooekdUVz7Z5CeAw4TyIwGYk1teIv-A",
        "Content-Type": "application/json",
      },
    };

    try { //The try/catch is totally optional, it's for error handling.
      const endpoint = "https://striveschool-api.herokuapp.com/api/movies/";
      const response = await fetch(endpoint, options);
      if (response.ok) { //This is to better the UX, since without an alert, we complete the actions and don't know for certain if the change was made, or not
        alert("Your movie has been added!");
      } else {
        throw new Error("Error! Try again in one minute.");
      }
    } catch (error) {
      console.log(error);
    }
  }
  window.onload = async () => {
    const appointments = await getallMovies(); // Where is the getAllMovies function?
    renderAppointments(appointments); // Where is the renderAppointments function?
  };
