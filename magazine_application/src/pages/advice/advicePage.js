// import stylesheets and libraries
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './advice.css';


export default function Advice(){
  
// set the peramters for the api
  const [form_data, set_form_data] = useState({ name: '', comment: '' });
  const [submitted_data, set_submitted_data] = useState([]);
// handle the change of data
  const handle_change = (e) => {
    const { name, value } = e.target;
    set_form_data({ ...form_data, [name]: value });
  };
// Handle the submission of data to the api
  const handle_submit = (e) => {
    e.preventDefault();
    // post to the api using axios library
    axios.post('/api', form_data)
      .then(response => {
        set_submitted_data([...submitted_data, form_data]);
        set_form_data({ name: '', comment: '' });
      })
      // Check for errors
      .catch(error => {
        console.error('Error submitting form:', error);
      });
  };
// Call the submitted data from the api
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
      {/* Section of problems students face */}
      <section className='student_problems'>
        {/* Section of a students problem */}
        <div className='student_submissions'>
          <h3 className='student_details'>Jake, 19</h3>
          <p className='student_story'>
          I'm frustrated with my flatmate's habit of constantly raiding my food stash without permission. 
          It's incredibly annoying to find my snacks disappearing when I need them the most, especially after a long day of classes.
          I've tried talking to them about it, but it seems like they just can't resist the temptation of my tasty treats.
          </p>
        </div>
        {/* Section of a students problem */}
        <div className='student_submissions'>
          <h3 className='student_details'>Toby, 20</h3>
          <p className='student_story'>
          As a second-year student weighing my options for next year, I'm torn between the convenience of living on campus and the independence of staying off-campus. 
          While the proximity to classes and campus amenities is appealing, the allure of having my own space and more flexibility off-campus is equally enticing.
          </p>
        </div>
        {/* Section of a students problem */}
        <div className='student_submissions'>
          <h3 className='student_details'>Lucy, 18</h3>
          <p className='student_story'>
          As a university student navigating the social landscape of my first year, I'm eager to make new friends but unsure where to start. 
          I'm reaching out to upperclassmen, attending campus events, and joining clubs and societies to expand my social circle and find like-minded individuals.
          </p>
        </div>
      </section>
      {/* Section for back end entry for the site */}
      <section className='add_comment'>
      <h2 className='comments_title'>Student Opinions!:</h2>
        <ul className='display_comments'>
          {/* Recall the data from the api as a comment section */}
          {submitted_data.map((data, index) => (
            <li key={index}>
              <strong>Name:</strong> {data.name}, <strong>Advice:</strong> {data.comment}
            </li>
          ))}
        </ul>
        {/* form for users to submit their opiniions to a json server */}
        <h2 className='comments_instructions'>Comment Your Opinion!</h2>
        <form onSubmit={handle_submit} className='comment_form'>
          <label>
            Name:
            <input type="text" name="name" value={form_data.name} onChange={handle_change} />
          </label>
          <label>
            Advice:
            <input type="text" className="comment_box" name="comment" value={form_data.comment} onChange={handle_change} />
          </label>
          {/* Button submits the user feedback to the json server */}
          <button  className="advice_button" type="submit">Submit</button>
        </form>
      </section>
    </div>
  );



}
