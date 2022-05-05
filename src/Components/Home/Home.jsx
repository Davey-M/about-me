// Welcome to my personal site.
// All the code that you see in the background is the current source code for this project.
// feel free to check out my github to see the full source.

import BackgroundCode from '../BackgroundCode/BackgroundCode';
import styles from './Home.module.css';

function Home() {
  return (
    <>
      <BackgroundCode githubFilePath={'src/Components/Home/Home.jsx'} />
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.centerCard + ' card shadow'}>
            <h1 className='large'>David Meuer</h1>
            <h1 className='light'>Web Developer</h1>
          </div>
          <div>
            <p>Opening paragraph / Intro about me</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
