import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './styles.css';
import * as Styles from '../../common/Table/SharedStyles';

import {
  manageDays,
  manageSwitchData,
} from '../../actions/getAllData';

import PageHeader from './PageHeader';
// import Table from '../../common/Table/table';
import TableFilter from './TableFilter';
import Table from '../../common/CustomTable/table';
import Data from '../../sample';

const {
    MaindataContainer,
    TableContainer,
} = Styles.default;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
      console.log(this.props.normalize, 'index')
        return (
            <Fragment>
              <PageHeader />
              <MaindataContainer>
                <TableContainer>
                  <Table headers={Data.headers} rows={Data.rowsData} normalize={this.props.normalize === true} />
                  {/* <Table hasPinnedColumns hasCompare hasCheckBox /> */}
                </TableContainer>
              </MaindataContainer>
              <TableFilter />
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
  normalize: state.GetAllData.normalize,
  table: state.table,
})

const dispatchToProps = {
  manageDays,
  manageSwitchData,
}
 
export default connect(mapStateToProps, dispatchToProps)(Home);