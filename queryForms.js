class QueryForm {
    constructor(name, parentElement) {
        this.name = name;
        this.parent = document.createElement('form');
        parentElement.append(this.parent);
        this.parent.id = name;
        this.options = [];
    }

    addOption(name, checked) {
        const id = name.toLowerCase();

        const formCheck = document.createElement('div');
        formCheck.classList.add('form-check');


        const checkbox = document.createElement('div');
        checkbox.id = id;
        checkbox.classList.add('form-check-input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('value', id);
        checkbox.checked = checked;

        const label = document.createElement('label');
        label.classList.add('form-check-label');
        label.setAttribute('for', id);
        label.innerText = name;

        this.parent.append(formCheck)
        formCheck.append(checkbox, label)
        this.options.push(checkbox);
    }

    submit() {
        // TODO
        console.log("NOT YET IMPLEMENTED");
    }

    getValues() {
        // TODO get all options' values
    }
}