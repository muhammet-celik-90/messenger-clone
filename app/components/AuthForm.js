"use client";

import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import AuthSocialButton from "./AuthSocialButton";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthForm() {
  const [variant, setVariant] = useState("LOGIN");
  const [isLoading, setIsLoading] = useState(false);
  const session = useSession();
  const router = useRouter();

  useEffect(()=> {
    if(session?.status === "authenticated") {
      router.push("/users")
    }
  },[session?.status, router])

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      //Axios Register
      axios
        .post("/api/register", data)
        .then(()=> signIn("credentials",data))
        .catch(() => toast.error("Something went wrong!"))
        .finally(() => setIsLoading(false));
    }
    if (variant === "LOGIN") {
      //NextAuth SignIn
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid credentials");
          }

          if (callback?.ok && !callback?.error) {
            toast.success("Logged in!");
            router.push("/users")
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action) => {
    setIsLoading(true);
    signIn(action,{redirect:false})
    .then((callback) => {
      if(callback?.error) {
        toast.error("Invalid credentials")
      }
      if(callback?.ok && !callback?.error) {
        toast.success('Logged in!')
      }
    })
    .finally(()=>setIsLoading(false))
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "400px",
        marginTop: "20px",
        padding: "20px",
      }}
    >
      <Card sx={{ backgroundColor: "white", padding: "20px" }}>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            {variant === "REGISTER" && (
              <TextField
                label="Name"
                id="name"
                {...register("name")}
                aria-invalid={errors.id ? "true" : "false"}
                disabled={isLoading}
                fullWidth
                variant="standard"
              />
            )}
            <TextField
              label="Email address"
              id="email"
              type="email"
              {...register("email", { required: true })}
              aria-invalid={errors.id ? "true" : "false"}
              disabled={isLoading}
              fullWidth
              variant="standard"
            />
            <TextField
              label="Password"
              id="password"
              type="password"
              {...register("password", { required: true })}
              aria-invalid={errors.id ? "true" : "false"}
              disabled={isLoading}
              fullWidth
              sx={{ marginTop: "15px" }}
              variant="standard"
            />
            <Box>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ margin: "15px 0 15px 0" }}
                disabled={isLoading}
              >
                {variant === "LOGIN" ? "Sign in" : "Register"}
              </Button>
            </Box>
          </form>
          <Divider light>
            <Typography sx={{ color: grey[500], fontSize: "14px" }}>
              Or continue with
            </Typography>
          </Divider>
          {/* SOCIAL ACTION BUTTON */}
          <Box
            sx={{
              marginTop: "10px",
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <AuthSocialButton
              icon={<GitHubIcon />}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={<GoogleIcon />}
              onClick={() => socialAction("google")}
            />
          </Box>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              fontSize: "14px",
              color: grey[500],
              marginTop: "20px",
              justifyContent: "center",
            }}
          >
            {variant === "LOGIN"
              ? "New to Messenger?"
              : "Already have an account?"}
            <Box
              onClick={toggleVariant}
              sx={{
                marginLeft: "5px",
                color: blue[500],
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {variant === "LOGIN" ? "Create an account" : "Login"}
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
