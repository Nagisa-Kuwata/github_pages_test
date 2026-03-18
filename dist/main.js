"use strict";
// ---- Type Definitions ----
// ---- Visit Info Display ----
function displayVisitInfo(info) {
    const section = document.createElement("section");
    const heading = document.createElement("h2");
    heading.textContent = "\u8A2A\u554F\u60C5\u5831";
    const para = document.createElement("p");
    const formatted = info.visitedAt.toLocaleString("ja-JP");
    para.textContent = `\u300C${info.title}\u300D\u306B ${formatted} \u306B\u30A2\u30AF\u30BB\u30B9\u3057\u307E\u3057\u305F\u3002`;
    section.appendChild(heading);
    section.appendChild(para);
    document.querySelector("main")?.appendChild(section);
}
// ---- Counter ----
function createCounter() {
    const section = document.createElement("section");
    const heading = document.createElement("h2");
    heading.textContent = "\u30AB\u30A6\u30F3\u30BF\u30FC\uFF08TypeScript \u30C7\u30E2\uFF09";
    let count = 0;
    const display = document.createElement("p");
    display.textContent = `\u73FE\u5728\u306E\u30AB\u30A6\u30F3\u30C8: ${count}`;
    const btnIncrement = document.createElement("button");
    btnIncrement.textContent = "+ 1";
    btnIncrement.addEventListener("click", () => {
        count += 1;
        display.textContent = `\u73FE\u5728\u306E\u30AB\u30A6\u30F3\u30C8: ${count}`;
    });
    const btnReset = document.createElement("button");
    btnReset.textContent = "\u30EA\u30BB\u30C3\u30C8";
    btnReset.addEventListener("click", () => {
        count = 0;
        display.textContent = `\u73FE\u5728\u306E\u30AB\u30A6\u30F3\u30C8: ${count}`;
    });
    section.appendChild(heading);
    section.appendChild(display);
    section.appendChild(btnIncrement);
    section.appendChild(btnReset);
    document.querySelector("main")?.appendChild(section);
}
// ---- Entry Point ----
document.addEventListener("DOMContentLoaded", () => {
    const info = {
        title: document.title,
        visitedAt: new Date(),
    };
    displayVisitInfo(info);
    createCounter();
});
