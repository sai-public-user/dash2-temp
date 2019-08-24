import React from 'react';
import Table from '../common/CustomTable/table';

function CallTable(props) {

    const row = {
        id: "",
        prescriberName: "1",
        spendPerMember: 0,
        prescriberMSO: "2",
        prescriberPrimaryPractice: "3",
        prescriberPrimaryAddress: "4",
        prescriberPrimaryCounty: "5",
        npiNumber: "6",
        PrimarySpeciality: "7",
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
        selectCareFillsPercentile: 0
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
          { name: "Primary Speciality", value: "PrimarySpeciality" }
        ],
        rows: rows
      };

    //   normalizedMetrics: {
    //     spendPerMember: 0,
    //     genericDispensingRate: 0,
    //     costPerScript: 0,
    //     extendedDaySuppleScriptPercentile: 0,
    //     nonFormularyFillsPercentile: 0,
    //     totalFills: 0,
    //     totalAllowed: 0,
    //     genericEfficiencyRate: 0,
    //     opioidFillsPercentile: 0,
    //     preferedBrandFills: 0,
    //     nonPreferredBrandFillsPercentils: 0,
    //     specialityFillsPercentile: 0,
    //     selectCareFillsPercentile: 0
    //   }

    //   nonNormalizedMetrics: {
    //     spendPerMember: 0,
    //     genericDispensingRate: 0,
    //     costPerScript: 0,
    //     extendedDaySuppleScriptPercentile: 0,
    //     nonFormularyFillsPercentile: 0,
    //     totalFills: 0,
    //     totalAllowed: 0,
    //     genericEfficiencyRate: 0,
    //     opioidFillsPercentile: 0,
    //     preferedBrandFills: 0,
    //     nonPreferredBrandFillsPercentils: 0,
    //     specialityFillsPercentile: 0,
    //     selectCareFillsPercentile: 0
    //   }

    // const headers = [
    //     { value: 'one', name: 'One' },
    //     { value: 'two', name: 'Two' },
    //     { value: 'three', name: 'Three' },
    //     { value: 'four', name: 'Four' },
    //     { value: 'five', name: 'Five' },
    // ];
    // const rows = [
    //     { id: 1, one: 1, two: 2, three: 3, four: 4, five: 5 },
    //     { id: 2, one: 2, two: 4, three: 6, four: 8, five: 10 },
    //     { id: 3, one: 3, two: 6, three: 9, four: 12, five: 15 },
    //     { id: 4, one: 4, two: 8, three: 12, four: 16, five: 20 },
    //     { id: 5, one: 5, two: 10, three: 15, four: 20, five: 25 },
    // ];
    //return (<Table headers={headers} rows={rows} hasPinnedColumns maxPin={2} maxCompare={2} />)
    //console.log(Data);
    return (<Table headers={Data.headers} rows={Data.rows} />)
}

export default CallTable;