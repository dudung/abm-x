---
layout: post
author: viridi
title: Is JS form the solution?
mathjax: false
ptext: false
x3dom: false
threejs: false
category: www
tags: [js]
---
Design a form with JS and print it as PDF (or DOCX?)

## DOCX developer menu
![](https://github.com/dudung/abm-x/raw/master/src/experiment/js-form-print-docx/drop-down-list.png)

Fig 1 Drop-down list under Developer tab in Microsoft Word.

Microsoft Office 2007 in the Word offers a drop-down list under Developer tab, which can use to limit options while fill a form [[1](#ref1)]. Unfortunately, I can not find how to trigger an event for, e.g. calculating sum of something, as a form with JS can do very easily.

## Example in 4091 form

![](https://github.com/dudung/abm-x/raw/master/src/experiment/js-form-print-docx/4091-0.png)

Fig 2 Option for role: Supervisor (Pembimbing) or Examiner (Penguji).

![](https://github.com/dudung/abm-x/raw/master/src/experiment/js-form-print-docx/4091-1.png)

Fig 3 Option for a mark: 1-4.

![](https://github.com/dudung/abm-x/raw/master/src/experiment/js-form-print-docx/4091-2.png)

Fig 4 Example when role and two marks are chosen.

A problem is until now I can not change the phrase 'Choose an item.', which is a little bit annoying. Besides Figs. 2-4 near the end of 4091 form there another option for signature.

![](https://github.com/dudung/abm-x/raw/master/src/experiment/js-form-print-docx/4091-3.png)

Fig 5 Role signature.

Actually Fig 5 should be relate to Fig 2 and change on one of them should trigger an event to change the other. And for average mark or Nilai Akhir (rata2), it should be calculated automatically after all marks (there are 12 categories) are chosen with the value for each category is 1, 2, 3, or 4.

## Plan
It sounds simple to make a form with JS that can relate fields to calculate something. The experiment is not yet started with JS [[2](#ref2)], but only capturing the feature in a DOCX file.

## Edit
2020-06-03 Create this post. <br />

## References
1. <a name="ref1"></a> David Weedmark, "How to Create a Drop Down Box in WordSmall Business", Chron, 12 Apr 2019, url https://smallbusiness.chron.com/create-drop-down-box-word-54411.html [20200603].
2. <a name="ref2"></a> url <https://github.com/dudung/abm-x/tree/master/src/experiment/js-form-print-docx>
