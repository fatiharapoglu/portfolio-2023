export default function Introduction() {
    return (
        <div className="flex h-[calc(100vh-6rem)] flex-col justify-center gap-4">
            <h1 className="font-roboto-mono pb-2 pl-1 text-lg text-red-200">Hello, my name is</h1>
            <div className="text-6xl font-bold text-slate-300">Fatih Arapoğlu.</div>
            <div className="text-6xl font-bold text-slate-400">I build web applications.</div>
            <div className="w-2/3 pt-2">
                I’m a <strong className="text-red-200">Full-stack Developer</strong> who loves to work with modern{" "}
                <strong className="text-red-200">JavaScript</strong>. My proficiency spans the complete web development
                spectrum, utilizing my diverse background in both chemical engineering and full-stack programming. Currently,
                I’m focused on learning everything related to Full-stack Web Development.
            </div>
        </div>
    );
}
