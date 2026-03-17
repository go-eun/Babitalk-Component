# CLAUDE.md — babitalk

This file provides guidance to Claude Code (claude.ai/code) when working with this repository.

---

## Stack

Next.js (App Router) · React 19 · TypeScript · Tailwind CSS 4

---

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

---

## Architecture

- `src/app/` — App Router pages and layouts (`page.tsx`, `layout.tsx`, `globals.css`)
- `src/components/` — UI components
- Images are served from `images.babitalk.com` (configured in `next.config.ts`)
- Path alias `@/*` maps to `src/*`

---

## Component Registry

| Component | Path | Description |
|-----------|------|-------------|
| `NavigationBar` | `src/components/NavigationBar.tsx` | 상단 네비게이션 바 (home / back / title 3종) |
| `StatusBar` | `src/components/StatusBar.tsx` | 상태바 (시간 실시간 연동, 배터리 애니메이션) |
| `HomeIndicator` | `src/components/HomeIndicator.tsx` | 홈 인디케이터 (검정 바 고정, 반응형) |
| `TabBar` | `src/components/TabBar.tsx` | 5탭 하단 네비게이션 (클릭 색상 전환, 반응형) |
| `Banner` | `src/components/Banner.tsx` | 메인 배너 |
| `SearchBox` | `src/components/SearchBox.tsx` | 검색창 |
| `ScrollToTopButton` | `src/components/ScrollToTopButton.tsx` | 상단으로 스크롤 버튼 |
| `LNB` | `src/components/LNB.tsx` | 하단 네비게이션 바 |
| `ScrapButton` | `src/components/ScrapButton.tsx` | 스크랩 버튼 |
| `Content1` + `Content1Slider` | `src/components/Content1.tsx` | 콘텐츠 1 + 슬라이더 |
| `Content2` + `Content2Slider` | `src/components/Content2.tsx` | 콘텐츠 2 + 슬라이더 |
| `Content3` + `Content3Slider` | `src/components/Content3.tsx` | 콘텐츠 3 + 슬라이더 |
| `Content4` + `Content4Slider` | `src/components/Content4.tsx` | 콘텐츠 4 + 슬라이더 |
| `Content5` + `Content5Slider` | `src/components/Content5.tsx` | 콘텐츠 5 + 슬라이더 |

---

## NavigationBar Spec

> `src/components/NavigationBar.tsx` — `"use client"` 필수

| 항목 | 값 |
|------|-----|
| 높이 | `56px` |
| 배경 | `#FFFFFF` |
| 너비 | `100%` (반응형) |

### 타입 3종

**home**
- 좌측: Babitalk 로고 (`#8841FA`)
- 우측: 검색 + 알림 아이콘, 간격 `16px`
- 좌우 패딩: `18px`

**back**
- 좌측: 뒤로가기 화살표 + 홈 아이콘 + 타이틀
- 타이틀: `18px` / Bold(700) / `#313142` / `Apple SD Gothic Neo`
- 우측: 아이콘 0~3개 자유 조합 (share, trash, more 중 선택), 간격 `16px`
- 좌우 패딩: `12px`

**title**
- 좌측: 타이틀 텍스트
- 타이틀: `21px` / Bold(700) / `#313142` / `Apple SD Gothic Neo`
- 우측: 아이콘 0~3개 자유 조합 (search, notification 중 선택), 간격 `16px`
- 좌우 패딩: `16px`

### 아이콘
| 항목 | 값 |
|------|-----|
| 색상 | `Icon/Common 7(600)` / `#7E7E8F` |
| 크기 | `24×24px` |
| 우측 아이콘 종류 | `search` / `notification` / `share` / `trash` / `more` |
| 우측 아이콘 개수 | 0~3개 자유 조합 |

---

## StatusBar Spec

> `src/components/StatusBar.tsx` — `"use client"` 필수

| 항목 | 값 |
|------|-----|
| 높이 | `50px` |
| 배경 | `#FFFFFF` |
| 좌측 패딩 | `24px` |
| 우측 패딩 | `16px` |
| 너비 | `100%` (반응형) |

