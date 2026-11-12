---
loom_kind: requirement
id: 5b9c1a72-3e4d-4f8a-9c6b-2d7e1a0f5c33
title: 增加 escapeStringRegexp 命名导出
work_items:
  - id: wi-1
    title: 实现命名导出 escapeStringRegexp 并同步声明、测试与 README
    deliverable: index.js / index.d.ts / test.js（及必要的 readme.md 补充）
    completion: index.js/index.d.ts/test.js 改动完成，npm install && npm test（xo && ava && tsd）全部通过，README 视需要补充命名导出示例
    effort: 1
    depends_on: []
    status: done
    self_check: 1) index.js 仅追加 export {escapeStringRegexp}，默认导出与转义正则零改动（cat 核对）；2) npm test 实际运行通过：xo + tsd 无报错，ava 5/5 通过（含「named export is the same function as the default export」「named export behaves identically to the default export」）；3) index.d.ts / index.test-d.ts 同步命名导出与默认导出声明与类型；4) README 已补命名导出示例；5) 环境事实：本机仅 Node 24，原锁定的 xo 0.38/ava 3/tsd 0.14 依赖已移除的 util.isDate 无法运行，故升级 devDependencies 至 ava 8.4/tsd 0.33/xo 5.0.1 并按新版 xo 规范化 package.json，源码行为未变。沙箱限制：git index 写操作（commit/reset）被文件沙箱拒绝，提交由 Loom 同步机制负责，工作区改动齐备。
---
# 增加 escapeStringRegexp 命名导出

## 目标
在保持现有默认导出与转义行为完全不变的前提下，为包增加同名命名导出 `escapeStringRegexp`，让用户可以用 `import { escapeStringRegexp } from 'escape-string-regexp'` 的方式使用。

## 范围
- `index.js`：保留现有默认导出，新增命名导出 `escapeStringRegexp`（与默认导出指向同一函数，行为一致）。
- `index.d.ts`：同步声明命名导出与默认导出。
- `test.js`：新增测试覆盖命名导出的可用性与行为一致性；现有测试保持通过。
- 实现时核对 README 用法示例是否需要补充命名导出用法。

## 完成条件
- `import escapeStringRegexp from './index.js'` 与 `import { escapeStringRegexp } from './index.js'` 均可用，且为同一函数、行为一致。
- 现有全部测试通过，新增命名导出测试通过，`npm test`（xo && ava && tsd）通过。
- 默认导出及转义行为无任何变化。

## 工作事实
- 当前阶段：需求共创
- 已完成：目标与范围已由用户确认（2026-11-12，命名导出 + 保持默认导出与行为 + 更新声明和测试）
- 阻碍：无
- 剩余工作：待确认后分派实现
- 事实来源：仓库 index.js / index.d.ts / test.js / package.json 现状阅读
