import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './advice.css';


export default function Advice(){
  

  const [form_data, set_form_data] = useState({ name: '', comment: '' });
  const [submitted_data, set_submitted_data] = useState([]);

  const handle_change = (e) => {
    const { name, value } = e.target;
    set_form_data({ ...form_data, [name]: value });
  };

  const handle_submit = (e) => {
    e.preventDefault();
    axios.post('/api', form_data)
      .then(response => {
        set_submitted_data([...submitted_data, form_data]);
        set_form_data({ name: '', comment: '' });
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
  };

  useEffect(() => {
    axios.get('/api')
      .then(response => {
        set_submitted_data(response.data.users);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='advice_body'>
      <h1 className='advice_title'>Student Confessions and Problems!</h1>
      <section className='student_problems'>

        <div className='student_submissions'>
          <h3 className='student_details'>First Year, On Campus</h3>
          <p className='student_story'>
          I'm frustrated with my flatmate's habit of constantly raiding my food stash without permission. 
          It's incredibly annoying to find my snacks disappearing when I need them the most, especially after a long day of classes.
          I've tried talking to them about it, but it seems like they just can't resist the temptation of my tasty treats.
          </p>
        </div>

        <div className='student_submissions'>
          <h3 className='student_details'>First Year, On Campus</h3>
          <p className='student_story'>
          I'm frustrated with my flatmate's habit of constantly raiding my food stash without permission. 
          It's incredibly annoying to find my snacks disappearing when I need them the most, especially after a long day of classes.
          I've tried talking to them about it, but it seems like they just can't resist the temptation of my tasty treats.
          </p>
        </div>

        <div className='student_submissions'>
          <h3 className='student_details'>First Year, On Campus</h3>
          <p className='student_story'>
          I'm frustrated with my flatmate's habit of constantly raiding my food stash without permission. 
          It's incredibly annoying to find my snacks disappearing when I need them the most, especially after a long day of classes.
          I've tried talking to them about it, but it seems like they just can't resist the temptation of my tasty treats.
          </p>
        </div>
      </section>
      <section className='add_comment'>
        <h2>Comment Your Opinion!</h2>
        <form onSubmit={handle_submit} className='comment_form'>
          <label>
            Name:
            <input type="text" name="name" value={form_data.name} onChange={handle_change} />
          </label>
          <label>
            Comment:
            <input type="text" name="comment" value={form_data.comment} onChange={handle_change} />
          </label>
          <button type="submit">Submit</button>
        </form>
        <h2>Comments!:</h2>
        <ul>
          {submitted_data.map((data, index) => (
            <li key={index}>
              <strong>Name:</strong> {data.name}, <strong>Comment:</strong> {data.comment}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );



}
