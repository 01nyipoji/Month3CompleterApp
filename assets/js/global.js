const componentElements = document.querySelectorAll('[data-import]');

for (let element of componentElements){
    const file = element.getAttribute('data-import');

    console.log(file);
    fetch(file)
    .then((res) => {
        return res.text();
    })
    .then((component) => {
        element.innerHTML = component;
    })
    .catch(() => {
        element.innerHTML = `<h4> Component not found</h4>`;
    });
};