# Vertical Design MD：专业垂类 AI 设计规范

[English](README.md) · [规范](docs/specification.md) · [编写指南](docs/authoring-guide.zh-CN.md) · [发布清单](docs/publishing.md)

[![Quality](https://github.com/ReeCHECK/Vertical-Design-MD/actions/workflows/quality.yml/badge.svg)](https://github.com/ReeCHECK/Vertical-Design-MD/actions/workflows/quality.yml)
[![Pages](https://github.com/ReeCHECK/Vertical-Design-MD/actions/workflows/pages.yml/badge.svg)](https://reecheck.github.io/Vertical-Design-MD/)
[![License: MIT](https://img.shields.io/badge/License-MIT-0f766e.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-0.1.0-3157c8.svg)](CHANGELOG.md)

Vertical Design MD 是一套开放规范和参考设计包，用于帮助 AI 编程助手生成**理解专业业务语境的界面**。

**[浏览自动生成的设计包目录 →](https://reecheck.github.io/Vertical-Design-MD/)**

常见 AI 设计资料主要描述产品“应该长什么样”。专业软件还必须说明：业务对象是什么意思、谁能执行某项操作、流程如何流转，以及当数据缺失、过期、敏感或操作具有风险时应该怎么办。本项目把这些约束变成明确、可校验的设计上下文。

> `DESIGN.md` 负责视觉语言；Vertical Design Pack 进一步加入领域语义、流程、权限、风险控制、内容规则、异常状态和评测用例。

## 为什么需要它

从品牌网站提取的设计规范很适合提升 Landing Page、官网和原型的视觉一致性。但在交易终端、医疗工作台、企业运营后台等场景中，一个界面即使“看上去很专业”，也可能在业务上完全错误。

Vertical Design MD 将设计组织方式从：

```text
品牌 → 风格 → 组件
```

扩展为：

```text
行业 → 角色 → 任务 → 风险 → 状态 → 交互 → 视觉表达
```

项目受到 [Awesome DESIGN.md](https://github.com/VoltAgent/awesome-design-md) 和 [Google Stitch DESIGN.md](https://stitch.withgoogle.com/docs/design-md/overview/) 启发，但这里的参考包都是原创、品牌中立的领域样板，不包含第三方 Logo、专有字体或复制的品牌素材。

## 项目包含什么

- 带版本的设计包清单和 JSON Schema。
- 视觉、业务领域、流程、状态、权限、合规和内容规范的分层契约。
- 三套参考设计包：
  - `fintech-trading`：订单录入、持仓、行情新鲜度和高风险确认。
  - `healthcare-workstation`：患者上下文、用药安全、敏感信息和临床交接。
  - `enterprise-operations`：任务队列、审批、批量操作、SLA 和角色权限。
- 零依赖校验器。
- 静态可视化目录生成器。
- 可直接用于 GitHub Actions 的质量检查。
- 可复制的模板和按场景编写的评测用例。

## 快速开始

需要 Node.js 20 或更高版本。

```bash
npm test
```

命令完成后，打开 `site/index.html` 即可查看自动生成的设计包目录。

## 如何让 AI 使用设计包

1. 从 `packs/` 复制一个设计包到你的产品仓库。
2. 让 AI 先读取 `manifest.json`，再读取 `required_documents` 列出的全部文件。
3. 明确告诉 AI 当前用户角色、业务场景、设备和验收要求。
4. 要求它实现该场景的全部状态，而不只是正常状态。

推荐提示词：

```text
读取 packs/fintech-trading/manifest.json，以及 required_documents 中列出的全部文档。

为 trader 角色设计桌面端下单工作台。必须实现正常、加载、行情过期、
校验失败、权限不足和提交结果未知状态。优先复用现有组件。COMPLIANCE.md
中的规则是硬约束，DESIGN.md 是视觉契约。生成代码前先列出尚未解决的业务假设。
```

## 设计包结构

```text
packs/<pack-id>/
├── manifest.json       # 身份、范围、来源、覆盖度和文件映射
├── tokens.json         # 机器可读的视觉与语义令牌
├── DESIGN.md           # 视觉语言和组件行为
├── DOMAIN.md           # 角色、对象、术语、单位和不变量
├── FLOWS.md            # 流程、状态转换和前置条件
├── STATES.md           # 空、加载、过期、离线和错误状态
├── PERMISSIONS.md      # 权限、可见性和拒绝行为
├── COMPLIANCE.md       # 安全、隐私、审计和确认规则
├── CONTENT.md          # 术语、数字、日期与单位格式
├── patterns/           # 可复用的专业交互模式
└── evals/              # 基于场景的验收用例
```

## 核心原则

1. **安全优先于风格。** 领域、权限和合规约束高于视觉偏好。
2. **状态是一等公民。** 未定义加载、空、错误、过期、部分成功和权限拒绝的组件是不完整的。
3. **记录证据，不冒充官方。** 每项推断应记录来源和可信度。
4. **默认品牌中立。** 学习结构和节奏，不复制商标和专有资产。
5. **仍然需要人工审核。** 设计包可以提效，但不能替代法律、医疗、金融、安全和无障碍专家审核。

## 创建自己的垂类设计包

复制 `templates/vertical-pack` 到 `packs/<你的设计包ID>`，替换全部 `TODO`，然后运行：

```bash
npm run validate
npm run build:preview
```

质量要求见[中文编写指南](docs/authoring-guide.zh-CN.md)，文件契约见[规范](docs/specification.md)。

## 路线图

- [x] v1 规范和清单 Schema
- [x] 校验器和预览目录
- [x] 三套专业垂类样板
- [x] 场景评测格式
- [ ] CSS Variables、Tailwind 和 Figma Variables 适配器
- [ ] 视觉回归截图
- [ ] 社区设计包注册表和质量评分
- [ ] 领域专家审核徽章

## 责任边界

本仓库是设计与工程辅助工具，不构成专业建议。设计包可能不完整或存在错误。受监管产品上线前必须经过合格的领域、法律、安全、隐私和无障碍专家审核。

## 参与贡献

请阅读 [CONTRIBUTING.md](CONTRIBUTING.md) 和[社区行为准则](CODE_OF_CONDUCT.md)。贡献应提升可复用的领域知识，标注来源，并增加或更新至少一个评测用例。尚未成形的新垂类想法可先在 [Discussions](https://github.com/ReeCHECK/Vertical-Design-MD/discussions) 中讨论。

## 许可证

[MIT](LICENSE)。文档中提到的第三方产品归各自权利人所有。
