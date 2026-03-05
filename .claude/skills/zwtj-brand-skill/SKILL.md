---
name: zwtj-brand-skill
description: 应用「知微探界」企业视觉规范，为任何 HTML、React、报告、图表、演示文稿等输出物统一配色、字体与组件风格。
---

# 知微探界 · 企业视觉设计规范 (zwtj-brand-skill)

## 概述

本 skill 定义了公司对外宣传物料的完整视觉体系，包括**配色、字体、组件样式、可视化调色板**。应用于 HTML 页面、React 组件、数据报告、图表输出、演示文稿等所有场景。

---

## 一、配色体系 Color System

### 1.1 品牌主色调（Primary Blue Scale）

| Token 名称      | Hex       | RGB            | 使用场景                         |
|----------------|-----------|----------------|----------------------------------|
| `brand-navy`   | `#1C3461` | 28, 52, 97     | 主标题、表头背景、深色 Hero 区块  |
| `brand-blue`   | `#2B4E9E` | 43, 78, 158    | **核心强调色**、主按钮、关键数字  |
| `brand-mid`    | `#3D6BC4` | 61, 107, 196   | 链接文字、次级按钮、图表主色      |
| `brand-light`  | `#6B96D8` | 107, 150, 216  | 图标填充、辅助信息、图表第二色    |
| `brand-pale`   | `#C8DAEF` | 200, 218, 239  | 卡片边框、分割线、选中态描边      |
| `brand-tint`   | `#EBF2FB` | 235, 242, 251  | 卡片底色、表格斑马行、标签背景    |

### 1.2 中性色（Neutral Scale）

| Token        | Hex       | 使用场景               |
|-------------|-----------|------------------------|
| `n-900`     | `#1A2233` | 正文主色               |
| `n-700`     | `#3D4E68` | 副文本、说明文字       |
| `n-500`     | `#6B7A96` | 辅助文字、图表标注     |
| `n-300`     | `#B8C2D4` | 分割线                 |
| `n-100`     | `#EEF1F6` | 浅灰背景               |
| `n-50`      | `#F7F9FC` | 页面主背景             |
| `white`     | `#FFFFFF` | 卡片背景               |

### 1.3 功能色（Semantic Colors）

| 用途    | 深色       | 浅背景色   | 使用场景           |
|--------|-----------|------------|-------------------|
| 正向   | `#1E7A4E` | `#E6F4ED` | 盈利、增长、正向指标 |
| 警示   | `#A85C00` | `#FEF3E2` | 待优化、风险提示   |
| 危险   | `#B02A2A` | `#FDEAEA` | 亏损、错误、高优先警告 |

### 1.4 CSS 变量模板

在任何 HTML/CSS 输出中，优先在 `:root` 中声明以下变量：

```css
:root {
  --brand-navy:   #1C3461;
  --brand-blue:   #2B4E9E;
  --brand-mid:    #3D6BC4;
  --brand-light:  #6B96D8;
  --brand-pale:   #C8DAEF;
  --brand-tint:   #EBF2FB;
  --n900: #1A2233; --n700: #3D4E68; --n500: #6B7A96;
  --n300: #B8C2D4; --n100: #EEF1F6; --n50:  #F7F9FC;
  --white: #FFFFFF;
  --success: #1E7A4E; --success-bg: #E6F4ED;
  --warning: #A85C00; --warning-bg: #FEF3E2;
  --danger:  #B02A2A; --danger-bg:  #FDEAEA;
}
```

---

## 二、字体规范 Typography

### 2.1 字体优先级

| 用途   | 首选字体         | Fallback 栈                                              |
|-------|-----------------|----------------------------------------------------------|
| 标题   | Noto Serif SC   | Source Han Serif SC → STSong → SimSun → serif           |
| 正文   | Noto Sans SC    | PingFang SC → Hiragino Sans GB → Microsoft YaHei → sans-serif |
| 数字/代码 | JetBrains Mono | SF Mono → Consolas → monospace                         |

### 2.2 字体级别

| 级别           | 字体     | 大小  | 字重    | 行高 | 使用场景                  |
|--------------|---------|------|--------|-----|--------------------------|
| Display 大标题 | 宋体     | 34px | 700    | 1.2 | 封面、首屏大标题           |
| H1 一级标题    | 宋体     | 24px | 700    | 1.3 | 章节主标题                |
| H2 二级标题    | 黑体     | 18px | 700    | 1.4 | 小节标题、卡片主标         |
| H3 三级标题    | 黑体     | 15px | 600    | 1.5 | 列表标题、表格列头说明     |
| Body 正文      | 黑体     | 14px | 400    | 1.7 | 报告正文、分析说明         |
| Caption 注释   | 黑体     | 12px | 400    | 1.6 | 图注、数据来源             |
| Mono 等宽      | JetBrains | 13px | 400  | —   | 数值、色值、代码片段       |

### 2.3 CSS 字体变量

```css
:root {
  --font-heading: 'Noto Serif SC', 'STSong', serif;
  --font-body:    'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  --font-mono:    'JetBrains Mono', 'Consolas', monospace;
}
```

Google Fonts 引入方式：
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&family=Noto+Serif+SC:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

## 三、可视化图表配色 Data Visualization Palette

### 3.1 分类序列（8色，多系列图表）

```
C1  #2B4E9E  品牌主蓝   → 第一系列，最高优先级
C2  #1E7A4E  深绿       → 第二系列，正向数据
C3  #B45309  琥珀橙     → 第三系列，警示数据
C4  #6B96D8  柔和蓝     → 第四系列，辅助对比
C5  #5E9E76  中绿       → 第五系列
C6  #D4853A  暖橙       → 第六系列
C7  #9B5EBF  紫色       → 第七系列，特殊分类
C8  #E05252  警示红     → 第八系列，负向/危险
```

