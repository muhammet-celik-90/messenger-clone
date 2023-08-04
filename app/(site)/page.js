"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import AuthForm from "../components/AuthForm";

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(229 231 235)",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Image alt="logo" src="/images/logo.png" width="48" height="48" />
        <Typography
          variant="h5"
          sx={{ color: "rgb(3 7 18)", marginTop: "20px", fontWeight: "bold" }}
        >
          Sign in to your account
        </Typography>
      </Box>
      {/* AUTH FORM */}
      <AuthForm />
    </Box>
  );
}
