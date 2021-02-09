import Head from 'next/head';

import styles from '../styles/Home.module.css'
import props from './api/data';

function Tile(props) {
  return (
    <a href={props?.link} className={styles.card}>
      <h3>{props?.error?.title} &rarr;</h3>
      <p>{props?.para?.para?.para}</p>
    </a>
  );
}

export default function OptionalChainingExample() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {props.welcome}
        </h1>

        <p className={styles.description}>
          {props.content.descriptionPre}{' '}
          <code className={styles.code}>{props.content.descriptionPost}</code>
        </p>

        <div className={styles.grid}>
          {props.content.tiles.map(t => <Tile key={t.title} {...t} />)}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

OptionalChainingExample.getInitialProps = () => ({});