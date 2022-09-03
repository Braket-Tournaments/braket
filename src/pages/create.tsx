import type { NextPage } from "next";

import Navbar from "../../components/global/navbar";
import Footer from "../../components/global/footer";

const CreateTournament: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Footer />
    </div>
  );
};

export default CreateTournament;
