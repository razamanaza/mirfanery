import Head from "next/head";
// import { Inter } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://https://mirfanery.ru" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Мирфанеры</title>

        <meta name="title" content="Мирфанеры" />
        <meta
          name="description"
          content="Фанера любых марок в наличии на складе. Доставка по Приморскому краю."
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Russian" />
        <meta name="author" content="Мирфанеры" />

        <meta property="og:title" content="Мирфанеры" />
        <meta property="og:site_name" content="Мирфанеры" />
        <meta property="og:url" content="https://https://mirfanery.ru" />
        <meta
          property="og:description"
          content="Фанера любых марок в наличии на складе. Доставка по Приморскому краю."
        />
        <meta property="og:type" content="" />
        <meta property="og:image" content="https://mirfanery.ru/og-image.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@mirfanery" />
        <meta name="twitter:creator" content="@mirfanery" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
    </>
  );
}
