import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const rows = [
  
];



function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'number',
    numeric: true,
    disablePadding: true,
    label: 'Number',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'description',
    numeric: false,
    disablePadding: false,
    label: 'Description',
  },
  {
    id: 'picture',
    numeric: false,
    disablePadding: false,
    label: 'Picture',
  },
  {
    id: 'capacity',
    numeric: true,
    disablePadding: false,
    label: 'Capacity',
  },
  {
    id: 'square',
    numeric: true,
    disablePadding: false,
    label: 'Square',
  },
  {
    id: 'price',
    numeric: true,
    disablePadding: false,
    label: 'Price',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'type',
    numeric: false,
    disablePadding: false,
    label: 'Type',
  },
  {
    id: 'Operator',
    numeric: false,
    disablePadding: false,
    label: 'Operator',
  },
  
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
              {headCell.label}
              
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    
     
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Room management
        </Typography>
      

  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [datas, setData] = React.useState([]);
  React.useEffect(()=>{
    axios.get('http://localhost:8080/room')
    .then(response=>{
      console.log(response.data);
      setData(response.data);
    })
    .catch(error=>{console.log(error)})
  }, [])    
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };



  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [values, setValues] = React.useState([]);
  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({
        ...values,
        [name]: value
    })
  }


  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={ 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(datas, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((data, index) => {
                  const isItemSelected = isSelected(data.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, data.name)}
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={data.name}
                      selected={isItemSelected}
                    >
                      <TableCell
                        id={labelId}
                      >
                        {data.number}
                      </TableCell>
                      <TableCell align="left">{data.name}</TableCell>
                      <TableCell align="left">{data.description}</TableCell>
                      <TableCell align="left">{data.picture}</TableCell>
                      <TableCell align="left">{data.capacity}</TableCell>
                      <TableCell align="left">{data.square}</TableCell>
                      <TableCell align="left">{data.price}</TableCell>
                      <TableCell align="left">{data.status}</TableCell>
                      <TableCell align="left">{data.type}</TableCell>
                      <TableCell align="left" style={{width: '10vw'}}>
                        <Stack direction="row" spacing={2}>
                          <Button size="small" variant="contained" style={{backgroundColor: '#D2B58B'}}>Edit</Button>
                          <Button size="small" variant="contained" style={{backgroundColor: '#D2B58B'}}>Delele</Button>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: ( 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        
      </Paper>
      <Button variant="contained" style={{backgroundColor: '#D2B58B'}}>Add room</Button>
      {/* <Update name={} description={}/> */}
    </Box>
  );
}
