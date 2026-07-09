import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return(
        <div className={styles.header}>
            <h3>Habbit Tracker</h3>
            <button calssName={styles.btn}>Login</button>
        </div>
    )
}

export default Header