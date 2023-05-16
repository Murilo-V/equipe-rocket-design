import { styled } from "styled-components";

const MainStyle = styled.div`
  h1 {
    color: #8254f6;
  }

  .main-section {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 35pt;
    }

    p {
      color: #fff;
      font-weight: 100;
      font-size: 14pt;
      margin-top: 0.2rem;
    }

    .mouse {
      max-width: 2.5rem;
      width: 100%;
      height: auto;
      position: absolute;
      bottom: 0;
      margin-bottom: 1rem;
      z-index: 7;
    }

    .scroll {
      animation-name: scroll;
      animation-duration: 1.5s;
      animation-timing-function: cubic-bezier(0.65, -0.55, 0.25, 1.5);
      animation-iteration-count: infinite;
      transform-origin: 50% 20.5px;
      will-change: transform, opacity;
      opacity: 1;
    }

    @keyframes scroll {
      0%,
      20% {
        transform: translateY(0) scaleY(1);
      }

      100% {
        transform: translateY(36px) scaleY(2);
        opacity: 0;
      }
    }
  }

  .services {
    background-image: linear-gradient(#8254f6, #272433);
    height: 100vh;
  }
`;

export default MainStyle;
