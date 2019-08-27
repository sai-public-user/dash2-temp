import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from './header';
import Row from './row';
import './table.css';
import * as Styles from '../../common/Table/SharedStyles';

import PinnedTable from './PinnedTable';
import DialogTable from './DialogTable';

const {
    Rows,
    HeaderData,
    CustomTable,
    TableContainer,
} = Styles.default;

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            headers: [],
            rows: [],
            pinned: [],
			checked: [],
            maxPinnedcols: 5,
            pinnedHeaders: [],
            compareLimit: 5,
            compareRows: [],
            showCmpDialog: false,
            sortedCol: {},
        };
    }
    
    componentWillReceiveProps() {
        console.log(this.props, this.props.Data.normalize);
    }

    componentDidMount() {
        const { headers, rows: rowsData, maxPin = 5, maxCompare = 5, normalize } = this.props;
        let rows = [];
        console.log(normalize, this.props);
        if (!normalize) {
            rows = Array.isArray(rowsData) && rowsData.map(row => { 
                let rowData = Object.assign({}, row.normalizedMetrics, row);
                delete rowData.normalizedMetrics;
                delete rowData.nonNormalizedMetrics;
                return rowData;
            })
        } else {
            rows = Array.isArray(rowsData) && rowsData.map(row => {
                let rowData = Object.assign({}, row.nonNormalizedMetrics, row);
                delete rowData.normalizedMetrics;
                delete rowData.nonNormalizedMetrics;
                return rowData;
            })
        }
        this.setState({
            headers,
            rows,
            maxPinnedcols: Array.isArray(headers) && headers.length > maxPin ? maxPin : headers.length - 1,
            compareLimit: Array.isArray(rows) && rows.length > maxCompare ? maxCompare : rows.length - 1,
        });
    }

    isPinned = (e) => {
        const { pinned = [], maxPinnedcols, headers } = this.state;
        let newPinned = pinned.map(o => o);
        if (newPinned.includes(e.currentTarget.getAttribute('name'))) {
            newPinned = newPinned.filter(one => one != e.currentTarget.getAttribute('name'))
        } else {
            newPinned.push(e.currentTarget.getAttribute('name'));
        }
        if (Array.isArray(newPinned) && newPinned.length > maxPinnedcols) return;
        this.setState({ pinned: newPinned }, () => {
            const pinnedHeaders = Array.isArray(newPinned) && headers.filter(one => newPinned.includes(one.value));
            this.setState({ pinnedHeaders });
        });
    }

    rowCheckBoxChange = ({ target: { name = "" } = {} }) => {
        let { checked = [], compareLimit = 2 } = this.state;
        if (checked.includes(Number(name))) {
            checked = checked.filter(one => one != Number(name))
        } else {
            checked.push(Number(name));
        }
        if( checked.length > compareLimit ) return;
        this.setState({ checked });
    }

    getHeaders = (tableCols, days = [], order = '') => {
		const { exclude = [] } = this.props;
        const { pinned } = this.state;
        if(tableCols.length > 0) {
            const headers = tableCols.filter(({ name, value }) => {
                if (Array.isArray(pinned) && pinned.includes(value)) return false;
                else return true;
                // const valueData = name.indexOf(' - ') > -1 ? name.split(' - ')[0] : value;
                // const tier = Array.isArray(name.split(' - ')) && name.split(' - ').length > 1 ? (name.split(' - ')[1]).replace('30 Days', '').replace('90 Days', '') : '';
                // const valueIfDays = name.replace(valueData, '').length > 0 ? name.replace(valueData, '').replace(tier,'').replace('-','').trim() : name; 
                // if(exclude.includes(name.indexOf(' - ') > -1 ? (name.split(' - ')[1]).replace('30 Days', '').replace('90 Days', '') : value)) return false;
                // if (Array.isArray(days) && days.includes(valueIfDays) && days.includes(valueData)) {
                //     return name.indexOf(order) > -1;
                // } else if(name.indexOf('Days') === -1) return true;
            });
            return headers;
        }
    }

    compareClicked = () => {
        const { checked, rows, compareLimit } = this.state;
        let compareRows = rows.filter(({ id }) => checked.includes(id));
        compareRows = compareRows.slice(0, compareLimit);
        this.setState({ compareRows, showCmpDialog: true, checked: [] })
    }

    sortOrder = (row1, row2, type, value) => {
        if (type === 'asc') {
            if (row1[value] < row2[value]) return -1;
            else if(row1[value] > row2[value]) return 1;
            return 0;
        }
        else {
            if (row1[value] > row2[value]) return -1;
            else if(row1[value] < row2[value]) return 1;
            return 0;
        }
    }

    onCellClick = (value, { target }) => {
        const name = target.getAttribute('name');
        if (name === 'pin_value') return;
        let { sortedCol = {}, rows } = this.state;
        if (sortedCol && Object.keys(sortedCol).length > 0 && !sortedCol.hasOwnProperty(value)) sortedCol = {};
        if (sortedCol.hasOwnProperty(value) && sortedCol[value] === 'asc') sortedCol[value] = 'desc'
        else sortedCol[value] = 'asc';
        rows.sort((row1, row2) => this.sortOrder(row1, row2, sortedCol[value], value));
        this.setState({ sortedCol, rows });
    }

    closeDialog = () => this.setState({ showCmpDialog: false });

    scrolled = (scrollTop, name) => {
        if(name === 'main' && this.refs.pinned) this.refs.pinned.refs.tbody.scrollTop = scrollTop;
        if (name === 'pinned') this.refs.tbody.scrollTop = scrollTop;
    }

    render() {
        const {
            pinned, headers,
            rows, checked,
            pinnedHeaders,
            compareRows,
            showCmpDialog,
            sortedCol,
            compareLimit,
        } = this.state;
        const { days = [], hasPinnedColumns } = this.props;
        const filteredHeaders = this.getHeaders(headers, days);
        const compareHeaders = Array.isArray(filteredHeaders) && Array.isArray(pinnedHeaders) ? filteredHeaders.concat(pinnedHeaders) : [];
        return (
            <TableContainer>
                {hasPinnedColumns && pinnedHeaders.length > 0 && (
                    <PinnedTable
                        pinnedHeaders={pinnedHeaders}
                        sortedCol={sortedCol}
                        onCellClick={this.onCellClick}
                        compareClicked={this.compareClicked}
                        hasPinnedColumns
                        pinned={pinned}
                        pinnedRow
                        isPinned={this.isPinned}
                        rows={rows}
                        checked={checked.length > compareLimit ? checked.slice(0, compareLimit) : checked}
                        rowCheckBoxChange={this.rowCheckBoxChange}
                        onScroll={this.scrolled}
                        ref="pinned"
                    />)}
                <div style={{ width: `${100 - (pinnedHeaders.length * 18 + pinnedHeaders.length)}%`, overflowX: 'auto', overflowY: 'hidden', position: 'relative' }}>
                    <Fragment className="table-head">
                        <CustomTable>
                            <HeaderData>
                                <Header sortedCol={sortedCol} onCellClick={this.onCellClick} headers={filteredHeaders} compare={this.compareClicked} hasPinnedColumns={hasPinnedColumns} pinned={pinned} isPinned={this.isPinned} />
                            </HeaderData>
                            <Rows ref="tbody" onScroll={() => this.scrolled(this.refs.tbody.scrollTop, 'main')}>
                                {Array.isArray(rows) && rows.map(
                                    (row, i) => <Row checked={checked.length > compareLimit ? checked.slice(0, compareLimit) : checked} checkBoxChange={this.rowCheckBoxChange} row={row} key={i} headers={filteredHeaders} pinned={pinned} />
                                )}
                            </Rows>
                        </CustomTable>
                    </Fragment>
                    {/* <Fragment className="table-body">
                        <CustomTable>
			            </CustomTable>
                    </Fragment> */}
                </div>
                <DialogTable
                    showCmpDialog={showCmpDialog}
                    closeDialog={this.closeDialog}
                    compareRows={compareRows}
                    compareHeaders={compareHeaders}
                />
            </TableContainer>
        );
    }
}

const mapStateToProps = (state) => ({
    Data: state.GetAllData,
})

const dispatchToProps = {
};

export default connect(mapStateToProps, dispatchToProps)(Table);