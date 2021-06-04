import React from 'react'
import imgHome from "./img/imgHome.svg"
import "./css/Home.css"
import Componets from "./Componets"
import Slide from 'react-reveal/Slide';
function Home() {
    return (
        <>
                   <Slide left>
            <Componets title="CodeBender" para="We are glad to have you in our website !" button="Service!" image={imgHome}/>
            </Slide>
        </>
    )
}

export default Home
