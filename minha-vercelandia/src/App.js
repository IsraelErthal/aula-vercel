import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "/.App.css"
import fotoIsrael from "../assets/israel.jpg";

/* ── Ícones SVG inline ── */
const IconGitHub = () => (
  <svg className="isr-social-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const IconInstagram = () => (
  <svg className="isr-social-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

/* ── Animação do terminal ── */
const TERM_LINES = [
  { type: "prompt", text: "$ israel.run()" },
  { type: "out-green", text: "// Inicializando perfil..." },
  { type: "out-green", text: "✔ Dev mode ativado" },
  { type: "out-muted", text: "→ Carregando habilidades..." },
];

function TerminalHero() {
  const [visible, setVisible] = useState([]);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const reveal = () => {
      if (i < TERM_LINES.length) {
        const index = i;
        setVisible((v) => [...v, index]);
        i++;
        setTimeout(reveal, 420);
      }
    };
    const t = setTimeout(reveal, 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="isr-terminal-header" role="img" aria-label="Terminal animado mostrando inicialização do perfil">
      <div className="isr-term-bar">
        <span className="isr-term-dot" />
        <span className="isr-term-dot" />
        <span className="isr-term-dot" />
        <span className="isr-term-title">israel@portfolio ~ zsh</span>
      </div>
      <div className="isr-term-body" aria-hidden="true">
        {TERM_LINES.map((line, i) => (
          <span
            key={i}
            className={`isr-term-line ${visible.includes(i) ? "isr-visible" : ""} isr-${line.type}`}
          >
            {line.type === "prompt" ? (
              <>
                <span className="isr-prompt">$ </span>
                <span className="isr-cmd">{line.text.slice(2)}</span>
              </>
            ) : (
              line.text
            )}
          </span>
        ))}
        {visible.length === TERM_LINES.length && (
          <span className="isr-term-line isr-visible isr-prompt">
            $ <span className="isr-cursor" />
          </span>
        )}
      </div>
    </div>
  );
}

/* ── Componente principal ── */
export default function Israel() {
  return (
    <div className="isr-root">
      <div className="isr-wrap">

        {/* Botão voltar */}
        <Link to="/" className="isr-back">
          ← cd ..
        </Link>

        {/* ── HERO ── */}
        <header className="isr-hero">
          <div className="isr-avatar-ring">
            <div className="isr-avatar-inner">
              { <img src={fotoIsrael} alt="Foto de Israel Erthal" />}
            </div>
          </div>

          <TerminalHero />

          <h1 className="isr-name">
            Israel <span>Erthal</span>
          </h1>
          <p className="isr-role">Dev · Robótica · Em Formação</p>

          <div className="isr-badges">
            {["#React", "#Java", "#Robotics", "#Sports", "#Games"].map((b) => (
              <span key={b} className="isr-badge">{b}</span>
            ))}
          </div>

          {/* Redes sociais */}
          <nav className="isr-social" aria-label="Redes sociais">
            <a
              href="https://github.com/IsraelErthal"
              target="_blank"
              rel="noopener noreferrer"
              className="isr-social-link"
              aria-label="GitHub de Israel Erthal"
            >
              <IconGitHub />
              IsraelErthal
            </a>
            <a
              href="https://www.instagram.com/raelerthal/"
              target="_blank"
              rel="noopener noreferrer"
              className="isr-social-link"
              aria-label="Instagram de Israel Erthal"
            >
              <IconInstagram />
              raelerthal
            </a>
          </nav>
        </header>

        {/* ── SOBRE MIM ── */}
        <section className="isr-section" style={{ animationDelay: "0.1s" }}>
          <div className="isr-section-head">
            <span className="isr-section-num">01</span>
            <h2>sobre.md</h2>
          </div>
          <div className="isr-section-body">
            <p className="isr-about-text">
              Sou <strong>estudante de programação</strong> apaixonado por criar, por{" "}
              <strong>robótica</strong> e por desafios que me fazem crescer. Estou construindo
              minha trajetória com dedicação, curiosidade e muita vontade de transformar{" "}
              <strong>ideias em soluções reais</strong>.
            </p>
          </div>
        </section>

        {/* ── FORMAÇÃO ── */}
        <section className="isr-section" style={{ animationDelay: "0.2s" }}>
          <div className="isr-section-head">
            <span className="isr-section-num">02</span>
            <h2>educacao.log</h2>
          </div>
          <div className="isr-section-body">
            <div className="isr-timeline">
              <div className="isr-tl-item">
                <div className="isr-tl-left">
                  <div className="isr-tl-dot" />
                  <div className="isr-tl-line" />
                </div>
                <div className="isr-tl-content">
                  <span className="isr-tl-tag">EM ANDAMENTO</span>
                  <h3>Ensino Médio</h3>
                  <p>Cursando 3° ano — reta final da educação básica.</p>
                </div>
              </div>
              <div className="isr-tl-item">
                <div className="isr-tl-left">
                  <div className="isr-tl-dot" />
                  <div className="isr-tl-line" />
                </div>
                <div className="isr-tl-content">
                  <span className="isr-tl-tag">EM ANDAMENTO</span>
                  <h3>Desenvolvimento de Sistemas — SENAI</h3>
                  <p>Formação técnica em desenvolvimento de software full-stack.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── INTERESSES ── */}
        <section className="isr-section" style={{ animationDelay: "0.3s" }}>
          <div className="isr-section-head">
            <span className="isr-section-num">03</span>
            <h2>interesses.json</h2>
          </div>
          <div className="isr-section-body">
            <div className="isr-cards-grid">
              <div className="isr-card">
                <span className="isr-card-icon">💻</span>
                <h3>Programação</h3>
                <p>Transformando ideias em soluções que funcionam de verdade.</p>
              </div>
              <div className="isr-card">
                <span className="isr-card-icon">🤖</span>
                <h3>Robótica</h3>
                <p>Unindo hardware e software para criar coisas inteligentes.</p>
              </div>
              <div className="isr-card">
                <span className="isr-card-icon">⚽</span>
                <h3>Esportes</h3>
                <p>Disciplina e trabalho em equipe dentro e fora do campo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="isr-footer">
          <p className="isr-footer-term">
            <span>$</span> echo "Feito com ♥ por Israel" — {new Date().getFullYear()}
          </p>
        </footer>

      </div>
    </div>
  );
}