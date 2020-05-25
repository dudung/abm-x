# js-basic-examples
Learning basic of JavaScript (JS) by examples

## Software
1. Internet browser, e.g. [Google Chrome](https://www.google.com/intl/en/chrome/), [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/), [Safari](https://www.apple.com/safari/), [Microsoft Edge](https://www.microsoft.com/en-us/edge), [Konqueror](https://kde.org/applications/internet/org.kde.konqueror), [Opera](https://www.opera.com/de), and [others](https://www.w3schools.com/js/js_versions.asp). 

2. Plain ASCII editor, e.g [Windows Notepad](https://www.microsoft.com/de-de/p/windows-notepad/9msmlrh6lzf3?activetab=pivot:overviewtab), [Kate](https://kate-editor.org/), [Vim](https://www.vim.org/), [Notepad++](https://notepad-plus-plus.org/downloads/) and [others](https://en.wikipedia.org/wiki/List_of_text_editors).

I will use Chrome and Notepad++ in producing the examples.

## Using JS console
Open console in a web browser, where the [shortcut is different for every browser](https://wordpress.org/support/article/using-your-browser-to-diagnose-javascript-errors/), e.g. `Ctrl + Shift + J` for Chrome.

## How to use an example
For an example there are minimum two files. The first is a HTML file and the second is a JS file. Suppose that for `example`, content of `example.html` is simply

```html
<!doctype html>
<html>
<head>
</head>
<body>
<script src="example.js"></script>
</body>
</html>
```

that calls `example.js`

```javascript
/*
	example.js
	Do something with JS
	
	Author Name | https://github.com/author-name
	
	20200523
	1928 Start this example.
*/

// Define a function
function main() {
	console.log("Hello, World!");
	
	// To see the result open JS console
}

// Call a function
main();
```
whose content is what we are interested in. To run `example`, download both files, `example.html` and `example.js`, open the first file with Chrome, press `Ctrl + Shift + J` for console, and see the result. Let's start with [js-hello](js-hello).

## Examples
[js-hello](js-hello), [js-textarea](js-textarea), [js-button](js-button), [js-button-textarea](js-button-textarea), [js-ta-btn-ta](js-ta-btn-ta)
