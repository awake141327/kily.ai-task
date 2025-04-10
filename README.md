# Resizable Shadcn Table using tanstack/react-table Library

Demonstration of how to create a resizable columns table using the ShadCN Table along with tanstack/react-table library.  
ShadCN Table - [https://ui.shadcn.com/docs/components/table]  
Tanstack Table - [https://tanstack.com/table/latest]

## How It Works

### Data

We define an array of objects - `defaultData` with the fields which are needed to be displayed on our table.

```
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
  // ...more data
];
```

### Columns

We define an array of objects `columns` with properties as follows -

- `accessorKey` : The key from the data object.
- `header` : The header name to be shown.
- `size` : Default width of the column.
- `enableResizing` : Enabling the column to resize.

```
const columns = [
  {
    accessorKey: "name",
    header: "Name",
    size: 300,
    enableResizing: true,
  },
  // ...more columns
];
```

### Tanstack React Table

We use the useReactTable hook provided by `@tanstack/react-table library to create a table providing it with necessary properties.

```
const table = useReactTable({
    data: defaultData, // The data to be displayed
    columns, // Column behaviour and properties
    getCoreRowModel: getCoreRowModel(), // Function provided by Tanstack for different row behaviour
    columnResizeMode: "onChange", // Resizing on drag.
});
```

### Rendering the Table

We render the table using the different methods provided by tanstack.

## Header

- `table.getHeaderGroups` and `headerGroup.headers` : Mapping over for the table data Header definitions to be displayed.
- We use them inside the ShadCN Table - first TableRow being the Header definitions.
- Using the styling of `header.getSize()` to provide the intial width which we set on the columns array.
- `flexRender()` helps in rendering the header. [https://tanstack.com/table/latest/docs/guide/headers#header-rendering]
- `getCanResize()` - Using the property of enableResizing defined in columns array, checking if that column needs to be resized or not.
- `getResizeHandler()` - Returns the mouse/touch handler for dragging/resizing a column. Using this inside a div to create a draggable column through absolute positioning. [https://tanstack.com/table/latest/docs/api/features/column-sizing#getresizehandler]

## Body

- `table.getRowModel().rows` - Returns all the data rows to render in the `<TableBody>`
- `getVisibleCells()` - Gets the individual visible cells for each row.
- `flexRender()` helps in rendering the column data. [https://tanstack.com/table/latest/docs/guide/headers#header-rendering]

### Scrolling Behaviour

Wrapping the table in a container with fixed height and width and using the overflow-auto tailwind class.

```
   <div className="w-[800px] h-[300px] max-md:w-[400px] overflow-auto border rounded-md">
        <Table className="min-w-[2000px] max-md:min-w-[500px] select-none">
```
