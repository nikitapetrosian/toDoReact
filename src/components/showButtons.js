import React from 'react';
export default function showButtons() {
    const shoowAll = () => {
        const arr = document.querySelectorAll("#root > div > ul>li")
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].getAttribute("style")) {
                arr[i].removeAttribute("style")
            }
        }
    }
    const shoowAllComp = () => {
        const arr = document.querySelectorAll("#root > div > ul>li")
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].getAttribute("style")) {
                arr[i].removeAttribute("style")
            }
            if (arr[i].children[0].classList[1] === "todo-item__text--completed") {
                arr[i].setAttribute("style", "display:none;");
            }
        }
    }
    const shoowAllUncomp = () => {
        const arr = document.querySelectorAll("#root > div > ul>li")
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].getAttribute("style")) {
                arr[i].removeAttribute("style")
            }
            if (!arr[i].children[0].classList[1]) {
                arr[i].setAttribute("style", "display:none;");
            }
        }
    }
    return (
        <div>
            <button
                onClick={shoowAll}
            >
                Все задачи
            </button>
            <button
                onClick={shoowAllUncomp}
            >
                Выполненные задачи
            </button>
            <button
                onClick={shoowAllComp}
            >
                Не выполненные задачи
            </button>
        </div>
    );
}