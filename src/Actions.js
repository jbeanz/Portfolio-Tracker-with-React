import React, { Component, useState } from 'react';
import MaterialTable from 'material-table';
import styledComponents from 'styled-components';
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

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
//monetary data - add dollar sign

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
  return (
    <div>
      <MaterialTable columns={columns} data={tableData}
      //editable takes an object
      editable={{
        onRowAdd: (newRow)=>new Promise((resolve, reject)=>{
          //combine tableData with newRow data
          setTableData([...tableData, newRow])

          //give 500 miliseconds for processing
          setTimeout(()=>resolve(),500)
        }),

        //take a callback function and return a new Promise call
        onRowUpdate:(newRow,oldRow) => new Promise((resolve, reject)=>{
          console.log(newRow, oldRow)
          setTimeout(()=>resolve(),500)
        })

      }}
        options={{
          search: true,
          searchFieldAlignment: "left",
          searchAutoFocus: true,
          filtering: true,
          addRowPosition: "first", actionsColumnIndex: -1
        }}
        title="ACTIVE TRADES RECORD" />
    </div>

  );
};

export default Actions;