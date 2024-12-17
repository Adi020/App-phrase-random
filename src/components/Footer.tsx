const Footer = ({ author }: { author: string | undefined }) => {
  return (
    <footer className="text-white text-center">
      <h3>author: {author}</h3>
    </footer>
  );
};

export default Footer;
