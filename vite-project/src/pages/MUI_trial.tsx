// import React, { useEffect, useMemo, useState } from 'react';
// import { Avatar, Box, Typography } from '@mui/material';
// import { DataGrid, GridColDef, GridRenderCellParams, gridClasses } from '@mui/x-data-grid';

// import moment from 'moment';
// import { grey } from '@mui/material/colors';


// interface User {
//   _id: string;
//   photoURL: string;
//   name: string;
//   email: string;
//   role: 'basic' | 'editor' | 'admin';
//   active: boolean;
//   createdAt: string;
// }

// interface UsersProps {
//   setSelectedLink: (link: string) => void;
//   link: string;
// }

// const Users: React.FC<UsersProps> = ({ setSelectedLink, link }) => {
//   const {
//     state: { users },
//     dispatch,
//   } = useValue();

//   const [pageSize, setPageSize] = useState<number>(5);
//   const [rowId, setRowId] = useState<string | null>(null);

//   useEffect(() => {
//     setSelectedLink(link);
//     if (users.length === 0) getUsers(dispatch);
//   }, [setSelectedLink, link, users, dispatch]);

//   const columns: GridColDef[] = useMemo(
//     () => [
//       {
//         field: 'photoURL',
//         headerName: 'Avatar',
//         width: 60,
//         renderCell: (params: GridRenderCellParams<User>) => <Avatar src={params.row.photoURL} />,
//         sortable: false,
//         filterable: false,
//       },
//       { field: 'name', headerName: 'Name', width: 170 },
//       { field: 'email', headerName: 'Email', width: 200 },
//       {
//         field: 'role',
//         headerName: 'Role',
//         width: 100,
//         type: 'singleSelect',
//         valueOptions: ['basic', 'editor', 'admin'],
//         editable: true,
//       },
//       {
//         field: 'active',
//         headerName: 'Active',
//         width: 100,
//         type: 'boolean',
//         editable: true,
//       },
//       {
//         field: 'createdAt',
//         headerName: 'Created At',
//         width: 200,
//         renderCell: (params: GridRenderCellParams<User>) =>
//           moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS'),
//       },
//       { field: '_id', headerName: 'Id', width: 220 },
//       {
//         field: 'actions',
//         headerName: 'Actions',
//         type: 'actions',
//         renderCell: (params: GridRenderCellParams<User>) => (
//           <UsersActions {...{ params, rowId, setRowId }} />
//         ),
//       },
//     ],
//     [rowId]
//   );

//   return (
//     <Box
//       sx={{
//         height: 400,
//         width: '100%',
//       }}
//     >
//       <Typography
//         variant="h3"
//         component="h3"
//         sx={{ textAlign: 'center', mt: 3, mb: 3 }}
//       >
//         Manage Users
//       </Typography>
//       <DataGrid
//         columns={columns}
//         rows={users}
//         getRowId={(row: User) => row._id}
     
//         onPageSizeChange={(newPageSize: React.SetStateAction<number>) => setPageSize(newPageSize)}
//         getRowSpacing={(params: { isFirstVisible: any; isLastVisible: any; }) => ({
//           top: params.isFirstVisible ? 0 : 5,
//           bottom: params.isLastVisible ? 0 : 5,
//         })}
//         sx={{
//           [`& .${gridClasses.row}`]: {
//             bgcolor: (theme: { palette: { mode: string; }; }) =>
//               theme.palette.mode === 'light' ? grey[200] : grey[900],
//           },
//         }}
//         onCellEditCommit={(params: { id: string; }) => setRowId(params.id as string)}
//       />
//     </Box>
//   );
// };

// export default Users;
