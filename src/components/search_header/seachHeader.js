import styles from "./searchHeader.module.css";
import React, { useRef } from "react";

const SeachHeader = ({ onSearch }) => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        console.log(value);
        onSearch(value);
    };

    //검색 두가지 경우
    //1. onClick은 버튼을 클릭 했을때
    //2. enter 버튼을 눌렀을때
    const onClick = () => {
        handleSearch();
    };

    const onKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <i className="fab fa-youtube"></i>
                <h1 className={styles.title}>YouTube</h1>
            </div>

            <input ref={inputRef} className={styles.input} type="search" placeholder="Search" onKeyPress={onKeyPress} />
            <button className={styles.button} type="submit" onClick={onClick}>
                <i className="fas fa-search"></i>
            </button>
        </header>
    );
};

export default SeachHeader;
