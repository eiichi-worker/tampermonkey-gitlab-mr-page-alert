# tampermonkey-gitlab-mr-page-alert

## これは何？

Gitlab.comのマージリクエスト画面を拡張する、Tampermonkeyのスクリプトです。

![](/documents/images/image.png)

### Gitlab.comのマージリクエスト画面を安全にします

- masterブランチへのマージリクエストの場合に
    - マージボタンとボックスの背景を赤くする
    - masterブランチへのマージですよメッセージを表示する

## 導入

### 1. ユーティリティ画面を開きます

- Chromeの場合 → [chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo/options.html#nav=utils](chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo/options.html#nav=utils)

### 2. 次のURLを入力しインポートします

- https://raw.githubusercontent.com/eiichi-worker/tampermonkey-gitlab-mr-page-alert/master/src/index.js

![](/documents/images/import.png)

