import React ,{Fragment,useReducer}from 'react';
import SubHeader from "../common/components/sub-header";
import {Container} from "../common/components/util-component";
import TitleText from "../common/components/title";
import {Button, Icon} from "semantic-ui-react";
import ReactTable from "react-table";
import DeleteModal from "../common/components/delete-modal";

const UserList = (props) => {
    const data = [{
        id: 11,
        name: "Express Connect",
        contactMobile: "7358559307",
        contactPerson: "Datatel",
        address: "H 274,Ashok Vihar,phase 111 Ext, Opp,Spanish Court,Gurgaon 122001"
    }, {
        id: 21,
        name: "SKY Tech Services",
        contactMobile: "9971323227",
        contactPerson: "Parmender Jnagra",
        address: "H 274,Ashok Vihar,phase 111 Ext, Opp,Spanish Court,Gurgaon 122001"
    }];
    const [state, setState] = useReducer((state, newState) => ({...state, ...newState}),
        {
            showDeleteModal: false,
            data: data,
            id: -1
        }
    );


    const handleEditButton = (row) => {
        console.log(row.original);
        props.history.push({
            pathname: '/dth/edit-user',
            state: {
                data: row.original
            }
        });
    };
    const handleDeleteButton = (row) => {
        setState({showDeleteModal: true, id: row.original.id});
    };
    const closeDeletePopup = () => {
        setState({showDeleteModal: false});
    };
    const handleConfirmDelete = () => {
        if (state.id != -1) {
            let updateDate = state.data.filter((i) => i.id != state.id)
            setState({showDeleteModal: false, data: updateDate})
        }
    };

    const addUser = () => {
        props.history.replace({
            pathname: '/dth/add-user'
        });
    };
    return (
        <Fragment>
            <SubHeader title={"DTH Installation and Service: Agencies"}/>
            <Container>
                <TitleText text={'Users'}/>
                <br/>
                <div className="add-agency-container">
                    <Button onClick={() => addUser()}>Add User</Button>
                </div>

                <div className="agency-list">
                    <ReactTable
                        data={state.data}
                        columns={[
                            {
                                Header: "Name",
                                accessor: "name",
                                maxWidth: 300
                            },
                            {
                                Header: "Contact",
                                id: "contact",
                                maxWidth: 300,
                                accessor: d => d.contactPerson + ' - ' + d.contactMobile
                            },
                            {
                                Header: "Address",
                                accessor: "address"
                            },
                            {
                                Header: "Edit",
                                maxWidth: 50,
                                Cell: row => (
                                    <Icon className="custom-icon" onClick={() => handleEditButton(row)} name='edit'/>
                                )
                            },
                            {
                                Header: "Delete",
                                maxWidth: 50,
                                Cell: row => (
                                    <Icon className="custom-icon delete-icon" onClick={() => handleDeleteButton(row)}
                                          name='delete'/>
                                )
                            }

                        ]}
                        defaultPageSize={10}
                        className="-striped -highlight"

                    />
                </div>

            </Container>
            <DeleteModal size={'mini'}
                         close={closeDeletePopup}
                         handleConfirmDelete={handleConfirmDelete}
                         open={state.showDeleteModal}>
            </DeleteModal>
        </Fragment>
    );
};

export default UserList;
