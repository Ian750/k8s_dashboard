const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());

var myArray = [
    '#FF5F5F', '#FF4545', '#FF3B3B', '#FF3030', '#FF2626', '#FF1C1C', '#FF1212', '#FF0000',
    '#F50000', '#F00000', '#EB0000', '#E60000', '#E00000', '#DB0000', '#D60000', '#D10000',
    '#CC0000', '#C70000', '#C20000', '#BD0000', '#B80000', '#B20000', '#AD0000', '#A80000',
    '#FFC14F', '#FFBD45', '#FFBA3B', '#FFB630', '#FFB326', '#FFB01C', '#FFAC12', '#FFA600',
    '#F59F00', '#F09C00', '#EB9900', '#E69500', '#E09200', '#DB8F00', '#D68B00', '#D18800',
    '#CC8500', '#C78100', '#C27E00', '#BD7B00', '#B87800', '#B27400', '#AD7100', '#A86E00',
    '#FFFF4F', '#FFFF45', '#FFFF3B', '#FFFF30', '#FFFF26', '#FFFF1C', '#FFFF0F', '#FFFF00',
    '#F5F500', '#F0F000', '#EBEB00', '#E6E600', '#E0E000', '#DBDB00', '#D6D600', '#D1D100',
    '#CCCC00', '#C7C700', '#C2C200', '#BDBD00', '#B8B800', '#B2B200', '#ADAD00', '#A8A800',
    '#4FFF4F', '#45FF45', '#3BFF3B', '#30FF30', '#26FF26', '#1AFF19', '#0DFF0D', '#00FF00',
    '#00F500', '#00F000', '#00EB00', '#00E600', '#00E000', '#00DB00', '#00D600', '#00D100',
    '#00CC00', '#00C700', '#00C200', '#00BD00', '#00B800', '#00B200', '#00AD00', '#00A800',
    '#4FFFFF', '#45FFFF', '#3DFFFF', '#30FFFF', '#26FFFF', '#1CFFFF', '#12FFFF', '#00FFFF',
    '#00F5F5', '#00F0F0', '#00EBEB', '#00E6E6', '#00E0E0', '#00DBDB', '#00D6D6', '#00D1D1',
    '#00CCCC', '#00C7C7', '#00C2C2', '#00BDBD', '#00B8B8', '#00B2B2', '#00ADAD', '#00A8A8',
    '#4545FF', '#3B3BFF', '#3030FF', '#2626FF', '#1C1CFF', '#1212FF', '#0808FF', '#0000FF',
    '#0000FA', '#0000F5', '#0000EB', '#0000E6', '#0000E0', '#0000DB', '#0000D6', '#0000D1',
    '#0000CC', '#0000C7', '#0000C2', '#0000BD', '#0000B8', '#0000B2', '#0000AD', '#0000A8',
    '#B54FFF', '#B045FF', '#AC3BFF', '#A830FF', '#A326FF', '#9F1CFF', '#990DFF', '#9300FF',
    '#9300FF', '#8D00F5', '#8700EB', '#8400E6', '#8100E0', '#7F00DB', '#7C00D6', '#7900D1',
    '#7600CC', '#7300C7', '#7000C2', '#6D00BD', '#6A00B8', '#6700B2', '#6400AD', '#6100A8',
    '#FF4FFF', '#FF45FF', '#FF3BFF', '#FF30FF', '#FF26FF', '#FF19FF', '#FF0DFF', '#FF00FF',
    '#F700F7', '#F000F0', '#EB00EB', '#E600E5', '#E000E0', '#DB00DB', '#D600D6', '#D100D1',
    '#CC00CC', '#C700C7', '#C200C2', '#BD00BD', '#B800B8', '#B200B2', '#AD00AD', '#A800A8'
];
var rand = Math.floor(Math.random() * myArray.length);
var rValue = myArray[rand];

app.get('/color', (req, res) => {
    res.send(rValue);
});
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
