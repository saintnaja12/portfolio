import { useEffect, useState } from 'react'
import styles from '../styles/terminal-loader.module.css'

const MIN_MS = 1500 // let the typing finish
const MAX_MS = 2500 // never block the page longer than this
const FADE_MS = 400

const TerminalLoader = () => {
  const [state, setState] = useState('show') // show -> hiding -> gone

  useEffect(() => {
    const start = Date.now()
    let sceneReady = false
    let done = false
    const timers = []

    const finish = () => {
      if (done) return
      done = true
      setState('hiding')
      timers.push(setTimeout(() => setState('gone'), FADE_MS))
    }

    const tryFinish = () => {
      if (sceneReady && Date.now() - start >= MIN_MS) finish()
    }

    const onSceneLoaded = () => {
      sceneReady = true
      tryFinish()
    }

    window.addEventListener('spline-loaded', onSceneLoaded)
    timers.push(setTimeout(tryFinish, MIN_MS))
    timers.push(setTimeout(finish, MAX_MS))

    return () => {
      window.removeEventListener('spline-loaded', onSceneLoaded)
      timers.forEach(clearTimeout)
    }
  }, [])

  if (state === 'gone') return null

  return (
    <div
      className={`${styles.overlay} ${state === 'hiding' ? styles.hide : ''}`}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className={styles.line}>
        <span className={styles.text}>&gt; loading portfolio...</span>
        <span className={styles.cursor} aria-hidden="true" />
      </div>
    </div>
  )
}

export default TerminalLoader
