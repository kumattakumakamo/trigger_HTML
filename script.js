const btn = document.getElementById('myButton');
const content = document.getElementById('targetContent');

btn.addEventListener('click', () => {//ボタンがクリックされたときの処理
    if (content.style.display === 'none') {
        content.style.display = 'block';//コンテンツを表示
    } else {
        content.style.display = 'none';//コンテンツを非表示
    }
});