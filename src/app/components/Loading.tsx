import Image from "next/image";

import loadingGif from "../../../public/animated-logo-black.gif";

export default function Loading() {
    return (
        <div className="flex h-screen select-none items-center justify-center bg-black md:bg-transparent">
            <Image src={loadingGif} alt="loading" className="w-40 mix-blend-lighten md:w-44 lg:w-48" />
        </div>
    );
}
