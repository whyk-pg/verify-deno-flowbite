# Verify Deno + Vite + Flowbite React
<!-- ![Status: ToDo](https://flat.badgen.net/static/Status/ToDo/red) -->
![Status: In Progress](https://flat.badgen.net/static/Status/In%20Progress/yellow)
<!-- ![Status: Done](https://flat.badgen.net/static/Status/Done/green) -->

## 本リポジトリの目的
DenoでViteとFlowbite Reactを使ったシンプルなアプリケーションを構築したいため

## 本リポジトリの達成目標
- [x] 内容をDeno公式の`react-vite-ts-template`に書き換え
- [x] serverを削除して`@std/http/file-server`に置き換え
- [x] TailwindCSSを適用
- [ ] Flowbite Reactを適用

### Deno環境でのflowbite-reactセットアップ方法
1. 手動で`package.json`を作成（`flowbite-react`のCLIは`package.json`がないとエラーになるため）
2. `pnpm i tailwindcss`を実行して`package.json`に追加（`flowbite-react`のCLIはTailwindの依存関係がないとエラーになるため）
3. `npx flowbite-react@latest init`を実行
4. `package.json`やNode.js側のlockファイルを削除、`deno.lock`も一旦削除
5. `deno add npm:flowbite-react`を実行

### 上記のセットアップ手順で導入してみたら起動時エラーになる
以下のエラーが発生する
```
Task start deno task build && deno task serve
Task build deno run -A --node-modules-dir=auto npm:vite build
failed to load config from /home/windchime-yk/dev/playground/verify-deno-flowbite/vite.config.ts
error during build:
TypeError: [ERR_PACKAGE_PATH_NOT_EXPORTED] Package subpath './version.js' is not defined by "exports" in '/home/windchime-yk/dev/playground/verify-deno-flowbite/node_modules/.deno/tailwindcss@4.1.3/node_modules/tailwindcss/package.json' imported from 'file:///home/windchime-yk/dev/playground/verify-deno-flowbite/node_modules/.deno/flowbite-react@0.11.7/node_modules/flowbite-react/dist/helpers/get-tailwind-version.js'
    at async loadConfigFromBundledFile (file:///home/windchime-yk/dev/playground/verify-deno-flowbite/node_modules/.deno/vite@5.4.11/node_modules/vite/dist/node/chunks/dep-CB_7IfJ-.js:66691:15)
    at async loadConfigFromFile (file:///home/windchime-yk/dev/playground/verify-deno-flowbite/node_modules/.deno/vite@5.4.11/node_modules/vite/dist/node/chunks/dep-CB_7IfJ-.js:66532:24)
    at async resolveConfig (file:///home/windchime-yk/dev/playground/verify-deno-flowbite/node_modules/.deno/vite@5.4.11/node_modules/vite/dist/node/chunks/dep-CB_7IfJ-.js:66140:24)
    at async build (file:///home/windchime-yk/dev/playground/verify-deno-flowbite/node_modules/.deno/vite@5.4.11/node_modules/vite/dist/node/chunks/dep-CB_7IfJ-.js:65237:18)
    at async CAC.<anonymous> (file:///home/windchime-yk/dev/playground/verify-deno-flowbite/node_modules/.deno/vite@5.4.11/node_modules/vite/dist/node/cli.js:828:5)
```

## 参考資料
- [denoland/react-vite-ts-template: A starter React app with a Vite dev server and TypeScript](https://github.com/denoland/react-vite-ts-template)
- [Deno + Vite + Reactがサクッと動くしデプロイも簡単（2025.2） #JavaScript - Qiita](https://qiita.com/access3151fq/items/e8e8c8522842080de297)
- [Deploy a React app with Vite](https://docs.deno.com/deploy/tutorials/vite/)
- [Build an app with Tanstack and Deno](https://docs.deno.com/examples/tanstack_tutorial/)
- [Use with Vite - Flowbite React](https://flowbite-react.com/docs/guides/vite)
