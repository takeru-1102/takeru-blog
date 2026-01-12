// すべてのページで共通のJavaScript

document.addEventListener("DOMContentLoaded", () => {
  setupToTopButton();
});

/**
 * 右下の「一番上に戻る」ボタンを自動で追加して動かす
 * - HTMLにボタンを書かなくてOK（JSが生成）
 * - どのページでも同じ挙動
 */
function setupToTopButton() {
  // 既にボタンがあれば使う（保険）
  let btn = document.getElementById("toTop");

  // 無ければ作る
  if (!btn) {
    btn = document.createElement("button");
    btn.id = "toTop";
    btn.type = "button";
    btn.setAttribute("aria-label", "ページの先頭へ");
    btn.textContent = "↑";
    document.body.appendChild(btn);
  }

  // クリックで上へ
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}