import { type AppProps, type AppType } from "next/app";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import Head from "next/head";

const myFont = localFont({ src: "./stencil.otf" });

const MyApp: AppType = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <Head>
        <title>CYC Leader&apos;s Reunion | FGA CYC</title>
      </Head>
      <main
        className={`flex min-h-screen flex-col bg-[url('/red.png')] bg-cover bg-center bg-no-repeat ${myFont.className}`}
      >
        <AnimatePresence mode="wait">
          <Layout>
            <Component {...pageProps} key={router.asPath} />
          </Layout>
        </AnimatePresence>
      </main>
    </>
  );
};

export default MyApp;
