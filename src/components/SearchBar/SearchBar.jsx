import styles from "./SearchBar.module.css";
import SearchIcon from "./Searchicon";

function SearchBar () {
    return (
        <div id={styles["search-bar"]}>
            <input placeholder="Search an album of your choice" id={styles["text-box"]} />
            <div id={styles["search-icon-bar"]}>
            <SearchIcon />
            </div>
        </div>
    )
}

export default SearchBar;