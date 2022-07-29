// window loder
window.onload = () => {
    main()
}

const hex = ['A','B','C','D','E','F','a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9']

// background color change function 
function main(){

    const root = document.getElementById('root')
    const btn = document.getElementById('btn')
    const color = document.getElementById('hex')

    btn.addEventListener('click', function() {
        
        let hexColor = '#'
        for (i = 0; i < 6; i++) {
            hexColor += hex[hexColorGenerator()]
        }
        
        root.style.backgroundColor = hexColor
        color.innerText = hexColor
    })
}

// hex color generator
function hexColorGenerator () {
    return Math.floor(Math.random() * hex.length)
}