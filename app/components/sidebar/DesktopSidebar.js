"use client";

import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";
import { Box } from "@mui/material";
import DesktopItem from "./DesktopItem";
import AvatarComp from "./AvatarComp";

export default function DesktopSidebar({ currentUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const routes = useRoutes();

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        position: "fixed",
        left: "0",
        zIndex: "40",
        width: "60px",
        px: 3,
        overflowY: "auto",
        backgroundColor: "white",
        borderRight: "1px solid lightgrey",
        height: "100vh",
        pb: 2,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        component="nav"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          component="ul"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "4px",
          }}
        >
          {routes.map((item) => (
            <DesktopItem
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={item.active}
              onClick={item.onClick}
            />
          ))}
        </Box>
      </Box>
      {/* AVATAR BUTTON */}
      <Box
        component="nav"
        onClick={() => setIsOpen(true)}
        sx={{ cursor: "pointer", marginLeft:"-15px"}}
      >
        <AvatarComp user={currentUser} />
      </Box>
    </Box>
  );
}
