# Taiwan Spots
## 說明
實作一個可以輸入縣市或景點關鍵字過濾台灣景點的應用，當使用者點進景點後可觀看詳細資料介紹。

## 練習重點
React，Redux，React Router，PostCSS，Webpack

## 待處理
* CSS部分尚未動工
* 撈取資料的方式，目前放在firebase，使用Restful API取資料
* 原始資料[政府資料開放平臺](https://data.gov.tw/dataset/7777)的圖片連結失效，使用[google-images](https://github.com/vadimdemedes/google-images)透過api搜尋圖片資料，會影響效能
* Webpack優化設定

## 已完成
* 輸入關鍵字篩選資料
* 使用Router處理每個景點說明頁
* 使用react-promise處理非同步資料