'use client'

import { useParams } from 'next/navigation'

import { Button, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { toast } from 'react-toastify'

import { useStopUserSessionMutation } from '@/api/endpoints/user/user-api'
import { useGetUserByIdQuery } from '@/api/endpoints/users/users-api'

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
  const { id } = useParams()
  const { data } = useGetUserByIdQuery(String(id as string))
  const [deleteSession] = useStopUserSessionMutation()

  const handleDeleteSession = async (sessionId: string, userId: string) => {
    const toastId = toast.loading('Завершение сессии...')

    try {
      await deleteSession({ sessionId, userId }).unwrap()
      toast.update(toastId, {
        type: 'success',
        render: 'Сессия завершена',
        isLoading: false
      })
    } catch (error) {
      console.log(`Error deleting session: ${error}`)
      toast.update(toastId, {
        type: 'error',
        render: 'Ошибка при завершении сессии',
        isLoading: false
      })
    }
  }

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
          {data.Sessions.map((row: any) => (
            <TableRow key={row.id}>
              <StyledTableCell component='th' scope='row'>
                {row.ip}
              </StyledTableCell>
              <StyledTableCell>{row.ua}</StyledTableCell>
              <StyledTableCell>{row.lastOnline}</StyledTableCell>
              <StyledTableCell>
                <Button variant='outlined' color='error' onClick={() => handleDeleteSession(row.id, row.userId)}>
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
