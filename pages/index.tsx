import Layout from "../components/layout";
import { motion } from "framer-motion";
import Image from "next/Image";

export default function Home() {
  return (
    <Layout>
      <motion.div
        key="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
          <Image
            height={144}
            width={144}
            className="mb-8 rounded-full"
            src="/profile.jpg"
            alt="Katherine"
          />
          <h1 className="mx-auto text-2xl font-semibold tracking-widest text-center sm:text-3xl mt-6">
            PALAK SINGHAL
          </h1>
          <hr className="w-16 my-8 border-gray-300" />
          <h2 className="text-lg tracking-widest text-center">SOFTWARE ENGINEER</h2>
        </div>
      </motion.div>
    </Layout>
  );
}
