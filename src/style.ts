import { styled } from "styled-components";

const MainStyle = styled.div`
  @media screen and (max-width: 600px) {
    .main-section {
      h1 {
        font-size: 27pt !important;
      }

      p {
        font-size: 13pt !important;
      }

      .mouse {
        margin-bottom: 5rem !important;
      }

      .wave {
        display: none !important;
      }
    }

    .services {
      h2 {
        font-size: 22pt !important;
      }

      div {
        flex-direction: column !important;
        text-align: center !important;
      }
    }

    .portfolio {
      h2 {
        font-size: 22pt !important;
      }
      div {
        flex-direction: column !important;
      }
    }

    .about {
      padding: 5rem 0 !important;
      h2 {
        font-size: 22pt !important;
      }

      p {
        font-size: 12pt !important;
      }

      div {
        width: 100% !important;
      }
    }

    .contact {
      padding: 5rem 0 !important;
      h2 {
        font-size: 22pt !important;
      }

      p {
        font-size: 12pt !important;
      }

      i {
        font-size: 12pt !important;
      }
    }
  }

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
    text-align: center;
    background-color: #272433;

    h1 {
      font-size: 45pt;
    }

    p {
      color: #fff;
      font-weight: 100;
      font-size: 18pt;
      margin-top: 0.2rem;
    }

    .mouse {
      max-width: 2.5rem;
      width: 100%;
      height: auto;
      position: absolute;
      bottom: 0;
      margin-bottom: 1rem;
      z-index: 6;
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
    background-color: #966dfd;
    padding-top: 5rem;

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 2rem;
      }
    }

    h2 {
      color: #fff;
      text-align: center;
      font-size: 30pt;
    }

    p {
      color: #fff;
      font-size: 18pt;
      font-weight: 600;
      margin-top: 10px;
    }
  }

  .portfolio {
    background-color: #272433;
    padding: 5rem;

    h2 {
      color: #8254f6;
      text-align: center;
      font-size: 30pt;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      div {
        background-color: #000;
        width: 24rem;
        height: 14rem;
        margin: 2rem;
        border-radius: 1rem;

        iframe {
          border-radius: 1rem;
        }
      }
    }
  }

  .about {
    background-color: #fff;
    padding: 5rem;

    h2 {
      color: #8254f6;
      text-align: center;
      font-size: 30pt;
      margin-bottom: 2rem;
    }

    p {
      margin: 1rem;
      font-size: 18pt;
      font-weight: 500;
    }
  }

  .contact {
    background-color: #272433;
    padding: 5rem;

    h2 {
      color: #fff;
      text-align: center;
      font-size: 30pt;
      margin-bottom: 2rem;
    }

    p {
      margin: 1rem;
      color: white;
      font-size: 18pt;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default MainStyle;
