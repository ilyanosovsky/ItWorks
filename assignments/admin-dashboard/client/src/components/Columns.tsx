import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/api/UserApi";

// export interface User {
//     _id: string;
//     firstName: string;
//     lastName: string;
//     email: string;
//     password: string;
//     role?: string;
//     dob: string;
//   }

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "dob",
    header: "Date of Birth",
  },
];
