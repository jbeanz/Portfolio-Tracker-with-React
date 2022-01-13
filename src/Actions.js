import { forwardRef } from 'react';
import React, { Component, useState } from 'react';
import MaterialTable from 'material-table';
import styledComponents from 'styled-components';

// icons
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)

};

// styling components
const Table = styledComponents.table`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Row = styledComponents.tr`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

// functional components
function Actions() {
  const [tableData, setTableData] = useState([
    { time: "9/21/2021 8:32:01", location: "FTX - yolo", token: "BTC", cost_basis: 30000, position_size: 1, entry_price: 30000, mark_price: 40000, notional_size: 40000, pnl: 10000, notes: "hope this works out" },
    { time: "8/14/2021 23:56:08", location: "Ledger 2", token: "YGG", cost_basis: 14000, position_size: 2000, entry_price: 7, mark_price: 3.5, notional_size: 7000, pnl: -7000, notes: "listing soon" },
    { time: "8/13/2021 23:56:08", location: "FTX - yolo", token: "BTC", cost_basis: 1233, position_size: 137, entry_price: 500, mark_price: 2400, notional_size: 10000, pnl: 5000, notes: "TBD" }
  ])
  const columns = [
    { title: "Time", field: "time" },
    { title: "Location", field: "location" },
    { title: "Token", field: "token" },
    { title: "Cost Basis", field: "cost_basis", defaultSort: "desc" },
    { title: "Position Size", field: "position_size" },
    { title: "Entry Price", field: "entry_price", type: "currency" },
    { title: "Mark Price", field: "mark_price", type: "currency" },
    { title: "Notional Size", field: "notional_size", type: "currency" },
    { title: "PnL", field: "pnl", type: "currency" },
    { title: "Notes", field: "notes" },
  ]
  // delete selected rows and update data
  const[selectedRows, setSelectedRows] = useState([])
  const handleBulkDelete=()=>{
    const updatedData = tableData.filter(row=>!selectedRows.includes(row))
    setTableData(updatedData)
  }
  
  return (
    <div>
      <MaterialTable
        title="ACTIVE TRADES RECORD"
        columns={columns}
        data={tableData}
        icons={tableIcons}
        onSelectionChange={(rows) =>setSelectedRows(rows)}

        //editable takes an object
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            //combine tableData with newRow data
            setTableData([...tableData, newRow])

            //give 500 miliseconds for processing
            setTimeout(() => resolve(), 500)
          }),

          //take a callback function and return a new Promise call
          onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
            console.log(newRow, oldRow)
            setTimeout(() => resolve(), 500)
          })

        }}
        options={{
          search: true,
          searchFieldAlignment: "left",
          searchAutoFocus: true,
          filtering: true,
          addRowPosition: "first", actionsColumnIndex: -1,
          selection: true
        }}
        actions = {[
          {
            icon:'delete',
            tooltip:'Delete all selected rows',
            onClick:()=>handleBulkDelete()
          }
        ]}
        />
    </div>

  );
};

export default Actions;