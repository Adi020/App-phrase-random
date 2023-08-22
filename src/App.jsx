import { useState } from "react";
import dbQuotes from "./db/quote.json";
import { getRandom } from "./utils/random";
import QuoteBox from "./components/QuoteBox";
import { getRandomObject } from "./utils/randomObject";
import Footer from "./components/Footer";

const backgroundRoutes = ["space1", "space2", "space3", "space4"];

function App() {
  const [quote, setQuote] = useState(getRandom(dbQuotes));
  const [bgRoute, setBgRoute] = useState(getRandomObject(backgroundRoutes));

  const handleChangeQuote = () => {
    setQuote(getRandom(dbQuotes));
    setBgRoute(getRandomObject(backgroundRoutes));
  };

  return (
    <main
      className={`${bgRoute} px-7 bg-cover min-h-screen flex justify-between flex-col items-center max-[640px]:gap-16 gap-28`}
    >

<h1 className="pt-[10%] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]  font-outline text-[#f0f8ffae] text-[50px]">
        INFOGALAX
      </h1>

      <QuoteBox handleChangeQuote={handleChangeQuote} phrase={quote.phrase} />

      <Footer author={quote.author} />

    </main>
  );
}

export default App;
