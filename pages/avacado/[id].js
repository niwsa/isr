import Layout from "components/layout";
import styles from "styles/Card.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Avacado({ ts, id }) {
  const { isFallback } = useRouter();
  return (
    <Layout ts={ts} id={id} isFallback={isFallback}>
      <div className={styles.card}>
        <Image src="/avacado.jpeg" width="400" height="350" />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const ts = new Date().toLocaleString();
  const { id } = params;
  console.log(`revalidating 🥑 ${id}`);
  return {
    props: {
      ts,
      id: `${id} `,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: "blocking",
  };
}
