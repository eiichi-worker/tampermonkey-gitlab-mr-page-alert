// ==UserScript==
// @name         tampermonkey-gitlab-mr-page-alert
// @namespace    https://github.com/eiichi-worker/tampermonkey-gitlab-mr-page-alert
// @version      2019-06-18
// @description  GitLabのマージリクエストページを安全に！
// @author       Eiichi Fujimoto
// @match        https://gitlab.com/*/merge_requests/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    const ALERT_BRANCH = "master"

    let targetBranch = $(".js-target-branch").text().trim()
    let mergeButton = $("button.qa-merge-button")

    if (targetBranch == ALERT_BRANCH) {
        // Button背景変更
        mergeButton.css('background-color', 'Red').css('color', 'Yellow')
        // ボックスの背景変更
        $(".mr-state-widget div").css('background-color', 'lavenderblush')
        // 注意メッセージ表示
        $(".mr-widget-body-controls").append("<b>【注意】" + ALERT_BRANCH + "ブランチへのマージリクエストです!</b>")
    }
})();
