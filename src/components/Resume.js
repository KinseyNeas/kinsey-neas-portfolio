import React, { useState } from "react";
const Resume = () => {
    return (
        <div className="px-12 py-10">
            <h1 className="text-4xl tracking-wide font-semibold pb-10">
                Resume
                <span className="block mr-6 mt-4 max-w-full h-0.5 bg-gray-500"></span>
            </h1>
            <div className="Education">
                <h1 className="text-3xl py-4 color:rgb(143,179,57)">Education</h1>
                <div className="md:pb-2 md:flex justify-between items-center">
                    <h2 className="text-xl font-bold"> Bachelor of Science in Computer Science, Art Minor</h2>
                    <h3 className="text-lg md:italic">May 2025</h3>
                </div>
                <div className="pb-2 md:flex justify-between items-center">
                    <h3 className="text-lg italic">Trinity University</h3>
                    <h3 className="text-lg">San Antonio, TX</h3>
                </div>
                <h4 className="pl-5"> <b>Coursework:</b> Software Engineering, Databases, Algorithms, Data Abstraction, Computer Design, Functional Languages</h4>
                <h4 className="pl-5"> <b>Academic Awards:</b> Trinity’s Murchison Scholarship – $30,000/yr, Trinity’s Music Scholarship (Singing) – $3,000/yr</h4>
            </div>
            <div className="Experience pb-4 pt-8">
            <h1 className="text-3xl">Experience</h1>
                <div className="py-4">
                    <div className="md:pb-2 md:flex justify-between items-center">
                        <h2 className="text-xl font-bold"> Software Engineering Intern</h2>
                        <h3 className="text-lg md:italic text-gray-600">Summer 2023</h3>
                    </div>
                    <div className="pb-2 md:flex justify-between items-center">
                        <h3 className="text-lg italic">USAA</h3>
                        <h3 className="text-lg">San Antonio, TX</h3>
                    </div>
                    <ul className="list-disc pl-10">
                        <li className="py-2" >Adeptly navigated through diverse programming languages and intricate software structures, fosterin an agile and collaborative environment within a dynamic team of 5 interns.</li>
                        <li className="py-2">Pursued automation efforts using Puppet before smoothly transitioning to IBM’s Urban Code Deploy, orchestrating seamless server configurations and deployment of team code to development and testing servers in order to optimize and speed up workflow.</li>
                        <li className="py-2">Designed and built a React-based front-end application, initially using a JBoss API before migrating to SpringBoot 2.5 and then to Spring Boot 3.1, while actively managing CI/CD pipeline issues and utilizing Gitlab and Java.</li>
                    </ul>
                </div>

                <div className="py-4">
                    <div className="md:pb-2 md:flex justify-between items-center">
                        <h2 className="text-xl font-bold"> Association for Computing Machinery Tutor</h2>
                        <h3 className="text-lg md:italic text-gray-600">Fall 2022 - Present</h3>
                    </div>
                    <div className="pb-2 md:flex justify-between items-center">
                        <h3 className="text-lg italic">Trinity University</h3>
                        <h3 className="text-lg">San Antonio, TX</h3>
                    </div>
                    <ul className="list-disc pl-10">
                        <li className="py-2" >Guide students through fundamental computer science concepts and enable their learning through collaborative problem solving on class assignments.</li>
                        <li className="py-2">Strengthening my understanding of backend computer programming and innovative problem solving by helping students debug complex , correct syntax errors, write test code, and solve logic problems.</li>
                        <li className="py-2">Dynamically learning a variety of languages daily to support student needs. Frequently  reviewed the following languages: C++, Haskell, Python, Processing, and Unity.</li>
                    </ul>
                </div>
            </div>

            <div className="Projects pb-4 pt">
            <h1 className="text-3xl">Projects</h1>
                <div className="py-4">
                    <div className="md:pb-2 md:flex justify-between items-center">
                        <h2 className="text-xl font-bold">Nexus Registration Application</h2>
                        <h3 className="text-lg md:italic text-gray-600">Spring 2023</h3>
                    </div>
                    <div className="pb-2 md:flex justify-between items-center">
                        <h3 className="text-lg italic">NodeJS Group Project</h3>
                    </div>
                    <ul className="list-disc pl-10">
                        <li className="py-2">Led a group of 8 people through the end-to-end development of a user-centric web platform, addressing the limitations of Trinity University’s current class registration system.</li>
                        <li className="py-2">Leveraged Node.js, Express, MongoDB with Mongoose ORM, and EJS templates, integrated secure data handling and encryption, and developed custom CSS for an intuitive and visually appealing front-end.</li>
                        <li className="py-2">Extensively documented the project, encompassing UI mockups, requirements specifications, deadline management, testing documents, and comprehensive user and developer manuals.</li>
                    </ul>
                </div>

                <div className="py-4">
                    <div className="md:pb-2 md:flex justify-between items-center">
                        <h2 className="text-xl font-bold"> A Solver for Checkers</h2>
                        <h3 className="text-lg md:italic text-gray-600">Fall 2022</h3>
                    </div>
                    <div className="pb-2 md:flex justify-between items-center">
                        <h3 className="text-lg italic">Haskell Group Project</h3>
                    </div>
                    <ul className="list-disc pl-10">
                        <li className="py-2" >Wrote a command-line solver using Haskell for the two-player game of perfect information Checkers</li>
                        <li className="py-2">Created integrated functions to simplify complex algorithmic problems.</li>
                        <li className="py-2">Led a group of four developers by delegating tasks to all members, participating in collaborative programming, and facilitated code reviews.</li>
                    </ul>
                </div>
            </div>

            <div className="Skills">
                <h1 className="text-3xl">Skills</h1>
                <ul className="py-4 pl-6">
                    <li><b>Languages</b> | <i>PROFICIENT:</i> C++, Haskell, CSS, HTML, <i>EXPOSED TO:</i> Scala, Java, Javascript, React, Puppet, Python, C </li>
                    <li><b>Applications</b> | <i>Code Management/Deployment:</i> VSCode, Puppet, Urban Code Deploy, Artifactory, Gitlab | <i>Creative Applications:</i> Adobe Suite (Photoshop, Illustrator, After Affects, InDesign, Premire), Procreate, Blender, Unity, Godot, ZBrush</li>
                    <li><b>Soft Skills</b> | Team Communication, Project Organization, Adaptability, Creative Problem, Solving</li>
                </ul>
            </div>
        </div>
    )
}

export default Resume;