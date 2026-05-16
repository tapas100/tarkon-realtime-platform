import Fastify from "fastify";
import websocket from "@fastify/websocket";
import cors from "@fastify/cors";

const app = Fastify({ logger: true });

await app.register(cors, { origin: "*" });
await app.register(websocket);

app.get("/health", async () => ({ status: "ok", service: "tarkon-realtime-platform" }));

app.get("/ws", { websocket: true }, (socket) => {
  socket.on("message", (msg) => {
    // TODO: handle room, presence, CRDT sync messages
    socket.send(JSON.stringify({ type: "ack", data: msg.toString() }));
  });
});

const PORT = parseInt(process.env.PORT ?? "8080", 10);
await app.listen({ port: PORT, host: "0.0.0.0" });
console.log(`Realtime Platform listening on ws://0.0.0.0:${PORT}`);
