"use client";

import Link from "next/link";
import { Box } from "@mui/material";
import clsx from "clsx";

export default function MobileItem({ label, icon, href, onClick, active }) {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };
  return (
    <Box component="li" onClick={handleClick} sx={{ listStyleType: "none" }}>
      <Link
        href={href}
        className={clsx(`desktopItemLink`, active && "desktopItemLinkActive")}
      >
        {icon}
        <Box component="span" className="sr-only">
          {label}
        </Box>
      </Link>
    </Box>
  );
}
