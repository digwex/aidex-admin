'use client'

import { Typography, Paper, Stack, styled } from '@mui/material'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#6B748E',
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

export const PersonalData = () => {
  return (
    <Paper className='p-4'>
      <Stack spacing={4}>
        <Typography className='font-medium' variant='h3'>
          Адрес кошельков
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label='customized table'>
            <TableHead>
              <TableRow>
                <StyledTableCell>Кошелёк</StyledTableCell>
                <StyledTableCell>Баланс</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <StyledTableCell>2kashdkh87as897g63153s8g1g1s82356gs123</StyledTableCell>
                <StyledTableCell>200 SOL</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>2kashdkh87as897g63153s8g1g1s82356gs123</StyledTableCell>
                <StyledTableCell>200 SOL</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>2kashdkh87as897g63153s8g1g1s82356gs123</StyledTableCell>
                <StyledTableCell>200 SOL</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>2kashdkh87as897g63153s8g1g1s82356gs123</StyledTableCell>
                <StyledTableCell>200 SOL</StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Paper>
  )
}
