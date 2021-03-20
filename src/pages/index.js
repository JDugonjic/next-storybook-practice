import Head from "next/head";
import Button from "../components/Button/Button";
import Post from "../components/Post/Post";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const sendPost = () => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>My Posts</h1>
        <div className={styles.postsContainer}>
          <Post post="This is one of many posts" date="20/03/21" />
          <Post post="This is one of many posts" date="20/03/21" />
          <Post post="This is one of many posts" date="20/03/21" />
        </div>

        <form>
          <input className={styles.input} type="text" />
          <Button sendPost={sendPost} />
        </form>
      </main>
    </div>
  );
}
