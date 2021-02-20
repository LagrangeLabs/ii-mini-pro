# TARO 多端项目模版

> 目前只适用于H5端及微信小程序

## 基础信息

### 版本
- Taro v3.0.17 [官方地址][https://taro-docs.jd.com/taro/docs/README/index.html]
- Taro-ui 3.0.0-alpha.2[官方地址][https://taro-ui.jd.com/#/docs/introduction]
- typescript 3.7.0

### 目录结构

```
|-- myProject  
    |-- .editorconfig
    |-- .eslintrc
    |-- .gitignore
    |-- .npmrc
    |-- README.md
    |-- babel.config.js
    |-- global.d.ts
    |-- package-lock.json
    |-- package.json
    |-- project.config.json
    |-- tsconfig.json
    |-- yarn.lock
    |-- config
    |   |-- dev.js
    |   |-- index.js
    |   |-- prod.js
    |-- dist
    |-- src
        |-- app.config.ts
        |-- app.scss
        |-- app.tsx
        |-- index.html
        |-- asset
        |   |-- images
        |   |-- styles
        |       |-- base.scss
        |       |-- mixin.scss
        |-- components
        |-- hooks
        |   |-- useGenereateDispatch.ts
        |-- models
        |   |-- example.ts
        |   |-- index.ts
        |-- pages
        |   |-- example
        |       |-- index.config.ts
        |       |-- index.module.scss
        |       |-- index.tsx
        |       |-- useDispatch.ts
        |-- subPages
        |   |-- example
        |       |-- index.config.ts
        |       |-- index.module.scss
        |       |-- index.tsx
        |-- utils
            |-- dva.ts
```
