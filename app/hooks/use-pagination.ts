import { useCallback, useMemo, useState } from 'react'

interface IUsePaginationProps {
  initialPage?: number
  initialSize?: number
}

export const usePagination = ({ initialPage = 0, initialSize = 10 }: IUsePaginationProps = {}) => {
  const [page, setPage] = useState(initialPage)
  const [size, setSize] = useState(initialSize)

  const handlePageChange = useCallback((p: number) => {
    setPage(p)
  }, [])

  const handleSizeChange = useCallback((s: number) => {
    setSize(s)
    setPage(0)
  }, [])

  const handleResetPage = useCallback(() => {
    setPage(0)
  }, [])

  const paging = useMemo(() => {
    return { page, size }
  }, [page, size])

  return {
    page,
    size,
    setPage: handlePageChange,
    setSize: handleSizeChange,
    resetPage: handleResetPage,
    paging
  }
}
