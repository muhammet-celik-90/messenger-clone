"use client";

import { Box, Typography } from "@mui/material";

export default function EmptyState() {
  return (
    <Box
      sx={{
        px: 2,
        py: 5,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(229 231 235)",
        width:"100%",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="p" sx={{fontWeight:"bold", fontSize:"17px"}}>
          Select a chat or start a new conversation
        </Typography>
      </Box>
    </Box>
  );
}
