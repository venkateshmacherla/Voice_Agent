from fastapi import FastAPI, UploadFile
from pydantic import BaseModel
import uvicorn
from stt import speech_to_text
from llm_agent import process_text
from tts import text_to_speech

app = FastAPI()

class TextRequest(BaseModel):
    text: str

@app.get("/")
def root():
    return {"message": "Agent is running!"}

@app.post("/stt")
async def stt(audio: UploadFile):
    audio_bytes = await audio.read()
    return speech_to_text(audio_bytes)

@app.post("/agent")
async def agent(req: TextRequest):
    return process_text(req.text)

@app.post("/tts")
async def tts(req: TextRequest):
    return text_to_speech(req.text)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000)
