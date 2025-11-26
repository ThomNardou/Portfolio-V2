"use client";

import {useEffect} from "react";
import {motion} from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from "@tsparticles/engine";


export function Header() {

    let textInColor = " Portfolio!";
    let textArrayInColor = textInColor.split("");

    useEffect(() => {

    })

    return (

        <div className={"w-full h-screen bg-gradient-to-b from-[#050404] to-[#4A1942] content-center"}>
            <div className={"text-appear flex mx-auto justify-center items-center"}>
                <h1 className={"text-8xl font-bold text-accent"}>Welcome to my
                        {textArrayInColor.map((char, index) => {
                            return (
                                <motion.span
                                    key={char + "-" + index}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 0.5, delay: index * 0.09}}
                                    className={"text-[#893168]"}
                                >
                                    {char}
                                </motion.span>
                            )
                        })}
                </h1>

            </div>
            <div className={"flex justify-center items-center mt-10"}>
                <a href={"#"} className={"text-xl text-accent text-[#050404] flex items-center gap-2 bg-[#EAEAEA] hover:bg-[#b3b3b3] transition-colors px-4 py-2 rounded-lg mr-2.5"}>
                    <FaLinkedin />
                    LinkedIn
                </a>
                <a href={"#"} className={"text-xl text-accent flex items-center gap-2 bg-[#893168] px-4 py-2 rounded-lg ml-2.5 hover:bg-[#6A1B4D] transition-colors"}>
                    <FaGithub />
                    Github
                </a>
            </div>
        </div>
    )
}