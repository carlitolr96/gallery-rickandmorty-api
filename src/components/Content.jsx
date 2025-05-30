import { FaGithub, FaBehanceSquare, FaLinkedin } from "react-icons/fa";

export default function Content() {
    return (
        <div className="mx-auto max-w-screen-xl px-4 mt-6 sm:px-6 lg:px-8">
            <div className='py-8 px-12 h-full w-full flex flex-col justify-between'>
                <Section1 />
                <Section2 />
                <Section3 />
            </div>
        </div>
    )
}

const Section1 = () => {
    return (
        <div className="mx-auto max-w-md">
            <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl font-[Poppins]">
                ¿Quieres conocer más de mi como desarrollador?
            </strong>
        </div>
    )
}

const Section2 = () => {
    return (
        <div className="flex pb-5 px-3 m-auto pt-5 text-sm flex-col max-w-screen-lg items-center">
            <div className="mt-2 flex-row flex">
                <a href="https://github.com/carlitolr96" className="w-6 mx-1" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-2xl text-gray-700 hover:text-[#24292e]" />
                    <span className="sr-only">GitHub</span>
                </a>
                <a href="https://www.behance.net/Carloslr" className="w-6 mx-1" target="_blank" rel="noopener noreferrer">
                    <FaBehanceSquare className="text-2xl text-gray-700 hover:text-[#053eff]" />
                    <span className="sr-only">Behance</span>
                </a>
                <a href="https://www.linkedin.com/in/carlosrivera96/" className="w-6 mx-1" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-2xl text-gray-700 hover:text-[#0e76a8]" />
                    <span className="sr-only">LinkedIn</span>
                </a>
            </div>
        </div>
    )
}

const Section3 = () => {
    return (
        <div className="mt-16 border-t border-gray-300 pt-8">
            <p className="text-center text-xs/relaxed text-gray-500">
                © {new Date().getFullYear()} Rick and Morty. Todos los derechos reservados.
                <br />
                Created with
                <a
                    href="https://vite.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 underline transition hover:text-gray-700/75"
                >
                    ViteJs
                </a>
                <span> and </span>
                <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 underline transition hover:text-gray-700/75"
                >
                    Tailwind
                </a>.
            </p>
        </div>
    )
}