**精简4色首选**（简洁图表优先用这四个）：
```
#2B4E9E  主色
#1E7A4E  正向
#B45309  警示
#6B7A96  中性
```

### 3.2 顺序渐变（单变量强度）

| 系列   | 颜色区间                              | 适用             |
|-------|--------------------------------------|-----------------|
| 蓝色   | `#EBF2FB` → `#1C3461`               | 通用强度图        |
| 绿色   | `#E6F4ED` → `#145235`               | 正向指标         |
| 橙色   | `#FEF3E2` → `#7A3800`               | 预警指标         |
| 灰色   | `#F7F9FC` → `#1A2233`               | 背景层/次要数据  |

### 3.3 差异渐变（双极对比）

- **蓝—橙**：`#1C3461` ←→ `#EBF2FB` ←→ `#7A3800`（对比两系列）
- **红—绿**：`#B02A2A` ←→ `#F5F5F5` ←→ `#145235`（亏损 ↔ 盈利）

### 3.4 代码配置示例（ECharts）

```javascript
const brandColors = ['#2B4E9E','#1E7A4E','#B45309','#6B96D8','#5E9E76','#D4853A','#9B5EBF','#E05252'];

// 应用到 ECharts option
option = {
  color: brandColors,
  // ... 其他配置
};
```

---

## 四、组件规范 Components

### 4.1 按钮

```css
/* 主按钮 */
.btn-primary   { background: #2B4E9E; color: #FFFFFF; }
/* 次级按钮 */
.btn-secondary { background: #EBF2FB; color: #2B4E9E; }
/* 描边按钮 */
.btn-outline   { background: transparent; color: #2B4E9E; border: 1.5px solid #C8DAEF; }
/* 通用样式 */
.btn { padding: 8px 18px; border-radius: 4px; font-size: 13px; font-weight: 500; }
```

### 4.2 标签 Tag

```css
.tag-blue    { background: #EBF2FB; color: #2B4E9E; }
.tag-success { background: #E6F4ED; color: #1E7A4E; }
.tag-warning { background: #FEF3E2; color: #A85C00; }
.tag-danger  { background: #FDEAEA; color: #B02A2A; }
.tag { padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 500; }
```

### 4.3 数据表格

- **表头**：背景 `#1C3461`，文字 `#FFFFFF`，字重 500
- **斑马行**：偶数行背景 `#EBF2FB`
- **正向数值**：颜色 `#1E7A4E`，字重 600
- **负向数值**：颜色 `#B02A2A`，字重 600

```css
table thead tr  { background: #1C3461; }
table thead th  { color: #FFFFFF; font-weight: 500; padding: 10px 16px; }
table tbody td  { padding: 10px 16px; border-bottom: 1px solid #EEF1F6; }
table tbody tr:nth-child(even) td { background: #EBF2FB; }
.positive { color: #1E7A4E; font-weight: 600; }
.negative { color: #B02A2A; font-weight: 600; }
```

### 4.4 提示框 Callout

```css
.callout { padding: 12px 16px; border-radius: 8px; border-left: 3px solid; font-size: 13px; }
.callout-blue    { background: #EBF2FB; border-color: #2B4E9E; color: #1C3461; }
.callout-success { background: #E6F4ED; border-color: #1E7A4E; color: #1E7A4E; }
.callout-warning { background: #FEF3E2; border-color: #A85C00; color: #A85C00; }
.callout-danger  { background: #FDEAEA; border-color: #B02A2A; color: #B02A2A; }
```

---

## 五、设计原则 Design Principles

**✅ 应该这样做：**
- 白底搭配品牌蓝 `#2B4E9E` 强调关键信息
- 标题使用宋体字体，正文使用黑体
- 数据正/负方向分别用绿色 / 红色功能色
- 图表颜色按分类序列顺序使用（C1 → C2 → C3…）
- 深色背景（`#1C3461`）仅限封面 Hero 区和表头

**❌ 避免这样做：**
- 不要在正文区使用深色背景
- 不要随意混用品牌蓝与其他鲜艳颜色
- 不要将红色用于非警告/亏损场景
- 不要在单张图表中使用超过5种颜色
- 不要在正式材料中使用 Arial / 微软雅黑以外的系统字体

---

## 六、快速上手模板

每次生成 HTML 报告或数据页面，使用以下头部模板：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&family=Noto+Serif+SC:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
:root {
  --brand-navy: #1C3461; --brand-blue: #2B4E9E; --brand-mid: #3D6BC4;
  --brand-light: #6B96D8; --brand-pale: #C8DAEF; --brand-tint: #EBF2FB;
  --n900: #1A2233; --n700: #3D4E68; --n500: #6B7A96;
  --n300: #B8C2D4; --n100: #EEF1F6; --n50: #F7F9FC; --white: #FFFFFF;
  --success: #1E7A4E; --success-bg: #E6F4ED;
  --warning: #A85C00; --warning-bg: #FEF3E2;
  --danger: #B02A2A;  --danger-bg: #FDEAEA;
  --font-heading: 'Noto Serif SC','STSong',serif;
  --font-body: 'Noto Sans SC','PingFang SC','Microsoft YaHei',sans-serif;
  --font-mono: 'JetBrains Mono','Consolas',monospace;
}
body { font-family: var(--font-body); background: var(--n50); color: var(--n900); }
</style>
</head>
```
