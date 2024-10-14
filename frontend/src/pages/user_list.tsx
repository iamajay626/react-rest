import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getHelper } from "@/helper/api";
import { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface userData {
  id: number;
  username: string;
  email: string;
  date_joined: string;
}

function UserListPage() {
  const navigate = useNavigate();
  const [data, setData] = useState([] as userData[]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const res = await getHelper("/users");
        setData(res.data as userData[]);
        setIsLoading(false);
      } catch (error: unknown) {
        if (isAxiosError(error)) {
          if (error.response) {
            if (error.response.status == 401) {
              navigate("/login");
            }
          }
        }
      }
    })();
  }, []);

  return (
    <section className="p-10">
      {isLoading && (
        <p className="text-center text-orange-500 font-medium">
          Loading data please wait
        </p>
      )}
      {!isLoading && (
        <Table className="bg-white rounded-md">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No.</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-right">Joined Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.username}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell className="text-right">{item.date_joined}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </section>
  );
}

export default UserListPage;
