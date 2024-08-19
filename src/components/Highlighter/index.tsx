import hljs from 'highlight.js/lib/core';
import { useEffect, useRef } from "react";
import styles from './index.module.scss';

// Import individual language modules dynamically
const languages: Record<string, () => Promise<typeof import("highlight.js/lib/languages/*")>> = {
    javascript: () => import('highlight.js/lib/languages/javascript'),
    json: () => import('highlight.js/lib/languages/json'),
    // Add more languages as needed
  };

type Props = {
  language?: string,
  code?: any,
}

export default function HighLighter({ language, code }: Props) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const registerLanguage = async () => {
      if (language && languages[language]) {
        const langModule = await languages[language]();
        hljs.registerLanguage(language, langModule.default);
        if (codeRef.current) {
          hljs.highlightBlock(codeRef.current);
        }
      }
    };

    registerLanguage();
  }, [language]);


  return (
    <pre className={styles.hilghlighter}>
      <code className={`language-${language}`} ref={codeRef}>
        {code}
      </code>
    </pre>
  );
}
