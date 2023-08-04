import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function AuthSocialButton({ icon, onClick }) {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{width:"49%", color:grey[600]}}
      color="inherit"
    >
    {icon}
    </Button>
  );
}
