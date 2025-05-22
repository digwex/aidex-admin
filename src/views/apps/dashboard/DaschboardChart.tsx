'use client'

// Next Imports
import dynamic from 'next/dynamic'

// Mui Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import { useTheme } from '@mui/material/styles'

// Third Party Imports
import type { ApexOptions } from 'apexcharts'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// Style Imports
import { Box, InputAdornment } from '@mui/material'
import './styles.css'

import CustomTextField from '@/@core/components/mui/TextField'

import { useDashboardGraphQuery } from '@/api/endpoints/dashboard/dashboard-api'
import { Loader } from '@/components/Loader'
import { useAppSelector } from '@/hooks/useRedux'
import DashboardDataPickersRange from '../../DataPickerRange'

const DashboardChart = () => {
  const date = useAppSelector(s => s.search.date)
  const from = String(Math.floor(date[0]! / 1000))
  const to = String(Math.floor(date[1]! / 1000))
  const { data, isLoading, isError, error } = useDashboardGraphQuery({ from, to })

  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      type: 'line',
      stacked: false,
      parentHeightOffset: 0,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    markers: {
      size: 5,
      colors: '#fff',
      strokeColors: 'var(--mui-palette-primary-main)',
      hover: {
        size: 6
      },
      radius: 4
    },
    stroke: {
      curve: 'smooth',
      width: [0, 3],
      lineCap: 'round'
    },
    legend: {
      show: true,
      position: 'bottom',
      markers: {
        width: 8,
        height: 8,
        offsetY: 1,
        offsetX: theme.direction === 'rtl' ? 8 : -4
      },
      height: 40,
      itemMargin: {
        horizontal: 10,
        vertical: 0
      },
      fontSize: '15px',
      fontFamily: 'Open Sans',
      fontWeight: 400,
      labels: {
        colors: 'var(--mui-palette-text-primary)'
      },
      offsetY: 10
    },
    grid: {
      strokeDashArray: 8,
      borderColor: 'var(--mui-palette-divider)'
    },
    colors: ['var(--mui-palette-warning-main)', 'var(--mui-palette-primary-main)'],
    fill: {
      opacity: [1, 1]
    },
    plotOptions: {
      bar: {
        columnWidth: '30%',
        borderRadius: 4,
        borderRadiusApplication: 'end'
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      tickAmount: 10,
      categories: ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan', '10 Jan'],
      labels: {
        style: {
          colors: 'var(--mui-palette-text-disabled)',
          fontSize: '13px',
          fontWeight: 400
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      tickAmount: 5,
      labels: {
        style: {
          colors: 'var(--mui-palette-text-disabled)',
          fontSize: '13px',
          fontWeight: 400
        }
      }
    }
  }

  if (isError) {
    return <div>Graph произошла ошибка: {JSON.stringify(error, null, 2)}</div>
  }

  if (!data || isLoading) {
    return <Loader />
  }

  const series = data.reduce(
    (acc, item) => {
      if (!acc[0]) {
        acc[0] = {
          name: 'Shipment',
          type: 'column',
          data: [item._delivery]
        }
      } else {
        acc[0].data.push(item._delivery)
      }

      if (!acc[0]) {
        acc[0] = {
          name: 'Shipment',
          type: 'column',
          data: [item._delivery]
        }
      } else {
        acc[0].data.push(item._delivery)
      }

      return acc
    },
    [] as {
      name: string
      type: string
      data: number[]
    }[]
  )

  return (
    <Card sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardHeader
        className='max650:flex max650:flex-col max650:gap-2 max650:items-start'
        title={
          <CustomTextField
            id='input-with-icon-adornment'
            placeholder='Найти по ID / Клиенту'
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position='start'>
                    <i className='tabler-search' />
                  </InputAdornment>
                )
              }
            }}
          />
        }
        action={<DashboardDataPickersRange />}
      />
      <CardContent sx={{ flexGrow: 1, minHeight: '400px', display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Box className='apex-charts-wrapper' sx={{ flexGrow: 1, display: 'flex', width: '100%' }}>
          <AppReactApexCharts
            sx={{ width: '100%', height: '100%' }}
            id='shipment-statistics'
            type='line'
            height='100%'
            width='100%'
            series={series}
            options={options}
          />
        </Box>
      </CardContent>
    </Card>
  )
}

export default DashboardChart
