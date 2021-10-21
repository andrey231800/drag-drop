const item = document.querySelector('.item'),
    placeholders = document.querySelectorAll('.placeholder');

    placeholders.forEach(i => {
        i.addEventListener('dragover', dragOver);
        i.addEventListener('dragenter', dragEnter);
        i.addEventListener('dragleave', dragLeave);
        i.addEventListener('drop', dragDrop);
    })

item.addEventListener('dragstart',dragStart );

item.addEventListener('dragend', dragEnd);

function dragStart(event) {
    event.target.classList.add('hold')
    setTimeout(() => {
        item.classList.add('hide')
    },0)
    item.textContent = 'Отпусти меня';
};

function dragEnd(event){
    event.target.classList.remove('hide', 'hold');
    item.textContent = 'Перетащи меня'
};

function dragOver(event) {
    event.preventDefault();
}

function dragEnter(event) {
    event.target.classList.add('hovered')
}

function dragLeave(event) {
    event.target.classList.remove('hovered')
    
}

function dragDrop(event) {
    event.target.append(item)
    event.target.classList.remove('hovered')
}