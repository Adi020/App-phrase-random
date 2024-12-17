import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import QuoteBox from './components/QuoteBox';
import { FaArrowsRotate } from 'react-icons/fa6';

import { useApi } from './hooks/useApi';

import { getPhrases } from './services/phrasesApi.service';
import { getRandom, getRandomObj } from './utils/random';
import { Phrase, PhrasesResponse } from './models/phrases.model';
import Loader from './components/Loader';

const bgImages = ['space1', 'space2', 'space3', 'space4'];

function App() {
  const [phrase, setPhrase] = useState<Phrase | null>(null);
  const [bgImage, setBgImage] = useState('space1');
  const [[phrases, loadingPhrases]] = useApi(getPhrases, {
    params: [handleRandomPhrase],
  });

  function handleRandomPhrase(data: PhrasesResponse = phrases) {
    setPhrase(getRandom(data.phrases));
    setBgImage(getRandomObj(bgImages));
  }

  return (
    <main
      className={`${bgImage} p-2 bg-cover min-h-screen overflow-hidden flex flex-col justify-between items-center`}
    >
      <Header />

      {loadingPhrases ? (
        <Loader />
      ) : (
        <QuoteBox phrase={phrase?.phrase}>
          <button
            className="text-indigo-700 bg-white p-2 text-2xl rounded-full border-black border"
            onClick={() => handleRandomPhrase()}
          >
            <FaArrowsRotate />
          </button>
        </QuoteBox>
      )}

      <Footer author={phrase?.author.author} />
    </main>
  );
}

export default App;
