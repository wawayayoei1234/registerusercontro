# ใช้ Node.js 14 LTS ในการสร้าง image
FROM node:14 AS base

# กำหนด WORKDIR ให้เป็น /app
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json มาที่ WORKDIR
COPY package.json package-lock.json* ./

# ติดตั้ง dependencies โดยใช้ npm ci เพื่อให้แน่ใจว่ามีการติดตั้งให้ตรงกับ lockfile
RUN npm ci --only=production

# ตัวอย่างถ้าคุณใช้ Yarn สามารถใช้คำสั่งดังนี้แทน
# COPY yarn.lock ./
# RUN yarn install --frozen-lockfile --production

# ตัวอย่างถ้าคุณใช้ PNPM สามารถใช้คำสั่งดังนี้แทน
# COPY pnpm-lock.yaml ./
# RUN yarn global add pnpm && pnpm i --frozen-lockfile --prod

# สร้าง container สำหรับการ build
FROM base AS builder

# คัดลอกโค้ดของโปรเจคไปยัง container
COPY . .

# สร้าง production build ของ Next.js
RUN npm run build

# ตัวอย่างถ้าคุณใช้ Yarn สามารถใช้คำสั่งดังนี้แทน
# RUN yarn build

# ตัวอย่างถ้าคุณใช้ PNPM สามารถใช้คำสั่งดังนี้แทน
# RUN pnpm run build

# Container สำหรับรัน Next.js application บน production
FROM base AS runner

# ติดตั้ง Next.js เวอร์ชัน production ที่ได้สร้างมาจาก builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next

# ตั้งค่า environment variable
ENV NODE_ENV production

# เพิ่ม user และ group สำหรับการรัน
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# เปลี่ยนเจ้าของไฟล์ให้เป็น nextjs:nodejs
RUN chown -R nextjs:nodejs /app

# กำหนด user ให้เป็น nextjs
USER nextjs

# ระบุพอร์ตที่ต้องการให้ Next.js application ทำงาน
EXPOSE 3000

# กำหนดค่า environment variable สำหรับพอร์ต
ENV PORT 3000

# เริ่มการรัน Next.js application โดยใช้ node เรียกไฟล์ server.js
CMD ["node", "server.js"]
