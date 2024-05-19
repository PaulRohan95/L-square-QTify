import SearchBar from "../SearchBar/SearchBar";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav>
        <Logo />
        <SearchBar />
        <button id={styles["nav-btn"]}>Give Feedback</button>
    </nav>
  );
};

export default Navbar;