### 시간
- 현재 시간 실시간 연동 (`HH:MM` 포맷, 24시간)
- Font: `SF Pro, Apple SD Gothic Neo, sans-serif` / 15px / weight 600 / color `#222227`

### 배터리 애니메이션
- 10분 주기로 100% → 1% 무한 반복
- 100%: `#00C27C` (초록)
- 99~20%: `#222227` (블랙)
- 19~1%: `#F82D3E` (빨강)
- 배터리 바디: 가로 `25px` / 세로 `14px` / 회색(`#B2B2B2`) 배경 위에 컬러 fill
- 숫자 텍스트: `12px` / weight 700 / 흰색

### 아이콘
- 신호 · 와이파이: Figma 원본 SVG path 사용 (fill `#222227`)
- 배터리 캡: `2×6px` / `#B2B2B2`

---

## HomeIndicator Spec

> `src/components/HomeIndicator.tsx`

| 항목 | 값 |
|------|-----|
| 높이 | `34px` |
| 배경 | `#FFFFFF` |
| 너비 | `100%` (반응형) |

### 검정 바
| 항목 | 값 |
|------|-----|
| 너비 | `134px` (고정) |
| 높이 | `5px` |
| 색상 | `#000000` |
| 모서리 | `200px` (pill) |
| 위치 | 수평 중앙, top `21px` |

---

## TabBar Spec

> `src/components/TabBar.tsx` — `"use client"` 필수

| 항목 | 값 |
|------|-----|
| 높이 | `60px` |
| 배경 | `#FFFFFF` |
| 너비 | `100%` (반응형) |
| 상단 구분선 | `1px` / `#ECECEF` |
| 좌우 패딩 | `16px` |
| 탭 간격 | `22px` |

### 각 탭 (Atom)
| 항목 | 값 |
|------|-----|
| 너비 | `52px` (고정) |
| 아이콘 크기 | `24×24px` |
| 아이콘-텍스트 간격 | `3px` |
| 텍스트 | `10px` / Bold(700) / `Apple SD Gothic Neo` |

### 색상 토큰
| 상태 | 토큰 | Hex |
|------|------|-----|
| 활성 (클릭) | `Label/Common 9(1000)` | `#313142` |
| 비활성 | `Label/Disabled` | `#C8C7CF` |

### 탭 구성 (좌→우)
| 순서 | ID | 라벨 |
|------|----|------|
| 1 | `home` | 홈 |
| 2 | `service` | 전체 서비스 |
| 3 | `community` | 커뮤니티 |
| 4 | `scrap` | 저장함 |
| 5 | `mybabitalk` | MY 바비톡 |

- 기본 활성 탭: `home`
- 아이콘: Figma 원본 SVG path 인라인 사용

---

## Icon Size Tokens

| Token | Value |
|-------|-------|
| `XSmall` | 12×12px |
| `Small` | 16×16px |
| `Medium` | 24×24px |
| `Large` | 32×32px |
| `XLarge` | 40×40px |

---

## Spacing Tokens

> Figma Components 파일(`Spacing` 프레임)에서 추출.

| Token | Value |
|-------|-------|
| `spacing-1` | 2px |
| `spacing-2` | 4px |
| `spacing-3` | 6px |
| `spacing-4` | 8px |
| `spacing-5` | 12px |
| `spacing-6` | 16px |
| `spacing-7` | 24px |
| `spacing-8` | 32px |
| `spacing-9` | 40px |
| `spacing-10` | 56px |
| `spacing-11` | 80px |
| `spacing-12` | 120px |

---

## Border Radius Tokens

> Figma Variables(`Radius` 컬렉션)에서 추출.

| Token | Value | 사용처 |
|-------|-------|--------|
| `ExtraLarge` | 20px | 전처처 |
| `Large` | 16px | 90T |
| `Medium` | 12px | 56~64T, 버튼 |
| `Small` | 8px | 48T |
| `ExtraSmall` | 4px | 24T |
| `Circle` | 200px | 원형 |

---

## Typography Tokens

> Figma Foundation 파일(`🔠 Typography` 페이지)에서 추출. AOS, JP 제외.
> KR 폰트: `Apple SD Gothic Neo` / EN 폰트: `SF Pro` (Header·Title), `SF Pro Display` (Body·Caption·Price)

