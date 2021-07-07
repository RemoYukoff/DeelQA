const Sidebar = require("./sidebar");

class FixedRateContract extends Sidebar {
  get nextButton() {
    return $("button=next");
  }
  get contractNameInput() {
    return $("[name='name']");
  }
  get jobTitleInput() {
    return $("[name='jobTitle']");
  }
  get senioritySelector() {
    return $("[data-qa=selector-seniority-level] input[type=text]");
  }
  get scopeInput() {
    return $("[name='scope']");
  }
  get calendarInput() {
    return $(".calendar-input");
  }
  get rateInput() {
    return $("[name='rate']");
  }
  get yesterdayButton() {
    return $(
      "//*[contains(@class,'react-calendar__tile--active')]/preceding-sibling::*[1]"
    );
  }
  get currencySelector() {
    return $("[data-qa=currency-select] input[type=text]");
  }
  get cycleSelector() {
    return $("[data-qa=cycle-select] input[type=text]");
  }
  get specialClauseButton() {
    return $("[data-qa=special-clause-card] button");
  }
  get specialClauseInput() {
    return $("[data-qa=special-clause-card] textarea");
  }
  get taxResidenceInput() {
    return $("[data-qa=contractor-tax-residence] input");
  }
  get taxProvinceInput() {
    return $("[data-qa=contractor-tax-residence-province] input");
  }
  get createContractButton() {
    return $("button=create contract");
  }

  async typeContractName(contractName) {
    await (await this.contractNameInput).setValue(contractName);
  }
  async typeJobTitle(jobTitle) {
    await (await this.jobTitleInput).setValue(jobTitle);
  }
  async selectSeniority(seniority) {
    await (await this.senioritySelector).setValue(seniority + "\n");
  }
  async typeScope(scope) {
    await (await this.scopeInput).setValue(scope);
  }
  async selectYesterdayAsStartDate(scope) {
    await (await this.calendarInput).click();
    await (await this.yesterdayButton).click();
  }
  async clickNextButton() {
    await (await this.nextButton).click();
  }
  async typeRate(rate) {
    await (await this.rateInput).setValue(rate);
  }
  async selectCurrency(currency) {
    await (await this.currencySelector).setValue(currency + "\n");
  }
  async selectCycle(cycle) {
    await (await this.cycleSelector).setValue(cycle + "\n");
  }
  async addSpecialClause(clause) {
    await (await this.specialClauseButton).click();
    await (await this.specialClauseInput).setValue(clause);
  }
  async selectResidence(residence) {
    await (await this.taxResidenceInput).setValue(residence + "\n");
  }
  async selectProvince(province) {
    await (await this.taxProvinceInput).setValue(province + "\n");
  }
  async clickCreateContract() {
    await (await this.createContractButton).click();
  }
}

module.exports = new FixedRateContract();
