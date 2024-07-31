document.addEventListener('DOMContentLoaded', () => {
    const toDo = document.querySelector('#toDo')
    const addTodo = document.querySelector('#addTodo')
    const toDoList = document.querySelector('#toDoList')


    addTodo.addEventListener('click', (event) => {
        const item = document.createElement('div') // div

        const checkBox = document.createElement('input') // 완료
        checkBox.setAttribute('type','checkbox')


        const text = document.createElement('span') // 내용
        text.textContent = toDo.value.trim();

        // onkeypress="if(window.event.keyCode==13){join()}"

        const removeButton = document.createElement('button') // 삭제
        removeButton.textContent = 'x'


        removeButton.addEventListener('click', (event) => {
            event.currentTarget.parentNode.parentNode.removeChild(event.currentTarget.parentNode)

            
})

        checkBox.addEventListener('change', (event) => {
            if(checkBox.checked){
                text.style.textDecorationLine = "line-through"
                text.style.color = "red"
                
            }else{
                text.style.textDecorationLine = "none"
            }
        })
                
        item.appendChild(checkBox)
        item.appendChild(text)
        item.appendChild(removeButton)

        toDoList.appendChild(item)
        toDo.value = ''
        })


})


