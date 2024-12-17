interface Props {
  children?: React.ReactNode;
  phrase: string | undefined;
}

const QuoteBox = ({ children, phrase }: Props) => {
  return (
    <section className="grid gap-6 justify-items-center">
      <article className="bg-gradient-to-b scroll-container font-outline from-[#b7b7d2] overflow-hidden rounded-3xl p-4 text-3xl w-[min(100%,_500px)] h-80">
        <p>{phrase} </p>
      </article>
      {children}
    </section>
  );
};
export default QuoteBox;
