import { useNavigate } from "react-router-dom";
import { useAuth } from "../LoginAndSignup/auth-context";

export function Home() {
  const navigate = useNavigate();
  const { LogOut, userName } = useAuth();

  const navList = [
    "DashBoard",
    "Create Form",
    "View Leads",
    "User Details",
    "Tree View",
    "Subordiante details"
  ];
  return (
    <>
      <nav>
        <h1> Welcome, {userName} </h1>
        <ul className="navigationList">
          {navList.map((obj) => (
            <li
              className="navigationListPills"
              key={obj}
              onClick={() => {
                navigate(`${obj.split(" ").join("").toLowerCase()}`);
              }}
            >
              {obj}
            </li>
          ))}
          <button onClick={() => LogOut()}>LogOut</button>
        </ul>
      </nav>
    </>
  );
}
