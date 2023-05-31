export default function Title({ count, title }: { count: number; title: string }) {
    return (
        <h1 className="font-roboto-mono mb-8 flex items-center text-3xl font-bold text-slate-300">
            <span className="list-number pr-4">{count}.</span> {title}{" "}
            <div className="ml-4 h-px flex-grow bg-slate-800/90"></div>
        </h1>
    );
}
