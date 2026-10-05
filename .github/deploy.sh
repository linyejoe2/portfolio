#!/usr/bin/env sh

set -e # 顯示錯誤資訊

npm run lint-fix # 修正錯誤

npm run build # 生成靜態檔案

cd ./dist # 進入生成的資料夾
# cp -R ./locales/zh-TW ./locales/zh # 複製中文翻譯出來

# 設定 git 相關資訊
msg='Automated deployment from GitHub Actions.'
githubUrl=https://x-access-token:${GITHUB_TOKEN}@github.com/linyejoe2/portfolio.git
git config --global user.name "linyejoe2"
git config --global user.email "linyejoe2@gmail.com"

# 建立一個臨時的 branch
git init
git add -A
git commit -m "${msg}"

# 推送到github
git push -f $githubUrl master:release

# 把 ./dist 的內容刪乾淨
cd -
rm -rf ./dist
