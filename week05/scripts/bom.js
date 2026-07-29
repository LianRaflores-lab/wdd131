const input = document.querySelector('#favchap')
const button = document.querySelector('button')
const list = document.querySelector('#list')

let chaptersArray = getChapterList() || [];

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const li = document.createElement('li')
        const deleteButton = document.createElement('button')
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();

        li.textContent = input.value;
        deleteButton.textContent = '❌'
        li.append(deleteButton)
        list.append(li)

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        })

        input.value = ''
        input.focus();
    }
});

chaptersArray.forEach(chapter => {
    displayList(chapter);
});