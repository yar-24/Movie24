import axios from "axios";

const main = () => {
  const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
  });

  const getMovies = async () => {
    try {
      const response = await axiosInstance.get("/discover/movie/", {
        params: {
          api_key: "817fc605686c06a1768631083303bde5",
        },
      });
      if (response.error) {
        showResponseMessage("Berhasil memanggil data");
      } else {
        renderAllmovies(response.data.results);
      }
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const getMovie = async (movieId) => {
    try{
      const response = await axiosInstance.get(`/movie/${movieId}`,{
        params: {
          api_key: "817fc605686c06a1768631083303bde5",
        },
      })
      if (response.error) {
        showResponseMessage("Berhasil memanggil data");
      } else {
        renderMovie(response.data);
      }
    }catch(error){
      showResponseMessage(error);
    }
  }

  const renderAllmovies = (data) => {
    const listmovieElement = document.querySelector("#listmovie");
    listmovieElement.innerHTML = "<h3>List Movies</h3>";

    data.map((movie) => {
      listmovieElement.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
          <div class="card" style="background-color:#181a1b">
            <div class="card-body" style="border: 2px solid #333;" >
              <h3>${movie.title}</h3></h5>
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="img-thumbnail" alt="...">
              <span class="d-flex mt-2 justify-content-between"> <p>Popularity : ${movie.popularity}</p>
              <p>release : ${movie.release_date}</p></span>
              <button type="button" class="btn btn-primary detail-movie" id=${movie.id}>lihat detail</button>
            </div>
          </div>
        </div>
      `;
    });

    const detail = document.querySelectorAll('.detail-movie');
    detail.forEach(button => {
      button.addEventListener('click', event => {
        const movieId = event.target.id;
        getMovie(movieId);
      });
    });
  };

  const renderMovie = (data) => {
    const listmovieElement = document.querySelector("#listmovie");
    listmovieElement.innerHTML = "";

      listmovieElement.innerHTML += `
        <div class="col-lg-12 col-md-6 col-sm-1" style="margin-top: 12px;">
          <div class="card" style="background-color:#181a1b;">
            <div class="card-body" style="border: 2px solid #333; display:flex; flex-direction: column; justify-content: center; align-items:center;" >
              <h3>${data.title}</h3></h5>
              <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" class="img-thumbnail" alt="...">
              <div>
              <p>Description :<br> ${data.overview}</p>
              <h5 >genre: </h5>
              ${data.genres.map((genre)=>(
                listmovieElement.innerHTML += `
                <p style="color: green"><br>${genre.name}</p>
                `
                ))}
                
                <p>release : ${data.release_date}</p>
                <p>status : ${data.status}</p>
                <p>tagline : ${data.tagline}</p>
                </div>
                <span><a href="${data.homepage}">watch</a></span>
            </div>
          </div>
        </div>
    `
  };


  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };

  document.addEventListener("DOMContentLoaded", () => {
    getMovies();
  });
}

export default main;