### Header (KR · EN)

| Style | Size | Line Height | Bold | Medium | Regular |
|-------|------|-------------|------|--------|---------|
| Header 1 | 27px | 1.4em | w:700 | w:500 / EN:510 | w:400 |
| Header 2 | 24px | 1.5em | w:700 | w:500 / EN:510 | w:400 |
| Header 3 | 21px | 1.5em | w:700 | w:500 / EN:510 | w:400 |
| Header 4 | 19px | 1.5em | w:700 | w:500 / EN:510 | w:400 |

### Title (KR · EN)

| Style | Size | Line Height | Bold | Medium | Regular |
|-------|------|-------------|------|--------|---------|
| Title 1 | 16px | 1.5em | w:700 | w:500 / EN:510 | w:400 |
| Title 2 | 15px | 1.5em | w:700 | w:500 | w:400 |
| Title 3 | 14px | 1.5em | w:700 | w:500 | w:400 |
| Title 4 | 13px | 1.5em | w:700 | w:500 | w:400 |

### Body (iOS)

| Style | Size | Line Height | Bold | Medium | Regular |
|-------|------|-------------|------|--------|---------|
| Body 1 | 16px | 1.5em | w:700 | w:500 | w:400 |
| Body 2 | 14px | 1.5em | w:700 | w:500 | — |
| Body 3 | 13px | 1.5em | w:700 | w:500 | w:400 |
| Body 4 | 12px | 1.5em | w:700 | w:500 | w:400 |

### Caption (iOS)

| Style | Size | Line Height | Bold | Medium | Regular |
|-------|------|-------------|------|--------|---------|
| Caption 1 | 11px | 1.5em | w:700 | w:500 | — |
| Caption 2 | 10px | 1.5em | w:700 | w:500 | w:400 |

### Price (iOS, SF Pro Display)

| Style | Size | Line Height | Bold | Medium | Regular |
|-------|------|-------------|------|--------|---------|
| Price 0 | 24px | 1.5em | w:700 | w:500 | — |
| Price 1 | 21px | 1.5em | w:700 | w:500 | w:400 |
| Price 2 | 19px | 1.5em | w:700 | w:500 | w:400 |
| Price 3 | 17px | 1.5em | w:700 | w:500 | w:400 |
| Price 4 | 15px | 1.5em | w:700 | w:500 | w:400 |
| Price 5 | 11px | 1.5em | w:700 | w:500 | w:400 |

---

## Design Tokens

> Figma Variables(`Color Scheme` 컬렉션)에서 추출한 시맨틱 색상 토큰입니다.
> 원본 파일: `Color Scheme/Value.tokens.json`

### Label

| Token | Hex |
|-------|-----|
| `Label/PlasticSurgury 1(400)` | `#D0CBFF` |
| `Label/PlasticSurgury 9(800)` | `#604AFF` |
| `Label/SkinTreatment 1(400)` | `#FFC3D8` |
| `Label/SkinTreatment 9(800)` | `#FF528D` |
| `Label/Community 1(400)` | `#93BFFE` |
| `Label/Community 9(800)` | `#0E70FD` |
| `Label/Common 1(White)` | `#FFFFFF` |
| `Label/Common 3(200)` | `#ECECEF` |
| `Label/Common 5(500)` | `#A3A3AF` |
| `Label/Common 7(600)` | `#7E7E8F` |
| `Label/Common 8(800)` | `#484760` |
| `Label/Common 9(1000)` | `#313142` |
| `Label/Disabled` | `#C8C7CF` |
| `Label/Error` | `#F82D3E` |
| `Label/Notification` | `#F82D3E` |

### Container

