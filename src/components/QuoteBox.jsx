const QuoteBox = ({ phrase, handleChangeQuote }) => {
  return (
    <div className="flex flex-col items-center gap-16 pb-8">
      <article className="scroll-container text-4xl overflow-y-scroll max-h-[400px] text-[#573675] rounded-[50px] text-center flex justify-center items-center max-w-[600px] bg-gradient-to-b from-[#b7b7d2] p-10" >
        <p className="leading-[45px] text-4xl font-bold">{phrase}</p>
      </article>

      <button
        className="bg-white text-5xl rounded-full h-12 w-12"
        onClick={handleChangeQuote}
      >
        <i className='bx bx-refresh text-[#573675]'></i>
      </button>
    </div>
  );
};

export default QuoteBox;
