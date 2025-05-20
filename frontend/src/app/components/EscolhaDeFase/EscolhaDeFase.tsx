import React from "react";
import Style from "./EscolhaDeFase.module.css"

export default function EscolhaDeFase(){
    return(
        <>
        <div className={Style.main}>
            <div className={Style.links}>
                <a href="" className={Style.A}>Fase de Grupos</a>
                <a href="" className={Style.A}>Quartas de Final</a>
                <a href="" className={Style.A}>Semi Final</a>
                <a href="" className={Style.A}>Final</a>
            </div>
        </div>
        </>
    )
}