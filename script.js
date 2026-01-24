const btn1 = document.getElementById('b1');
const btn2 = document.getElementById('b2');
const btn2_2 = document.getElementById('b2_2');
const content1 = document.getElementById('p1');
const content2 = document.getElementById('p2');

let ngList = [];

// 1. CSVファイルを読み込む関数
async function loadCSV() {
    try {
        const response = await fetch('NG_data.csv');
        const text = await response.text();

        // 改行で区切って配列にする
        const rows = text.split(/\r?\n/);

        ngList = rows
            .map(row => {
                // カンマで区切って1列目を取得
                let firstCol = row.split(',')[0];
                // 「」などの不要なプレフィックスを削除して余白を詰める
                return firstCol ? firstCol.replace(/^\\s*/, '').trim() : "";
            })
            .filter(item => item !== ""); // 空の行を除外

        console.log("読み込み成功:", ngList);
    } catch (error) {
        console.error("CSVの読み込みに失敗しました:", error);
    }
}
// ページ読み込み時に実行
loadCSV();

btn1.addEventListener('click', () => {//ボタンがクリックされたときの処理
    if (content1.style.display === 'none') {
        content1.style.display = 'block';//コンテンツを表示
    } else {
        content1.style.display = 'none';//コンテンツを非表示
        content2.style.display = 'block';//もう一方のコンテンツを表示
    }
});
// 「次へ」ボタン
btn2.addEventListener('click', () => {
    if (ngList.length === 0) return;

    // ボタンを非表示にする
    btn2.style.display = 'none';

    // ランダムに1つ選ぶ
    const randomIndex = Math.floor(Math.random() * ngList.length);
    const selectedAction = ngList[randomIndex];

    // 結果を表示
    const resultElement = document.createElement('p');
    resultElement.textContent = selectedAction;
    resultElement.style.fontSize = "1.8rem";
    resultElement.style.fontWeight = "bold";
    resultElement.style.textAlign = "center";
    resultElement.style.marginTop = "20px";
    content2.appendChild(resultElement);
    btn2_2.before(resultElement);
    btn2_2.style.display = 'block'; //「確認完了」ボタンを表示
});