---
layout: post
author: viridi
title: View a molecule using 3Dmol.js
mathjax: false
ptext: false
x3dom: false
threejs: false
3dmol: true
category: www
tags: [js]
---
Embed a 3Dmol viewer in a post

A modern, object-oriented JavaScript library for visualizing molecular data is available [[1](#ref1)].

<div style="height: 400px; width: 400px; position: relative;" class='viewer_3Dmoljs' data-pdb='1YCR' data-backgroundcolor='0xffffff' 
        data-select1='chain:A' data-style1='cartoon:color=spectrum' data-surface1='opacity:.7;color:white' data-select2='chain:B' data-style2='stick'></div>

Fig 1 Example of molecule 1YCR in a 3Dmol viewer.

Following lines

```javascript
<div
	style="height: 400px; width: 400px; position: relative;" 

	class='viewer_3Dmoljs'

	data-pdb='1YCR'
	data-backgroundcolor='0xffffff' 

	data-select1='chain:A'
	data-style1='cartoon:color=spectrum'
	data-surface1='opacity:.7;color:white'

	data-select2='chain:B'
	data-style2='stick'
>
</div>
```

are required for createing Fig 1.

## Note
Purpose of this post is to archive information about 3Dmol.js library. How to obtain another PDB information, beside `1YCR` is still unclear for me at the time this post is created.

## Edit
2020-06-09 Create this post. <br />

## References
1. <a name="ref1"></a> "3Dmol.js", url https://3dmol.csb.pitt.edu [20200609].