// API key from TMBD
const api = "api_key=229df96d9cd7e64b815fad2f3de2890d";
// base URL of the site
const BaseURL = "https://api.themoviedb.org/3";

const BannerURL = "https://image.tmdb.org/t/p/original";
const ImgURL = "https://image.tmdb.org/t/p/w300"; //change width here

//requestd for Movies data
const requests ={

    fetchTrending: `${BaseURL}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOriginals: `${BaseURL}/discover/tv?${api}&with_networks=213`,
    fetchFamilyMovies: `${BaseURL}/discover/tv?${api}&with_genres=10751`,
    fetchComedyMovies: `${BaseURL}/discover/tv?${api}&with_genres=35`,
    fetchCrimeMovies: `${BaseURL}/discover/tv?${api}&with_genres=80`,
    fetchRomanceMovies: `${BaseURL}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${BaseURL}/discover/movie?${api}&with_genres=99`,
    fetchAnimeMovies: `${BaseURL}/discover/movie?${api}&with_genres=14`,
    fetchDramaMovies: `${BaseURL}/discover/movie?${api}&with_genres=18`,
    fetchMysteryMovies: `${BaseURL}/discover/movie?${api}&with_genres=9648`,

};

//used to truncate the string
function truncate(str , n){
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
//banner
fetch(requests.fetchNetflixOriginals)
  .then((res) => res.json())

  .then((data) => {
    console.log(data.results);
    // every refresh will change movie banner

    const setMovie = 
        data.results[Math.floor(Math.random() * data.results.length - 1)];

        var banner = document.getElementById("banner");
        var bannerTitle = document.getElementById("banner-title");
        var bannerDesc = document.getElementById("banner-description");

        /*console.log("bannerTitle element:", bannerTitle);
        console.log("bannerDesc element:", bannerDesc);

        console.log("setMovie name:", setMovie.name);
        console.log("setMovie overview:", setMovie.overview);*/

        banner.style.backgroundImage  =
          "url(" + BannerURL + setMovie.backdrop_path + ")";
        bannerDesc.innerHTML = truncate(setMovie.overview, 150);
        bannerTitle.innerHTML = setMovie.name;
        console.log("setMoviename");
  });

//****************Movies Row********************/
//originals
fetch(requests.fetchNetflixOriginals)
  .then((res) => res.json())


  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";
    row.classList.add("netflixrow");

    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row-title";
    title.innerHTML = "Netflix Orginals";

    row.appendChild(title);

    const rowPosters = document.createElement("div");
    rowPosters.className = "row-posters";
    row.appendChild(rowPosters);



    data.results.forEach(movie => {
      
      const poster = document.createElement("img");
      poster.className = "row-PosterLarge";

      var s = movie.name.replace(/\s+/g, "");

      poster.id = s;
      poster.src = ImgURL + movie.poster_path;
      rowPosters.appendChild(poster);
    });

  });

//toprated
fetch(requests.fetchTrending)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row-title";
    title.innerHTML = "Top Rated";
    row.appendChild(title);

    const rowPosters = document.createElement("div");
    rowPosters.className = "row-posters";
    row.appendChild(rowPosters);

    data.results.forEach((movie) => {

      const poster = document.createElement("img");
      poster.className = "row-PosterLarge";

      var s2 = movie.id;

      poster.id = s2;
      poster.src = ImgURL + movie.poster_path;
      rowPosters.appendChild(poster);
    });
  });


//family
fetch(requests.fetchFamilyMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row-title";
    title.innerHTML = "Family Movies";
    row.appendChild(title);

    const rowPosters = document.createElement("div");
    rowPosters.className = "row-posters";
    row.appendChild(rowPosters);

    data.results.forEach((movie) => {

      const poster = document.createElement("img");
      poster.className = "row-PosterLarge";

      var s2 = movie.id;

      poster.id = s2;
      poster.src = ImgURL + movie.poster_path;
      rowPosters.appendChild(poster);
    });
  });



//comedy
fetch(requests.fetchComedyMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row-title";
    title.innerHTML = "Comedy Movies";
    row.appendChild(title);

    const rowPosters = document.createElement("div");
    rowPosters.className = "row-posters";
    row.appendChild(rowPosters);

    data.results.forEach((movie) => {
      console.log(movie);

      const poster = document.createElement("img");
      poster.className = "row-PosterLarge";

      var s2 = movie.id;

      poster.id = s2;
      poster.src = ImgURL + movie.backdrop_path;
      rowPosters.appendChild(poster);
    });
  });

//documentries
fetch(requests.fetchDocumentaries)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row-title";
    title.innerHTML = "Documentaries Movies";
    row.appendChild(title);

    const rowPosters = document.createElement("div");
    rowPosters.className = "row-posters";
    row.appendChild(rowPosters);

    data.results.forEach((movie) => {
      console.log(movie);

      const poster = document.createElement("img");
      poster.className = "row-PosterLarge";

      var s2 = movie.id;

      poster.id = s2;
      poster.src = ImgURL + movie.backdrop_path;
      rowPosters.appendChild(poster);
    });
  });

//crime
fetch(requests.fetchCrimeMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row-title";
    title.innerHTML = "Crime Movies";
    row.appendChild(title);

    const rowPosters = document.createElement("div");
    rowPosters.className = "row-posters";
    row.appendChild(rowPosters);

    data.results.forEach((movie) => {
      console.log(movie);

      const poster = document.createElement("img");
      poster.className = "row-PosterLarge";

      var s2 = movie.id;

      poster.id = s2;
      poster.src = ImgURL + movie.backdrop_path;
      rowPosters.appendChild(poster);
    });
  });

//animation
fetch(requests.fetchAnimeMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row-title";
    title.innerHTML = "Animation";
    row.appendChild(title);

    const rowPosters = document.createElement("div");
    rowPosters.className = "row-posters";
    row.appendChild(rowPosters);

    data.results.forEach((movie) => {
      console.log(movie);

      const poster = document.createElement("img");
      poster.className = "row-PosterLarge";

      var s2 = movie.id;

      poster.id = s2;
      poster.src = ImgURL + movie.backdrop_path;
      rowPosters.appendChild(poster);
    });
  });

//romance
fetch(requests.fetchRomanceMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row-title";
    title.innerHTML = "Romance";
    row.appendChild(title);

    const rowPosters = document.createElement("div");
    rowPosters.className = "row-posters";
    row.appendChild(rowPosters);

    data.results.forEach((movie) => {
      console.log(movie);

      const poster = document.createElement("img");
      poster.className = "row-PosterLarge";

      var s2 = movie.id;

      poster.id = s2;
      poster.src = ImgURL + movie.backdrop_path;
      rowPosters.appendChild(poster);
    });
  });

//mystery
fetch(requests.fetchMysteryMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row-title";
    title.innerHTML = "Mystery";
    row.appendChild(title);

    const rowPosters = document.createElement("div");
    rowPosters.className = "row-posters";
    row.appendChild(rowPosters);

    data.results.forEach((movie) => {
      console.log(movie);

      const poster = document.createElement("img");
      poster.className = "row-PosterLarge";

      var s2 = movie.id;

      poster.id = s2;
      poster.src = ImgURL + movie.backdrop_path;
      rowPosters.appendChild(poster);
    });
  });


// drama
fetch(requests.fetchDramaMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row-title";
    title.innerHTML = "Drama";
    row.appendChild(title);

    const rowPosters = document.createElement("div");
    rowPosters.className = "row-posters";
    row.appendChild(rowPosters);

    data.results.forEach((movie) => {
      console.log(movie);

      const poster = document.createElement("img");
      poster.className = "row-PosterLarge";

      var s2 = movie.id;

      poster.id = s2;
      poster.src = ImgURL + movie.backdrop_path;
      rowPosters.appendChild(poster);
    });
  });
