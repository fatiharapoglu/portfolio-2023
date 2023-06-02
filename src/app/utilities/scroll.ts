export const smoothScroll = (id: string) => {
    if (!id) {
        document.body.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
    }

    const element = document.getElementById(id);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
};
