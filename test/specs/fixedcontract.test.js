require("expect-webdriverio");
const LoginPage = require("../pageobjects/login.page");
const ContractTypePage = require("../pageobjects/contractType.page");
const FixedRateContractPage = require("../pageobjects/fixedRateContract.page");
const Seniority = require("../utils/seniority");
const Currency = require("../utils/currency");
const Cycle = require("../utils/cycle");
const Residence = require("../utils/residence");
const Province = require("../utils/province");
const ContractDetailPage = require("../pageobjects/contractDetail.page");
var dateFormat = require("dateformat");

const CONTRACT_NAME = "Contract Name";
const JOB_TITLE = "Back-end Developer";
const SENIORITY = Seniority.JUNIOR;
const SCOPE = "Testing Scope";
const SPECIAL_CLAUSE = "Testing a special clause";
const RESIDENCE = Residence.USA;
const PROVINCE = Province.COLORADO;
const AMOUNT = 1000;
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

describe("Deel App", () => {
  beforeEach("Login", async () => {
    LoginPage.open();
    await LoginPage.login("watik96956@advew.com", "Tryout_123");
  });
  it("should create a 'Fixed Rate' contract", async () => {
    await LoginPage.openContractsTab();
    await ContractTypePage.selectFixedRate();
    await FixedRateContractPage.typeContractName(CONTRACT_NAME);
    await FixedRateContractPage.typeJobTitle(JOB_TITLE);
    await FixedRateContractPage.selectSeniority(SENIORITY);
    await FixedRateContractPage.typeScope(SCOPE);
    await FixedRateContractPage.selectYesterdayAsStartDate();
    await FixedRateContractPage.clickNextButton();
    await FixedRateContractPage.typeRate(AMOUNT);
    await FixedRateContractPage.selectCurrency(Currency.GBP.name);
    await FixedRateContractPage.selectCycle(Cycle.WEEK);
    await FixedRateContractPage.clickNextButton();
    await FixedRateContractPage.clickNextButton();
    await FixedRateContractPage.addSpecialClause(SPECIAL_CLAUSE);
    await FixedRateContractPage.clickNextButton();
    await FixedRateContractPage.selectResidence(RESIDENCE);
    await FixedRateContractPage.selectProvince(PROVINCE);
    await FixedRateContractPage.clickCreateContract();
    await expect(ContractDetailPage.title).toHaveText(CONTRACT_NAME);
    await expect(ContractDetailPage.startDate).toHaveText(
      dateFormat(yesterday, "mmm dS, yyyy")
    );
    await expect(ContractDetailPage.contractType).toHaveText("Fixed rate");
    await expect(ContractDetailPage.jobTitle).toHaveText(JOB_TITLE);
    await expect(ContractDetailPage.seniorityLevel).toHaveText(SENIORITY);
    await expect(ContractDetailPage.rate).toHaveTextContaining(
      Currency.GBP.symbol
    );
    await expect(ContractDetailPage.rate).toHaveTextContaining(
      AMOUNT.toLocaleString("en-US")
    );
    await expect(ContractDetailPage.cycle).toHaveTextContaining(
      Cycle.WEEK.toLowerCase()
    );
    await expect(ContractDetailPage.scopeOfWork).toHaveText(SCOPE);
    await expect(ContractDetailPage.country).toHaveText(
      `${PROVINCE} (${RESIDENCE})`
    );
    await expect(ContractDetailPage.specialClause).toHaveText(SPECIAL_CLAUSE);
  });
});
