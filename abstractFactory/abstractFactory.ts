interface CheckBox {
  render: () => unknown;
  onClick: () => unknown;
}

interface Button {
  render: () => unknown;
  onClick: () => unknown;
}

class WinCheckbox implements CheckBox {
  onClick() {}
  render() {}
}

class MacCheckbox implements CheckBox {
  onClick() {}
  render() {}
}

class WinButton implements CheckBox {
  onClick() {}
  render() {}
}

class MacButton implements CheckBox {
  onClick() {}
  render() {}
}

interface GUIFactory {
  createButton: () => Button;
  createCheckbox: () => CheckBox;
}

class WinFactory implements GUIFactory {
  createButton(): Button {
    return new WinButton();
  }
  createCheckbox(): CheckBox {
    return new WinCheckbox();
  }
}

class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }
  createCheckbox(): CheckBox {
    return new MacCheckbox();
  }
}

class App {
  private button: Button;

  constructor(public factory: GUIFactory) {}

  createUI() {
    this.button = this.factory.createButton();
  }

  render() {
    this.button.render();
  }
}

class AppConfig {
  public app: App;

  constructor() {
    const config: string = ["Win", "Web"][Math.floor(Math.random() * 2)];
    let factory: GUIFactory;

    if (config === " Win") {
      factory = new WinFactory();
    } else if (config === "Web") {
      factory = new MacFactory();
    } else {
      throw new Error("Unknown OS");
    }

    this.app = new App(factory);
  }
}
