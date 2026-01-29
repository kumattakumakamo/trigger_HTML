const btn1 = document.getElementById('b1');
const btn2 = document.getElementById('b2');
const btn2_2 = document.getElementById('b2_2');
const btn3 = document.getElementById('b3');
const btn4 = document.getElementById('b4');
const btn5_a = document.getElementById('b5_a');
const btn5_b = document.getElementById('b5_b');
const btn6 = document.getElementById('b6');

const content1 = document.getElementById('p1');
const content2 = document.getElementById('p2');
const content2_2 = document.getElementById('p2_2');
const content2_2_2 = document.getElementById('p2_2_2');
const content3 = document.getElementById('p3');
const content4 = document.getElementById('p4');
const content5 = document.getElementById('p5');
const content6_a = document.getElementById('p6_a');
const content6_b = document.getElementById('p6_b');

const countDown = document.getElementById('countdown');//カウントダウン表示用要素

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

    // ボタンとコンテンツを非表示にする
    btn2.style.display = 'none';
    content2.style.display = 'none';

    // ランダムに1つ選ぶ
    const randomIndex = Math.floor(Math.random() * ngList.length);// 0からngList.length-1までのランダムな整数
    const selectedAction = ngList[randomIndex];// ランダムに選ばれた行

    // 結果を表示
    const resultElement = document.createElement('p');// 新しい<p>要素を作成
    resultElement.textContent = selectedAction;// 選ばれた行をテキストとして設定
    resultElement.style.fontSize = "1.8rem";// フォントサイズを大きくする
    resultElement.style.fontWeight = "bold";// 太字にする
    resultElement.style.textAlign = "center";// 中央揃えにする
    resultElement.style.margin = "20px";// マージンを追加

    content2_2.style.display = 'block';//コンテンツを表示
    content2_2_2.before(resultElement);// 結果をcontent2_2_2の前に挿入
    content2_2_2.style.display = 'block';//コンテンツを表示
    btn2_2.style.display = 'block'; //「確認完了」ボタンを表示
});
btn2_2.addEventListener('click', () => {
    if (content2_2.style.display === 'none') {
        content2_2.style.display = 'block';//コンテンツを表示
    } else {
        const targetTime = new Date().getTime() + 30000; // 30秒後のタイムスタンプを計算
        content2_2_2.style.display = 'none';//コンテンツを非表示
        btn2_2.style.display = 'none';//ボタンを非表示

        content3.style.display = 'block';//次のコンテンツを表示
        //resultElement.style.display = 'block'; // 結果を表示
        function updateCountDown() {
            const now = new Date().getTime();
            const distance = targetTime - now;

            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            countDown.textContent = seconds;

            countDown.textContent = `残り思考時間：${String(seconds).padStart(2, '0')}秒`;
            if (distance < 0) {
                clearInterval(interval);
                countDown.textContent = '思考時間終了';
            }
        }
        const interval = setInterval(updateCountDown, 1000);
        const timerInterval = setInterval(updateCountDown, 1000);
        updateCountDown();
    }
});
btn3.addEventListener('click', () => {
    if (content3.style.display === 'none') {
        content3.style.display = 'block';//コンテンツを表示
    } else {
        content3.style.display = 'none';//コンテンツを非表示
        content4.style.display = 'block';//次のコンテンツを表示
    }
});
btn4.addEventListener('click', () => {
    if (content4.style.display === 'none') {
        content4.style.display = 'block';//コンテンツを表示
    } else {
        content4.style.display = 'none';//コンテンツを非表示
        content5.style.display = 'block';//次のコンテンツを表示
    }
});

btn5_a.addEventListener('click', () => {
    if (content5.style.display === 'none') {
        content5.style.display = 'block';//コンテンツを表示
    } else {
        content5.style.display = 'none';//コンテンツを非表示
        content6_a.style.display = 'block';//次のコンテンツを表示
    }
});
btn5_b.addEventListener('click', () => {
    if (content5.style.display === 'none') {
        content5.style.display = 'block';//コンテンツを表示
    } else {
        content5.style.display = 'none';//コンテンツを非表示
        content6_b.style.display = 'block';//次のコンテンツを表示
    }
});
btn6.addEventListener('click', () => {
    content6_a.style.display = 'none';//コンテンツを非表示
    content2_2.style.display = 'none';//コンテンツを非表示
    content6_b.style.display = 'none';//コンテンツを非表示
    content1.style.display = 'block';//次のコンテンツを表示
});