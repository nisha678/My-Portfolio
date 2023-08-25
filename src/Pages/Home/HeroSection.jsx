export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">
            <h2>Hey, It's me!</h2>
          </p>
          <h1 className="h1"> Nisha Patar</h1>
          <h2 className="hero--section--title">
            <span className="hero--section--title--color">
              <h1>
                I'm A <span className="words-move">Full Stack Developer</span>{" "}
              </h1>
            </span>
          </h2>
          <p className="hero--section-description">
            A passionate individual who always thrives to work on end to end
            products which develop sustainable and scalable social and technical
            systems to create impact.
          </p>
        </div>

        <a href="#" className="btn btn-primary">
          Download CV
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero.png" alt="Hero Section"></img>
      </div>
    </section>
  );
}
