---
shared_work:
  - id: planning-co-create
    title: 需求共创与规划
    deliverable: docs/requirements/named-export-escapeStringRegexp.md
    completion: 共创草稿与正式需求文档已写入 docs/requirements/，目标、范围、完成条件与用户确认记录齐备
    effort: 0.5
    kind: planning
    depends_on: []
    expected_seconds: 300
    status: done
    self_check: '正式需求文档 docs/requirements/named-export-escapeStringRegexp.md（loom_kind: requirement，固定 id 5b9c1a72-3e4d-4f8a-9c6b-2d7e1a0f5c33）已写入，含目标、范围、完成条件与工作事实；.loom/version-plan.md 已由 loom_version_plan 校验写入（1 需求 + planning/validation 各 1 项）；用户已确认完整需求总结。'
  - id: version-validation
    title: 版本独立验收
    deliverable: 版本独立验收记录与结论
    completion: 基于固定提交核对：命名导出可用且与默认导出一致、默认导出行为不变、npm test 全部通过
    effort: 0.5
    kind: validation
    depends_on: []
    expected_seconds: 300
    status: done
    self_check: 版本独立验收已通过：version_check 3b0030ea-84da-594a-b35b-af422c6d7441（检查会话 4fec3b9f）对固定提交 6f94f9c6eeb762c0065fa4305c93c558ee8753aa 结论 pass——只读审阅 index.js/index.d.ts/test.js/index.test-d.ts/package.json/readme.md，候选副本在 $TMPDIR 实际执行 npm install && npm test（xo && ava && tsd）exit=0，ava 5/5（含「named export is the same function as the default export」「named export behaves identically to the default export」），ESM 动态导入 m.escapeStringRegexp === m.default 为 true，'a.$-b' → "a\\.\\$\\x2db"，非字符串抛 TypeError，默认导出行为无变化，未修改固定候选文件。此前主会话亦在同一提交导出副本上三次实际跑通 npm test（EXIT=0），提交内无 .npm-cache 路径。验收完成条件全部满足。
requirements:
  - requirement_id: 5b9c1a72-3e4d-4f8a-9c6b-2d7e1a0f5c33
    scope: 为包增加命名导出 escapeStringRegexp，保留默认导出且转义行为不变；同步更新 index.d.ts 与测试，npm test 通过。
    effort: 1
    expected_seconds: 900
---
# 版本计划

主 Agent 维护的公共工作与需求预算。
