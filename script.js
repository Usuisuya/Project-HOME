/*
====================================
 Project HOME v0.1 Alpha
 script.js
====================================
*/

document.addEventListener("DOMContentLoaded", () => {
    console.log("🏠 Project HOME 起動");

    // アクセスカウンター（土台）
    const counter = document.getElementById("counter");

    if (counter) {
        counter.textContent = "00000001";
    }

    // メニューボタンを押したとき（今は準備中）
    const buttons = document.querySelectorAll("nav button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("このページは開発中です 🚧");
        });
    });

    // フッターに現在の年を表示（将来使う）
    const year = new Date().getFullYear();
    console.log(`Project HOME © ${year}`);
});