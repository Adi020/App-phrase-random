import "./styles/QuoteBox.css"

const QuoteBox = ({phrase, handleChangeQuote}) => {
  return (
    <div className="quoteContainer">
    <section className="quoteBox bgColor">
      <article className="quoteBox__phrase"><p>{phrase}</p></article>
      
      </section>
      <button className="quoteBox__btn" onClick={handleChangeQuote}>
      <i className='bx bx-refresh'></i>
      </button>
      </div>
      
      
  )
}

export default QuoteBox