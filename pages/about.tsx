import { motion } from "framer-motion";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <motion.div
        key="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center justify-center"
      >
        <div className="mb-6 text-center text-gray-800 dark:text-white">
          I am a detailed-oriented, responsible and committed Engineer. Delivering assigned task on
          time and with high quality is my passion. With around 7 years of experience combining
          native android development experience, React Native experience along with experience in
          AWS (Amazon Web Services) & Node.JS, I involve myself in client interaction, estimating
          the projects, designing phase, database design, APIs architecture, UI and logical
          implementation of the application.
        </div>
        <div className="text-center text-gray-800 dark:text-white">
          In addition to coding and learning new tech, I enjoy biking, cooking and playing legos
          with my little one. If any of these things interest you too, I&apos;d love to chat!
        </div>
      </motion.div>
    </Layout>
  );
}
