from fastapi import FastAPI
from pydantic import BaseModel
import uuid
import httpx

app = FastAPI()

class Request(BaseModel):
    email: str
    article_url: str


N8N_WEBHOOK = "https://nh246.app.n8n.cloud/webhook/process-article"

@app.post("/submit")
async def submit(request: Request):
    session_id = str(uuid.uuid4())[:8]

    payload = {
        "session_id": session_id,
        "email": request.email,
        "article_url": request.article_url
    }

    async with httpx.AsyncClient() as client:
        await client.post(N8N_WEBHOOK, json=payload, timeout=30)

    return {"status": "success", "session_id": session_id}

@app.get("/")
async def root():
    return {"message": "AI Agent Backend Live!"}