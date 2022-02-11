import { ReactComponent as GithubIcon } from 'assets/images/github.svg';
import React from 'react';
import './styles.css';

function Footer() {
  return (
    <footer className="footer-container bg-primary">
      <div className="footer-content">
        <div className="footer-text">
          <p>Desenvolvido por - </p>
          <a
            href="https://github.com/augustocesarsousa"
            target="_blank"
            rel="noreferrer"
          >
            <div className="footer-contact-container">
              <GithubIcon />
              <p className="footer-contact-link">/augustocesarsousa</p>
            </div>
          </a>
        </div>
        <div className="footer-text">
          <p>
            Curso Spring React da{' '}
            <a
              href="https://devsuperior.com.br/cursos"
              target="_blank"
              rel="noreferrer"
            >
              DevSuperior
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
