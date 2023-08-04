"use client";

import { Button, Box } from "@mui/material";
import { signOut } from "next-auth/react";
import EmptyState from "../components/EmptyState";

export default function Users() {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "block"},
        width:"100%",
        height: "100vh",
      }}
    >
      <EmptyState />
    </Box>
  );
}
