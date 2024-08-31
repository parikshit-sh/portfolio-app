import "../index.css"
const Footer = () => {
  return (
    <footer className="footer text-center py-4 pt-20 text-[#FAF9F6] bg-transparent flex justify-between items-center">
      <p className="text-sm px-4">
        
      </p>
        <p className="footer-text">&copy;{new Date().getFullYear()} FOLIO</p>
    </footer>
  );
};

export default Footer;
