import { memo } from 'react'

import Pagination from '@mui/material/Pagination'

function CustomPagination({ currentPage, totalPage, onChange, isView = true, isFetching }) {
  const handlePageChange = (_, value) => {
    onChange(value)
  }

  return (
    <>
      {totalPage > 1 && isView && (
        <div className='flex justify-end'>
          <Pagination
            shape='rounded'
            color='primary'
            variant='tonal'
            count={totalPage}
            page={currentPage}
            onChange={handlePageChange}
            disabled={totalPage === 1 || isFetching}

            // showFirstButton
            // showLastButton
          />
        </div>
      )}
    </>
  )
}

export default memo(CustomPagination)
