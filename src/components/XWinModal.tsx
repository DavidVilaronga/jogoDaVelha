import styles from '../styles/components/XWinModal.module.css'

export function XWinModal() {
    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <p>Player X Win!</p>
            </div>
        </div>
    )
}