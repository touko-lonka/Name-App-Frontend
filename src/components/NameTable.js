import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@material-ui/core'

import { withStyles } from '@material-ui/core/styles'

const StyledTableCell = withStyles((theme) => ({
  head: {
    fontSize: 20,
    backgroundColor: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

const NameTable = ({ names, sortedBy }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <StyledTableRow>
            {sortedBy === 'amount' ? (
              <StyledTableCell>Amount</StyledTableCell>
            ) : (
              <StyledTableCell>Name</StyledTableCell>
            )}
            {sortedBy === 'name' ? (
              <StyledTableCell>Amount</StyledTableCell>
            ) : (
              <StyledTableCell>Name</StyledTableCell>
            )}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {names.map((n) => (
            <StyledTableRow key={n.name}>
              {sortedBy === 'amount' ? (
                <StyledTableCell>{n.amount}</StyledTableCell>
              ) : (
                <StyledTableCell>{n.name}</StyledTableCell>
              )}
              {sortedBy === 'name' ? (
                <StyledTableCell>{n.amount}</StyledTableCell>
              ) : (
                <StyledTableCell>{n.name}</StyledTableCell>
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default NameTable
