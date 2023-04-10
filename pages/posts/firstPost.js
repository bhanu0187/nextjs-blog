import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import Layout from "../../components/Layout";

const FirstPost = () => {
	return (
		<Layout>
			<Head>
				<title>First Post</title>
			</Head>
			<main>
				<h1>First Post</h1>
				<h2>
					<Link href='/'>Back to home</Link>
				</h2>
			</main>
		</Layout>
	);
};

export default FirstPost;
