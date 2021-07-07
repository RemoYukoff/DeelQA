const Sidebar = require("./sidebar");

class LoginPage extends Sidebar {
  get emailInput() {
    return $("[name=email]");
  }
  get passwordInput() {
    return $("[name=password]");
  }
  get loginButton() {
    return $("button[type='submit']");
  }

  async login(email, password) {
    await (await this.emailInput).setValue(email);
    await (await this.passwordInput).setValue(password);
    await (await this.loginButton).click();
  }

  open() {
    browser.url("login");
  }
}

module.exports = new LoginPage();
