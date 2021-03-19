import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>My Posts</h1>
        <p>
          This is one post of many posts <span>19/03/20</span>{" "}
        </p>
        <p>
          This is one post of many posts <span>19/03/20</span>{" "}
        </p>
        <p>
          This is one post of many posts
          <span>19/03/20</span>{" "}
        </p>
        <input type="text" />
        <button>Send post</button>
      </main>
    </div>
  );
}
