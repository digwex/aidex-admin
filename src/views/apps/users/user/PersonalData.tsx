'use client'

import { useParams } from 'next/navigation'

import { Chip, Paper, Stack, styled, Typography } from '@mui/material'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { useGetUserByIdQuery } from '@/api/endpoints/users/users-api'
import { CopyButton } from '@/hooks/useCopy'

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
          Адреса кошельков
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label='customized table'>
            <TableHead>
              <TableRow>
                <StyledTableCell> Кошелёк</StyledTableCell>
                <StyledTableCell>Баланс</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.wallets.map((row: any) => (
                <TableRow key={row.id}>
                  <StyledTableCell className='flex items-center gap-2'>
                    <CopyButton text={row.publicKey} />
                    <a
                      target='_blank'
                      className='transition-all duration-300 hover:text-primary'
                      href={`https://solscan.io/account/${row.publicKey}`}
                    >
                      {row.publicKey}
                    </a>
                    {row?.isActive && <Chip size='small' variant='tonal' label={'Активен'} color={'success'} />}
                    {row?.isArchived && <Chip size='small' variant='tonal' label={'В архиве'} color={'warning'} />}
                  </StyledTableCell>
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
