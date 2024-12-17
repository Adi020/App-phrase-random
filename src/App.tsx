import Footer from './components/Footer';
import Header from './components/Header';
import { QuoteBox } from './components/QuoteBox';
import { useApi } from './hooks/useApi';
import { PhraseParams } from './models/getInfoServices.model';
import { Phrase, PhrasesResponse } from './models/phrases.model';

import { getPhrases } from './services/phrasesApi.service';

function App() {
  const [[phrases, loadingPhrases]] = useApi<PhrasesResponse, PhraseParams, Phrase>(getPhrases, {
    params: [{ limit: 2 }, (data) => data.currentPage],
    defaultValue: [],
  });

  phrases.return(
    <main className=" bg-gray-700  min-h-screen">
      <Header />
      <QuoteBox />
      <Footer />
    </main>
  );
}

export default App;
