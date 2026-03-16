# 📦 HƯỚNG DẪN TẢI CODE ĐẦY ĐỦ

## ⚠️ LƯU Ý QUAN TRỌNG

Tôi **KHÔNG THỂ** tạo file ZIP trực tiếp trong môi trường này. 

## ✅ CÁCH 1: Download từ Figma Make (KHUYẾN NGHỊ)

1. Nhìn lên góc trên bên phải giao diện Figma Make
2. Tìm nút **"Download"**, **"Export"** hoặc biểu tượng tải xuống
3. Click vào để tải toàn bộ project dạng ZIP

## ✅ CÁCH 2: Copy thủ công từng file

### Cấu trúc thư mục:

```
project/
├── src/
│   ├── app/
│   │   └── App.tsx
│   ├── imports/
│   │   ├── ECommerceHomePage.tsx    (4383 dòng)
│   │   └── svg-7ccfkq26ys.ts        (48 dòng)
│   └── styles/
│       └── fonts.css                 (2 dòng)
├── package.json
└── vite.config.ts
```

---

## 📄 FILE 1: `/src/app/App.tsx`

```typescript
import ECommerceHomePage from "../imports/ECommerceHomePage";

export default function App() {
  return <ECommerceHomePage />;
}
```

---

## 📄 FILE 2: `/src/styles/fonts.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
```

---

## 📄 FILE 3: `/src/imports/svg-7ccfkq26ys.ts`

File này đã có sẵn trong project của bạn tại đường dẫn `/src/imports/svg-7ccfkq26ys.ts`

Mở file đó và copy nội dung.

---

## 📄 FILE 4: `/src/imports/ECommerceHomePage.tsx`

⚠️ **File này có 4383 dòng code - quá lớn để hiển thị trực tiếp**

### Cách lấy file này:

**Option A:** Trong Figma Make, mở file `/src/imports/ECommerceHomePage.tsx` và copy toàn bộ nội dung

**Option B:** Sử dụng nút Download/Export trong Figma Make để tải về

**Option C:** File đã tồn tại trong project hiện tại của bạn tại:
```
/src/imports/ECommerceHomePage.tsx
```

---

## 📄 FILE 5: `/package.json`

```json
{
  "name": "@figma/my-make-file",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "build": "vite build"
  },
  "dependencies": {
    "@emotion/react": "11.14.0",
    "@emotion/styled": "11.14.1",
    "@mui/icons-material": "7.3.5",
    "@mui/material": "7.3.5",
    "@popperjs/core": "2.11.8",
    "@radix-ui/react-accordion": "1.2.3",
    "@radix-ui/react-alert-dialog": "1.1.6",
    "@radix-ui/react-aspect-ratio": "1.1.2",
    "@radix-ui/react-avatar": "1.1.3",
    "@radix-ui/react-checkbox": "1.1.4",
    "@radix-ui/react-collapsible": "1.1.3",
    "@radix-ui/react-context-menu": "2.2.6",
    "@radix-ui/react-dialog": "1.1.6",
    "@radix-ui/react-dropdown-menu": "2.1.6",
    "@radix-ui/react-hover-card": "1.1.6",
    "@radix-ui/react-label": "2.1.2",
    "@radix-ui/react-menubar": "1.1.6",
    "@radix-ui/react-navigation-menu": "1.2.5",
    "@radix-ui/react-popover": "1.1.6",
    "@radix-ui/react-progress": "1.1.2",
    "@radix-ui/react-radio-group": "1.2.3",
    "@radix-ui/react-scroll-area": "1.2.3",
    "@radix-ui/react-select": "2.1.6",
    "@radix-ui/react-separator": "1.1.2",
    "@radix-ui/react-slider": "1.2.3",
    "@radix-ui/react-slot": "1.1.2",
    "@radix-ui/react-switch": "1.1.3",
    "@radix-ui/react-tabs": "1.1.3",
    "@radix-ui/react-toggle-group": "1.1.2",
    "@radix-ui/react-toggle": "1.1.2",
    "@radix-ui/react-tooltip": "1.1.8",
    "class-variance-authority": "0.7.1",
    "clsx": "2.1.1",
    "cmdk": "1.1.1",
    "date-fns": "3.6.0",
    "embla-carousel-react": "8.6.0",
    "input-otp": "1.4.2",
    "lucide-react": "0.487.0",
    "motion": "12.23.24",
    "next-themes": "0.4.6",
    "react-day-picker": "8.10.1",
    "react-dnd": "16.0.1",
    "react-dnd-html5-backend": "16.0.1",
    "react-hook-form": "7.55.0",
    "react-popper": "2.3.0",
    "react-resizable-panels": "2.1.7",
    "react-responsive-masonry": "2.7.1",
    "react-router": "7.13.0",
    "react-slick": "0.31.0",
    "recharts": "2.15.2",
    "sonner": "2.0.3",
    "tailwind-merge": "3.2.0",
    "tw-animate-css": "1.3.8",
    "vaul": "1.1.2"
  },
  "devDependencies": {
    "@tailwindcss/vite": "4.1.12",
    "@vitejs/plugin-react": "4.7.0",
    "tailwindcss": "4.1.12",
    "vite": "6.3.5"
  },
  "peerDependencies": {
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "peerDependenciesMeta": {
    "react": {
      "optional": true
    },
    "react-dom": {
      "optional": true
    }
  },
  "pnpm": {
    "overrides": {
      "vite": "6.3.5"
    }
  }
}
```

---

## 🚀 HƯỚNG DẪN CHẠY PROJECT

### Bước 1: Cài đặt dependencies

```bash
npm install
# hoặc
pnpm install
# hoặc
yarn install
```

### Bước 2: Chạy development server

```bash
npm run dev
# hoặc
pnpm dev
# hoặc
yarn dev
```

### Bước 3: Build production

```bash
npm run build
# hoặc
pnpm build
# hoặc
yarn build
```

---

## 📋 DANH SÁCH FILE QUAN TRỌNG

### Files trong project:

1. ✅ `/src/app/App.tsx` - Entry point (5 dòng)
2. ✅ `/src/styles/fonts.css` - Font imports (2 dòng)
3. ✅ `/src/imports/svg-7ccfkq26ys.ts` - SVG paths (48 dòng)
4. ✅ `/src/imports/ECommerceHomePage.tsx` - Main component (4383 dòng)
5. ✅ `/package.json` - Dependencies
6. ✅ `/vite.config.ts` - Vite config
7. ✅ `/tsconfig.json` - TypeScript config

### Hình ảnh (Assets):

Tất cả hình ảnh được import qua `figma:asset/[hash].png` scheme.
Khi download project từ Figma Make, các file hình ảnh sẽ được tự động bao gồm.

---

## ❓ NẾU BẠN VẪN KHÔNG TẢI ĐƯỢC

Nếu bạn không tìm thấy nút Download trong Figma Make, hãy:

1. **Screenshot màn hình** của bạn và cho tôi biết
2. Hoặc **copy thủ công** từng file theo hướng dẫn trên
3. File `/src/imports/ECommerceHomePage.tsx` đã tồn tại trong project, bạn chỉ cần mở và copy

---

## 📧 LIÊN HỆ

Nếu cần hỗ trợ thêm, vui lòng cho tôi biết:
- Bạn đang sử dụng giao diện nào?
- Bạn có thấy nút Download không?
- Bạn muốn tôi giải thích file nào cụ thể?

---

**Chúc bạn thành công! 🎉**
