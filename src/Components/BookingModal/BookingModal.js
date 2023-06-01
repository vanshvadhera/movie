import { Modal, Button, Form } from "react-bootstrap";
import React, { useRef } from "react";
import { Link } from "react-router-dom";


const BookingModal = (props) => {
  const movieInfo = JSON.parse(localStorage.getItem("MovieInfo"));
  const userDetails = JSON.parse(localStorage.getItem("LoginInfo"));
  const formRef = useRef();
  const handleClick = () => {
    props.setShow(false);
    localStorage.removeItem("MovieInfo");

  };
  const handleSubmite = (e) => {
    e.preventDefault();
    const movieName = movieInfo?.show.name;
    const name = userDetails?.email;
    const movieTime = movieInfo?.show.schedule.time;
    const movieDate = formRef.current.date.value;
    const phoneNumber = formRef.current.phoneNumber.value;
    const email = formRef.current.email.value;
    const noOfTickets = formRef.current.noOfTickets.value;
    if (
      movieDate === "" ||
      phoneNumber === "" ||
      email === "" ||
      noOfTickets === ""
    ) {
      alert("Please fill all the details");
      return;
    }
    const bookings = {
      movieName,
      name,
      movieTime,
      movieDate,
      phoneNumber,
      email,
      noOfTickets,
    };
    localStorage.setItem("bookings", JSON.stringify(bookings));
    props.setShow(false);
    alert("Booking Successful");
  };

  return (
    <Modal
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {movieInfo?.show.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form ref={formRef}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Movie Name</Form.Label>
            <Form.Control
              type="text"
              name="movieName"
              defaultValue={movieInfo?.show.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              defaultValue={userDetails.email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Phone Number</Form.Label>
            <Form.Control
              type="number"
              name="phoneNumber"
              placeholder="Enter Phone Number"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Number of Tickets</Form.Label>
            <Form.Control
              name="noOfTickets"
              type="number"
              placeholder="Enter Number of Tickets"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Date</Form.Label>
            <Form.Control type="date" name="date" placeholder="Enter Date" />
          </Form.Group>
          <center>
            <Button
              className="m-3"
              onClick={handleSubmite}
              variant="outline-success"
            >
              Confirm Booking
            </Button>
          </center>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/" ><Button onClick={handleClick}>Close</Button></Link>
      </Modal.Footer>
    </Modal>
  );
};

export default BookingModal;
