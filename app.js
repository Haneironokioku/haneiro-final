const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // ポート番号を環境変数に対応

app.set('view engine', 'ejs');
app.use(express.static('public'));

// トップページ
app.get('/', (req, res) => {
    res.render('index', { title: '羽根いろの記憶 - Official Website' });
});

// 羽根いろ物語
app.get('/haneiro', (req, res) => {
    res.render('haneiro', { title: '羽根いろ物語 | 羽根いろの記憶' });
});

// 夢見草の夜、君と
app.get('/yumemiso', (req, res) => {
    res.render('yumemiso', { title: '夢見草の夜、君と | 羽根いろの記憶' });
});

// --- ポートフォリオ関連 ---
// 1. ポートフォリオ総合トップ（入口）
app.get('/portfolio', (req, res) => {
    res.render('portfolio', { title: 'Portfolio Portal | 羽根いろの記憶' });
});

// 2. 季都碧音（Kito）のページ
app.get('/portfolio/kito', (req, res) => {
    res.render('portfolio_kito', { title: 'Kito Aoto Portfolio | 3D & Scenario' });
});

// 3. 知花芹菜（Serina）のページ
app.get('/portfolio/serina', (req, res) => {
    res.render('portfolio_serina', { title: 'Tomoka Serina Portfolio | Art & Design' });
});

// サーバー起動設定（Vercel対応）
if (require.main === module) {
    app.listen(port, () => {
        console.log(`サーバー起動！ http://localhost:${port} を開いてください`);
    });
}

module.exports = app;