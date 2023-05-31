import Introduction from "./Introduction";
import About from "./About";
import Toolbox from "./Toolbox";
import Contact from "./Contact";

export default function Main() {
    return (
        <main className="container mx-auto flex w-3/5 flex-col justify-center">
            <Introduction />
            <About />
            <Toolbox />
            <Contact />
        </main>
    );
}
