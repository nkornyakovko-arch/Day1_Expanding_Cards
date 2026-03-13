const panels = document.querySelectorAll('.panel') //document.querySelectorAll выбираем как бы все panel из html, для которых будет применяться "раскрытие" картинок//

panels.forEach((panel) => {     //Перебирает каждую панель картинки//
    panel.addEventListener('click', () =>{   
        removeActiveClasses()
       // console.log(123)//При нажатии перебирает каждую катринку//
        panel.classList.add('active')
    })

})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}