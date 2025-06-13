// すべてのスライド画像を取得
const slides = document.querySelectorAll('.slide');

// ボタンの要素を取得
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// 表示中のスライドの番号（0から始まる）
let currentIndex = 0;

// スライドを表示する関数
function showSlide(index) {
  // すべての画像を非表示にする
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
  });

  // 指定されたインデックスの画像を表示する
  slides[index].classList.add('active');
}

// 初期表示（最初のスライド）
showSlide(currentIndex);

// 「次へ」ボタンを押したとき
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length; // 次のインデックス
  showSlide(currentIndex);
});

// 「前へ」ボタンを押したとき
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // 前のインデックス（マイナス対応）
  showSlide(currentIndex);
});

// 自動再生（5秒ごとに切り替え）
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 5000);

