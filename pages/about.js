import React from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        PokeNext é uma aplicação web que criei para explorar e aprender
        desenvolvimento com Next.js, utilizando o tema Pokémon. Aqui podes
        explorar informações sobre diferentes Pokémon. Utilizei o Next.js para
        renderização no lado do servidor e geração de páginas estáticas, React
        para construção da interface, CSS Modules para estilização. <br />
        Vamos nos aventurar no mundo dos Pokémon com Next.js!
        <br />
        <i>Gotta catch 'em all!</i>
      </p>
      <Image
        src="/images/charizard.png"
        width={300}
        height={300}
        alt="Charizard"
      ></Image>
    </div>
  );
}
