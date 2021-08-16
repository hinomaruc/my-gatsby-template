---
title: gatsby-starter-blogを元に自分用のブログを作成した手順のまとめ
date: "2021-08-01T16:30:00"
description: "ブログ作成のためサンプルプロジェクトを改良した手順のまとめ"
tags: [GatsbyJS]
---

デフォルトのままでも十分ブログの作成できますが、
自分好みのテンプレートを作成していきます。

色々調べながら下記項目を追加していこうと思います。

1. Markdownを読み込めるようにする
1. タイトルや日付フォーマットなどを自分のサイト向けに変更
1. ヘッダーがないので追加
1. 固定ページの作成
1. 記事にタグを付与できるようにする
1. 付与したタグ一覧を閲覧できるようにする
1. サイトロゴ作成と追加
1. 目次の追加(できればH1タグのリスト表示とか)
1. ウィンドウサイズによってアコーディオンメニューへ変化させたい
1. Googleアナリティクスの設定
1. Googleアドセンスの設定
1. HTTPS化
1. 公開した記事の日付と更新した記事の日付を自動で付与
1. CUSTOM BLOCKの追加 ([[INFO]] や [[WARNING]]などが追加できるように)
1. Webにホスト

## packages

"gatsby": "^3.10.2",

"gatsby-plugin-feed": "^3.10.0",
  Create an RSS feed (or multiple feeds) for your Gatsby site.

"gatsby-plugin-google-analytics": "^3.10.0",
  Easily add Google Analytics to your Gatsby site

"gatsby-plugin-image": "^1.11.0",
  Adding responsive images to your site while maintaining high performance scores can be difficult to do manually

"gatsby-plugin-manifest": "^3.10.0",
  The web app manifest (part of the PWA specification) enabled by this plugin allows users to add your site to their home screen on most mobile browsers

"gatsby-plugin-offline": "^4.10.0",
  Adds drop-in support for making a Gatsby site work offline and more resistant to bad network connections. It uses Workbox Build to create a service worker for the site and loads the service worker into the client

"gatsby-plugin-react-helmet": "^4.10.0",
  Provides drop-in support for server rendering data added with React Helmet.
  React Helmet is a component which lets you control your document head using their React component.
  With this plugin, attributes you add in their component, e.g. title, meta attributes, etc. will get added to the static HTML pages Gatsby builds.

"gatsby-plugin-sharp": "^3.11.0",
  Exposes several image processing functions built on the Sharp image processing

"gatsby-remark-copy-linked-files": "^4.7.0",
  Copies local files linked to/from Markdown (.md|.markdown) files to the root directory (i.e., public folder)

"gatsby-remark-images": "^5.7.0",
  Processes images in markdown so they can be used in the production build


"gatsby-remark-prismjs": "^5.7.0",
  Adds syntax highlighting to code blocks in markdown files using PrismJS.

"gatsby-remark-responsive-iframe": "^4.7.0",
  Wraps iframes or objects (e.g. embedded YouTube videos) within markdown files in a responsive elastic container with a fixed aspect ratio.

"gatsby-remark-smartypants": "^4.7.0",
  Replaces “dumb” punctuation marks with “smart” punctuation marks using the retext-smartypants plugin.


"gatsby-source-filesystem": "^3.11.0",
  A Gatsby source plugin for sourcing data into your Gatsby application from your local filesystem

"gatsby-transformer-remark": "^4.7.0",
  Parses Markdown files using Remark.

"gatsby-transformer-sharp": "^3.11.0",
  Creates ImageSharp nodes from image types that are supported by the Sharp image processing library and provides fields in their GraphQL types for processing your images in a variety of ways including resizing, cropping, and creating responsive images.

"prismjs": "^1.24.1",

"react": "^17.0.1",

"react-dom": "^17.0.1",

"react-helmet": "^6.1.0",

"typeface-merriweather": "0.0.72",

"typeface-montserrat": "0.0.75"

"gatsby-remark-custom-blocks": "^3.11.0",
