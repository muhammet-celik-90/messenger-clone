"use client";

import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import axios from "axios";
import AvatarComp from "@/app/components/sidebar/AvatarComp";

export default function UserBox({ data }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {
    setIsLoading(true);

    axios
      .post("/api/conversations", {
        userId: data.id,
      })
      .then((data) => {
        router.push(`/conversations/${data.data.id}`);
      })
      .finally(() => setIsLoading(false));
  }, [data, router]);

  return (
    <Box
      sx={{
        p: 1,
        width: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "rgb(243 244 246)",
        },
        borderRadius: "10px",
      }}
      onClick={handleClick}
    >
      <AvatarComp user={data} />
      <Box sx={{p:1, fontWeight:"600", fontSize:"14px"}}>
        <Typography variant="p">{data.name}</Typography>
      </Box>
    </Box>
  );
}
