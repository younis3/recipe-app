import React, { useState } from 'react'
import styles from '../styles/Search.module.css'

const Search = ({ setQuery }) => {

    const [search, setSearch] = useState('');

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    }


    return (
        <div>
            <form onSubmit={getSearch} className={styles['search-form']}>
                <input type='text' className={styles['search-bar']} placeholder="Search recipes, for example: Chicken" onChange={updateSearch}></input>
                <button type='submit' className={styles['search-button']}>Search</button>
            </form>
        </div>
    )
}

export default Search
