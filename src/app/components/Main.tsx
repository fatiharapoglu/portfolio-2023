import Introduction from "./Introduction";
import About from "./About";
import Toolbox from "./Toolbox";
import Contact from "./Contact";
import Projects from "./Projects";

export default function Main() {
    return (
        <main className="mx-8 flex flex-col justify-center gap-16 md:mx-auto md:w-10/12 md:gap-48 lg:w-9/12 xl:w-2/3 2xl:w-1/2">
            <Introduction />
            <About />
            <Toolbox />
            <Projects />
            <Contact />
        </main>
    );
}
