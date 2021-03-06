import Head from "next/head";
import Header from "./Header";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto my-7">{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: "Welcome to Isaac Khan's Blog",
  keywords:
    "Isaac Khan, Isaac, Khan, development, coding, Web Development, web",
  description: "The Best Info and News In Web Dev",
};
