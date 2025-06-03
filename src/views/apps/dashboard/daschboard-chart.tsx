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
import { Box, Chip, InputAdornment } from '@mui/material'
import './styles.css'

import CustomTextField from '@/@core/components/mui/TextField'

import { useDashboardGraphQuery } from '@/api/endpoints/dashboard/dashboard-api'
import { Loader } from '@/components/Loader'
import { useAppSelector } from '@/hooks/useRedux'
import DashboardDataPickersRange from '../../DataPickerRange'
import { handleRTKError } from '../../../utils/handleRTKError'

const DashboardChart = () => {
  const date = useAppSelector(s => s.search.date)
  const from = String(Math.floor(date[0]! / 1000))
  const to = String(Math.floor(date[1]! / 1000))
  const { isLoading, isError, error } = useDashboardGraphQuery({ from, to })

  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      locales: [
        {
          name: 'ru',
          options: {
            months: [
              'Январь',
              'Февраль',
              'Март',
              'Апрель',
              'Май',
              'Июнь',
              'Июль',
              'Август',
              'Сентябрь',
              'Октябрь',
              'Ноябрь',
              'Декабрь'
            ],
            shortMonths: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            shortDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            toolbar: {
              exportToSVG: 'Скачать SVG',
              exportToPNG: 'Скачать PNG',
              exportToCSV: 'Скачать CSV',
              selection: 'Выделение',
              selectionZoom: 'Выделить для увеличения',
              zoomIn: 'Приблизить',
              zoomOut: 'Отдалить',
              pan: 'Перемещение',
              reset: 'Сбросить увеличение'
            }
          }
        }
      ],
      defaultLocale: 'ru',

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
      width: [2, 2, 2],
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

    // colors: ['var(--mui-palette-warning-main)', 'var(--mui-palette-success-main)', 'var(--mui-palette-success-main)'],

    // fill: {
    //   opacity: [1, 1, 1]
    // },

    plotOptions: {},
    dataLabels: {
      enabled: false
    },

    xaxis: {
      type: 'datetime',
      tickAmount: 10,

      // categories: ['1 Jan', '2 Jan', '3 Jan'],
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
    return <Chip variant='tonal' label={handleRTKError(error)} color='error' className='text-center w-fit mx-auto' />
  }

  if (isLoading) {
    return <Loader />
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
            series={[
              {
                data: [
                  {
                    y: 0,
                    x: Date.now() - 1000 * 60 * 60 * 24 * 14
                  },
                  {
                    y: 8,
                    x: Date.now() - 1000 * 60 * 60 * 24 * 7
                  },
                  {
                    y: 4,
                    x: Date.now() - 1000 * 60 * 60 * 24 * 1
                  }
                ],
                name: 'START',
                color: 'var(--mui-palette-primary-main)'
              },

              {
                data: [
                  {
                    y: 2,
                    x: Date.now() - 1000 * 60 * 60 * 24 * 14
                  },
                  {
                    y: 2,
                    x: Date.now() - 1000 * 60 * 60 * 24 * 7
                  },
                  {
                    y: 1,
                    x: Date.now() - 1000 * 60 * 60 * 24 * 1
                  }
                ],
                name: 'Открыли сделку',
                color: 'var(--mui-palette-warning-main)'
              },
              {
                data: [
                  {
                    y: 15,
                    x: Date.now() - 1000 * 60 * 60 * 24 * 14
                  },
                  {
                    y: 21,
                    x: Date.now() - 1000 * 60 * 60 * 24 * 7
                  },
                  {
                    y: 0,
                    x: Date.now() - 1000 * 60 * 60 * 24 * 1
                  }
                ],
                name: 'Комиссия в $',
                color: 'var(--mui-palette-success-main)'
              }
            ]}
            options={options}
          />
        </Box>
      </CardContent>
    </Card>
  )
}

export default DashboardChart
