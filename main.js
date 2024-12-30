const T = require("tesseract.js")

T.recognize('./elon_musk_vn.png', 'vie', {logger: e => console.log(e)})
    .then(out => console.log(out.data.text));

