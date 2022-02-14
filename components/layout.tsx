import Link from "next/link";
import Head from "next/head";
import { faGithub, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen text-gray-800 transition duration-1000 ease-in-out dark:text-white dark:bg-blueGray-700">
      <Head>
        <title>Palak Singhal</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div
        style={{ minWidth: "24rem", maxWidth: "37rem" }}
        className="flex flex-col items-center justify-center w-2/3"
      >
        <motion.div layoutId="nav" className="flex flex-wrap justify-center leading-6">
          <Link href="/" passHref>
            <button className="w-24 py-1 text-xs leading-6 tracking-widest border border-gray-300 rounded-full dark:hover:border-pink-500 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-pink-500">
              HOME
            </button>
          </Link>
          <Link href="/about" passHref>
            <button className="w-24 py-1 mx-2 text-xs leading-6 tracking-widest border border-gray-300 rounded-full dark:hover:border-pink-500 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-pink-500">
              ABOUT
            </button>
          </Link>
        </motion.div>
        <motion.div
          layoutId="border-div"
          className="flex flex-col items-center justify-center w-full py-8 my-6 border-t border-b border-gray-300 dark:border-white"
        >
          <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
        </motion.div>
        <motion.div layoutId="social-icons" className="flex items-center justify-center">
          <a
            className="text-gray-400 dark:text-white hover:text-lightBlue-600 dark:hover:text-pink-500"
            href="https://github.com/palak-singhal"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="mr-6 text-2xl " icon={faGithub} />
          </a>
          <a
            className="text-gray-400 dark:text-white hover:text-lightBlue-600 dark:hover:text-pink-500"
            href="https://twitter.com/palak_mit"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="mr-6 text-2xl" icon={faTwitter} />
          </a>
          <a
            className="text-gray-400 dark:text-white hover:text-lightBlue-600 dark:hover:text-pink-500"
            href="https://www.linkedin.com/in/palak-singhal-10485339/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="mr-6 text-2xl" icon={faLinkedinIn} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
