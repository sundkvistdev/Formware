const BORDER = 24;

async function main() {
    /** @type {HTMLElement} */
    const exampleWindow = document.querySelector(".fw-window");
    let dragging = false;
    let startX = 0, startY = 0;
    let origLeft = 0, origTop = 0;
    exampleWindow.addEventListener("pointerdown", (ev) => {
        const rect = exampleWindow.getBoundingClientRect();
        const localY = ev.clientY - rect.top;
        if (localY > BORDER) return;
        dragging = true;
        startX = ev.clientX;
        startY = ev.clientY;
        origLeft = exampleWindow.offsetLeft;
        origTop = exampleWindow.offsetTop;
        exampleWindow.setPointerCapture(ev.pointerId);
    });
    exampleWindow.addEventListener("pointermove", (ev) => {
        if (!dragging)
            return;
        const deltaX = ev.clientX - startX;
        const deltaY = ev.clientY - startY;
        exampleWindow.style.left = `${origLeft + deltaX}px`;
        exampleWindow.style.top = `${origTop + deltaY}px`;
    });
    exampleWindow.addEventListener("pointerup", (ev) => {
        if (!dragging)
            return;
        dragging = false;
        exampleWindow.releasePointerCapture(ev.pointerId);
    });
}

main();