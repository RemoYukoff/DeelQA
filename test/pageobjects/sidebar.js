module.exports = class Sidebar {
  get contractsTab() {
    return $(".sidebar-option-p=Create a Contract");
  }

  async openContractsTab() {
    await (await this.contractsTab).click();
  }
};
