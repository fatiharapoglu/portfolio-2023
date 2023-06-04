import Introduction from "./Introduction";
import About from "./About";
import Toolbox from "./Toolbox";
import Contact from "./Contact";
import Projects from "./Projects";

export default function Main() {
    return (
        <main className="mx-16 flex flex-col justify-center gap-48 md:mx-auto md:w-4/5 lg:w-9/12 xl:w-2/3">
            <Introduction />
            <About />
            <Toolbox />
            <Projects />
            <Contact />
        </main>
    );
}
