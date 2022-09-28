import { render } from "react-dom"
import Contact from "../pages/contact";
import ContactFormStyles from "../styles/Contact.module.css";

const FormInput = () => {
    return (
        <input className={ContactFormStyles.contactinput} />
    );
}

const ContactForm = () => {
        return(
            <form className={ContactFormStyles.contactform}>
                <FormInput
                type="text"
                name="fname"
                id="fname"
                placeholder="First Name"
              />
              <FormInput
                type="text"
                name="lname"
                id="lname"
                placeholder="Last Name"
              />
              <FormInput
                type="text"
                name="address1"
                id="address1"
                placeholder="Address Street 1"
              />
              <FormInput
                type="text"
                name="address2"
                id="address2"
                placeholder="Address Street 2"
              />
              <FormInput type="text" name="city" id="city" placeholder="City" />
              <FormInput type="number" name="" id="" placeholder="Zip Code" />
                <label>
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
                    </select>
                </label>
                <FormInput
                type="tel"
                name="dayphone"
                id="dayphone"
                placeholder="Daytime Phone"
              />
              <FormInput
                type="tel"
                name="eveningphone"
                id="eveningphone"
                placeholder="Evening Phone"
              />
              <FormInput
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
                <textarea className={ContactFormStyles.comments}></textarea>
                <FormInput type="submit" value="Send Message" />
            </form> 

        );
    }

export default ContactForm;