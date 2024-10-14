import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { apiUrl } from "@/helper/urls";
import { Link, useNavigate } from "react-router-dom";

const FormSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be mininimum 8 character in length",
  }),
});

export function LoginPage() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const res = await axios.post(`${apiUrl}/login/`, data);
      if (res.status == 200) {
        const token = res.data.token;
        console.log(res.data);
        localStorage.setItem("token", token);
        navigate("/");
      }
    } catch (e: unknown) {
      toast({
        title: "Login failed",
        description: "Error trying to login",
      });
      console.log(e);
    }
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-slate-100">
      <Toaster />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-lg flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="create a password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
            Login
          </Button>
          <p className="text-center text-sm">
            New to here?{" "}
            <Link to="/signup" className="text-blue-500">
              Signup
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
}
