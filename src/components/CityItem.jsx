import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { useCities } from "../context/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

// eslint-disable-next-line react/prop-types
const CityItem = ({ city }) => {
  const { currentCity, deleteCity } = useCities();
  // eslint-disable-next-line react/prop-types
  const { cityName, emoji, date, id, position } = city;

  const handleClick=(e)=>{
    e.preventDefault();
    deleteCity(id); 
  }

  return (
    <li>
      {/* using for add query string to url */}
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles['cityItem--active'] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handleClick}>&times;</button>
      </Link>
    </li>
  );
};

export default CityItem;
