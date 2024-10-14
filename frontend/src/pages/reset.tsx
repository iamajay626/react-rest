import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { postHelper } from "@/helper/api";
import { isAxiosError } from "axios";

const FormSchema = z
  .object({
    current_password: z.string(),
    password: z.string().min(8, {
      message: "Password must be mininimum 8 character in length",
    }),
    cpassword: z.string(),
  })
  .refine(
    (data) => {
      return data.password === data.cpassword;
    },
    {
      message: "Password and confirm password missmatch",
    }
  );

export function ResetPasswordPage() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const res = await postHelper("/reset", data);
      if (res.status == 200) {
        navigate("/");
      }
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        if (error.response) {
          if (error.response.status == 401) {
            navigate("/login");
          }
        }
      }
    }
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-slate-100">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-lg flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="current_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your current password" {...field} />
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
          <FormField
            control={form.control}
            name="cpassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input placeholder="re-enter your password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
            Update password
          </Button>
          <Link to="/">
            <Button
              type="button"
              className="bg-slate-500 hover:bg-gray-600 w-full"
            >
              Cancel
            </Button>
          </Link>
        </form>
      </Form>
    </div>
  );
}
