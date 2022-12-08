import styles from './App.module.css';
import qrImage from '../src/assets/image-qr-code.png';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <img src={qrImage} className={styles.qrImage} />
        <h3 className={styles.title}>
          Improve your front-end skills by building projects
        </h3>
        <p className={styles.subtitle}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