| Token | Hex |
|-------|-----|
| `Container/PlasticSurgury 1(200)` | `#F4F3FF` |
| `Container/PlasticSurgury 5(400)` | `#D0CBFF` |
| `Container/PlasticSurgury 9(700)` | `#7264FF` |
| `Container/SkinTreatment 1(200)` | `#FFF2F6` |
| `Container/SkinTreatment 5(400)` | `#FFC3D8` |
| `Container/SkinTreatment 9(700)` | `#FF6B9E` |
| `Container/Community 1(200)` | `#EEF5FF` |
| `Container/Community 5(400)` | `#93BFFE` |
| `Container/Community 9(700)` | `#277FFD` |
| `Container/Common 1(White)` | `#FFFFFF` |
| `Container/Common 3(100)` | `#F7F7F9` |
| `Container/Common 5(200)` | `#ECECEF` |
| `Container/Common 7(500)` | `#A3A3AF` |
| `Container/Common 9(1000)` | `#313142` |
| `Container/Disabled` | `#DADADF` |
| `Container/Error` | `#F82D3E` |
| `Container/Notification` | `#F82D3E` |
| `Container/Dimmed` | `#000000` 50% |

### Icon

| Token | Hex |
|-------|-----|
| `Icon/PlasticSurgury 1(400)` | `#D0CBFF` |
| `Icon/PlasticSurgury 9(800)` | `#604AFF` |
| `Icon/SkinTreatment 1(400)` | `#FFC3D8` |
| `Icon/SkinTreatment 9(800)` | `#FF528D` |
| `Icon/Community 1(400)` | `#93BFFE` |
| `Icon/Community 9(800)` | `#0E70FD` |
| `Icon/Common 1(White)` | `#FFFFFF` |
| `Icon/Common 3(200)` | `#ECECEF` |
| `Icon/Common 5(500)` | `#A3A3AF` |
| `Icon/Common 7(600)` | `#7E7E8F` |
| `Icon/Common 9(1000)` | `#313142` |
| `Icon/Disabled` | `#DADADF` |
| `Icon/Error` | `#F82D3E` |
| `Icon/Notification` | `#F82D3E` |

### Outline

| Token | Hex |
|-------|-----|
| `Outline/PlasticSurgury 1(200)` | `#F4F3FF` |
| `Outline/PlasticSurgury 5(400)` | `#D0CBFF` |
| `Outline/PlasticSurgury 9(800)` | `#604AFF` |
| `Outline/SkinTreatment 1(200)` | `#FFF2F6` |
| `Outline/SkinTreatment 5(200)` | `#FFC3D8` |
| `Outline/SkinTreatment 9(800)` | `#FF528D` |
| `Outline/Community 1(200)` | `#EEF5FF` |
| `Outline/Community 5(400)` | `#93BFFE` |
| `Outline/Community 9(800)` | `#0E70FD` |
| `Outline/Common 1(White)` | `#FFFFFF` |
| `Outline/Common 3(200)` | `#ECECEF` |
| `Outline/Common 5(600)` | `#7E7E8F` |
| `Outline/Common 7(800)` | `#484760` |
| `Outline/Common 9(1000)` | `#313142` |
| `Outline/Thumbnail` | `#000000` 3% |
| `Outline/Thumbnail 2` | `#000000` 7% |

### Divider

| Token | Hex |
|-------|-----|
| `Divider/Common 1(200)` | `#ECECEF` |
| `Divider/Common 3(Black 16%)` | `#000000` 15% |
| `Divider/Common 5(500)` | `#A3A3AF` |

### BG (Background)

| Token | Hex |
|-------|-----|
| `BG/PlasticSurgury 1(100)` | `#F8F8FF` |
| `BG/PlasticSurgury 9(700)` | `#7264FF` |
| `BG/SkinTreatment 1(100)` | `#FFF9FB` |
| `BG/SkinTreatment 9(700)` | `#FF6B9E` |
| `BG/Community 1(100)` | `#F6FAFF` |
| `BG/Community 9(700)` | `#277FFD` |
| `BG/Common 1(White)` | `#FFFFFF` |
| `BG/Common 3(100)` | `#F7F7F9` |
| `BG/Common 9(1000)` | `#313142` |

### Calendar

| Token | Hex |
|-------|-----|
| `Calender/Weekday` | `#313142` |
| `Calender/Sunday` | `#F82D3E` |
| `Calender/Holiday` | `#F82D3E` |
| `Calender/Saturday` | `#0E70FD` |
| `Calender/Active` | `#7264FF` |
| `Calender/Today 1` | `#FFFFFF` |
| `Calender/Today 2` | `#7264FF` |
