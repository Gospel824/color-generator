const colorCode = document.getElementById('colorCode');
const colorBox = document.getElementById('color-box')
const copyHex = document.getElementById('copy-btn');
const generateBtn = document.getElementById('generate-btn');
const copyRGB = document.getElementById('Copy-RGB' );
const resetBtn = document.getElementById('Re-set');


let color_Code = '';

function GenerateBtn() {
    const hexChars = '0123456789ABCDEF'
    let hexColor = '#';

    for (let i  = 0; i  < 6; i++){
        hexColor += hexChars[Math.floor(Math.random() * 16)];
    };

    colorBox.style.backgroundColor = hexColor;
    colorCode.innerHTML = hexColor;
    colorCode.style.color = hexColor;
}


function copyHEX() {
    const colorText = colorBox.style.backgroundColor
    const hexCode = rgbtoHex(colorText);
    const tempIput = document.createElement('input')
    document.body.appendChild(tempIput);
    tempIput.value = hexCode;
    tempIput.select();
    document.execCommand('copy');
    document.body.removeChild(tempIput)
    alert('Color copied to clipboard: ' +hexCode)

}

function rgbtoHex(rgbColor) {
    const regex = /rgb\((\d+), (\d+), (\d+)\)/;
    const matches = regex.exec(rgbColor);
    const r = parseInt(matches[1]);
    const g = parseInt(matches[2]);
    const b = parseInt(matches[3]);
    return '# ' + componentToHex(r) + componentToHex(g) + componentToHex(b);
    
}

function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
    
}





function CopyRGB() {
    const colorText = colorBox.style.backgroundColor
    const tempIput = document.createElement('input')
    document.body.appendChild(tempIput);
    tempIput.value = colorText;
    tempIput.select();
    document.execCommand('copy');
    document.body.removeChild(tempIput)
    alert('Color copied to clipboard: ' + colorText)
    rgbCode.innerHTML = colorText;
    rgbcode.style.color = colorText

}

    
function ResetBtn() {
 colorCode.innerHTML = ""
 colorBox.innerHTML = ""
    
}













