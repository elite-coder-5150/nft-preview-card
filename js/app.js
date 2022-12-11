class App {
    constructor() {
        this.message = 'Hello World!';
    }

    init() {
        this.cacheDom();
        this.initEvents();
    }

    cacheDom() {
        this.$message = document.querySelector('.message');
    }

    initEvents() {
        this.$message.addEventListener('click', this.showMessage.bind(this));
    }
}

let app = new App();
app.init();

// create me a modal class
class Modal {
    constructor() {
        this.message = 'Hello World!';
    }

    cacheDom() {
        this.modal = document.querySelector('.modal');
    }
    open() {
        this.modal.classList.add('open');
    }

    close() {
        this.modal.classList.remove('open');
    }
}