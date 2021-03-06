#!/bin/bash

curr_branch=$(git rev-parse --abbrev-ref HEAD)
tmp_branch="deploy-`date +'%Y%m%d%H%M%S'`"

git checkout -b $tmp_branch

if [[ $(git rev-parse --abbrev-ref HEAD) -ne $tmp_branch ]]
then
    exit 0
else
    sed -i.bak "/gh-pages/d" .gitignore
    npm run clean
    npm run build
    git add .
    git commit -m "Deploy gh-pages"
    git subtree push --prefix gh-pages origin gh-pages
    git push origin `git subtree split --prefix gh-pages $tmp_branch`:gh-pages --force
    git checkout $curr_branch
    git branch -D $tmp_branch
fi
exit 0
