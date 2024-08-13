"use client";
import { Box, Button, Slider, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { EditOff } from "@mui/icons-material";

export default function Home() {
  const [result, setResult] = useState("");
  const [userInput, setUserInput] = useState("");
  const [paraphraseValue, setParaphraseValue] = useState(5);

  const handleParaphrase = async () => {
    const response = await fetch("/api/chat/route", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput, paraphraseValue }),
    });

    const data = await response.json();
    setResult(data.paraphrasedText);
  };

  return (
    <Box className="min-h-screen bg-gray-200">
      <Box className="flex justify-center p-4">
        <EditOff fontSize="large" />
        <p className="text-2xl pt-0.5">SuperPhrase AI</p>
      </Box>

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
            <Button variant="contained" color="success"  onClick={() => handleParaphrase}>
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
              step={1}
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
