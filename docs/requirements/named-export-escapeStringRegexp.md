---
loom_kind: requirement
id: 5b9c1a72-3e4d-4f8a-9c6b-2d7e1a0f5c33
title: 增加 escapeStringRegexp 命名导出
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
