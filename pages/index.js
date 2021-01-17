import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <div className="center">
          <a href="#home"><div className={styles.logo}></div></a>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#home">About</a>
            </li>
            <li>
              <a href="#home">Help</a>
            </li>
          </ul>
          <div className="clear"></div>
          <div className={styles.headerText}>
            <h1>Code Spider</h1>
            <p>Using the best of technology to create your solution!</p>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className="center">
          <ul className={styles.mainCards}>
            <li className={styles.mainCard}>
              <div className={styles.mainCardIcon}>
                <img src="/happy.png" alt="icon"/>
              </div>
              <div className={styles.mainCardText}>
                <h3>High Recommendation</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </li>
            <li className={styles.mainCard}>
              <div className={styles.mainCardIcon}>
                <img src="/star.png" alt="icon"/>
              </div>
              <div className={styles.mainCardText}>
                <h3>High Recommendation</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </li>
            <li className={styles.mainCard}>
              <div className={styles.mainCardIcon}>
                <img src="/happy.png" alt="icon"/>
              </div>
              <div className={styles.mainCardText}>
                <h3>High Recommendation</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </li>
            <li className={styles.mainCard}>
              <div className={styles.mainCardIcon}>
                <img src="/star.png" alt="icon"/>
              </div>
              <div className={styles.mainCardText}>
                <h3>High Recommendation</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </li>
            <li className={styles.mainCard}>
              <div className={styles.mainCardIcon}>
                <img src="/happy.png" alt="icon"/>
              </div>
              <div className={styles.mainCardText}>
                <h3>High Recommendation</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </li>
            <li className={styles.mainCard}>
              <div className={styles.mainCardIcon}>
                <img src="/star.png" alt="icon"/>
              </div>
              <div className={styles.mainCardText}>
                <h3>High Recommendation</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer>

      </footer>
    </div>
  )
}
