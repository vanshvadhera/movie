import React, { useEffect, useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import MoviesCard from "../MoviesCard/MoviesCard";

const LandingPage = () => {
  const Logininfo = JSON.parse(localStorage.getItem("LoginInfo"));
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data);
      });
  }, []);
  return (
    <div>
      {!Logininfo && <LoginForm />}
      {Logininfo && (
        <div className="m-4">
          <center>
            <h1>MOVIE TIME</h1>
          </center>
          <div className="row">
            {movieData?.map((movie) => {
              return (
                <div className="col-md-3 m-5">
                  <MoviesCard
                    key={movie.show.id}
                    id={movie.show.id}
                    name={movie.show.name}
                    image={movie.show.image}
                    summary={movie.show.summary.slice(0, 100) + "..."}
                    movieinfo={movie}
                    // setShow={setShow}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
