const btn1 = document.getElementById('b1');
const btn2 = document.getElementById('b2');
const content1 = document.getElementById('p1');
const content2 = document.getElementById('p2');

btn1.addEventListener('click', () => {//ボタンがクリックされたときの処理
    if (content1.style.display === 'none') {
        content1.style.display = 'block';//コンテンツを表示
    } else {
        content1.style.display = 'none';//コンテンツを非表示
        content2.style.display = 'block';//もう一方のコンテンツを表示
    }
});