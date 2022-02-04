import React, { useState } from "react";
import { Loader } from "../Components";
import Router from "next/router";

import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

import { Layout } from "../Components";

import "../styles/globals.scss";
import "../styles/styles.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  return (
    <>
      <Head>
        <html lang="en" />
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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta
          name="keywords"
          content="Programming,Technology,Scholarships,Jobs,Internships,JobFinder,InternshipFinder, ScholarshipForClass8,ScholarshipsForClassbelow10 , ScholarshipForClassabove10,intermediateScholarships"
        />
      </Head>
      <Layout>
        <DefaultSeo {...SEO} />
        {loading && <Loader />}
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}

export default MyApp;
