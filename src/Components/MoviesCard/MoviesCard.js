import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MoviesCard = (props) => {
  const handleClick = () => {
    // props.setShow(true);
    localStorage.setItem("MovieInfo", JSON.stringify(props.movieinfo));
  };

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.image.medium} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.summary.replace(/<[^>]+>/g, "")}</p>
          <center>
            <Link to="/aboutMovie">
              <Button variant="outline-info" onClick={handleClick}>
                BookMovie
              </Button>
            </Link>
          </center>
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;
