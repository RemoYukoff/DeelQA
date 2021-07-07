const Sidebar = require("./sidebar");

class ContractTypePage extends Sidebar {
  get fixedRateButton() {
    return $("h4=Fixed Rate");
  }

  async selectFixedRate() {
    await (await this.fixedRateButton).click();
  }
}

module.exports = new ContractTypePage();
