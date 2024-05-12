# Rhythmate-Web

ゲーム感覚で習慣化を楽しむ「Rhythmate」のフロントエンドです。  
バックエンドは[こちら](https://github.com/ayanami77/Rhythmate-Service)

## アプリ概要

#### 技育CAMPハッカソン2023 vol15努力賞受賞、技育博2024 vol2企業賞受賞

「習慣化×ゲーム」をコンセプトとし、自分の設定したクエストを達成していくことで習慣化を図ることができるWebアプリケーションです。モバイルファーストでUIの設計をしています。現在は、以下の機能を提供しています。

- クエスト機能
- 週次レポート機能
- レベルアップ・バッジ機能

## 技術スタック

- React
- TypeScript
- Tailwind CSS
- Tanstack Router
- Tanstack Query
- react-hook-form
- zod
- vite
- biome

## システム構成

![システム構成図](/docs/system-architecture.png)

## 環境構築

### 前提

1. パッケージ管理に`pnpm`を利用するので、有効化します。

```
$ corepack enable pnpm
```

2. `node_modules` をインストールする。

```
$ pnpm i
```

3. `.env.example`をコピーして`.env`配置する。

```
cp .env.example .env
```

### React を起動する。

```
$ pnpm run dev
```

### formatterをかける。

```
$ pnpm run format
```

### linterをかける。

```
$ pnpm run lint
```
