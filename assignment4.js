//JS DOM Assignment - Dark Theme
function swapTheme() {
    const appDiv = document.getElementById('app');
    const swapButton = document.getElementById('swap');

    if (appDiv.classList.contains('day')) {
        appDiv.classList.replace('day', 'night');
        swapButton.classList.replace('button_day', 'button_night');
    } else {
        appDiv.classList.replace('night', 'day');
        swapButton.classList.replace('button_night', 'button_day');
    }

}


//JS DOM Assignment - Div Creation
function createDiv(width, height, text) {
    const newDiv = document.createElement('div');
    newDiv.style.width = width + 'px';
    newDiv.style.height = height + 'px';
    newDiv.textContent = text;
    const container = document.getElementById('container');
    container.appendChild(newDiv);
}


//JS DOM Assignment - Hide Show Para
function toggleVisibility() {
    const paragraph = document.getElementById('useless-paragraph');
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block';
    } else {
        paragraph.style.display = 'none';
    }
}

//JS DOM Assignment - Dynamic - CSS
const textContainer = document.getElementById('text-container');
const colorBox = document.getElementById('colorbox');
const colorChangeButton = document.getElementById('colorchange');
const fontSizeRange = document.getElementById('fontsize');
const italicButton = document.getElementById('italic');
const underlineButton = document.getElementById('underline');
const boldButton = document.getElementById('bold');
const fontList = document.getElementById('list');
const getStyleButton = document.getElementById('getstyle');
const cssProps = document.getElementById('css-props');

colorChangeButton.addEventListener('click', function() {
    const colorValue = colorBox.value;
    textContainer.style.color = colorValue;
});

fontSizeRange.addEventListener('input', function() {
    const fontSizeValue = fontSizeRange.value;
    textContainer.style.fontSize = fontSizeValue + 'px';
});

italicButton.addEventListener('click', function() {
    toggleTextStyle('italic');
});

underlineButton.addEventListener('click', function() {
    toggleTextStyle('underline');
});

boldButton.addEventListener('click', function() {
    toggleTextStyle('bold');
});

function toggleTextStyle(style) {
    const currentStyle = textContainer.style.fontStyle;
    if (style === 'italic') {
        textContainer.style.fontStyle = currentStyle === 'italic' ? 'normal' : 'italic';
    } else if (style === 'underline') {
        const textDecoration = textContainer.style.textDecoration;
        textContainer.style.textDecoration = textDecoration.includes('underline') ? 'none' : 'underline';
    } else if (style === 'bold') {
        const fontWeight = textContainer.style.fontWeight;
        textContainer.style.fontWeight = fontWeight === 'bold' ? 'normal' : 'bold';
    }
}

fontList.addEventListener('change', function() {
    const fontFamily = fontList.value;
    textContainer.style.fontFamily = fontFamily;
});

getStyleButton.addEventListener('click', function() {
    const cssProperties = {
        'color': textContainer.style.color,
        'font-size': textContainer.style.fontSize,
        'font-family': textContainer.style.fontFamily,
        'font-style': textContainer.style.fontStyle,
        'font-weight': textContainer.style.fontWeight,
        'text-decoration': textContainer.style.textDecoration,
    };

    let cssText = '';
    for (const prop in cssProperties) {
        if (cssProperties[prop]) {
            cssText += `${prop}: ${cssProperties[prop]}; `;
        }
    }

    cssProps.textContent = cssText;
});
