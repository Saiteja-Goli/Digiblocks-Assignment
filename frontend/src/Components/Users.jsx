import { Button, Center, Input, Table, TableContainer, Tbody, Td, Th, Tr } from '@chakra-ui/react';
import React, { useState } from 'react';

const Users = () => {
    const [details, setDetails] = useState("");
    const [userData, setUserData] = useState(null);

    const fetchData = async (gstin) => {
        console.log("Entering to fetch")
        fetch(`https://awful-red-hosiery.cyclic.app/api/data?gstin=${gstin}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.data)
                setUserData(data.data)
            })
            .catch(error => {
                console.error('Error:', error)
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData(details);
    }
    //Styling
    const inputstyle = {
        border: "1px solid teal",
        marginTop: "100px",
        borderRadius: "5px 0 0 5px",
        width: "25%",
    }
    const heading = {
        fontFamily: "verdana",
        fontSize: "2em",
        color: "white",
        paddingTop: "10px",
        border: "1px solid black",
        height: "70px",
        backgroundColor: "rgb(65,79,126)"
    }
    //33AAGCC7144L6ZE
    return (
        <>
            <div style={heading}> <p>Goods and Service Tax</p> </div>
            <Input type="text" placeholder='Enter GSTIN' value={details} onChange={(e) => setDetails(e.target.value)}
                style={inputstyle} />
            <Button onClick={handleSubmit} variant='solid' style={{
                borderRadius: "0 5px 5px 0",
                marginBottom: "4px",
                height: "40px",
                color: "white",
                backgroundColor: "rgb(65,79,126)"
            }}>Search</Button>
            {
            (userData && (
                <div>
                    {/* //33AAGCC7144L6ZE */}
                    <Center >
                        <TableContainer backgroundColor={"rgba(50, 115, 220, 0.2);"} mt="20px" borderRadius={"20px"}>
                            <Table variant='simple' size='lg'>
                                <Tbody>
                                    <Tr>
                                        <Th>GSTIN  - </Th>
                                        <Td>{userData.gstin}</Td>
                                    </Tr>
                                    <Tr>
                                        <Th>Status -</Th>
                                        <Td>{userData.sts}</Td>
                                    </Tr>
                                    <Tr>
                                        <Th>Name - </Th>
                                        <Td>{userData.lgnm}</Td>
                                    </Tr>
                                    <Tr>
                                        <Th>Address -</Th>
                                        <Td> {userData.pradr.addr.bno},{userData.pradr.addr.bnm}
                                            ,{userData.pradr.addr.loc},<br></br>
                                            {userData.pradr.addr.st}
                                            ,{userData.pradr.addr.pncd}
                                            ,{userData.pradr.addr.stcd}</Td>
                                    </Tr>
                                </Tbody>

                            </Table>
                        </TableContainer>
                    </Center>
                </div>
            ))
        }
        </>
    )
}

export default Users;
