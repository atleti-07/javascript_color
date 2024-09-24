// JavaScript

//console.log(document.getElementById('myColor').value);

//定数の宣言
const color = document.getElementById('myColor');
const text = document.getElementById('bodyText');

//document.getElementById('bodyText').textContent = document.getElementById('myColor').value;

function changeColor(){
    document.body.style.backgroundColor = color.value;

    // カラーコードを表示
    if (color.value === '#ffffff') {
        text.textContent = 'コード：' + color.value + '(white)';
      } else if (color.value === '#000000') {
        text.textContent = 'コード：' + color.value + '(black)';
      } else {
        text.textContent = 'コード：' + color.value;
} 

}
// カラーピッカーで色が選択されたらchangeColorを動作させる
color.addEventListener('input', changeColor);