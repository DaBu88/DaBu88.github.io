import Contact from "../pages/contact";
import ContactFormStyles from "../styles/Contact.module.css";

const FormInput = () => {
	return <input className={ContactFormStyles.contactinput} />;
};

const FormLabel = ({ value }) => {
	return <label className={ContactFormStyles.contactlabel}>{value}</label>;
};

const ContactForm = () => {
	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = {
			comments: event.target.comments.value,
			fname: event.target.fname.value,
			lname: event.target.lname.value,
			address1: event.target.address1.value,
			address2: event.target.address2.value,
			city: event.target.city.value,
			zip: event.target.zip.value,
			state: event.target.state.value,
			dayphone: event.target.dayphone.value,
			eveningphone: event.target.eveningphone.value,
			email: event.target.email.value,
		};
		const JSONdata = JSON.stringify(data);
		const endpoint = "/api/contactForm";
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSONdata,
		};
		const response = await fetch(endpoint, options);
		const result = await response.json();
		let sentDataList = document.createElement("ul");
		let responseData = {
			fname: result.fname,
			lname: result.lname,
			address1: result.address1,
			address2: result.address2,
			city: result.city,
			zip: result.zip,
			state: result.state,
			dayphone: result.dayphone,
			eveningphone: result.eveningphone,
			email: result.email,
			comments: result.comments,
		};
		let paragraph = document.createElement("p");
		paragraph.innerHTML =
			"Thanks for contacting us! Here is the information you sent us: ";
		for (let listVal in responseData) {
			if (responseData[listVal] === "") {
				continue;
			}
			let newListItem = document.createElement("li");
			newListItem.innerHTML = `${listVal}: ${responseData[listVal]}`;
			sentDataList.appendChild(newListItem);
		}
		let form = document.querySelector("#contactForm");
		form.replaceWith(sentDataList);
		sentDataList.prepend(paragraph);
	};

	return (
		<form
			method="post"
			id="contactForm"
			onSubmit={handleSubmit}
			className={ContactFormStyles.contactform}
		>
			<FormLabel htmlFor="fname" value="First Name"></FormLabel>
			<FormInput
				type="text"
				name="fname"
				id="fname"
				placeholder="First Name"
			/>
			<FormLabel htmlFor="lname" value="Last Name"></FormLabel>
			<FormInput
				type="text"
				name="lname"
				id="lname"
				placeholder="Last Name"
			/>
			<FormLabel htmlFor="address1" value="Address 1"></FormLabel>
			<FormInput
				type="text"
				name="address1"
				id="address1"
				placeholder="Address Street 1"
			/>
			<FormLabel htmlFor="address2" value="Address 2"></FormLabel>
			<FormInput
				type="text"
				name="address2"
				id="address2"
				placeholder="Address Street 2"
			/>
			<FormLabel htmlFor="city" value="City"></FormLabel>
			<FormInput type="text" name="city" id="city" placeholder="City" />
			<FormLabel htmlFor="zip" value="Zip Code"></FormLabel>
			<FormInput type="number" name="zip" id="" placeholder="Zip Code" />
			<FormLabel htmlFor="state" value="State of Residence"></FormLabel>
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
			<FormLabel htmlFor="dayphone" value="Day Phone"></FormLabel>
			<FormInput
				type="tel"
				name="dayphone"
				id="dayphone"
				placeholder="Daytime Phone"
			/>
			<FormLabel htmlFor="eveningphone" value="Evening Phone"></FormLabel>
			<FormInput
				type="tel"
				name="eveningphone"
				id="eveningphone"
				placeholder="Evening Phone"
			/>
			<FormLabel htmlFor="email" value="Email Address"></FormLabel>
			<FormInput
				type="email"
				name="email"
				id="email"
				placeholder="Email Address"
			/>
			<FormLabel htmlFor="comments" value="Comments"></FormLabel>
			<textarea
				name="comments"
				className={ContactFormStyles.comments}
			></textarea>
			<input type="submit" value="Send Message" />
		</form>
	);
};

export default ContactForm;
