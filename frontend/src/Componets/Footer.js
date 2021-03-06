import React from "react";
import "./style.css";
import { FiGithub } from "react-icons/fi";

export default function Footer(){
    return (
        <footer>
            <address>
                Criado por George Ravelly<br/>
                <a href="https://github.com/George1050" target="blank">
                    <FiGithub size={24} />GitHub
                </a>
            </address>
            <p>
                <small style={{fontSize:16, color: "blue"}}>Imagens meramente ilustrativas!!!</small>
            </p>
        </footer>
    )
}