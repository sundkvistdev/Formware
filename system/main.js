async function main() {
    const root = document.querySelector(".formware.os-root");

    const mouseCursors = [
        "pointer-arrow",
        "pointer-arrow-load",
        "pointer-load",
        "pointer-hand"
    ];
    const mouseCurTest = document.createElement("button");
    mouseCurTest.classList.add("formware");
    mouseCurTest.textContent = "HOVER";
    
    root.appendChild(mouseCurTest);

    let mouseCurIdx = 0;
    
    setInterval(() => {
        mouseCurTest.className = "formware " + mouseCursors[mouseCurIdx];
        mouseCurIdx = (mouseCurIdx + 1) % mouseCursors.length;
    }, 1000);


    console.log("[Formware.System] Initialization Complete");
}

main();