import React from 'react'
import { 
    Button, 
    Table, 
    TableHead, 
    TableBody, 
    TableRow, 
    TableCell, 
    Container,
    IconButton,
    Menu,
    MenuItem 
} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useState } from 'react';

const options = [
    'Delete'
];

const ITEM_HEIGHT = 48;

const Import = (props) => {
    const [deleteIdx, setDeleteIdx] = useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event, index) => {
        setAnchorEl(event.currentTarget);
        setDeleteIdx(index);
    };

    const handleClose = () => {
        setAnchorEl(null);
        props.deleteMake(deleteIdx);
    };

    return (
      <Container>
          <Button variant="contained" color="primary" onClick={props.fetchMakes}>Import</Button>
          <h2>COUNT: {props.makes.length}</h2>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Make</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.makes.map((make, i) => (
                  <TableRow
                    key={make.MakeId}
                
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="table">
                      {make.MakeId}
                    </TableCell>
                    <TableCell>{make.MakeName}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls="long-menu"
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={(e) => handleClick(e, i)}
                      >
                        <MoreVertIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
          </Table>
          <Menu
              id="long-menu"
              MenuListProps={{
                  'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                  style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: '20ch',
                  },
              }}
              >
              {options.map((option) => (
                  <MenuItem key={option} selected={option === 'Delete'} onClick={handleClose} index={props.index}>
                      {option}
                  </MenuItem>
              ))}
          </Menu>
      </Container>
    )
}

export default Import