"use client";
import afterNav from "@/images/after-nav.png";
import foguete from "@/images/foguete.png";
import kerbin from "@/images/kerbin.png";
import kss from "@/images/kss.png";
import mun from "@/images/mun.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="after-nav">
        <div className="cover-image">
          <h1>Transformando sonhos em</h1>
          <h1 className="gradient-text">realidade</h1>
          <button>Saiba mais</button>
        </div>
        <Image src={afterNav} alt="Foguete no Espaço" />
      </section>
      <section className="introduction">
        <Image src={foguete} alt="" />
        <div>
          <h1>Explore Além dos Limites</h1>
          <span>
            Prepare-se para uma jornada que vai mudar a sua perspectiva para
            sempre. Nossas viagens espaciais oferecem a oportunidade única de
            escapar da gravidade da Terra e descobrir o incrível mundo além da
            nossa atmosfera.
          </span>
        </div>
      </section>
      <section className="services">
        <h1>Nossos destinos</h1>
        <div>
          <div className="service-card">
            <Image src={kerbin} alt="" />
            <button>Kerbin</button>
          </div>
          <div className="service-card">
            <Image src={kss} alt="" />
            <button>KSS</button>
          </div>
          <div className="service-card">
            <Image src={mun} alt="" />
            <button>Mun</button>
          </div>
        </div>
      </section>
      <footer>
        {/*@ts-ignore*/}
        <h1 end="X" style={{ width: "50%", textAlign: "center" }}>
          INHA
        </h1>
        <div style={{ width: "50%" }}>
          <h2>Mapa do site</h2>
          <ol
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "20px",
              marginTop: "12px",
            }}
          >
            <li>
              <a href="">Sobre</a>
            </li>
            <li>
              <a href="">Naves</a>
            </li>
            <li>
              <a href="">Viagens</a>
            </li>
          </ol>
        </div>
      </footer>
    </>
  );
}
