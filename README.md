# tarkon-realtime-platform

The **Realtime Platform** is the WebSocket and WebRTC backbone of the Tarkon ecosystem, providing low-latency bidirectional communication for all live interactions.

---

## Responsibilities

- WebSocket gateway for all real-time events (chat, notifications, state sync)
- WebRTC signalling server for voice/video sessions
- CRDT state synchronisation (Yjs protocol support)
- Room and session lifecycle management
- Presence tracking (who is online, typing, active)
- Message persistence and replay for late joiners
- Integration with `tarkon-event-pipeline` for event streaming
- Horizontal scaling via Redis pub/sub

---

## Tech Stack

| Layer          | Technology                     |
|----------------|--------------------------------|
| Runtime        | Node.js 20                     |
| Language       | TypeScript                     |
| Framework      | Fastify + @fastify/websocket   |
| WebRTC         | mediasoup (SFU)                |
| CRDT           | Y-websocket (Yjs)              |
| Pub/Sub        | Redis                          |
| Persistence    | Redis Streams                  |
| Testing        | Vitest + ws (test client)      |

---

## Project Structure

```
src/
  main.ts
  routes.ts
  config/
  websocket/
    handler.ts
    rooms.ts
    presence.ts
    crdt.ts
  webrtc/
    signalling.ts
    mediasoup.ts
  events/
    publisher.ts
    subscriber.ts
  types/
tests/
  test_websocket.ts
  test_rooms.ts
docs/
helm/
  realtime-platform/
Dockerfile
docker-compose.yml
```

---

## Quick Start

```bash
npm install
cp .env.example .env
npm run dev       # ws://localhost:8080
```

---

## Environment Variables

```env
PORT=8080
REDIS_URL=redis://localhost:6379
MEDIASOUP_LISTEN_IP=0.0.0.0
MEDIASOUP_ANNOUNCED_IP=127.0.0.1
```

---

## License

MIT
