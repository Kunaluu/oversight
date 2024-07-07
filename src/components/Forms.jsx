import React, { useState } from 'react';

// const Forms = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch('/api/submit-form', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name, email }),
//     });

//     if (response.ok) {
//       alert('Form submitted successfully!');
//     } else {
//       alert('Form submission failed.');
//     }
//   };

//   return (
//     <section id="form" className="form-section">
//       <h2>Join Our Waitlist</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </section>
//   );
// };

// export default Forms;
const Forms = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Ensure e is defined and prevent default action
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
      alert('Form submitted successfully!');
      setName('');
      setEmail('');
    } else {
      alert('Form submission failed.');
    }
  };

  const handleButtonClick = async () => {
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        alert('Data sent to MongoDB successfully!');
        setName('');
        setEmail('');
      } else {
        alert('Failed to send data to MongoDB.');
      }
    } catch (error) {
      console.error('Error sending data to MongoDB:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <section id="form" className="form-section">
      <h2>Join Our Waitlist</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" style={{ color: 'white' }}>Submit</button>
      </form>
      <button onClick={handleButtonClick}>Send Data to MongoDB</button>
    </section>
  );
};

export default Forms;