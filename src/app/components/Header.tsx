import Link from "next/link";

export default function Header() {
    return (
        <header className="">
            <ul>
                <li>
                    <Link href={"#"}>About</Link>
                </li>
                <li>
                    <Link href={"#"}>Tech Stack</Link>
                </li>
                <li>
                    <Link href={"#"}>Projects</Link>
                </li>
                <li>
                    <Link href={"#"}>Contact</Link>
                </li>
                <li>
                    <Link href={"#"}>Resume</Link>
                </li>
            </ul>
        </header>
    );
}
