import styles from '../styles/components/OWinModal.module.css'

export function OWinModal() {
    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <p>Player O Win!</p>
            </div>
        </div>
    )
}