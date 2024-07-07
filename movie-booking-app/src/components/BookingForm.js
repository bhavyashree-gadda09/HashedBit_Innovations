import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './BookingForm.css'; 

const BookingForm = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = Math.floor(Math.random() * 100000);
    navigate(`/confirmation/${id}/${bookingId}`, { state: { name, email, mobile } });
  };

  return (
    <div className="booking-form-container">
      <h2>Book Seat for Movie {id}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Mobile:
          <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        </label>
        <br />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
