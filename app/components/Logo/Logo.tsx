const Logo = () => {
  return (
    <picture>
      <source media="(max-width: 768px)" srcSet="/assets/logo_mobile.png" />
      <img
        src="/assets/logo_desktop.png"
        alt="Chris standing up holding his daughter Elva"
      />
    </picture>
  );
};

export default Logo;
