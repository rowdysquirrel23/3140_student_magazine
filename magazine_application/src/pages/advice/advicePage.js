import React, {useEffect, useState} from 'react';


export default function Advice(){
    
    // const [back_end_entry, set_entry] = useState([{}])

    // useEffect(() => {
    //     fetch('/api').then(
    //         response => response.json()
    //     ).then(
    //         data => {
    //             set_entry(data)
    //         }
    //     )
    // }, [])

    // return(
    //     <body>
    //         {(typeof back_end_entry.users === 'undefined') ? (
    //             <p>loading</p>
    //         ): (
    //             back_end_entry.users.map((user, i ) => (
    //                 <p key={i}>{user}</p>
    //             ))
    //         )}
    //     </body>
    // )

    const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      // Handle success (e.g., update UI)
      console.log('Data submitted:', data);
    } catch (error) {
      // Handle error
      console.error('Error submitting data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Enter username" onChange={handleChange} />
      <input type="text" name="email" placeholder="Enter email" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );


}