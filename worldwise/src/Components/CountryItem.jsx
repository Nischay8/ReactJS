import styles from "./CountryItem.module.css";

// eslint-disable-next-line react/prop-types, no-unused-vars
function CountryItem({ country }) {
  return <li className={styles.countryItem}>{country}</li>;
}

export default CountryItem;
