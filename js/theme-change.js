const themes = {
    "1": {
        '--main-background-color': 'hsl(222, 26%, 31%)',
        '--toggle-background': 'hsl(223, 31%, 20%)',
        '--keypad-background': 'hsl(223, 31%, 20%)',
        '--screen-background': 'hsl(224, 36%, 15%)',
        '--key-text': 'hsl(221, 14%, 31%)',
        '--main-text': 'white',
        '--sec-text': '',
        '--action-key-background': 'hsl(225, 21%, 49%)',
        '--action-key-shadow': 'hsl(224, 28%, 35%)',
        '--toggle-key-background': 'hsl(6, 63%, 50%)',
        '--res-key-shadow': 'hsl(6, 70%, 34%)',
        '--key-background': 'hsl(30, 25%, 89%)',
        '--key-shadow': 'hsl(28, 16%, 65%)'
    },
    "2": {
        '--main-background-color': 'hsl(0, 0%, 90%)',
        '--toggle-background': 'hsl(0, 5%, 81%)',
        '--keypad-background': 'hsl(0, 5%, 81%)',
        '--screen-background': 'hsl(0, 0%, 93%)',
        '--key-text': 'hsl(60, 10%, 19%)',
        '--main-text': 'black',
        '--sec-text': '',
        '--action-key-background': 'hsl(185, 42%, 37%)',
        '--action-key-shadow': 'hsl(185, 58%, 25%)',
        '--toggle-key-background': 'hsl(25, 98%, 40%)',
        '--res-key-shadow': 'hsl(25, 99%, 27%)',
        '--key-background': 'hsl(45, 7%, 89%)',
        '--key-shadow': 'hsl(35, 11%, 61%)'
    },
    "3": {
        '--main-background-color': 'hsl(268, 75%, 9%)',
        '--toggle-background': 'hsl(268, 71%, 12%)',
        '--keypad-background': 'hsl(268, 71%, 12%)',
        '--screen-background': 'hsl(268, 71%, 12%)',
        '--key-text': 'hsl(52, 100%, 62%)',
        '--main-text': 'white',
        '--sec-text': 'hsl(198, 20%, 13%)',
        '--action-key-background': 'hsl(281, 89%, 26%)',
        '--action-key-shadow': 'hsl(285, 91%, 52%)',
        '--toggle-key-background': 'hsl(176, 100%, 44%)',
        '--res-key-shadow': 'hsl(177, 92%, 70%)',
        '--key-background': 'hsl(268, 47%, 21%)',
        '--key-shadow': 'hsl(290, 70%, 36%)'
    }
}

export function setTheme(e) {
    // value = parseInt(value, 10), // Convert to an integer
    //var root = document.documentElement();
    var themeId = Number(e.target.value);
    for (const variable in themes[themeId]) {
        document.documentElement.style.setProperty(variable, themes[themeId][variable]);
    }
}