import React from 'react'
import imgAbout from "./img/imgAbout.svg"
import "./css/Home.css"
import Componets from "./Componets"
import Slide from 'react-reveal/Slide';
function About() {
    return (
        <>
              <Slide right>
            <Componets title="About Page" para="We are a group of developers who can make a good websit for your business!" button="Call Us !" image={imgAbout}/>
            </Slide>
        </>
    )
}

export default About
