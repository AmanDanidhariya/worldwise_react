import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styles from "./User.module.css";

function User() {
  const {user , logout} = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    //when we click on logout user will be null and isAuthenticated will be false 
    logout();
    navigate("/")
  }

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;

