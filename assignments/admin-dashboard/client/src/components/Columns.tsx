import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/api/UserApi";
import useUserApi from "@/api/UserApi";
import { useUsers } from "@/context/UserProvider";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import EditUserForm from "@/components/EditUserForm";
import { useState } from "react";
import ConfirmDialog from "@/components/ConfirmDialog";
import { toast } from "@/components/ui/use-toast";

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          First Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Last Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "role",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Role
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "dob",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date of Birth
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      const { deleteUser } = useUserApi();
      const { setUsers } = useUsers();
      const [isEditOpen, setIsEditOpen] = useState(false);
      const [isConfirmOpen, setIsConfirmOpen] = useState(false);

      const handleDelete = async () => {
        try {
          await deleteUser(user._id);
          setUsers((prevUsers) => prevUsers.filter((u) => u._id !== user._id));
          toast({
            title: "User deleted",
            description: "The user has been successfully deleted.",
            variant: "default",
          });
        } catch (error) {
          toast({
            title: "Failed to delete user",
            description:
              error instanceof Error
                ? error.message
                : "An unexpected error occurred.",
            variant: "destructive",
          });
        }
      };

      const handleUserUpdated = (updatedUser: User) => {
        setUsers((prevUsers) =>
          prevUsers.map((u) => (u._id === updatedUser._id ? updatedUser : u))
        );
      };

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setIsEditOpen(true)}>
                Edit User
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setIsConfirmOpen(true)}>
                Delete User
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <EditUserForm
            isOpen={isEditOpen}
            setIsOpen={setIsEditOpen}
            user={user}
            onUserUpdated={handleUserUpdated}
          />
          <ConfirmDialog
            isOpen={isConfirmOpen}
            setIsOpen={setIsConfirmOpen}
            onConfirm={handleDelete}
            title="Delete User"
            description="Are you sure you want to delete this user? This action cannot be undone."
          />
        </>
      );
    },
  },
];
