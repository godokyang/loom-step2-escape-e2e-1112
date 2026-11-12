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
requirements:
  - requirement_id: 5b9c1a72-3e4d-4f8a-9c6b-2d7e1a0f5c33
    scope: 为包增加命名导出 escapeStringRegexp，保留默认导出且转义行为不变；同步更新 index.d.ts 与测试，npm test 通过。
    effort: 1
    expected_seconds: 900
---
# 版本计划

主 Agent 维护的公共工作与需求预算。
