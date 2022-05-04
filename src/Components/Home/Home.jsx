import styles from './Home.module.css';

function Home() {
  return (
    <>
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
