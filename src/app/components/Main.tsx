import Introduction from "./Introduction";
import About from "./About";
import Toolbox from "./Toolbox";
import Contact from "./Contact";
import Projects from "./Projects";

export default function Main() {
    return (
        <main className="container mx-auto flex w-3/5 flex-col justify-center gap-48">
            <Introduction />
            <About />
            <Toolbox />
            <Projects />
            <Contact />
        </main>
    );
}
