import Styles from "./Form.module.css";

/* JSON will contain an array of objects to label and describe the specific type of input such as a Name or Phone number, Form component will have many child components to render different pre defined inputs with input validation*/
const Form = (props) => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.container}>
        <header>
          <h2>Contact</h2>
        </header>
        <form action={props.action} method={props.method}>
          {props.inputs.map((element) => {
            switch (element.type) {
              case "name":
                return (
                  <NameForm
                    label={(element.required ? "* " : "") + element.label + ":"}
                    id={element.id}
                    required={element.required ? "required" : null}
                  />
                );
              case "address":
                return (
                  <AddressForm
                    label={(element.required ? "* " : "") + element.label + ":"}
                    id={element.id}
                    required={element.required ? "required" : null}
                  />
                );
              case "city":
                return (
                  <CityForm
                    label={(element.required ? "* " : "") + element.label + ":"}
                    id={element.id}
                    required={element.required ? "required" : null}
                  />
                );
              case "zip":
                return (
                  <ZipForm
                    label={(element.required ? "* " : "") + element.label + ":"}
                    id={element.id}
                    required={element.required ? "required" : null}
                  />
                );
              case "state":
                return (
                  <StateForm
                    label={(element.required ? "* " : "") + element.label + ":"}
                    id={element.id}
                    required={element.required ? "required" : null}
                  />
                );
              case "phone":
                return (
                  <PhoneForm
                    label={(element.required ? "* " : "") + element.label + ":"}
                    id={element.id}
                    required={element.required ? "required" : null}
                  />
                );
              case "email":
                return (
                  <EmailForm
                    label={(element.required ? "* " : "") + element.label + ":"}
                    id={element.id}
                    required={element.required ? "required" : null}
                  />
                );
              case "textarea":
                return (
                  <TextAreaForm
                    label={(element.required ? "* " : "") + element.label + ":"}
                    id={element.id}
                    required={element.required ? "required" : null}
                  />
                );
            }
          })}
          <div className={Styles.submit}>
            <input
              className={Styles.submit_button}
              type="submit"
              value={props.buttonText}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

const NameForm = (props) => {
  return (
    <div className={Styles.input}>
      <label for={props.id}>{props.label}</label>
      <br />
      <input
        className={Styles.name}
        type="text"
        id={props.id}
        name={props.id}
        required={props.required}
        minlength="1"
        maxlength="32"
        pattern="[A-Za-z]{1,32}"
        placeholder=" "
      />
    </div>
  );
};

const AddressForm = (props) => {
  return (
    <div className={Styles.input}>
      <label for={props.id}>{props.label}</label>
      <br />
      <input
        className={Styles.address}
        type="text"
        id={props.id}
        name={props.id}
        required={props.required}
        minlength="1"
        maxlength="64"
        pattern="^[#.0-9a-zA-Z\s,-]+$"
        placeholder=" "
      />
    </div>
  );
};

const CityForm = (props) => {
  return (
    <div className={Styles.input}>
      <label for={props.id}>{props.label}</label>
      <br />
      <input
        className={Styles.city}
        type="text"
        id={props.id}
        name={props.id}
        required={props.required}
        minlength="1"
        maxlength="32"
        pattern="^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$"
        placeholder=" "
      />
    </div>
  );
};

const ZipForm = (props) => {
  return (
    <div className={Styles.input}>
      <label for={props.id}>{props.label}</label>
      <br />
      <input
        className={Styles.zip}
        type="text"
        id={props.id}
        name={props.id}
        required="required"
        minlength="5"
        maxlength="9"
        pattern="(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)"
        placeholder=" "
      />
    </div>
  );
};

const StateForm = (props) => {
  return (
    <div className={Styles.input}>
      <label for={props.id}>{props.label}</label>
      <br />
      <select
        className={Styles.state}
        id={props.id}
        name={props.id}
        required={props.required}
      >
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
        <option value="ME" selected="selected">
          Maine
        </option>
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
    </div>
  );
};

const PhoneForm = (props) => {
  return (
    <div className={Styles.input}>
      <label for={props.id}>{props.label}</label>
      <br />
      <input
        className={Styles.phone}
        type="tel"
        id={props.id}
        name={props.id}
        required={props.required}
        minlength="0"
        maxlength="14"
        pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$"
        placeholder=" "
      />
    </div>
  );
};

const EmailForm = (props) => {
  return (
    <div className={Styles.input}>
      <label for={props.id}>{props.label}</label>
      <br />
      <input
        className={Styles.email}
        type="email"
        id={props.id}
        name={props.id}
        required={props.required}
        minlength="3"
        maxlength="42"
        pattern="^[a-z0-9][-a-z0-9._]+@([-a-z0-9]+[.])+[a-z]{2,5}$"
        placeholder=" "
      />
    </div>
  );
};

const TextAreaForm = (props) => {
  return (
    <div className={Styles.input}>
      <label for={props.id}>{props.label}</label>
      <br />
      <textarea
        className={Styles.textarea}
        id={props.id}
        name={props.id}
        required={props.required}
        rows="10"
        cols="50"
      />
    </div>
  );
};

export default Form;
