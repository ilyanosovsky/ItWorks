import { useEffect, useState, useCallback } from "react";
import useUserApi from "@/api/UserApi";
import { User } from "@/api/UserApi";
import { DataTable } from "@/components/DataTable";
import { columns } from "@/components/Columns";

const DashboardPage = () => {
  const { fetchAllUsers } = useUserApi();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = useCallback(async () => {
    console.log("Fetching users...");
    try {
      const usersData = await fetchAllUsers();
      setUsers(usersData);
      setLoading(false);
    } catch (error) {
      console.error("Fetch users error: ", error);
      setError("Failed to fetch users");
      setLoading(false);
    }
  }, [fetchAllUsers]);

  useEffect(() => {
    console.log("useEffect called");
    if (fetchUsers) {
      fetchUsers();
    }
  }, [fetchUsers]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={users} />
    </div>
  );
};

export default DashboardPage;
