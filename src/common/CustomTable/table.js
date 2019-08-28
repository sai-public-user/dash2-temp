import React, { Component } from "react";
import { TableBody } from "@material-ui/core";

import Header from "./header";
import Row from "./row";

import { StyledTable, StyledTableHead } from "./TableStyles";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [],
      rows: []
    };
  }

  componentDidMount() {
    const { headers, rows } = this.props;
    this.setState({ headers, rows });
  }

  setHeaderOrder = headers => {
    this.setState({ headers });
  };

  render() {
    const { headers, rows } = this.state;

    return (
      <div style={{ overflowX: 'scroll' }}>
        <StyledTable>
          <StyledTableHead>
            <Header headers={headers} setHeaderOrder={this.setHeaderOrder} />
          </StyledTableHead>

          <TableBody>
            {Array.isArray(rows) &&
              rows.map((row, i) => <Row row={row} key={i} headers={headers} />)}
          </TableBody>
        </StyledTable>
      </div>
    );
  }
}

export default Table;
