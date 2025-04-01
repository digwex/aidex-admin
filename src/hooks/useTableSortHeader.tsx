import ArrowIcon from '@/views/table/TableSortArrowIcon'
import { SORT_DIRECTION } from '../api/types'

interface SortTitle {
  label: string
  sort: string
  bgColor?: string
}

interface Props {
  sortTitles: SortTitle[]
  orderBy: any
  setOrderBy: ((orderBy: { field: string; direction: string }) => void) | undefined
}

export const useTableSortHeader = ({ sortTitles, orderBy, setOrderBy }: Props) => {
  const handleClick = (sort: string) => {
    if (orderBy.field === sort) {
      if (orderBy.direction === SORT_DIRECTION.DESC) {
        setOrderBy?.({ field: sort, direction: SORT_DIRECTION.ASC })
      } else {
        setOrderBy?.({ field: sort, direction: SORT_DIRECTION.DESC })
      }
    } else {
      setOrderBy?.({ field: sort, direction: SORT_DIRECTION.DESC })
    }
  }

  const tableSortTitles = (
    <tr>
      {sortTitles.map(({ label, sort, bgColor }, index: number) =>
        label === null ? (
          <th style={{ background: bgColor }} key={index} />
        ) : (
          <th style={{ background: bgColor }} key={index}>
            <button
              style={{
                width: '100%',
                color: 'inherit',
                backgroundColor: 'transparent',
                cursor: sort !== null ? 'pointer' : 'default'
              }}
              className='th_row'
              onClick={() => {
                if (sort) handleClick(sort)
              }}
            >
              {sort === null ? null : (
                <div className='th_column'>
                  <ArrowIcon isActive={orderBy.field === sort && orderBy.direction === SORT_DIRECTION.ASC} />
                  <ArrowIcon isDown isActive={orderBy.field === sort && orderBy.direction === SORT_DIRECTION.DESC} />
                </div>
              )}
              <span
                style={{
                  color:
                    sort !== null ? (orderBy.field === sort ? 'var(--mui-palette-success-main)' : 'inherit') : 'inherit'
                }}
              >
                {label}
              </span>
            </button>
          </th>
        )
      )}
    </tr>
  )

  return { tableSortTitles }
}
