import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react"

import Navbar from "../../components/global/navbar";
import SupportedGames from "../../components/home/supported-games";
import ReadyToStart from "../../components/home/ready-to-start"
import Footer from "../../components/global/footer"
import Features from "../../components/home/features";
import PitchDeck from "../../components/home/pitch-deck"
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <PitchDeck />
      <SupportedGames />
      <Features />
      <ReadyToStart />
      <Footer />
    </div>
  );
};

export default Home;