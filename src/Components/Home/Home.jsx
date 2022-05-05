import BackgroundCode from '../BackgroundCode/BackgroundCode';
import styles from './Home.module.css';

function Home() {
  return (
    <>
      <BackgroundCode
        githubFile={
          'https://api.github.com/repositories/488663277/contents/src/Components/Home/Home.jsx'
        }
      />
      <div className={styles.centerCard + ' card shadow'}>
        <h1 className='large'>David Meuer</h1>
        <h1 className='light'>Web Developer</h1>
      </div>
      <div>
        <p>Opening paragraph, Into about me</p>
      </div>
    </>
  );
}

export default Home;
