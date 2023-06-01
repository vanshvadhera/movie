import React, { useState} from "react";
import { Container } from "react-bootstrap";
import "../aboutMovie/AboutMovie.css";
import { Button } from "react-bootstrap";
import BookingModal from "../BookingModal/BookingModal";
import { Link } from "react-router-dom";

const AboutMovie = () => {
  const [showForm, setShowForm] = useState(false);
  const movieInfo = JSON.parse(localStorage.getItem("MovieInfo"));

  const handleBook = () => {
    setShowForm(true);
  };
  const handleClick = () => {
    localStorage.removeItem("MovieInfo");
  }
  return (
    <Container>
      <center>
        <h1 className="m-3"> {movieInfo?.show.name}</h1>
      </center>
      <div className="d-md-flex mt-5">
        <div>
          <img
            className="imgSize"
            src={movieInfo?.show.image.original}
            alt=""
          />
        </div>
        <div>
          <center>
            <h4>{movieInfo?.show.name}</h4>
          </center>
          <p>{movieInfo?.show.summary.replace(/<[^>]+>/g, "")}</p>
          <div className="d-md-flex justify-content-between">
            <h6>Language: {movieInfo?.show.language}</h6>
            <h6>Rating: {movieInfo?.show.rating.average}</h6>
          </div>
          <div className="d-md-flex justify-content-between ">
            <h6>Runtime: {movieInfo?.show.runtime} mins</h6>
            <h6>Premiered: {movieInfo?.show.premiered}</h6>
          </div>
          <p className="">
            <b>Country of Origin: </b>
            {movieInfo?.show.network.country.name}{" "}
            {movieInfo?.show.network.country.code}{" "}
          </p>
          <center>
            <Button onClick={handleBook} variant="outline-success">
              Book Tickets
            </Button>
            <Link to="/">
              <Button className="ms-4" onClick={handleClick} variant="outline-secondary">
                Return
              </Button>
            </Link>
          </center>
        </div>
      </div>
      <BookingModal show={showForm} setShow={setShowForm} />
    </Container>
  );
};

export default AboutMovie;
