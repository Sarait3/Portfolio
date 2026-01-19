function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">© {year} Sara Aithssayene. All rights reserved.</p>

      </div>
    </footer>
  );
}

export default Footer;
