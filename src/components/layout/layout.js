import React from 'react'
import styles from './layout.module.scss'
import hero from '../../assets/hero-1.jpg'

export default ({ children }) => (
    <div className={styles.rootContainer}>
        <div className={styles.heroContainer}>
            <div className={styles.navBar}>
                <div className={styles.contentContainer}>
                    <h1>Nav</h1>
                </div>
            </div>
            {/* <img src={hero} style={{ width: '100%' }} /> */}
        </div>
        <div style={{ flex: 1 }} className={[styles.contentContainer, styles.debug, styles.pageContainer].join(' ')} >
            {children}
        </div>
        <div className={styles.footer}>
            <div className={styles.contentContainer}>
                <h1>Footer</h1>
            </div>
        </div>
    </div>
);