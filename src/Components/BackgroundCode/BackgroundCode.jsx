import axios from 'axios';
import { useEffect, useState } from 'react';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import styles from './BackgroundCode.module.css';

SyntaxHighlighter.registerLanguage('jsx', jsx);

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
        <SyntaxHighlighter
          language='jsx'
          style={oneLight}
          showLineNumbers={true}
        >
          {code.substring(0, index)}
          {/* {code} */}
        </SyntaxHighlighter>
      </div>
      {/* <div className={styles.background}></div> */}
    </>
  );
}

export default BackgroundCode;
