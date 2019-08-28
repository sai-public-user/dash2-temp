import styled from "styled-components";

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel
} from "@material-ui/core";

export const StyledTable = styled(Table)`
  border-collapse: separate !important;
  border-spacing: 0 6px !important;
`;

export const StyledTableHead = styled(TableHead)`
  background-color: #257aa0;
  border-radius: 10px !important;
`;

export const StyledTableRowHead = styled.tr.attrs(props => ({...props}))`
  && {
    height: 55px;
  }
  border-radius: 10px !important;
  border: 1px solid black !important;
  > th:first-child,
  td:first-child {
    border-radius: 10px 0 0 10px;
    padding: 15px;
  }

  > th:last-child,
  td:last-child {
    border-radius: 0 10px 10px 0;
    padding: 15px;
  }
`;
export const StyledTableRow = styled(TableRow)`
  && {
    height: 62px;
  }
  border-radius: 10px !important;
  border: 1px solid black !important;

  &:hover {
    box-shadow: 10px 10px 15px #ccc;
    border-radius: 10px !important;
    > td {
      background-color: #e8eaf6;
    }
  }

  > th:first-child,
  td:first-child {
    border-radius: 10px 0 0 10px;
    padding: 15px;
  }

  > th:last-child,
  td:last-child {
    border-radius: 0 10px 10px 0;
    padding: 15px;
  }
`;

export const StyledTableCellBody = styled.td.attrs(props => ({...props}))`
  && {
    background-color: #fff;
    border: none;
    text-align: left;
    font-family: "Lato";
    font-size: 14px;
  }
`;

export const StyledTableCellHead = styled.td.attrs(props => ({...props}))`
  && {
    color: #fff;
    background-color: rgba(37, 122, 160);
    position: sticky;
    top: 0;
    z-index: 10;
    border: none;
    text-align: left;
    font-family: "Lato", "Bold";
    font-size: 14px;
    padding: 4px;
  }
  &:hover {
    background-color: #0c6f9c;
  }
`;

export const MyTablesortLabel = styled(TableSortLabel)``;
