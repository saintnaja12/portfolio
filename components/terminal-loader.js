import { useEffect, useState } from 'react'
import styles from '../styles/terminal-loader.module.css'

const SEEN_KEY = 'ta-loader-seen'
const MIN_MS = 1500 // let the typing finish
const MAX_MS = 2500 // never block the page longer than this
const FADE_MS = 400

const markSeen = () => {
  try {
    sessionStorage.setItem(SEEN_KEY, '1')
  } catch (e) {
    // storage unavailable: the loader may show again, which is harmless
  }
}

const TerminalLoader = () => {
  const [state, setState] = useState('show') // show -> hiding -> gone

  useEffect(() => {
    let seen = false
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === '1'
    } catch (e) {
      seen = false
    }
    if (seen) {
      setState('gone')
      return
    }

    const start = Date.now()
    let sceneReady = false
    let done = false
    const timers = []

    const finish = () => {
      if (done) return
      done = true
      markSeen()
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
