interface Button {
    render: () => unknown
    onClick: (f: () => unknown) => unknown
}

class WindowsButton implements Button {
    render() {
        // do something
    }

    onClick(cb: () => unknown) {
        cb();
    }
}

class HTMLButton implements Button {
    render() {
        // do something 
    }
    onClick(cb: () => unknown) {
        cb();
    }
}

abstract class Dialog {

    abstract createButton(): Button

    renderWindow() {
        // render interface elements
        
        const okButton: Button = this.createButton()
        okButton.onClick(() => {});
        okButton.render();
    }
}

class WindowsDialog extends Dialog {
    createButton(): Button {
        return new WindowsButton();
    }
}

class WebDialig extends Dialog {
    createButton(): Button {
        return new HTMLButton();
    }
}

class ClientApplication {
    dialog: Dialog;


    readAppConfig(): string {
        const os = ['Win', 'Web'];

        return os[Math.floor(Math.random() * 2)]
    }

    initialize() {
        const config: {OS: string} = {OS: this.readAppConfig()}
        
        if (config.OS === 'Win') {
            this.dialog = new WindowsDialog();
        } else if (config.OS === 'Web') {
            this.dialog = new WebDialig();
        } else {
            throw new Error('Unknown operating system');
        }
    }

    main() {
        this.dialog.createButton();
        this.dialog.renderWindow();
    }
}