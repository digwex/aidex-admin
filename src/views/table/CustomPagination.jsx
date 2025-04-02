import { memo } from 'react'

import styled from '@emotion/styled'
import { Pagination as StyledPaginationMui } from '@mui/material'

const StyledPagination = styled(StyledPaginationMui)`
  @media screen and (max-width: 750px) {
    column-gap: 4px;
  }
  margin-top: 20px;
  display: flex;
  align-items: center;
  column-gap: 10px;
  justify-content: center;

  .MuiPaginationItem-root {
    @media screen and (max-width: 750px) {
      padding: 8px 14px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    padding: 12px 19px;
    font-family: 'Manrope';
    color: #ffffff;
    background-color: #1d212d;
    border: 1px solid #282d3c;
    border-radius: 12px;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
  }
  .MuiButtonBase-root {
    @media screen and (max-width: 750px) {
      padding: 8px 14px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    width: 90%;
    height: 80%;
    padding: 12px 19px;
    color: #ffffff;
    background-color: #1d212d;
    border: 1px solid #282d3c;
    border-radius: 12px;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    transition: 0.5s;
    &:hover {
      opacity: 0.7;
    }
  }

  .Mui-selected {
    color: #1d212d !important;
    background-color: #80f6bc !important;
    border-radius: 12px !important;
    border: none !important;
    transition: 0.5s;
  }
`

function CustomPagination({ currentPage, totalPage, onChange, isView = true, isFetching }) {
  const handlePageChange = (_, value) => {
    onChange(value)
  }

  return (
    <>
      {totalPage > 1 && isView && (
        <StyledPagination
          count={totalPage}
          page={currentPage}
          onChange={handlePageChange}
          disabled={totalPage === 1 || isFetching}
        />
      )}
    </>
  )
}

export default memo(CustomPagination)
