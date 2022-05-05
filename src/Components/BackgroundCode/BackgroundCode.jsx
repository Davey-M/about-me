import axios from 'axios';
import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import styles from './BackgroundCode.module.css';

function BackgroundCode({ githubFilePath }) {
  const [index, setIndex] = useState(0);
  const [code, setCode] = useState('');

  const keywords = ['let', 'const', 'function', 'return'];

  useEffect(() => {
    let interval;

    axios
      .get(
        'https://api.github.com/repositories/488663277/contents/' +
          githubFilePath,
        {
          headers: {
            Accept: 'application/vnd.github.VERSION.raw',
          },
        },
      )
      .then((response) => {
        // console.log(response.data);
        clearInterval(interval);
        setCode(response.data);

        interval = setInterval(() => {
          setIndex((index) => index + 1);
        }, 80);
      })
      .catch((err) => {
        console.error('Error in BackgroundCode', err);
      });

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.background}>
        <SyntaxHighlighter language='javascript' showLineNumbers={false}>
          {code.substring(0, index)}
        </SyntaxHighlighter>
      </div>
      <div className={styles.background}></div>
    </>
  );
}

export default BackgroundCode;
