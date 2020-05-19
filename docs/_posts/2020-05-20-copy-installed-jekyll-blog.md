---
layout: post
author: viridi
title: Copy installed Jekyll blog
mathjax: false
ptext: false
x3dom: false
threejs: false
category: www
tags: [jekyll]
---
Migrate an installed Jekyll blog by copying folder structure and files.

## Copy steps
It is assumed that you have already have a `docs` folder in your `current-repo` as in [previous post](/www/2020/05/19/create-github-page-of-a-repository.html) and will use the files from `previous-repo`. 
1. Copy all files and folder structure of an installed Jekyll blog from other repository, but the `index.md` file.
2. Copy `index.md` to `index-old.md` to avoid overwriting.
3. Test the blog with a command line
```
bundle exec jekyll serve
```
4. Try to access `http://localhost:4000/` and see it works showing files in `repo/docs` folder.
5. Change content `index.md` from
```
# abm-x
```
to
```
---
layout: default
title: Home
---
# abm-x
```
by modifying the Front Matter, that begins and ends with a line consist only of `---` mark or a triple-dashed line, which should be positioned at the top of a file [[1](#ref1)].
6. Refresh internet browser showing the result.

## To-do
1. Modify content of the folders `_authors`, `_data`, `_includes`, `_layouts`, `_sass`, `assets`.
2. Modify the files `.gitignore`, `_config.yml`, `about.md`, `blog.md`, ~~`index.md`~~, `index-old.md`, `log.md`, `tag.md`, `team.md`.
3. Learn about the files `Gemfile` and `Gemfile.lock`.
4. Clean all.

## Edit
2020-05-20 Initiate the post. Set a to-do list. Change the first word of post title from `migrate` to `copy`. <br />

## References
1. <a name="ref1"></a> url [https://jekyllrb.com/docs/step-by-step/03-front-matter/](https://jekyllrb.com/docs/step-by-step/03-front-matter/) [20200520].


