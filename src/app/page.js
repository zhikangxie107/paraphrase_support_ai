import { Box, Button, TextField } from "@mui/material";
import Image from "next/image";
import EditOffIcon from "@mui/icons-material/EditOff";
import { EditOff } from "@mui/icons-material";
export default function Home() {
  return (
    <Box className="h-screen bg-gray-200">
      <Box className="flex justify-center p-4">
        <EditOffIcon fontSize="large" />
        <p className="text-2xl">SuperPhrase AI</p>
      </Box>

      <Box className="flex p-4 h-[90%] justify-center">
        <Box className="w-1/2 border border-black max-w-lg ">
          <TextField
            multiline
            fullWidth
            rows={27}
            placeholder={"Enter Text Here"}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
              },
            }}
          />
          <Box className="flex justify-end pr-2">
            <Button variant="contained" color="success">
              Paraphrase
            </Button>
          </Box>
        </Box>
        <Box className="w-1/2  border border-black max-w-lg">
          <TextField
            multiline
            fullWidth
            rows={27}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
              },
            }}
            InputProps={{
              readOnly: true,
            }}
            value={"test text"}
          />
        </Box>
      </Box>
    </Box>
  );
}
