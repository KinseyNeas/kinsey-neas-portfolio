import React, { useState } from "react";
import portrait from "../images/selfie.png"

const About = () => {
  return (
    <>
        <div className="md:flex py-16 px-2 items-center">
            <div className="portrait w-1/2 h-auto pr-8 grid place-items-center"><img className="justify-center items-center" src={portrait}/></div>   
            <div>
                <h1 className="text-4xl font-semibold py-2">Kinsey Neas</h1>
                <h3 className="text-2xl italic py-1">Creator and Developer</h3>
                <p className="text-md lg:text-lg py-3 text-gray-600">Hello! My name is Kinsey Neas and I love to tell stories! Feel free to look at my work below!</p>
            </div>
        </div>    
    </>
  );
};

export default About;