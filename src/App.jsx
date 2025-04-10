import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "./components/ui/table"; // Adjust if your ShadCN path is different

const defaultData = [
  {
    name: "Alice",
    email: "alice@example.com",
    field1: "Field1",
    field2: "Field2",
    field3: "Field3",
    field4: "Field4",
    field5: "Field5",
    field6: "Field6",
    field7: "Field7",
    field8: "Field8",
    field9: "Field9",
    field10: "Field10",
  },
  {
    name: "Bob",
    email: "bob@example.com",
    field1: "Field1",
    field2: "Field2",
    field3: "Field3",
    field4: "Field4",
    field5: "Field5",
    field6: "Field6",
    field7: "Field7",
    field8: "Field8",
    field9: "Field9",
    field10: "Field10",
  },
  {
    name: "Charlie",
    email: "charlie@example.com",
    field1: "Field1",
    field2: "Field2",
    field3: "Field3",
    field4: "Field4",
    field5: "Field5",
    field6: "Field6",
    field7: "Field7",
    field8: "Field8",
    field9: "Field9",
    field10: "Field10",
  },
  {
    name: "Amaan",
    email: "amaan@gmail.com",
    field1: "Field1",
    field2: "Field2",
    field3: "Field3",
    field4: "Field4",
    field5: "Field5",
    field6: "Field6",
    field7: "Field7",
    field8: "Field8",
    field9: "Field9",
    field10: "Field10",
  },
  {
    name: "Encore",
    email: "encore@gmail.com",
    field1: "Field1",
    field2: "Field2",
    field3: "Field3",
    field4: "Field4",
    field5: "Field5",
    field6: "Field6",
    field7: "Field7",
    field8: "Field8",
    field9: "Field9",
    field10: "Field10",
  },
  {
    name: "Calm",
    email: "calm@gmail.com",
    field1: "Field1",
    field2: "Field2",
    field3: "Field3",
    field4: "Field4",
    field5: "Field5",
    field6: "Field6",
    field7: "Field7",
    field8: "Field8",
    field9: "Field9",
    field10: "Field10",
  },
  {
    name: "Ashutosh",
    email: "ashutosh@gmail.com",
    field1: "Field1",
    field2: "Field2",
    field3: "Field3",
    field4: "Field4",
    field5: "Field5",
    field6: "Field6",
    field7: "Field7",
    field8: "Field8",
    field9: "Field9",
    field10: "Field10",
  },
  {
    name: "Rajat",
    email: "rajat@gmail.com",
    field1: "Field1",
    field2: "Field2",
    field3: "Field3",
    field4: "Field4",
    field5: "Field5",
    field6: "Field6",
    field7: "Field7",
    field8: "Field8",
    field9: "Field9",
    field10: "Field10",
  },

  {
    name: "Akash",
    email: "Akash@gmail.com",
    field1: "Field1",
    field2: "Field2",
    field3: "Field3",
    field4: "Field4",
    field5: "Field5",
    field6: "Field6",
    field7: "Field7",
    field8: "Field8",
    field9: "Field9",
    field10: "Field10",
  },
  {
    name: "Kamal",
    email: "Kamal@gmail.com",
    field1: "Field1",
    field2: "Field2",
    field3: "Field3",
    field4: "Field4",
    field5: "Field5",
    field6: "Field6",
    field7: "Field7",
    field8: "Field8",
    field9: "Field9",
    field10: "Field10",
  },
];

const columns = [
  {
    accessorKey: "name",
    header: "Name",
    size: 300,
    enableResizing: true,
  },
  {
    accessorKey: "email",
    header: "Email",
    size: 300,
    enableResizing: true,
  },
  {
    accessorKey: "field1",
    header: "Field1",
    size: 300,
    enableResizing: true,
  },
  {
    accessorKey: "field2",
    header: "Field2",
    size: 300,
    enableResizing: true,
  },
  {
    accessorKey: "field3",
    header: "Field3",
    size: 300,
    enableResizing: true,
  },
  {
    accessorKey: "field4",
    header: "Field4",
    size: 300,
    enableResizing: true,
  },
  {
    accessorKey: "field5",
    header: "Field5",
    size: 300,
    enableResizing: true,
  },
  {
    accessorKey: "field6",
    header: "Field6",
    size: 300,
    enableResizing: true,
  },
  {
    accessorKey: "field7",
    header: "Field7",
    size: 300,
    enableResizing: true,
  },
  {
    accessorKey: "field8",
    header: "Field8",
    size: 300,
    enableResizing: true,
  },
  {
    accessorKey: "field9",
    header: "Field9",
    size: 300,
    enableResizing: true,
  },
  {
    accessorKey: "field10",
    header: "Field10",
    size: 300,
    enableResizing: true,
  },
];

export default function ResizableTable() {
  const table = useReactTable({
    data: defaultData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",
  });

  return (
    <div className="h-screen flex items-center mx-40">
      <div className="w-[800px] h-[300px] max-md:w-[400px] overflow-auto border rounded-md">
        <Table className="min-w-[2000px] max-md:min-w-[500px] select-none">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    style={{ width: header.getSize() }}
                    className="relative group"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getCanResize() && (
                      <div
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                        className="absolute right-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-300 cursor-col-resize touch-none"
                      />
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    style={{ width: cell.column.getSize() }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
