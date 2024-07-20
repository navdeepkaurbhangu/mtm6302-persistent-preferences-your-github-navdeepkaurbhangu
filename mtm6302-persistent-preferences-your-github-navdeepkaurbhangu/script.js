document.addEventListener('DOMContentLoaded', () => {
    const itemList = document.getElementById('item-list');
    const themeSelect = document.getElementById('theme-select');
    const listStyleSelect = document.getElementById('list-style-select');

    const defaultItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

    defaultItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.classList.add('list-group-item');
        itemList.appendChild(li);
    });

    const loadPreferences = () => {
        const savedTheme = localStorage.getItem('theme');
        const savedListStyle = localStorage.getItem('listStyle');

        if (savedTheme) {
            document.body.className = savedTheme;
            themeSelect.value = savedTheme;
        }

        if (savedListStyle) {
            itemList.className = `list-group ${savedListStyle}`;
            listStyleSelect.value = savedListStyle;
        }
    };

    const savePreferences = () => {
        localStorage.setItem('theme', document.body.className);
        localStorage.setItem('listStyle', itemList.className.replace('list-group ', ''));
    };

    themeSelect.addEventListener('change', (e) => {
        document.body.className = e.target.value;
        savePreferences();
    });

    listStyleSelect.addEventListener('change', (e) => {
        itemList.className = `list-group ${e.target.value}`;
        savePreferences();
    });

    loadPreferences();
});
