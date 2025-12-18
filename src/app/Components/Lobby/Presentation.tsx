import { JSX } from "react";

export function PresentationPart(): JSX.Element {
    return (
        <>
            <div className="flex items-center justify-center mx-auto">
                <div className="w-2/6 mr-20 max-md:mx-auto max-md:w-5/6">
                    <h2 className="text-4xl font-semibold text-left text-accent mb-4">Hi, I'm Thomas Nardou</h2>
                    <p className="text-lg text-left text-accent ">
                        My name is Thomas Nardou and I am currently an apprentice developer in Switzerland. My passion for the world of IT is reflected in my constant commitment to exploring the many facets of programming. 
                    </p>
                </div>
                <div
                    className="
                        max-md:w-0
                        w-72
                        aspect-square
                        bg-[url('https://avatars.githubusercontent.com/u/122774874?v=4')]
                        bg-center
                        bg-cover
                        rounded-[75%_30%_30%_70%_/_60%_40%_60%_40%]
                        shadow-[23px_22px_65px_-16px_rgba(0,0,0,0.75)]
                        ml-20
                    "
                ></div>
            </div>
        </>
    )
}