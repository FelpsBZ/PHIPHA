import React from "react";
import styles from "./Cabecalho.module.css";

export default function Cabecalho() {
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>CAMPEONATO PAULISTA</h1>
        </div>
    );
}