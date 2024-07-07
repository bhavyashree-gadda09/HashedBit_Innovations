import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './BookingConfirmation.css'; 

const Confirmation = () => {
  const { id, bookingId } = useParams();
  const location = useLocation();
  const { name, email, mobile } = location.state;

  return (
    <div className="confirmation-container">
      <h2>Booking Confirmed!</h2>
      <p>Booking ID: {bookingId}</p>
      <p>Movie ID: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Mobile: {mobile}</p>
    </div>
  );
};

export default Confirmation;
