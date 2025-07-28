export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="87"
      height="32"
      viewBox="0 0 87 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="16" x2="87" y2="16" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A3FF12"/>
          <stop offset="1" stopColor="#00FFEE"/>
        </linearGradient>
      </defs>
      <text
        x="0"
        y="25"
        fontFamily="Plus Jakarta Sans, sans-serif"
        fontSize="32"
        fontWeight="bold"
        fill="url(#logo-gradient)"
      >
        Wepp
      </text>
    </svg>
  );
