import Head from 'next/head';
import { Inter } from 'next/font/google';
import classes from 'src/styles/Home.module.css';
import { Header } from 'src/components/Header';
import { Footer } from 'src/components/Footer';
import { MainVisual } from 'src/components/MainVisual';
import { Aside } from 'src/components/Aside';
import { MainArticle } from 'src/components/MainArticle';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ブログテンプレート</title>
        <meta name="description" content="ブログのテンプレート" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.main}>
        <Header />
        <MainVisual />
        <MainArticle />
        <Aside />
        <Footer />
      </main>
    </>
  );
}
