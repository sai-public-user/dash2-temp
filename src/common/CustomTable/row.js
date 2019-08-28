import React from "react";

import { StyledTableRow, StyledTableCellBody } from "./TableStyles";

function Row(props) {
  const { row = {}, headers = null } = props;

  const headerVals =
    (Array.isArray(headers) && headers.map(({ value = "" }) => value)) || [];

  return (
    <StyledTableRow>
      {row &&
        row !== null &&
        Array.isArray(headerVals) &&
        headerVals.map((keyVal, i) => (
          <StyledTableCellBody title={row[keyVal]} key={i} name={keyVal}>
            {row[keyVal] !== null &&
            (row[keyVal].length > 0 || typeof row[keyVal] === "number")
              ? row[keyVal]
              : "-"}
          </StyledTableCellBody>
        ))}
    </StyledTableRow>
  );
}

export default Row;
