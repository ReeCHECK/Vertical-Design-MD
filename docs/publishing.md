# Publishing Checklist / 发布清单

## Before the first push / 首次推送前

1. Confirm that manifest provenance URLs point to the canonical repository.
2. Update the copyright holder in `LICENSE` if ownership changes.
3. Keep the private security contact in GitHub repository settings current.
4. Run `npm test` and inspect `site/index.html`.
5. Ask at least one domain expert to review each high- or critical-risk reference pack.

首次推送前，请确认清单文件指向正式仓库；按需修改许可证版权人；在 GitHub 仓库设置中配置私密安全联系方式；运行 `npm test` 并检查预览；高风险和关键风险设计包至少邀请一位领域专家审核。

## Suggested repository setup / 推荐仓库设置

- Default branch: `main`
- Require the `Quality / validate` check before merge.
- Enable dependency alerts and secret scanning where available.
- Enable GitHub Discussions for pack proposals and use Issues for defects.
- Protect releases with signed tags if the registry later distributes trusted packs.

建议使用 `main` 作为默认分支，合并前必须通过质量检查，并开启依赖告警、密钥扫描和分支保护。新垂类提案可放在 Discussions，明确缺陷放在 Issues。

## First release / 首个版本

Publish `v0.1.0` as a framework preview. Describe the three packs as reference material rather than certified production standards. Link both README files and list known boundaries: no framework adapters, no visual regression, and no domain-expert certification badge yet.
