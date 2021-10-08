import React from 'react'
import { 
    Button, 
    Table, 
    TableHead, 
    TableBody, 
    TableRow, 
    TableCell, 
    Container 
} from '@material-ui/core'

const Import = (props) => {

    return (
        <Container>
            <p>Import Component</p>
            <Button variant="contained" color="primary" onClick={props.fetchMakes}>Import</Button>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Make</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.makes.map((make) => (
                    <TableRow
                      key={make.MakeId}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {make.MakeId}
                      </TableCell>
                      <TableCell align="right">{make.MakeName}</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Import