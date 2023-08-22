import React from "react";

const Footer = ({author}) => {
  return (
    <footer className="text-center text-2xl font-bold text-[#f0f8ff94]">
      <h3>Author: {author}</h3>
    </footer>
  );
};

export default Footer;
