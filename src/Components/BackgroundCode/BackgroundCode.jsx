import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import styles from './BackgroundCode.module.css';
import code from './test.js';

function BackgroundCode() {
  const [index, setIndex] = useState(0);

  const keywords = ['let', 'const', 'function', 'return'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => index + 1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.background}>
        <SyntaxHighlighter language='javascript' showLineNumbers={true}>
          {code.substring(0, index)}
        </SyntaxHighlighter>
      </div>
    </>
  );
}

export default BackgroundCode;
