---
layout: post
author: viridi
title: Create Github page of a repository
mathjax: false
ptext: false
x3dom: false
threejs: false
category: www
tags: [github]
---
Steps for making a page of a Github repository.

## The steps
Assume that your username is `user` and you have a repository with the name `repo`, which you want to have a Github page.

You should have already a repository with the name of `user.github.io` and the site can be accessed at `https://user.github.io` [[1](#ref1)].

1. In you local machine navigate to `repo` folder.
2. Create `docs` folder in the `repo`.
3. Create `index.md` in that folder.
4. Write following content in the file
```
# abm-x
```
5. Commit the work with a message "create docs/index.md".
6. Push the work.
7. Login to your Github account.
8. Navigate to the repository `repo`.
9. Go to settings of `repo`.
10. Set Github pages with source is master branch `/docs` folder.
11. Test the main page `https://user.github.io/repo/`, which is now up.

It is a rewritten post that has been performed in pText but not documented, while learning and installing Jekyll for blogging. Rename it from `log.md` to `2020-05-19-create-github-page-of-a-repository` and later put it the `_posts` folder.

## Edit
2020-05-19 Initiate the post.<br />
2020-05-19 Add proper Front Matter for a Jekyll blog post and document structure. Correct some typographical errors.

## References
1. <a name="ref1"></a> url https://help.github.com/en/github/working-with-github-pages/creating-a-github-pages-site [20200520].