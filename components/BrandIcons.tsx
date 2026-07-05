export function InstagramLogo({ size = 17 }: { size?: number }) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="brandIcon"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" />
      </svg>
    );
  }
  
  export function FacebookLogo({ size = 17 }: { size?: number }) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="brandIcon"
      >
        <path
          d="M14.4 8.2H17V4.4C16.5 4.3 15.4 4 14 4C11.1 4 9.1 5.8 9.1 9V12H6V16.2H9.1V22H13.4V16.2H16.8L17.4 12H13.4V9.4C13.4 8.6 13.7 8.2 14.4 8.2Z"
          fill="currentColor"
        />
      </svg>
    );
  }