import axios from 'axios';
import { useEffect, useState } from 'react';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import styles from './BackgroundCode.module.css';

SyntaxHighlighter.registerLanguage('jsx', jsx);

function BackgroundCode({ githubFilePath }) {
  const [code, setCode] = useState('');

  useEffect(() => {
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
        setCode(response.data);
      })
      .catch((err) => {
        console.error('Error in BackgroundCode', err);
      });
  }, []);

  return (
    <>
      <div className={styles.background}>
        <SyntaxHighlighter
          language='jsx'
          style={oneLight}
          showLineNumbers={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </>
  );
}

export default BackgroundCode;
