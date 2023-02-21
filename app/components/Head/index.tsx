import React from "react";
import Head from "next/head";

export const CustomHead = () => {
  return (
    <Head>
      <title>My page title</title>
      <meta property="og:title" content="My page title" key="title" />
    </Head>
  );
};
