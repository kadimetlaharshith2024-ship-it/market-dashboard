function Navbar() {

  const scrollToSection = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth"
      });

  };

  return (
    <nav className="navbar">

      <button onClick={() => scrollToSection("market")}>
        Market
      </button>

      <button onClick={() => scrollToSection("metals")}>
        Metals
      </button>

      <button onClick={() => scrollToSection("oil")}>
        Oil
      </button>

      <button onClick={() => scrollToSection("weather")}>
        Weather & Rainfall
      </button>

    </nav>
  );
}

export default Navbar;