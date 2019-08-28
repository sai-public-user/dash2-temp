const row = {
    id: "",
    prescriberName: "Name",
    prescriberMSO: "Mso",
    prescriberPrimaryPractice: "Practice",
    prescriberPrimaryAddress: "Address",
    prescriberPrimaryCounty: "County",
    npiNumber: "Number",
    PrimarySpeciality: "Speciality",
    spendPerMember: 0,
    genericDispensingRate: 0,
    costPerScript: 0,
    extendedDaySuppleScriptPercentile: 0,
    nonFormularyFillsPercentile: 0,
    totalFills: 0,
    totalAllowed: 0,
    genericEfficiencyRate: 0,
    opioidFillsPercentile: 0,
    preferedBrandFills: 0,
    nonPreferredBrandFillsPercentils: 0,
    specialityFillsPercentile: 0,
    selectCareFillsPercentile: 0,
  };
  
  const rows = [];
  
  for (let i = 0; i < 20; i++) {
    let data = { ...row };
    data.id = i;
    rows.push(data);
  }
  
  const Data = {
    headers: [
      { name: "prescriber Name", value: "prescriberName" },
      { name: "prescriber MSO ", value: "prescriberMSO" },
      { name: "prescriber Primary Practice", value: "prescriberPrimaryPractice" },
      { name: "prescriber Primary Address", value: "prescriberPrimaryAddress" },
      { name: "prescriber Primary County", value: "prescriberPrimaryCounty" },
      { name: "NPI Number", value: "npiNumber" },
      { name: "Primary Speciality", value: "PrimarySpeciality" },
      { name: "SpendPerMember", value: "spendPerMember" },
      { name: "GenericDispensingRate", value: "genericDispensingRate" },
      { name: "CostPerScript", value: "costPerScript" },
      { name: "ExtendedDaySuppleScriptPercentile", value: "extendedDaySuppleScriptPercentile" },
      { name: "NonFormularyFillsPercentile", value: "nonFormularyFillsPercentile" },
      { name: "TotalFills", value: "totalFills" },
      { name: "TotalAllowed", value: "totalAllowed" },
      { name: "GenericEfficiencyRate", value: "genericEfficiencyRate" },
    ],
    rowsData: rows,
    rows: [],
  };
  
  export default Data;