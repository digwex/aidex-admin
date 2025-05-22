'use client'

import { useParams } from 'next/navigation'

import { Paper, Stack, styled, Typography } from '@mui/material'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { useGetUserByIdQuery } from '@/api/endpoints/users/users-api'

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
  const { id } = useParams()
  const { data } = useGetUserByIdQuery(String(id as string))

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
              {data.wallets.map((row: any) => (
                <TableRow key={row.id}>
                  <StyledTableCell>{row.publicKey}</StyledTableCell>
                  <StyledTableCell>{row.balance} SOL</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Paper>
  )
}
