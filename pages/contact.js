import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact</title>
      </Head>
      <body>
        <div class="wrapper" />
        <div class="earthhomepagepicture"></div>
        <Nav />
        <main>
          <form action="form_submission_status.html" method="get">
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="First Name"
            />
            <input
              type="text"
              name="lname"
              id="lname"
              placeholder="Last Name"
            />
            <input
              type="text"
              name="address1"
              id="address1"
              placeholder="Address Street 1"
            />
            <input
              type="text"
              name="address2"
              id="address2"
              placeholder="Address Street 2"
            />
            <input type="text" name="city" id="city" placeholder="City" />
            <input type="number" name="" id="" placeholder="Zip Code" />
            <label for="">
              <select>
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
              </select>{" "}
            </label>
            <input
              type="tel"
              name="dayphone"
              id="dayphone"
              placeholder="Daytime Phone"
            />
            <input
              type="tel"
              name="eveningphone"
              id="eveningphone"
              placeholder="Evening Phone"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
            <textarea
              id="comments"
              name="comments"
              rows="4"
              cols="38"
              labelid="comments"
            >
              Enter comments here!
            </textarea>
            <input type="submit" value="Send Message" />
          </form>
        </main>
        <Footer />
      </body>
    </>
  );
}
