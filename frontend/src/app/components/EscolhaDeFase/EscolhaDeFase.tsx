import React from "react";
import Style from "./EscolhaDeFase.module.css"

export default function EscolhaDeFase(){
    return(
        <>
        <div className={Style.main}>
            <div className={Style.links}>
                <a href="">Fase de Grupos</a>
                <a href="">Quartas de Final</a>
                <a href="">Semi Final</a>
                <a href="">Final</a>
            </div>
        </div>
        </>
    )
}