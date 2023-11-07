import styles from './Rodape.module.css'

import React from 'react'

import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg'

const Rodape = () => {
  return (
    <footer className={styles.rodape}>
        <MarcaRegistrada />
        <p>Desenvolvido por Alura</p>
    </footer>
  )
}

export default Rodape