import React from 'react';
import '../styles/global.css';
import Head from 'next/head';
import favicon from '../../public/favicon.ico';
import config from '../../config.json';

type Props = {
  title?: string;
};

const CustomHead = ({ title = config.title }: Props) => (
  <Head>
    <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
    <meta
      name="viewport"
      content="initial-scale=1.0, width=device-width"
      key="viewport"
      maximum-scale="1"
    />
    <title>{title}</title>
  </Head>
);

const App = ({ Component, pageProps }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <CustomHead />

      <div
        className="text-light-foreground dark:text-dark-foreground min-w-max text-xs md:min-w-full md:text-base"
        onClick={onClickAnywhere}
      >
        <main className="bg-light-background dark:bg-dark-background w-full h-full p-2">
          <Component {...pageProps} inputRef={inputRef} />
        </main>
      </div>
    </>
  );
};

export default App;
