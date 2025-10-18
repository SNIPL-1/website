import React, { useState } from 'react';

export default function Enquiry() {
  const [form, setForm] = useState({ name: '', city: '', mobile: '', email: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    const text = `Hi, I have an enquiry: %0AName: ${form.name}%0ACity: ${form.city}%0AMobile: ${form.mobile}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/917986297302?text=${text}`, '_blank');
  };

  return (
    <div className="enquiry">
      <h2>Enquiry Form</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="city" placeholder="City" onChange={handleChange} />
      <input name="mobile" placeholder="Mobile" onChange={handleChange} />
      <input name="email" placeholder="Email (optional)" onChange={handleChange} />
      <textarea name="message" placeholder="Your Requirement" onChange={handleChange}></textarea>
      <button onClick={handleSubmit}>Send on WhatsApp</button>
    </div>
  );
}
