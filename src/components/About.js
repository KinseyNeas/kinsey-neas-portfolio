import React, { useState } from "react";
import portrait from "../images/selfie.png"

const About = () => {
  return (
    <>
        <div className="md:flex py-16 px-2 items-center">
            <div className="portrait w-1/2 h-auto pr-8 grid place-items-center"><img className="justify-center items-center" src={portrait}/></div>   
            <div className="md:w-3/4">
                <h1 className="text-4xl font-semibold py-2">Kinsey Neas</h1>
                <h3 className="text-2xl italic py-1">Creator and Developer</h3>
                <p className="text-md lg:text-lg py-3 text-gray-600">
                  Hello! My name is Kinsey Neas and I am a student passionate about telling stories and solving problems through art and code. Currently pursuing a BS in Computer Science and minor in art at Trinity University, I’m on a mission to shape the digital world through imaginative software solutions and artistic innovation. Whether I am coding, creating, or throwing a frisbee, I’m always eager to explore new opportunities and tackle challenges with an open, curious, and collaborative mindset! Please feel free to view my creative work below!
                </p>
            </div>
        </div>    
    </>
  );
};

export default About;