import { useState } from 'react'

import type { ColumnDef } from '@tanstack/react-table'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import clsx from 'clsx'
import RenderIf from '~/components/common/render-if'
import { Skeleton } from '~/components/ui/skeleton'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  classNameTable?: string
  loading?: boolean
  skeletonLength?: number
  maxHeightClass?: string
  emptyText?: string
  onActionRow?: (data?: TData) => void
}

const TableCustom = <TData, TValue>({
  columns,
  data,
  classNameTable,
  loading,
  skeletonLength = 9,
  emptyText = 'No data',
  onActionRow
}: DataTableProps<TData, TValue>) => {
  const [rowSelection, setRowSelection] = useState({})
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection
    }
  })
  const skeletonRows = Array.from({ length: skeletonLength })
  return (
    <section className='flex flex-col gap-7.5 w-full'>
      <section className='rounded-[8px] border border-input overflow-hidden main-shadow'>
        <Table className={clsx('table-fixed bg-white', classNameTable)}>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} style={{ width: header.column.getSize() }}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            <RenderIf
              condition={!!loading}
              whenTrue={
                <>
                  {skeletonRows.map((_, i) => (
                    <TableRow key={`skeleton-${i}`}>
                      {columns.map((_, j) => (
                        <TableCell key={`skeleton-cell-${j}`}>
                          <Skeleton className='h-3' />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </>
              }
              whenFalse={
                <>
                  <RenderIf
                    condition={!!table.getRowModel().rows?.length}
                    whenTrue={
                      <>
                        {table.getRowModel().rows.map((row) => (
                          <TableRow
                            key={row.id}
                            data-state={row.getIsSelected() && 'selected'}
                            className={clsx(onActionRow && 'cursor-pointer')}
                            onClick={() => onActionRow?.(row?.original)}
                          >
                            {row.getVisibleCells().map((cell) => (
                              <TableCell key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </>
                    }
                    whenFalse={
                      <TableRow>
                        <TableCell colSpan={columns.length} className='h-24 text-center'>
                          {emptyText}
                        </TableCell>
                      </TableRow>
                    }
                  />
                </>
              }
            />
          </TableBody>
        </Table>
      </section>
    </section>
  )
}

export default TableCustom
