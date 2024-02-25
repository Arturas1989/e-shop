import './Footer.css';

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-bar">
        <div className="copyright">© 2024 e-shop. All rights reserved</div>
        <div className="socials">
          <a href="/" target='_blank' rel='noreferer'><i className="bi bi-instagram"></i></a>
          <a href="/" target='_blank' rel='noreferer'><i className="bi bi-twitter"></i></a>
          <a href="/" target='_blank' rel='noreferer'><i className="bi bi-github"></i></a>
        </div>
      </div>
    </footer>
  )
};
