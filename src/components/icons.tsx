export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="100"
      height="34"
      viewBox="0 0 100 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="17" x2="100" y2="17" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A8E063"/>
          <stop offset="1" stopColor="#56AB2F"/>
        </linearGradient>
      </defs>
      <text
        x="0"
        y="26"
        fontFamily="Plus Jakarta Sans, sans-serif"
        fontSize="26"
        fontWeight="bold"
        fill="url(#logo-gradient)"
      >
        Wepp
      </text>
    </svg>
  );
