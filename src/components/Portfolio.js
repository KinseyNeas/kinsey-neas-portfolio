import React, { useState } from "react";

import tug1 from "../images/tug-banner.png"
import tug2 from "../images/tug-kart.png"
import tug3 from "../images/league-team.png"
import tug4 from "../images/grphc-jackbox.png"
import tug5 from "../images/gphc-splatoon.jpg"
import sap1 from "../images/sap-broken.png"
import sap2 from "../images/sap-pinata.png"
import sap3 from "../images/sap-text.png"
import altitude1 from "../images/altitude-logo.png"
import altitude2 from "../images/altitude-poster.png"
import altitude3 from "../images/snoppy-disc.png"
import charcol1 from "../images/char-baking.jpg"
import charcol2 from "../images/char-frisbee.jpg"
import charcol3 from "../images/char-chapel.jpg"
import charcol4 from "../images/char-portrait.jpg"
import pixel1 from "../images/px-dog.png"
import pixel2 from "../images/px-duck-back.png"
import pixel3 from "../images/px-duck-front.png"
import pixel4 from "../images/ani-swatter.mp4"
import random1 from "../images/boy-music.png"
import random2 from "../images/love-yoshi.png"
import random3 from "../images/weelo-icon.jpg"
import random4 from "../images/paint-portrait.png"
import random5 from "../images/skull-ink.png"
import random6 from "../images/rug-alligator.png"

const Portfolio = () => {

  return (
    <div className="p-10">
        <h1 className="text-4xl tracking-wide ml-6 font-semibold pb-10">
            Artwork
            <span className="block mr-6 mt-4 max-w-full h-0.5 bg-gray-500"></span>
        </h1>
    <div className="flex flex-col gap-10 md:flex-row md:flex-wrap">
        <div className="basis-1/3 flex-1 trasition ease-in-out delay-150 hover:scale-105 duration-500"><img src={tug3} className="rounded-xl object-cover" width={'100%'} height={'100%'} layout="responsive"/></div>
        <div className="basis-1/3 flex-1 flex-grow ease-in-out delay-150 hover:scale-105 duration-500"><img src={tug2} className="rounded-xl object-cover" width={'100%'} height={'100%'} layout="responsive"/></div>
        {/*<div className="basis-1/3 flex-1 flex-grow ease-in-out delay-150 hover:scale-105 duration-500"><img src={tug4} className="rounded-xl object-cover" width={'100%'} height={'100%'} layout="responsive"/></div>*/}
        {/*<div className="basis-1/3 flex-1 flex-grow ease-in-out delay-150 hover:scale-105 duration-500"><img src={tug5} className="rounded-xl object-cover" width={'100%'} height={'100%'} layout="responsive"/></div>*/}
        <div className="flex-grow ease-in-out delay-150 hover:scale-105 duration-500"><img src={tug1} className="rounded-xl object-cover" width={'100%'} height={'100%'} layout="responsive"/></div>

        <div className="basis-1/3 flex-1 trasition ease-in-out delay-150 hover:scale-105 duration-500"><img className="rounded-xl object-cover" src={sap1}/></div>
        <div className="basis-1/3 flex-1 trasition ease-in-out delay-150 hover:scale-105 duration-500"><img className="rounded-xl object-cover" src={sap2}/></div>
        <div className="trasition ease-in-out delay-150 hover:scale-105 duration-500"><img className="rounded-xl object-cover" src={sap3}/></div>

        <div className="basis-1/3 flex-1 trasition ease-in-out delay-150 hover:scale-105 duration-500"><img className="rounded-xl object-cover" src={altitude2}/></div>
        <div className="basis-1/3 flex-1">
            <div className="basis-1/3 flex-1 trasition ease-in-out delay-150 hover:scale-105 duration-500"><img className="object-cover" src={altitude1}/></div>
            <div className="snoopy basis-1/3 flex-1 trasition ease-in-out delay-150 hover:scale-105 duration-500"><img className="object-cover" src={altitude3}/></div>
        </div>
    
        {/*<div className="basis-1/3 flex-1 trasition ease-in-out delay-150 hover:scale-105 duration-500"><img className="rounded-xl object-cover" src={charcol1}/></div>*/}
        <div className="basis-1/3 flex-1 trasition ease-in-out delay-150 hover:scale-105 duration-500"><img className="rounded-xl object-cover" src={charcol3}/></div>
        <div className="basis-1/3 flex-1 trasition ease-in-out delay-150 hover:scale-105 duration-500"><img className="rounded-xl object-cover" src={charcol4}/></div>
        {/*<div className="basis-1/3 flex-1 trasition ease-in-out delay-150 hover:scale-105 duration-500"><img className="rounded-xl object-cover" src={charcol2}/></div>*/}

        <div className="basis-1/3 flex-1 trasition ease-in-out delay-150 hover:scale-105 duration-500"><img className="rounded-xl object-cover" src={random4}/></div>
        <div className="basis-1/3 flex-1 trasition ease-in-out delay-150 hover:scale-105 duration-500"><img className="rounded-xl object-cover" src={random5}/></div>

        {/*<div><img src={random1}/></div> */}{/*Maybe get a higher resolution image*/}      
        <div className="basis-1/3 flex-1 trasition ease-in-out delay-150 hover:scale-105 duration-500"><img className="rounded-xl object-cover" src={random2}/></div>
        <div className="otter basis-1/3 flex-1 trasition ease-in-out delay-150 hover:scale-105 duration-500"><img className="rounded-xl object-cover" src={random3}/></div>
       
        <div className="basis-1/3 flex-1 trasition ease-in-out delay-150 hover:scale-105 duration-500"><img className="object-cover" src={random6}/></div>
    
        {/*<div className="basis-1/3 flex-1 trasition ease-in-out delay-150 hover:scale-105 duration-500"><img src={pixel1}/></div>*/}
        <div className="basis-1/3 flex-1 pt-16 trasition ease-in-out delay-150 hover:scale-105 duration-500"><video loop muted autoplay="autoplay"><source src={pixel4} type="video/mp4"/></video></div>
        
        <div className="basis-1/3 flex-1 trasition ease-in-out delay-150 hover:scale-105 duration-500"><img src={pixel3}/></div>
        <div className="basis-1/3 flex-1 trasition ease-in-out delay-150 hover:scale-105 duration-500"><img src={pixel2}/></div> 
    </div>
    </div>
  );
};

export default Portfolio;