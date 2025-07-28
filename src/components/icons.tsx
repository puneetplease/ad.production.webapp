export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="200"
      height="28"
      viewBox="0 0 200 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="14" x2="200" y2="14" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A3FF12"/>
          <stop offset="1" stopColor="#00FFEE"/>
        </linearGradient>
      </defs>
      <text
        x="0"
        y="22"
        fontFamily="Plus Jakarta Sans, sans-serif"
        fontSize="26"
        fontWeight="bold"
        fill="url(#logo-gradient)"
      >
        AD Production
      </text>
    </svg>
  );
