'use client'

// Next Imports
import dynamic from 'next/dynamic'

// Mui Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { useTheme } from '@mui/material/styles'

// Third Party Imports
import type { ApexOptions } from 'apexcharts'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// Style Imports
import './styles.css'
import { Box, InputAdornment } from '@mui/material'

import CustomTextField from '@/@core/components/mui/TextField'

import DashboardDataPickersRange from '../../DataPickerRange'

const series = [
  {
    name: 'Shipment',
    type: 'column',
    data: [38, 45, 33, 38, 32, 48, 45, 40, 42, 37]
  },
  {
    name: 'Delivery',
    type: 'line',
    data: [23, 28, 23, 32, 25, 42, 32, 32, 26, 24]
  }
]

const DashboardChart = () => {
  // Hooks
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
