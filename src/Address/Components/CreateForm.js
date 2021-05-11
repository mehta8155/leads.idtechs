import axios from "axios";
import { useState, useEffect, React } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../LoginAndSignup/auth-context";

export function CreateForm() {
  const [type, setType] = useState("password");
  const [passwordInput, setUserPassword] = useState("");
  const [firstNameAndLastName, setFirstNameAndLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [sponsorId, setSponsorid] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passwordReInput, setpasswordReInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const [responseFromDataBase, setResponseFromDataBase] = useState("");

  const [emailExists, setEmailExists] = useState("none");
  const [userExists, setUserExists] = useState("none");
  const [phoneNumberExists, setPhoneNumberExists] = useState("none");
  const [userAdded, setUserAdded] = useState("none");
  const navigate = useNavigate();
  const reg = /([0-9])/;
  const { isUserLoggedIn, setUserLogin } = useAuth();
  useEffect(() => {
    setUserExists("block");
    responseFromDataBase === "user Exists for given username"
      ? setUserExists("block")
      : setUserExists("none");

    firstNameAndLastName !== "" &&
    phoneNumber !== "" &&
    userName !== "" &&
    sponsorId !== "" &&
    reg.test(passwordInput) &&
    passwordInput === passwordReInput &&
    responseFromDataBase === "user added in database"
      ? setUserAdded("block")
      : setUserAdded("none");

    responseFromDataBase === "email Exists for given username"
      ? setEmailExists("block")
      : setEmailExists("none");

    responseFromDataBase === "phonenumber Exists for entered Number"
      ? setPhoneNumberExists("block")
      : setPhoneNumberExists("none");
  }, [responseFromDataBase]);

  async function setResponseFromDB() {
    await axios
      .post("https://leadsidtechs.sandeepmehta215.repl.co/login", {
        fullname: firstNameAndLastName,
        username: userName,
        phonenumber: phoneNumber,
        email: emailInput,
        password: passwordInput,
        sponsorsid: sponsorId
      })
      .then((response) => setResponseFromDataBase(response.data.message));
  }
  return (
    <div>
      <header> Leads.idtechs.com</header>
      <button onClick={() => navigate("/address")}> Home </button>
      <div className="form">
        <label className="formPills">
          Name :{" "}
          <input
            type="text"
            onChange={(e) => setFirstNameAndLastName(e.target.value)}
          />{" "}
        </label>
        <br />
        <br />
        <br />
        <label className="formPills">
          Email ID :{" "}
          <input type="text" onChange={(e) => setEmailInput(e.target.value)} />{" "}
        </label>
        <small style={{ color: "red", display: emailExists }}>
          Email ID exists
        </small>

        <br />
        <br />
        <br />
        <label className="formPills">
          Phone no. :
          <input
            type="number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />{" "}
        </label>
        <small style={{ color: "red", display: phoneNumberExists }}>
          Phone number exists
        </small>

        <br />
        <br />
        <br />
        <label className="formPills">
          {" "}
          User ID :
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />{" "}
        </label>
        <small style={{ color: "red", display: userExists }}>
          User ID exists
        </small>

        <br />
        <br />
        <br />
        <label className="formPills">
          {" "}
          Sponsor ID :
          <input
            type="text"
            onChange={(e) => setSponsorid(e.target.value)}
          />{" "}
        </label>
        <br />
        <br />
        <br />
        <label>Enter password : </label>
        <input
          type="password"
          id="email"
          placeholder="     Password"
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <br />
        <br />
        <label>Re-enter password : </label>
        <input
          id="email"
          type={type}
          placeholder="     Password"
          onChange={(e) => setpasswordReInput(e.target.value)}
        />
        <br />
        <br />
        <br />
        <label id="shpass">Show password</label>
        <input
          id="check"
          type="checkbox"
          onClick={() => {
            if (type === "password") setType("text");
            else setType("password");
          }}
        />

        <br />
        <br />
        <br />
        {!reg.test(passwordInput) && (
          <div style={{ color: "red" }}>Password should contain a number </div>
        )}
        <br />
        {passwordReInput && (
          <div>
            {passwordReInput !== passwordInput && (
              <div style={{ color: "red" }}> Error! Try matching password </div>
            )}
          </div>
        )}
        <button onClick={() => setResponseFromDB()}> Submit</button>
        <span style={{ color: "green", display: userAdded }}>
          User Added in database
          <span role="img" aria-labelledby="emoji">
            ✅
          </span>
        </span>
      </div>
    </div>
  );
}
