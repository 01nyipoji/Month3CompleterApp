const componentElements = document.querySelectorAll('[data-import]');

function renderComponent(elements){
    for (let element of elements){
    const file = element.getAttribute('data-import');

    console.log(file);
    fetch(file)
    .then((res) => {
        if(!res.ok){
            throw "Not found";
        }
        return res.text();
    })
    .then((component) => {
        element.innerHTML = component;
        loadComponentScripts(element);
    })
    .catch(() => {
        element.innerHTML = `<h4> Component not found</h4>`;
    });
};

};

renderComponent(componentElements);

function loadComponentScripts(element){
    const scripts = element.querySelectorAll('script');

    for (let script of scripts){
        const newScript = document.createElement("script");
        if(script.src){
            newScript.src = script.src
        }
        if(script.textContent){
            newScript.textContent = script.textContent;
        }
        script.remove();

        document.body.appendChild(newScript);
    }
}

