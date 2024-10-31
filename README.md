# Rhythmate-Web

ゲーム感覚で習慣化を楽しめるサービス**Rhythmate**のフロントエンドです。  
バックエンドのリポジトリは [https://github.com/taga3s/Rhythmate-Service](https://github.com/taga3s/Rhythmate-Service) へ。

<img src="docs/images/Rhythmate_-_.png" width="500"/>

## アプリ概要

「習慣化×ゲーム」をコンセプトとし、自分の設定したクエストを達成していくことで習慣化を図ることができるWebアプリケーションです。モバイルファーストでUIの設計をしています。現在は、機能を提供しています。

- クエスト機能
- 週次レポート機能
- ユーザ―レベルアップ機能
- バッジ収集機能

## 実績
- 技育CAMPハッカソン2023 vol15努力賞受賞
- 技育博2024 vol2企業賞受賞

## 主な技術スタック

- 言語
  - TypeScript

- フレームワーク・ライブラリ
  - React
  - Tailwind CSS
  - Tanstack Router
  - Tanstack Query
  - react-hook-form
  - zod

- ツール
  - biome

- PaaS
  - Vercel

- その他
  - git submodule

## システム構成

![システム構成図](/docs/images/system-architecture.png)

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

3. `.env.example`をコピーして`.env`配置する。（値は管理人に尋ねること。）

```
cp .env.example .env
```

4. git submoduleと連携する。また、特定のディレクトリやファイルのみを取得したい場合は、`sparse-checkout`の設定を行ってください。（[参考](https://leico.github.io/TechnicalNote/Git/sparse-checkout-submodule)）
```
$ git submodule update --init
```

### Reactを起動する。

```
$ pnpm run dev
```

### Formatterをかける。

```
$ pnpm run format
```

### Linterをかける。

```
$ pnpm run lint
```
