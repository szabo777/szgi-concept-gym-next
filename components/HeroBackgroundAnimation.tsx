export default function HeroBackgroundAnimation() {
    return (
      <div className="heroBgAnimation" aria-hidden="true">
        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />
  
        <svg
          className="heroLinesSvg"
          viewBox="0 0 1200 520"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="redLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff1e27" stopOpacity="0" />
              <stop offset="42%" stopColor="#ff1e27" stopOpacity="0.42" />
              <stop offset="72%" stopColor="#ff7a45" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#ff1e27" stopOpacity="0" />
            </linearGradient>
  
            <radialGradient id="dotGradient" cx="50%" cy="50%" r="58%">
              <stop offset="0%" stopColor="#ff3b3b" stopOpacity="1" />
              <stop offset="38%" stopColor="#ff101c" stopOpacity="1" />
              <stop offset="72%" stopColor="#ff000c" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#ff000c" stopOpacity="0" />
            </radialGradient>
          </defs>
  
          <path
            className="heroLine heroLineOne"
            d="M 80 190 C 260 90, 420 135, 555 230 S 845 360, 1120 160"
          />
  
          <path
            className="heroLine heroLineTwo"
            d="M 120 330 C 310 220, 440 280, 610 170 S 900 95, 1110 290"
          />
  
          <path
            className="heroLine heroLineThree"
            d="M 360 65 C 455 170, 380 305, 545 370 S 820 430, 1010 150"
          />
  
          <path
            className="dotTrianglePath dotTrianglePathOne"
            d="M 250 210 L 292 172 L 330 232 Z"
          />
          <path
            className="dotTrianglePath dotTrianglePathTwo"
            d="M 610 150 L 555 112 L 665 105 Z"
          />
          <path
            className="dotTrianglePath dotTrianglePathThree"
            d="M 900 285 L 950 245 L 938 330 Z"
          />
  
          <circle className="heroDot heroDotOne" r="2.5">
            <animateMotion
              dur="24s"
              repeatCount="indefinite"
              path="M 250 210 L 292 172 L 330 232 Z"
            />
          </circle>
  
          <circle className="heroDot heroDotTwo" r="3">
            <animateMotion
              dur="26s"
              repeatCount="indefinite"
              path="M 610 150 L 555 112 L 665 105 Z"
            />
          </circle>
  
          <circle className="heroDot heroDotThree" r="2.5">
            <animateMotion
              dur="30s"
              repeatCount="indefinite"
              path="M 900 285 L 950 245 L 938 330 Z"
            />
          </circle>
        </svg>
      </div>
    );
  }