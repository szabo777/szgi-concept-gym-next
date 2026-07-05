export default function ProgressPathBackground() {
    return (
      <div className="progressPathBackground" aria-hidden="true">
        <svg
          className="progressPathSvg"
          viewBox="0 0 1000 520"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="progressDotGradient" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="38%" stopColor="#ff5a60" stopOpacity="1" />
              <stop offset="100%" stopColor="#ff1e27" stopOpacity="1" />
            </radialGradient>
  
            <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff1e27" stopOpacity="0" />
              <stop offset="55%" stopColor="#ff1e27" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#ff1e27" stopOpacity="0.95" />
            </linearGradient>
          </defs>
  
          <path
            id="progressPath"
            d="M40 440 L190 285 L325 350 L505 185 L675 255 L840 80 L960 145"
            fill="none"
            stroke="none"
            pathLength="1000"
          />
  
          <path
            className="progressBasePath"
            d="M40 440 L190 285 L325 350 L505 185 L675 255 L840 80 L960 145"
            pathLength="1000"
          />
  
          <path
            className="progressMovingTrail"
            d="M40 440 L190 285 L325 350 L505 185 L675 255 L840 80 L960 145"
            pathLength="1000"
          >
            <animate
              attributeName="stroke-dashoffset"
              dur="26s"
              repeatCount="indefinite"
              calcMode="linear"
              keyTimes="0; 0.15; 0.22; 0.35; 0.42; 0.55; 0.62; 0.75; 0.82; 1"
              values="1000; 840; 840; 660; 660; 470; 470; 280; 280; 0"
            />
          </path>
  
          <circle className="progressDot" r="4.5" fill="url(#progressDotGradient)">
            <animateMotion
              dur="26s"
              repeatCount="indefinite"
              calcMode="linear"
              keyTimes="0; 0.15; 0.22; 0.35; 0.42; 0.55; 0.62; 0.75; 0.82; 1"
              keyPoints="0; 0.16; 0.16; 0.34; 0.34; 0.53; 0.53; 0.72; 0.72; 1"
            >
              <mpath href="#progressPath" />
            </animateMotion>
          </circle>
        </svg>
      </div>
    );
  }