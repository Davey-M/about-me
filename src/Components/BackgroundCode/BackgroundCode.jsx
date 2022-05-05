import axios from 'axios';
import { useEffect, useState } from 'react';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import styles from './BackgroundCode.module.css';

// we use this value to store the previous values of the background
const previousBackgrounds = {};

SyntaxHighlighter.registerLanguage('jsx', jsx);

function BackgroundCode({ githubFilePath }) {
  const [code, setCode] = useState('');

  // this useEffect hook is just for calling the api to get the file for the background
  useEffect(() => {
    // if this file has already been used we don't call the api again
    // this removes extra api calls and makes out page load faster after the first look
    if (previousBackgrounds[githubFilePath]) {
      setCode(previousBackgrounds[githubFilePath]);
      return;
    }

    // get the file from the github api
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
        // set the code to the response
        setCode(response.data);

        // save the response so we don't have to call the api for this page again
        previousBackgrounds[githubFilePath] = response.data;
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
