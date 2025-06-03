'use client'

import { Chip } from '@mui/material'

import { useDashboardOverallQuery } from '@/api/endpoints/dashboard/dashboard-api'
import { Loader } from '@/components/Loader'
import DashboardChart from '@/views/apps/dashboard/daschboard-chart'

import { handleRTKError } from '@/utils/handleRTKError'
import { DashboardMainCards } from './dashboard-main-cards'
import { DashboardSubCards } from './dashboard-sub-cards'

const DashboardPage = () => {
  const { isLoading, isError, error } = useDashboardOverallQuery()

  if (isError) {
    return (
      <div className='flex h-full items-center justify-center'>
        <Chip variant='tonal' label={handleRTKError(error)} color='error' className='text-center w-fit mx-auto' />
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className='flex h-full items-center justify-center'>
        <Loader />
      </div>
    )
  }

  return (
    <div className='grid h-full grid-rows-[auto_auto_1fr] gap-2 overflow-y-auto'>
      <DashboardMainCards />

      <DashboardSubCards />

      {/* <RechartsLineChart /> */}
      <DashboardChart />
    </div>
  )
}

export default DashboardPage
