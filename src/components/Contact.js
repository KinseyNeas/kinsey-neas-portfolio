import React, { useState } from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail} from "react-icons/ai";

const Contact = () => {
    return (
        <div className="flex justify-center">
           <a href="https://github.com/KinseyNeas" className="p-4"><AiFillGithub size="40px"/></a>
           <a href="https://www.linkedin.com/in/kinseyneas/" className="p-4"><AiFillLinkedin color="rgb(0,0,139)" size="40px"/></a>
           <a href="kinseyneas@gmail.com" className="p-4"><AiFillMail color="rgb(222, 49, 99)" size="40px"/></a> 
        </div>
    )
};

export default Contact;