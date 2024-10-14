import { Link, Outlet, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { getHelper } from "@/helper/api";

function Layout() {
  const { toast } = useToast();
  const navigate = useNavigate();
  async function Logout() {
    try {
      await getHelper("/logout");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast({
        title: "Logout Failed!",
        description: "Unable to logout!",
      });
    }
  }
  return (
    <section className="min-h-screen flex">
      <Toaster />
      <div className="flex-1 flex flex-col gap-3 shadow-md min-w-[200px]">
        <div className="text-xl font-semibold pl-5 mt-5 text-orange-500">
          LOGO
        </div>
        <Link to="/">
          <p className="px-2 py-3 shadow-sm pl-5 hover:bg-orange-50">
            Dashboard
          </p>
        </Link>
        <Link to="/user-list">
          <p className="px-2 py-3 shadow-sm pl-5 hover:bg-orange-50">
            User List
          </p>
        </Link>
      </div>
      <div className="w-full bg-orange-50">
        <div className="h-[80px] flex justify-end items-center shadow-md px-10 bg-white">
          <Menubar className="border-none">
            <MenubarMenu>
              <MenubarTrigger>
                <Avatar className="hover:scale-105">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </MenubarTrigger>
              <MenubarContent className="flex flex-col justify-center items-center">
                <MenubarItem>
                  <Button
                    variant="default"
                    className="bg-orange-500 hover:bg-orange-400"
                    onClick={Logout}
                  >
                    Logout
                  </Button>
                </MenubarItem>
                <MenubarItem>
                  <Link to="/reset">
                    <Button
                      variant="default"
                      className="bg-orange-500 hover:bg-orange-400"
                    >
                      Password Reset
                    </Button>
                  </Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        <Outlet />
      </div>
    </section>
  );
}

export default Layout;
