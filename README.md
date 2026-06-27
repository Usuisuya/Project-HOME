
<!DOCTYPE html>
<html lang="ja">

<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width, initial-scale=1.0">

<title>Project HOME</title>

<link rel="stylesheet" href="style.css">

</head>

<body>

<header>

<h1>🏠 Project HOME</h1>

<p>

2000年代の個人サイトを、

もう一度。

</p>

</header>

<nav>

<button>🏠 Home</button>

<button>👤 Profile</button>

<button>📝 Blog</button>

<button>🖼 Gallery</button>

<button>📅 Update</button>

</nav>

<main>

<section>

<h2>ようこそ！</h2>

<p>

Project HOMEへようこそ。

ここでは昔ながらの個人サイトを

誰でも簡単に作れます。

</p>

</section>

<section>

<h2>アクセスカウンター</h2>

<p>

あなたは

<span id="counter">

00000001

</span>

人目のお客様です！

</p>

</section>

<section>

<h2>更新履歴</h2>

<ul>

<li>

2026/06/27

Project HOME 開発開始！

</li>

</ul>

</section>

</main>

<footer>

©2026 Project HOME

</footer>

<script src="script.js"></script>

</body>

</html>
/* ===================================
   Project HOME v0.1 Alpha
   style.css
=================================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background:#0b7bd4;
    color:#222;
    font-family:Verdana, Geneva, sans-serif;
    line-height:1.6;
    padding:20px;
}

/* メインのウィンドウ */

main,
header,
nav,
footer{

    max-width:900px;
    margin:auto;
}

/* タイトル */

header{

    background:white;
    border:3px solid #003399;
    padding:20px;
    text-align:center;
    margin-bottom:15px;

}

header h1{

    color:#003399;
    margin-bottom:10px;

}

/* メニュー */

nav{

    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:10px;

    background:white;

    border:3px solid #003399;

    padding:15px;

    margin-bottom:20px;

}

nav button{

    background:#dce8ff;

    border:2px solid #003399;

    padding:10px 18px;

    cursor:pointer;

    transition:.2s;

    font-size:16px;

}

nav button:hover{

    background:#b9d2ff;

    transform:translateY(-2px);

}

/* コンテンツ */

section{

    background:white;

    border:3px solid #003399;

    margin-bottom:20px;

    padding:20px;

}

section h2{

    color:#003399;

    margin-bottom:15px;

}

/* 更新履歴 */

ul{

    padding-left:20px;

}

/* フッター */

footer{

    background:white;

    border:3px solid #003399;

    padding:15px;

    text-align:center;

    margin-top:20px;

}

/* スマホ対応 */

@media(max-width:600px){

    nav{

        flex-direction:column;

    }

    nav button{

        width:100%;

    }

}