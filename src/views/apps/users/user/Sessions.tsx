'use client'

import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button, Typography } from '@mui/material'

export const Sessions = () => {
  return (
    <Paper className='p-4'>
      <Typography className='font-medium mb-3' variant='h3'>
        Сессия
      </Typography>

      <SessionsTable />
    </Paper>
  )
}

function createData(ip: string, agent: string, lastActivity: string) {
  return { ip, agent, lastActivity }
}

const rows = [
  createData('192.168.123.132', 'Desktop Mac 10.15.7 Chrome 111', 'Апр 11, 15:28'),
  createData('192.168.123.132', 'Desktop Mac 10.15.7 Chrome 111', 'Апр 11, 15:28'),
  createData('192.168.123.132', 'Desktop Mac 10.15.7 Chrome 111', 'Апр 11, 15:28')
]

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#6B748E',
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

function SessionsTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>IP</StyledTableCell>
            <StyledTableCell>Агент пользователя</StyledTableCell>
            <StyledTableCell>Последняя активность</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              <StyledTableCell component='th' scope='row'>
                {row.ip}
              </StyledTableCell>
              <StyledTableCell>{row.agent}</StyledTableCell>
              <StyledTableCell>{row.lastActivity}</StyledTableCell>
              <StyledTableCell>
                <Button variant='outlined' color='error'>
                  Завершить
                </Button>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
