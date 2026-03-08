# Voice AI Agent – 2Care.ai

## 📌 Overview
This project is a multi‑container application that integrates:
- **Backend (Node.js + Express + WebSocket)** – Handles API requests and WebSocket communication.
- **Agent (Python + FastAPI)** – Provides speech‑to‑text (STT), text processing (LLM agent), and text‑to‑speech (TTS) services.
- **Redis** – Used for caching and message passing.

All services are containerized with Docker and orchestrated using Docker Compose.

---

## Getting Started

**1. Clone the repository**
```bash
git clone <your-repo-url>
cd voice-ai-agent

**2. Build and run with Docker Compose
**docker compose -f docker/docker-compose.yml up --build

**This will:**
- Pull Redis image
- Build backend and agent images
- Start all containers

**Backend (Node.js)
**Runs on http://localhost:3000
Provides WebSocket server for real‑time communication
**Example route:**
GET /
→ "Backend is running!"

**Agent (FastAPI)**
Runs on http://localhost:5000

**Endpoints:**
- POST /stt → Upload audio, returns transcribed text
- POST /agent → Send text, returns processed response
- POST /tts → Send text, returns audio output
- GET / → Health check ({"message":"Agent is running!"})

**Redis**
- Runs on localhost:6379
- Used internally for caching and message passing

**Development Notes**
- Node.js v18 includes native fetch. You can remove node-fetch dependency if desired.
- Ensure server.listen binds to 0.0.0.0 so the backend is reachable outside the container.
- FastAPI endpoints /agent, /stt, /tts are POST only — test with curl or Postman.

**Testing
**Backend
bash
curl http://localhost:3000/
Agent
bash
curl -X POST http://localhost:5000/agent \
     -H "Content-Type: application/json" \
     -d '{"text":"hello"}'
Expected response: processed text from your LLM agent.

**Project Structure**
voice-ai-agent/
├── backend/          # Node.js backend
│   ├── server.js
│   ├── websocket.js
│   └── routes.js
├── agent/            # Python FastAPI agent
│   ├── main.py
│   ├── stt.py
│   ├── llm_agent.py
│   ├── tts.py
│   └── requirements.txt
├── docker/           # Docker Compose + Dockerfiles
│   ├── docker-compose.yml
│   ├── Dockerfile.node
│   └── Dockerfile.python
└── memory/           # (optional) additional services







