import Navbar from "./components/Navbar";
import MainStyle from "./style";
import {
  MdOndemandVideo,
  MdSmartphone,
  MdBrush,
  MdEmail,
} from "react-icons/md";
import { FaBullhorn, FaInstagram } from "react-icons/fa";

function App() {
  return (
    <MainStyle>
      <Navbar />
      <div className="main-section">
        <h1>O DESIGN NUNCA MAIS SERÁ O MESMO</h1>
        <p>
          Somos a <span style={{ fontWeight: 600 }}>Equipe Rocket</span>, uma
          empresa que usa o poder de transformação do design para você{" "}
          <span style={{ fontWeight: 600 }}>lucrar mais.</span>
        </p>
        <svg
          className="mouse"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 76 130"
          preserveAspectRatio="xMidYMid meet"
        >
          <g fill="none" fill-rule="evenodd">
            <rect
              width="70"
              height="118"
              x="1.5"
              y="1.5"
              stroke="#FFF"
              stroke-width="3"
              rx="36"
            />
            <circle
              className="scroll"
              cx="36.5"
              cy="31.5"
              r="4.5"
              fill="#FFF"
            />
          </g>
        </svg>
        <svg
          style={{ position: "absolute", bottom: 0 }}
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#966dfd"
            fill-opacity="1"
            d="M0,160L26.7,154.7C53.3,149,107,139,160,160C213.3,181,267,235,320,245.3C373.3,256,427,224,480,186.7C533.3,149,587,107,640,112C693.3,117,747,171,800,192C853.3,213,907,203,960,218.7C1013.3,235,1067,277,1120,282.7C1173.3,288,1227,256,1280,240C1333.3,224,1387,224,1413,224L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div id="services" className="services">
        <h2>Serviços disponíveis</h2>
        <div>
          <div>
            <div>
              <MdOndemandVideo color="#fff" size={100} />
              <p>Edição de vídeos</p>
              <p style={{ fontSize: 14, fontWeight: 400 }}>
                Temos editores para legendar, cortar e melhorar os seus vídeos.
              </p>
            </div>
            <div>
              <FaBullhorn color="#fff" size={100} />
              <p>Criação de anúncios</p>
              <p style={{ fontSize: 14, fontWeight: 400 }}>
                Quem não é visto não é lembrado, tenha anúncios chamativos.
              </p>
            </div>
          </div>
          <div>
            <div>
              <MdBrush color="#fff" size={100} />
              <p>Vinhetas / Introduções</p>
              <p style={{ fontSize: 14, fontWeight: 400 }}>
                Possuir uma vinheta trás autoridade e qualidade.
              </p>
            </div>
            <div>
              <MdSmartphone color="#fff" size={100} />
              <p>Posts para redes sociais</p>
              <p style={{ fontSize: 14, fontWeight: 400 }}>
                Ganhe a atenção do seu público na maior vitrine do mundo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="portfolio" className="portfolio">
        <h2>Nosso portfólio</h2>
        <div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/z2maNdTJl-0"
              width={"100%"}
              height={"100%"}
              title="YouTube video player"
              allowFullScreen={false}
            ></iframe>
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/kyno2JOOoHA"
              width={"100%"}
              height={"100%"}
              title="YouTube video player"
              allowFullScreen={false}
            ></iframe>
          </div>
        </div>
        <div>
          <div>
            <iframe
              width={"100%"}
              height={"100%"}
              src="https://www.youtube.com/embed/pFIdd8ZMac4"
              title="YouTube video player"
              allowFullScreen={false}
            ></iframe>
          </div>
          <div>
            <img
              width={"100%"}
              height={"100%"}
              src="https://raw.githubusercontent.com/fab-rodrigs/equipe-rocket-site/e02e3e1e5b2bd88e740850b8d654b030dd044425/src/assets/posts.svg"
              alt="Post para Instagram feito pela Equipe Rocket"
            />
          </div>
        </div>
      </div>
      <div id="about" className="about">
        <h2>Sobre a Equipe Rocket</h2>
        <div style={{ width: "80%", margin: "auto" }}>
          <p>Desde 2016 estamos desenvolvendo soluções para nossos clientes.</p>
          <p>
            Durante esse período nós erramos, aprendemos e melhoramos o nosso
            método de transformação. Você terá um resultado que{" "}
            <span style={{ fontWeight: 600, color: "#8254f6" }}>
              não seria possível atingir
            </span>{" "}
            sem toda a nossa experiência.
          </p>
          <p>
            Qualidade. Criatividade. Ousadia.{" "}
            <span style={{ fontWeight: 600, color: "#8254f6" }}>
              Isso é o que nos move.
            </span>
          </p>
        </div>
      </div>
      <div id="contact" className="contact">
        <h2>Entre em contato</h2>
        <p>
          <MdEmail style={{ marginRight: 10 }} size={40} />
          equiperocket.design@gmail.com
        </p>
        <p>
          <FaInstagram size={40} style={{ marginRight: 10 }} />
          equiperocket.design
        </p>
      </div>
    </MainStyle>
  );
}

export default App;
