let paletteBg = document.querySelectorAll('.palette1__color');
let paletteItem = document.querySelectorAll('.palette2__color');
let item = document.querySelectorAll('.item')
let color = ['pink', 'aqua', 'gold', 'purple', 'white']

for(i = 0; i < color.length; i++){
    paletteBg[i].style.background = color[i]
    paletteItem[i].style.background = color[i]
}

paletteBg.forEach((el,i) => {  
    el.addEventListener('click', () => {        
             document.body.style.background = color [i]
    })
})

paletteItem.forEach((el,i) => {  
    el.addEventListener('click', () => {
        item.forEach((col) => {
            col.style.background = color[i]            
        })        
    })
})



