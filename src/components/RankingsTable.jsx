import React from "react";
import { useState, useEffect } from "react";

//Styling Imports
import { AgGridReact } from "ag-grid-react/lib/agGridReact";
import styled from 'styled-components'

export function RankingsTable(props) {

    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        fetch("http://131.181.190.87:3000/rankings/" + props.search)
            .then(res => res.json())
            .then(resJson =>
                setRowData(resJson));
    })

    const columns = [
        { headerName: "Rank", field: "rank", sortable: true, filter: "agNumberColumnFilter" },

        { headerName: "Country", field: "country", sortable: true, filter: true },

        {
            headerName: "Score",
            field: "score",
            sortable: true,
            filter: "agNumberColumnFilter"
        },

        {
            headerName: "Year",
            field: "year",
            sortable: true,
            filter: "agNumberColumnFilter"
        }
    ];


    return (
        <Styles>

            <div id="rankings__grid" className="ag-theme-alpine ag-row-hover ag-column-hover">
                <AgGridReact columnDefs={columns} rowData={rowData} pagination={true} paginationPageSize={10} />
            </div>

        </Styles>
    );

}

const Styles = styled.div`



`