const T = require("tesseract.js")

var txt;

T.recognize('./book_text.jpg', 'vie')
    .then(out => console.log(out.data.text));


