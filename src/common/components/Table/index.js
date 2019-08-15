import React from 'react';

import ReactTable from "react-table";
import "react-table/react-table.css";

const Table = (props) => {
    const {columns, defaultPageSize, showPagination, sortable, data} = props;
    return (
        <div>
            <div className="test">
                <ReactTable
                    data={data}
                    columns={columns}
                    defaultPageSize={defaultPageSize}
                    showPagination={showPagination}
                    sortable={sortable}
                />
            </div>
        </div>
    );
};

export default Table;
