import { useAuth } from "../../LoginAndSignup/auth-context";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export function UserDetails() {
  const navigate = useNavigate();
  const { userName } = useAuth();
  const [userDetails, setUserDetails] = useState("");

  useEffect(() => {
    axios
      .get(`https://leadsidtechs.sandeepmehta215.repl.co/login/${userName}`)
      .then((resp) => resp.data.users.map((obj) => setUserDetails(obj)));
  }, []);

  return (
    <>
      <button onClick={() => navigate("/address")}>Home</button>

      <div className="form">
        <h1> User Details </h1>

        <span style={{ fontWeight: "bold" }}>Full-Name :</span>
        <span> {userDetails.fullname}</span>
        <br />
        <br />
        <span style={{ fontWeight: "bold" }}>User-Name :</span>
        <span> {userDetails.username}</span>
        <br />
        <br />
        <span style={{ fontWeight: "bold" }}>Phone :</span>
        <span> {userDetails.phonenumber}</span>
        <br />
        <br />
        <span style={{ fontWeight: "bold" }}>E-mail :</span>
        <span> {userDetails.email}</span>
        <br />
        <br />
        <span style={{ fontWeight: "bold" }}>Sponsor-ID :</span>
        <span> {userDetails.sponsorsid}</span>
      </div>
    </>
  );
}
