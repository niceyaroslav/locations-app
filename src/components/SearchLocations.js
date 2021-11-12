import React, { useEffect } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { useDispatch, useSelector } from "react-redux";
import { retriveLocations, deleteLocation } from "../actions/locations";
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import { FiTrash, FiInfo } from 'react-icons/fi'

const pagination = paginationFactory({
    page: 1,
    alwaysShowAllBtns: true,
    showTotal: true,
    withFirstAndLast: false,
    sizePerPageRenderer: ({ options, currSizePerPage, onSizePerPageChange }) => (
      <div className="dataTables_length" id="datatable-basic_length">
        <label style={{ marginRight:"5px", marginLeft:"5px"}}>
          Show
        </label>
        <label>
            <select
            name="datatable-basic_length"
            aria-controls="datatable-basic"
            className="form-control form-control-sm"
            onChange={(e) => onSizePerPageChange(e.target.value)}
            >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
            </select>  
        </label>
        <label style={{ marginLeft:"5px"}}>
          entries.
        </label>
      </div>
    ),
  });

  
const { SearchBar, ClearSearchButton } = Search;

const SearchLocation = () => {
    const locations = useSelector(state => state.locations.locations);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retriveLocations());
    },[dispatch]);

    const handleRowClick = (row) => {
        console.log(row)
    }
    
    const handleDelete = (row) => {
        dispatch(deleteLocation(row.id))
        console.log(locations.length)

    }

    const formatActionButtonCell =(cell, row)=>{ 
      
        return (    
                <>
                    <Button id={row.id} className="btn-icon btn-2" type="button" variant="info" style={{margin:"1.5px"}}
                        onClick={() => handleRowClick(row)} href={`locations/${row.id}`}>
                        <span id={row.id} className="btn-inner--icon">
                            <FiInfo/>
                        </span>                        
                    </Button>
                    <Button id={row.id} className="btn-icon btn-2" variant="danger" type="button" style={{margin:"1.5px"}} 
                        onClick={() => handleDelete(row)}>
                        <span id={row.id} className="btn-inner--icon">
                            <FiTrash/>
                        </span>
                    </Button>
                </>);  
    }

    let mapper = {"name":"Name","address":"Address","city":"City",
                "assignedUsers":"Users","assignedVendors":"Vendors","assignedCustomers":"Customers",
                "subLocations":"Sub-Locations", 'action':""}

    return (
        <>
            <Container>
                <Row>
                    <div className="col">
                    <Card>
                        <Card.Header>
                            <h3 className="mb-0">Locations</h3>
                        </Card.Header>
                            <ToolkitProvider
                                data={locations}
                                keyField="id"
                                columns={Object.keys(mapper).map(key => {
                                if (key === "action" ) {
                                    return ({
                                    dataField: key,    
                                    text:'',
                                    formatter: formatActionButtonCell
                                    });
                                } else if (key === "id") {
                                    return (
                                    {
                                        dataField: key,
                                        text: mapper[key],
                                        hidden : true,
                                    }
                                    );
                                } else {
                                    return (
                                    {
                                        dataField: key,
                                        text: mapper[key],
                                        sort: true
                                    }
                                    );
                                }
                                })
                            }
                                search
                            >
                                {(props) => (
                                <div className="py-4 table-responsive">
                                    <div
                                    id="datatable-basic_filter"
                                    className="dataTables_filter px-4 pb-1"
                                    >
                                    <label style={{ marginRight:"10px"}}>
                                        Search:
                                    </label>
                                    <label>
                                        <SearchBar
                                        className="form-control-sm"
                                        srText=""
                                        placeholder="Search by any field"
                                        {...props.searchProps}
                                        /> 
                                    </label>
                                        <ClearSearchButton {...props.searchProps}/>
                                    
                                    </div>
                                    <BootstrapTable
                                    {...props.baseProps}
                                    bootstrap4={true}
                                    pagination={pagination}
                                    bordered={false}
                                    deleteRow={ true }
                                    />
                                </div>
                                )}
                            </ToolkitProvider>
                        </Card>
                    </div>
                </Row>
            </Container>

        </>
    );
}

export default SearchLocation;