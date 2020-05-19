---
layout: post
author: viridi
title: Installing Markdown Viewer
mathjax: false
ptext: false
x3dom: false
threejs: false
category: www
tags: [markdown]
---
Suggest a hack for MathJax showing equation number in Markdown Viewer.

## Try a Google Chrome extension
An extension for Google Chrome, known as Markdown Viewer [[1](#ref1)] was installed to experience an offline version of markdown. And it was good since it can detect file editing and upload the rendering result automatically. But it has not yet fully supported equation numbering of MathJax [[2](#ref2)]

## MathJax without equation numbering
Simeon Velichkov, the author, has not yet use the MathJax configuration as suggested by Refaat Yakoub for showing equation numbering. Suggest a solution by editing directlty the local file.

1. In Windows 10, put
```javascript
// Set numbering
MathJax.Hub.Config({
	TeX: { equationNumbers: { autoNumber: "AMS" } } 
})
```
	in the near end of `index.js file` located at
```
C:\Users\[login_name]\AppData\Local\Google\Chrome\User Data\Default\Extensions\[extension_id]\3.9_0\content
```
folder.
2. Find the `[extension_id]` of the Markdown Viewer in `chrome://extensions/` with developer mode, which gives
```
ckkdlimhmcjmikdlpkmbgfkaikojcbjk
```
as shown in [[1](#ref1)].

Forking the `https://github.com/simov/markdown-viewer` and propose above change will be planned.

## Note
After save the current edited file, Google Chrome update the file automaticall but show the rendered result from the top. Better to make an anchor, e.g. using `## section` for `<h2></h2>` and use it in the address bar. But for long part of secion of sub section, I have no ide right now.

## Edit
2020-05-19 Initiate minimal post including two references with url.<br />
2020-05-19 Add proper Front Matter for a Jekyll blog post and document structure. Edit link from only `link-text` to `[link-text](link-text)`. Remove links in post excerpt.

## References
1. <a name="ref2"></a> url [https://chrome.google.com/webstore/detail/markdown-viewer/ckkdlimhmcjmikdlpkmbgfkaikojcbjk](https://chrome.google.com/webstore/detail/markdown-viewer/ckkdlimhmcjmikdlpkmbgfkaikojcbjk) [20200519].
2. <a name="ref1"></a> url [https://www.mathjax.org/](https://www.mathjax.org/)  [20200520].
