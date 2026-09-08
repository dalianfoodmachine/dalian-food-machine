# Dalian Food Machine - 企業形象官網

大連食品機械企業官網，展示產品目錄、公司介紹、設備維修指南、採購說明等。

## 技術棧

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **CMS**: Contentful (Headless)
- **i18n**: next-intl (zh-TW / en)
- **Deploy**: Cloudflare Pages (@opennextjs/cloudflare)
- **Email**: Resend (聯絡表單)
- **Video**: lite-youtube-embed

## 專案結構

```
dalian-food-machine/              # Git repo 根目錄
├── docs/                         # 內部文件（gitignored）
│   ├── INDEX.md                  # 文件索引
│   ├── DEVPLAN.md                # 開發計劃（P0-P3 分級）
│   ├── BLUEPRINT.md              # 完整開發藍圖 & checklist
│   ├── WEB_DESIGN.md             # 網頁設計架構文件
│   ├── ACCOUNTS.md               # 第三方服務帳號資訊
│   ├── 素材資料夾結構.md          # 素材分類
│   ├── guidelines/               # 開發準則
│   │   ├── IMAGE_GUIDELINES.md   # 圖片最佳化準則
│   │   └── DEVELOPMENT_WORKFLOW.md # 開發流程準則
│   ├── specs/                    # 頁面/功能規格
│   │   └── home.md               # 首頁規格
├── 素材/                         # 設計素材（gitignored）
├── package.json                  # 根目錄 (contentful, lite-youtube-embed, @opennextjs/cloudflare)
└── dalian-food-machine/          # Next.js 應用程式子目錄
    ├── app/[locale]/             # i18n 路由頁面
    │   ├── layout.tsx
    │   └── page.tsx
    ├── i18n/                     # next-intl 設定
    │   ├── routing.ts
    │   ├── request.ts
    │   └── navigation.ts
    ├── messages/                  # 翻譯檔
    │   ├── zh-TW.json
    │   └── en.json
    ├── middleware.ts              # next-intl middleware
    ├── next.config.ts
    └── package.json              # Next.js app 依賴
```

## 關鍵路徑

| 用途 | 路徑 |
|------|------|
| Next.js 頁面 | `dalian-food-machine/app/[locale]/` |
| 元件 | `dalian-food-machine/components/` (待建立) |
| i18n 設定 | `dalian-food-machine/i18n/routing.ts` |
| 翻譯檔 | `dalian-food-machine/messages/{zh-TW,en}.json` |
| Contentful client | `dalian-food-machine/lib/contentful/` (待建立) |
| 全域樣式 | `dalian-food-machine/app/globals.css` |
| 文件索引 | `docs/INDEX.md` |
| 開發計劃 | `docs/DEVPLAN.md` |
| 開發藍圖 | `docs/BLUEPRINT.md` |
| 設計文件 | `docs/WEB_DESIGN.md` |
| 圖片準則 | `docs/guidelines/IMAGE_GUIDELINES.md` |
| 開發流程準則 | `docs/guidelines/DEVELOPMENT_WORKFLOW.md` |
| 首頁規格 | `docs/specs/home.md` |

## 開發進度

對照 `docs/BLUEPRINT.md` 執行順序 Checklist：
- [x] Round 1 - 基礎建設（網域、GitHub、開發環境、Contentful、Cloudflare）
- [x] Round 2 - 專案骨架（Next.js 初始化、套件安裝、Tailwind v4、next-intl）
  - [ ] 基礎 layout（Header, Footer, Navigation）← 下一步
- [ ] Round 3 - CMS & 內容（Content Types、TypeScript types、Contentful client）
- [ ] Round 4 - 功能完善（表單、SEO、產品頁、FAQ、採購頁）
- [ ] Round 5 - 部署上線（Cloudflare Pages、SSL、Webhook）
- [ ] Round 6 - 優化（Lighthouse、Core Web Vitals）

## 開發慣例

### 開發流程
- **規格驅動開發**：詳見 `docs/guidelines/DEVELOPMENT_WORKFLOW.md`
- 流程：規格定義 → 區塊拆分 → 測試先行 (TDD) → 實作 → 規格驗證
- 規格文件放在 `docs/specs/{page-name}.md`
- 測試分層：Unit (Vitest) → Component (Testing Library) → E2E (Playwright)

### 命名
- 元件：PascalCase (`ProductCard.tsx`)
- 工具函式：camelCase (`fetchProducts.ts`)
- CSS：Tailwind utility classes，避免自訂 CSS
- 路由：kebab-case (`/about`, `/products/[slug]`)

### Git
- 分支：`dev` 開發 → PR merge 到 `main`
- Commit 風格：`feat:`, `fix:`, `refactor:`, `docs:`, `chore:` 前綴
- 語言：commit message 可用中文或英文

### 常用指令

```bash
# 開發（在 dalian-food-machine/ 子目錄下執行）
cd dalian-food-machine && pnpm dev

# 建置
cd dalian-food-machine && pnpm build

# Lint
cd dalian-food-machine && pnpm lint

# Cloudflare Pages 建置
pnpm exec opennextjs-cloudflare
```

### 測試

```bash
# Unit + Component 測試
cd dalian-food-machine && pnpm test

# 測試 UI
cd dalian-food-machine && pnpm test:ui

# 測試覆蓋率
cd dalian-food-machine && pnpm test:coverage

# E2E 測試
cd dalian-food-machine && pnpm test:e2e
```

### i18n
- 預設 locale：`zh-TW`
- 支援 locale：`zh-TW`, `en`
- 路由格式：`/zh-TW/about`, `/en/about`
- 靜態文字用 `messages/*.json`，CMS 內容用 Contentful field-level localization
