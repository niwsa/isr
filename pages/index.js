import Link from "next/link";
import Layout from "components/layout";
import styles from "styles/Card.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [id, setId] = useState(1);

  useEffect(() => {
    setId(Math.floor(Math.random() * 5) + 1);
  }, []);

  return (
    <Layout>
      <Link href={`/avacado/${id}`}>
        <a className={styles.card}>
          <div className={styles.id}>{id}</div>
          <h2>Avacado</h2>
          <p>
            The avocado, a tree likely originating from south-central Mexico, is
            classified as a member of the flowering plant family Lauraceae.
          </p>
        </a>
      </Link>
      <Link href={`/orange/${id}`}>
        <a className={styles.card}>
          <div className={styles.id}>{id}</div>
          <h2>Orange</h2>
          <p>
            The orange is the fruit of various citrus species in the family
            Rutaceae; it primarily refers to Citrus × sinensis, which is also
            called sweet orange.
          </p>
        </a>
      </Link>
      <Link href={`/orange/https%3A%2F%2Fgoogle.com`}>
        <a className={styles.card}>
          <div className={`${styles.id} ${styles.url}`}>
            URL as dynamic parameter
          </div>
          <h2>URL as id</h2>
          <p>URL Encoded dynamic parameter</p>
        </a>
      </Link>
    </Layout>
  );
}
