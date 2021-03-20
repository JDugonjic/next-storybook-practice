import styles from "./Post.module.scss";

function Post({ post, date }) {
  return (
    <>
      <p className={styles.post}>
        {post}
        <span>{date}</span>{" "}
      </p>
    </>
  );
}

export default Post;
