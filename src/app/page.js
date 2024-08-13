"use client";
import { Box, Button, Slider, TextField } from "@mui/material";
import Image from "next/image";
import EditOffIcon from "@mui/icons-material/EditOff";
import { EditOff } from "@mui/icons-material";
import { useState } from "react";
export default function Home() {
  const [result, setResult] = useState("");
  const [userInput, setUserInput] = useState();
  const [paraphraseValue, setParaphraseValue] = useState(5);

  return (
      <Box className="flex p-4 justify-center">
        <Box className="w-1/2 border border-black max-w-lg ">
          <TextField
            multiline
            fullWidth
            rows={30}
            placeholder={"Enter Text Here"}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
              },
            }}
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
          />
          <Box className="flex justify-end p-2">
            <Button variant="contained" color="success">
              Paraphrase
            </Button>
          </Box>
        </Box>
        <Box className="w-1/2 border border-black max-w-lg">
          <TextField
            multiline
            fullWidth
            rows={30}
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
            value={result}
          />
          <Box className="py-2 px-5">
            <Slider
              marks
              defaultValue={5}
              steps={1}
              max={10}
              valueLabelDisplay="auto"
              value={paraphraseValue}
              onChange={(event) => setParaphraseValue(event.target.value)}
              color="black"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
