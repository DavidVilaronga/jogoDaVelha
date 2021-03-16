import styles from '../styles/components/ScoreBoard.module.css'
import { GameContext } from '../contexts/GameContext'
import { useContext } from 'react'

export function ScoreBoard() {
	const { restart, scoreX, scoreO } = useContext(GameContext)

	return(
		<div  className={styles.container}>
			<header>
				Scoreboard
			</header>
			<div className={styles.scorebox}>
					<section className={styles.score}>
						<div>x</div>
						<div>{scoreX}</div>
					</section>
					<section className={styles.versus}>x</section>
					<section className={styles.score}>
						<div>o</div>
						<div>{scoreO}</div>
					</section>
			</div>
			<button
			onClick={restart}
			 className={styles.restartButton}>
				Restart Game
			</button>
		</div>
	
	)
}