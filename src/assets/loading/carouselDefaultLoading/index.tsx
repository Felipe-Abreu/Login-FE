import React from 'react'
import styles from './styles.module.scss'

export default function CarouselLoading() {
    return (
        <div className={styles['carousel-loading-wrapper']}>
            <div className={styles.header}>
                <div className={styles.title} />
            </div>
            <div className={styles['cards-wrapper']}>
                <div className={styles.card} />
                <div className={styles.card} />
                <div className={styles.card} />
                <div className={styles.card} />
                <div className={styles.card} />
                <div className={styles.card} />
            </div>
        </div>
    )
}
