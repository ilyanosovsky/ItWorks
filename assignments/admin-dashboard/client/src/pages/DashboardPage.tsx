import { useEffect } from "react";
import { DataTable } from "@/components/DataTable";
import { columns } from "@/components/Columns";
import { useUsers } from "@/context/UserProvider";

const DashboardPage = () => {
  const { users, fetchUsers } = useUsers();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="w-full py-10 px-10">
      <DataTable columns={columns} data={users} />
    </div>
  );
};

export default DashboardPage;
