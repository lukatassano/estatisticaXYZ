import React from "react";

import { Container } from "./styles";

interface Props {
  color: string;
}

const Logo: React.FC<Props> = ({ color }) => {
  return (
    <Container color={color} className="tit">
      <svg
        width="763"
        height="229"
        viewBox="0 0 763 229"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="x"
          d="M300.84 141.31L311.81 152.3L290.3 173.77L311.77 195.28L300.78 206.25L279.31 184.74L257.8 206.21L246.83 195.22L268.34 173.75L246.87 152.24L257.86 141.27L279.33 162.78L300.84 141.31Z"
          fill="#000"
        />
        <path
          className="y"
          d="M375.73 141.39L386.7 152.38L361.62 177.41L361.59 206.31L346.01 206.29L346.04 177.39L321.01 152.31L332 141.34L353.84 163.32L375.73 141.39Z"
          fill="#000"
        />
        <path
          className="z"
          d="M469.34 143.45L427.34 190.33L464.93 190.37L464.91 206.62L390.62 206.55L432.62 159.67L396.93 159.63L396.95 143.38L469.34 143.45Z"
          fill="#000"
        />
        <path
          className="estatistica"
          d="M270.68 104.12C271.66 104.12 271.82 104.12 272.72 104.12L272.71 117.66C271.81 117.66 271.65 117.66 270.67 117.66C256.4 117.65 244.91 106.14 244.92 91.8597L244.93 85.0098C244.94 70.7398 256.45 59.2498 270.73 59.2598C285.01 59.2698 296.57 70.7798 296.56 85.0598C296.56 85.9598 296.55 93.9498 296.55 93.9498L258.71 93.9098C259.67 99.7098 264.81 104.12 270.68 104.12ZM270.79 72.8098C265.82 72.8098 261.33 75.8997 259.53 80.2997L281.96 80.3198C280 75.9998 275.85 72.8098 270.79 72.8098Z"
          fill="#fff"
        />
        <path
          className="estatistica"
          d="M337.83 72.97C330.9 72.96 325.59 77.33 325.59 82.98L325.58 95.97C325.57 108.32 313.57 117.7 299.71 117.69C298.81 117.69 298.57 117.69 297.67 117.69L297.68 105.97C298.58 105.97 298.82 105.97 299.72 105.97C306.65 105.98 311.96 101.61 311.96 95.96L311.97 82.97C311.98 70.62 323.98 61.24 337.84 61.25C338.74 61.25 338.98 61.25 339.88 61.25L339.87 72.97C338.97 72.97 338.73 72.97 337.83 72.97Z"
          fill="#fff"
        />
        <path
          className="estatistica"
          d="M351.67 44.3398L365.29 44.3499L365.27 61.3998L379.54 61.4099L379.53 72.9099L365.26 72.8998L365.24 93.2698C365.23 99.7898 370.53 104.24 377.46 104.25C378.36 104.25 378.6 104.25 379.5 104.25L379.49 117.79C378.59 117.79 378.35 117.79 377.45 117.79C363.59 117.78 351.61 107.53 351.62 93.2599L351.64 72.8899L344.87 72.8799L344.88 61.3799L351.65 61.3899L351.67 44.3398Z"
          fill="#fff"
        />
        <path
          className="estatistica"
          d="M396.37 117.28L384.55 110.01L417.71 58.9399L450.77 110.08L438.94 117.33L434.62 110.31L400.69 110.28L396.37 117.28ZM417.69 82.64L409.03 96.6599L426.32 96.6799L417.69 82.64Z"
          fill="#fff"
        />
        <path
          className="estatistica"
          d="M451.98 44.4399L465.6 44.45L465.58 61.4999L479.85 61.5099L479.84 72.5599L465.57 72.5499L465.55 93.1799C465.54 99.6999 470.84 104.35 477.77 104.35C478.67 104.35 478.91 104.35 479.81 104.35L479.8 117.89C478.9 117.89 478.66 117.89 477.76 117.89C463.9 117.88 451.92 107.44 451.93 93.1599L451.95 72.5299L445.18 72.5199L445.19 61.4699L451.96 61.4799L451.98 44.4399Z"
          fill="#fff"
        />
        <path
          className="estatistica"
          d="M502.06 37.75L509.31 44.89L496.9 57.36L489.65 50.22L502.06 37.75ZM503.62 117.91L490 117.9L490.06 61.52L503.68 61.53L503.62 117.91Z"
          fill="#fff"
        />
        <path
          className="estatistica"
          d="M553.91 72.63C546.98 72.62 541.83 77.55 541.82 83.19L541.81 96.18C541.8 108.53 529.8 117.91 515.94 117.9C515.04 117.9 514.8 117.9 513.9 117.9L513.91 106.18C514.81 106.18 515.05 106.18 515.95 106.18C522.88 106.19 528.19 101.82 528.19 96.17L528.2 83.18C528.21 70.83 540.21 61.45 554.07 61.46C554.97 61.46 555.21 61.46 556.11 61.46L556.1 72.63C555.21 72.64 554.81 72.64 553.91 72.63Z"
          fill="#fff"
        />
        <path
          className="estatistica"
          d="M566.62 44.5498L580.24 44.5598L580.22 61.6098L594.49 61.6198L594.48 72.6698L580.21 72.6598L580.19 93.0298C580.18 99.5498 585.48 104.46 592.41 104.47C593.31 104.47 593.55 104.47 594.45 104.47L594.44 118C593.54 118 593.3 118 592.4 118C578.54 117.99 566.56 107.28 566.57 93.0098L566.59 72.6398L559.82 72.6298L559.83 61.5798L566.6 61.5898L566.62 44.5498Z"
          fill="#fff"
        />
        <path
          className="estatistica"
          d="M619.71 49.4198C619.71 53.9098 616.03 57.5698 611.55 57.5698C607.06 57.5698 603.32 53.8898 603.32 49.4098C603.32 44.9198 607.08 41.2598 611.57 41.2598C616.05 41.2598 619.71 44.9298 619.71 49.4198ZM618.25 118.03L604.63 118.02L604.69 61.6398L618.31 61.6497L618.25 118.03Z"
          fill="#fff"
        />
        <path
          className="estatistica"
          d="M657.97 75.0199C650.33 75.0099 644.25 81.1699 644.24 88.8099C644.23 96.4499 650.3 102.53 657.94 102.54C661.71 102.54 664.94 101.17 667.89 98.4099L678.47 109.56C673.49 114.53 665.94 117.92 657.93 117.92C641.82 117.9 628.85 104.82 628.87 88.7099C628.89 72.5999 641.88 59.6299 657.99 59.6499C666 59.6599 672.62 62.6099 678.51 68.0499L667.91 79.1799C664.87 76.4099 661.74 75.0299 657.97 75.0199Z"
          fill="#fff"
        />
        <path
          className="estatistica"
          d="M694.2 117.96L682.38 110.69L715.54 59.23L748.6 110.75L736.77 118L732.45 110.98L698.52 110.95L694.2 117.96ZM715.52 83.32L706.86 97.34L724.15 97.36L715.52 83.32Z"
          fill="#fff"
        />
        <path
          className="logo"
          d="M127.799 152.4L204.829 202.08C206.469 203.14 208.659 202.29 209.159 200.4L218.389 165.57C218.919 163.56 217.739 161.5 215.739 160.94L148.389 142.24C141.349 140.29 133.819 142.62 129.119 148.22L127.469 150.19C126.889 150.88 127.039 151.92 127.799 152.4Z"
          fill="#999"
        />
        <path
          className="logo"
          d="M181.519 34.2402H214.999L105.659 160.49L84.1193 186.15C74.4993 197.61 60.2993 204.23 45.3293 204.23H10.0293L119.369 77.9803L142.029 52.1403C151.989 40.7603 166.389 34.2402 181.519 34.2402Z"
          fill="#999"
        />
        <path
          className="logo"
          d="M102.08 78.9702L52.5701 34.9902C50.8101 33.4202 48.1301 33.5002 46.4601 35.1702L20.9101 60.7202C19.7001 61.9302 20.1301 64.0002 21.7301 64.6202L79.7901 87.2002C87.6901 90.2702 96.6701 88.0702 102.25 81.6802C102.94 80.8802 102.87 79.6802 102.08 78.9702Z"
          fill="#999"
        />
      </svg>
    </Container>
  );
};

export default Logo;