import Head from 'next/head'
import { GameProvider } from '../contexts/GameContext'
import { GameBox } from '../components/GameBox'
import { ScoreBoard } from '../components/ScoreBoard'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <GameProvider>
      <div className={styles.container}>
        <Head>
          <title>Jogo da Velha</title>
        </Head>

        <ScoreBoard/>
        <GameBox />

      </div>
    </GameProvider>
  )
}