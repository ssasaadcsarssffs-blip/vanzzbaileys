# 🚀 VanzzBaileys

> Next Generation WhatsApp Web API Library.

VanzzBaileys is a modern TypeScript library for the WhatsApp Multi-Device protocol.

## ✨ Features

- Pairing Code Authentication
- WhatsApp Multi Device
- Smart LID ↔ JID Resolution
- End-to-End Encryption
- Native Flow
- AIRich
- Carousel
- Button v1
- Button v2
- Media Messages
- Poll Messages
- Reactions
- Stickers
- Auto Update
- Hot Reload

---

## 📦 Installation

```bash
npm install vanzzbaileys
```

---

## 🚀 Quick Start

```ts
import { VanzzBaileys } from "vanzzbaileys"

const client = new VanzzBaileys({
    auth: "./session"
})

await client.connect()

const code = await client.requestPairingCode("628xxxxxxxxxx")

console.log(code)
```

---

## 📚 Documentation

Complete documentation is available inside the `/docs` folder.

---

## 📄 License

MIT
