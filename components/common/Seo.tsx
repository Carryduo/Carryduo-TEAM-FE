import Head from "next/head";

interface SeoProps {
  title: string;
}

const Seo = ({ title }: SeoProps) => {
  return (
    <Head>
      <title>Carryduo | {title}</title>
    </Head>
  );
};

export default Seo;
