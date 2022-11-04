import { render } from "react-dom"
import Contact from "../pages/contact";
import ContactFormStyles from "../styles/Contact.module.css";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {ReactDOM} from 'react';

// const form = document.querySelector("#customerContactForm");
// form.addEventListener("submit", handleSubmit);



const ContactForm2 = () => {

  // const [customerContactInfo, setCustomerContactInfo] = useState({
  //   fname: '',
  //   lname: '',
  //   address1: '',
  //   address2: '',
  //   city: '',
  //   zip: '',
  //   state: '',
  //   dayphone: '',
  //   eveningphone: '',
  //   email: '',
  //   comments: ''
  // })

  // const [customerComment, setCustomerComment] = useState('');

    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
        const data = {customerComment: event.target.comments.value}
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
      
        // API endpoint where we send form data.
        const endpoint = '/api/contactForm'
      
        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data.
          method: 'POST',
          // Tell the server we're sending JSON.
          headers: {
            'Content-Type': 'application/json',
          },
          // Body of the request is the JSON data we created above.
          body: JSONdata,
        }
      
        // Send the form data to our forms API on Vercel and get a response.
        
        const response = await fetch(endpoint, options)
        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        let paragraph = document.createElement('p');
        let form = document.querySelector("#contactForm");
        // form.style.display = 'none';
        paragraph.innerHTML = `Thank you for contacting us! Here is a review of the information you sent us: ${result.data}`
        form.append(paragraph);
        // alert(`Thank you for contacting us! Here is a review of the information you sent us: ${result.data}`)
      }

        return(
            <form method="post" id="contactForm" onSubmit={handleSubmit} className={ContactFormStyles.contactform}>
                <input
                type="text"
                // value={customerContactInfo.fname}
                name="fname"
                id="fname"
                placeholder="First Name"
              />
              <input
                type="text"
                // value={customerContactInfo.lname}
                name="lname"
                id="lname"
                placeholder="Last Name"
              />
              <input
                type="text"
                // value={customerContactInfo.address1}
                name="address1"
                id="address1"
                placeholder="Address Street 1"
              />
              <input
                type="text"
                // value={customerContactInfo.address2}
                name="address2"
                id="address2"
                placeholder="Address Street 2"
              />
              <input type="text" name="city" id="city" placeholder="City" />
              <input type="number" name="zip" id="" placeholder="Zip Code" />
                <label>
                    <select name="state">
                        <option value="State">Choose State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </label>
                <input
                type="tel"
                // value={customerContactInfo.dayphone}
                name="dayphone"
                id="dayphone"
                placeholder="Daytime Phone"
              />
              <input
                type="tel"
                // value={customerContactInfo.eveningphone}
                name="eveningphone"
                id="eveningphone"
                placeholder="Evening Phone"
              />
              <input
                type="email"
                // value={customerContactInfo.email}
                name="email"
                id="email"
                placeholder="Email Address"
              />
                <textarea name="comments" className={ContactFormStyles.comments}></textarea>
                <input type="submit" value="Send Message" />
            </form> 

        );
    }

export default ContactForm2;


