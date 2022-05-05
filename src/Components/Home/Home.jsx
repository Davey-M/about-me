import BackgroundCode from '../BackgroundCode/BackgroundCode';
import styles from './Home.module.css';

function Home() {
  return (
    <>
      <BackgroundCode githubFilePath={'src/Components/Home/Home.jsx'} />
      <div className={styles.container}>
        <div className={styles.centerCard + ' card shadow'}>
          <h1 className='large'>David Meuer</h1>
          <h1 className='light'>Web Developer</h1>
        </div>
        <div>
          <p>Opening paragraph, Into about me</p>
        </div>
      </div>
    </>
  );
}

export default Home;
