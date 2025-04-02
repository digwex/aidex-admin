import { useState } from 'react'

import { Button, Checkbox, FormControlLabel } from '@mui/material'

import { toast } from 'react-toastify'

import { useSetPermissionMutation } from '@/api/endpoints/admins/admins'
import styles from './Admins.module.scss'

interface IProps {
  id: string
  allPermissions: string[]
  permissions: string[]
}

export const AdminsPermissions = ({ id, allPermissions, permissions }: IProps) => {
  const [activePermissions, setActivePermissions] = useState(permissions)
  const [mutate, { isLoading }] = useSetPermissionMutation()

  const areArraysEqual = (arr1: string[], arr2: string[]) => {
    if (arr1.length !== arr2.length) return false

    const sortedArr1 = [...arr1].sort()
    const sortedArr2 = [...arr2].sort()

    return sortedArr1.every((item, index) => item === sortedArr2[index])
  }

  const handleSave = async () => {
    if (isLoading) return

    if (areArraysEqual(permissions, activePermissions)) {
      toast.error('У вас нет изменений')

      return
    }

    void toast.promise(
      mutate({
        id,
        permissions: activePermissions
      }).unwrap(),
      {
        pending: 'Сохранение...',
        success: 'Успешно сохранено',
        error: 'Ошибка при сохранении'
      }
    )
  }

  const handleChange = (e: any) => {
    const name = e.target.name

    if (name === 'all') {
      if (activePermissions.length === allPermissions.length) {
        setActivePermissions([])
      } else {
        setActivePermissions(allPermissions)
      }

      return
    }

    const value = e.target.checked

    setActivePermissions(
      value ? [...activePermissions, name] : activePermissions.filter(permission => permission !== name)
    )
  }

  return (
    <td colSpan={7}>
      <div className={styles.permissions_wrapper}>
        <div className={styles.permissions}>
          {allPermissions.map(permission => (
            <FormControlLabel
              control={
                <Checkbox
                  color='success'
                  checked={activePermissions.includes(permission)}
                  onChange={handleChange}
                  name={permission}
                />
              }
              key={permission}
              label={permission}
            />
          ))}
        </div>
        <FormControlLabel
          control={
            <Checkbox
              color='success'
              checked={activePermissions.length === allPermissions.length}
              onChange={handleChange}
              name='all'
            />
          }
          label='Все'
        />
        <Button variant='contained' color='success' onClick={handleSave} disabled={isLoading}>
          Сохранить
        </Button>
      </div>
    </td>
  )
}
