import styles from './banner.module.css'

import React from 'react'

import circuloColorido from "assets/circulo_colorido.png"
import minhaFoto from "assets/minha_foto.png"

const Banner = () => {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                Olá, Mundo!
            </h1>

            <p className={styles.paragrafo}>
                Boas vindas ao meu espaço pessoal! Eu sou Bruno Prestes...
            </p>

        </div>

        <div className={styles.imagens}>
            <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} alt='circulo colorido'/>
            <img className={styles.minhaFoto} src={minhaFoto} alt='minha foto sorrindo'/>
        </div>

    </div>
  )
}

export default Banner