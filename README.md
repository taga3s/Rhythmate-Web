# Rhythmate-Web

ゲーム感覚で習慣化を楽しむ「Rhythmate」のフロントエンドです。

## アプリ概要

「習慣化×ゲーム」をコンセプトとし、自分の設定したクエストを達成していくことで習慣化を図ることができるWebアプリケーションです。現在は、以下の機能を提供・改善しています。

- クエスト機能
- 週次レポート機能
- レベルアップ・報酬機能

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

![alt text](/public/docs/system-architecture.png)

## 環境構築

### 前提

1. npm モジュールをインストールする。

```
$ npm i
```

2. `.env.example`をコピーして`.env`配置する。

```
cp .env.example .env
```

### React を起動する。

```
$ npm run dev
```

### formatterをかける。

```
$ npm run format
```
