// ─────────────────────────────────────────────────────────────
// ~/vincent/profile — tree-driven IDE-style portfolio
// ─────────────────────────────────────────────────────────────

const FILES = [
  { path: 'about/README.md', kind: 'about-readme' },
  { path: 'about/contact.txt', kind: 'about-contact' },

  { path: 'skills/languages.ts', kind: 'skill', skillKey: 'languages' },
  { path: 'skills/frameworks.ts', kind: 'skill', skillKey: 'frameworksLibraries' },
  { path: 'skills/cloud.tf', kind: 'skill', skillKey: 'cloudDevOps' },
  { path: 'skills/databases.sql', kind: 'skill', skillKey: 'databases' },
  { path: 'skills/web3.sol', kind: 'skill', skillKey: 'web3' },
  { path: 'skills/observability.yaml', kind: 'skill', skillKey: 'observability' },
  { path: 'skills/tools.txt', kind: 'skill', skillKey: 'tools' },

  { path: 'experience/aim-intelligence/_summary.md', kind: 'company', co: 'AIM Intelligence' },
  { path: 'experience/aim-intelligence/starfort.ts', kind: 'project', co: 'AIM Intelligence', idx: 0 },
  { path: 'experience/aim-intelligence/bastion-guardian.ts', kind: 'project', co: 'AIM Intelligence', idx: 1 },

  { path: 'experience/waifu-sweeper/_summary.md', kind: 'company', co: 'Waifu Sweeper' },
  { path: 'experience/waifu-sweeper/wallet-auth.ts', kind: 'project', co: 'Waifu Sweeper', idx: 0 },
  { path: 'experience/waifu-sweeper/payment-verify.ts', kind: 'project', co: 'Waifu Sweeper', idx: 1 },
  { path: 'experience/waifu-sweeper/distributed-lock.sql', kind: 'project', co: 'Waifu Sweeper', idx: 2 },
  { path: 'experience/waifu-sweeper/ygg-partner.ts', kind: 'project', co: 'Waifu Sweeper', idx: 3 },
  { path: 'experience/waifu-sweeper/terraform.tf', kind: 'project', co: 'Waifu Sweeper', idx: 4 },

  { path: 'experience/gomble/_summary.md', kind: 'company', co: 'Gomble' },
  { path: 'experience/gomble/squad.ts', kind: 'project', co: 'Gomble', idx: 0 },
  { path: 'experience/gomble/minigame-server.ts', kind: 'project', co: 'Gomble', idx: 1 },
  { path: 'experience/gomble/tge-server.ts', kind: 'project', co: 'Gomble', idx: 2 },
  { path: 'experience/gomble/builders.ts', kind: 'project', co: 'Gomble', idx: 3 },
  { path: 'experience/gomble/mew-survivor.ts', kind: 'project', co: 'Gomble', idx: 4 },

  { path: 'experience/catzelabs/_summary.md', kind: 'company', co: 'CatzeLabs' },
  { path: 'experience/catzelabs/yooldo.ts', kind: 'project', co: 'CatzeLabs', idx: 0 },
  { path: 'experience/catzelabs/backoffice.ts', kind: 'project', co: 'CatzeLabs', idx: 1 },
  { path: 'experience/catzelabs/nest-logger.ts', kind: 'project', co: 'CatzeLabs', idx: 2 },
  { path: 'experience/catzelabs/nest-crypto.ts', kind: 'project', co: 'CatzeLabs', idx: 3 },
  { path: 'experience/catzelabs/r3plica.ts', kind: 'project', co: 'CatzeLabs', idx: 4 },
  { path: 'experience/catzelabs/aptoplay.ts', kind: 'project', co: 'CatzeLabs', idx: 5 },
  { path: 'experience/catzelabs/kup.ts', kind: 'project', co: 'CatzeLabs', idx: 6 },
  { path: 'experience/catzelabs/alice-bot.ts', kind: 'project', co: 'CatzeLabs', idx: 7 },
  { path: 'experience/catzelabs/trouble-punk.ts', kind: 'project', co: 'CatzeLabs', idx: 8 },
  { path: 'experience/catzelabs/brickgirls.ts', kind: 'project', co: 'CatzeLabs', idx: 9 },

  { path: 'experience/vsquare/_summary.md', kind: 'company', co: 'VSQUARE' },
  { path: 'experience/vsquare/multi-project.java', kind: 'project', co: 'VSQUARE', idx: 0 },
  { path: 'experience/vsquare/highlights.java', kind: 'project', co: 'VSQUARE', idx: 1 },

  { path: 'projects/coagent.md', kind: 'personal', idx: 0 },
  { path: 'projects/moonshine.md', kind: 'personal', idx: 1 },
  { path: 'projects/zettelkasten-cli.md', kind: 'personal', idx: 2 },

  { path: 'awards.log', kind: 'awards' },
  { path: 'licenses.cert', kind: 'licenses' },
  { path: 'education.edu', kind: 'education' },
]

const DEFAULT_PATH = 'about/README.md'
const ROOT_LABEL = '~/vincent/profile'
const LANG_MAP = {
  md: 'markdown',
  ts: 'typescript',
  js: 'javascript',
  sql: 'sql',
  tf: 'terraform',
  sol: 'solidity',
  yaml: 'yaml',
  java: 'java',
  txt: 'text',
  log: 'log',
  cert: 'certificate',
  edu: 'document',
  json: 'json',
}

const LOCALES = {
  en: {
    introduction: 'Introduction',
    tools: 'Tools',
    projects: 'Projects',
    period: 'period',
    role: 'role',
    proj_count: 'projects',
    features: 'Features',
    stack: 'Stack',
    contact_info: 'contact info',
    awards_log: 'hackathon log',
    licenses_certs: 'licenses & certifications',
    education_record: 'education record',
    school: 'school',
    degree: 'degree',
    title: 'title',
    status: 'status',
    verified: 'verified',
    rows: 'rows',
    row: 'row',
    entries: 'entries',
    entry: 'entry',
    skill_languages: 'Languages',
    skill_frameworksLibraries: 'Frameworks & Libraries',
    skill_cloudDevOps: 'Cloud & DevOps',
    skill_databases: 'Databases',
    skill_web3: 'Web3',
    skill_observability: 'Observability',
    skill_tools: 'Tools',
    win: 'WIN',
  },
  ko: {
    introduction: '소개',
    tools: '도구',
    projects: '프로젝트',
    period: '기간',
    role: '역할',
    proj_count: '프로젝트',
    features: '주요 기능',
    stack: '기술 스택',
    contact_info: '연락처',
    awards_log: '해커톤 로그',
    licenses_certs: '자격증 & 수료증',
    education_record: '학력',
    school: '학교',
    degree: '학위',
    title: '명칭',
    status: '상태',
    verified: '인증됨',
    rows: '건',
    row: '건',
    entries: '건',
    entry: '건',
    skill_languages: '사용 언어',
    skill_frameworksLibraries: '프레임워크 & 라이브러리',
    skill_cloudDevOps: '클라우드 & DevOps',
    skill_databases: '데이터베이스',
    skill_web3: 'Web3',
    skill_observability: '옵저버빌리티',
    skill_tools: '도구',
    win: '수상',
  },
}

const PROFILE_FILE = { en: 'profile.json', ko: 'profile.ko.json' }
const LANG_KEY = 'profile.lang'

let profileData = null
let activePath = null
let currentLang = detectLang()

function detectLang() {
  const stored = localStorage.getItem(LANG_KEY)
  if (stored && LOCALES[stored]) return stored
  return (navigator.language || 'en').toLowerCase().startsWith('ko') ? 'ko' : 'en'
}

function s(key) {
  return LOCALES[currentLang]?.[key] ?? LOCALES.en[key] ?? key
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadProfile()
  buildTree()
  initLangToggle()

  const initial = location.hash.slice(1)
  const target = FILES.some((f) => f.path === initial) ? initial : DEFAULT_PATH
  navigateTo(target, { replace: true })

  window.addEventListener('hashchange', () => {
    const path = location.hash.slice(1) || DEFAULT_PATH
    if (path !== activePath) navigateTo(path)
  })
})

async function loadProfile() {
  try {
    const res = await fetch(PROFILE_FILE[currentLang] || PROFILE_FILE.en)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    profileData = await res.json()
  } catch (err) {
    if (currentLang !== 'en') {
      currentLang = 'en'
      return loadProfile()
    }
    document.getElementById('content').innerHTML =
      `<div class="file-tab">error</div><div class="file-body"><p class="dim">// failed to load profile data — ${esc(err.message)}</p></div>`
    profileData = null
  }
}

function initLangToggle() {
  document.documentElement.lang = currentLang
  const buttons = document.querySelectorAll('.sb-lang-btn')
  buttons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang)
    btn.addEventListener('click', async () => {
      const nextLang = btn.dataset.lang
      if (nextLang === currentLang) return
      currentLang = nextLang
      localStorage.setItem(LANG_KEY, currentLang)
      document.documentElement.lang = currentLang
      buttons.forEach((b) => b.classList.toggle('active', b.dataset.lang === currentLang))
      await loadProfile()
      if (activePath) {
        const file = FILES.find((f) => f.path === activePath)
        if (file) renderContent(file)
      }
    })
  })
}

// ──────────── Navigation ────────────
function navigateTo(path, { replace = false } = {}) {
  const file = FILES.find((f) => f.path === path)
  if (!file) {
    location.hash = DEFAULT_PATH
    return
  }
  activePath = path
  if (replace) {
    history.replaceState(null, '', `#${path}`)
  } else if (location.hash.slice(1) !== path) {
    location.hash = path
  }
  renderContent(file)
  updateTreeActive()
  updateStatusBar(path)
}

// ──────────── Tree ────────────
function buildTree() {
  const root = { name: ROOT_LABEL, type: 'dir', children: [], path: '' }
  for (const f of FILES) {
    const parts = f.path.split('/')
    let cur = root
    for (let i = 0; i < parts.length - 1; i++) {
      let next = cur.children.find((c) => c.name === parts[i] && c.type === 'dir')
      if (!next) {
        next = {
          name: parts[i],
          type: 'dir',
          children: [],
          path: parts.slice(0, i + 1).join('/'),
        }
        cur.children.push(next)
      }
      cur = next
    }
    cur.children.push({
      name: parts[parts.length - 1],
      type: 'file',
      path: f.path,
    })
  }

  const treeEl = document.getElementById('tree')
  treeEl.innerHTML = ''

  // Root line
  const rootLine = document.createElement('div')
  rootLine.className = 'tree-line dir root'
  rootLine.innerHTML = `<span class="name">${esc(root.name)}</span>`
  treeEl.appendChild(rootLine)

  renderTreeChildren(root.children, '', treeEl)

  const dirs = countByType(root, 'dir')
  const files = countByType(root, 'file')
  document.getElementById('treeSummary').textContent = `${dirs} directories, ${files} files`
}

function renderTreeChildren(children, prefix, container) {
  children.forEach((child, i) => {
    const isLast = i === children.length - 1
    const branch = isLast ? '└── ' : '├── '
    const cont = isLast ? '    ' : '│   '
    const summaryPath = `${child.path}/_summary.md`
    const hasSummary = child.type === 'dir' && FILES.some((f) => f.path === summaryPath)
    const clickable = child.type === 'file' || hasSummary

    const targetPath = child.type === 'file' ? child.path : hasSummary ? summaryPath : null

    const line = document.createElement(clickable ? 'button' : 'div')
    line.className = `tree-line ${child.type}${clickable ? ' clickable' : ''}`
    if (targetPath) {
      line.setAttribute('data-target', targetPath)
      line.addEventListener('click', () => navigateTo(targetPath))
    }
    const label = child.type === 'dir' ? `${child.name}/` : child.name
    line.innerHTML = `<span class="prefix">${prefix}${branch}</span><span class="name">${esc(label)}</span>`
    container.appendChild(line)

    if (child.type === 'dir' && child.children.length) {
      renderTreeChildren(child.children, prefix + cont, container)
    }
  })
}

function countByType(node, type) {
  let c = 0
  if (node.children) {
    for (const ch of node.children) {
      if (ch.type === type) c++
      if (ch.children) c += countByType(ch, type)
    }
  }
  return c
}

function updateTreeActive() {
  document.querySelectorAll('.tree-line').forEach((el) => {
    el.classList.toggle('active', el.getAttribute('data-target') === activePath)
  })
}

// ──────────── Status bar ────────────
function updateStatusBar(path) {
  const ext = path.split('.').pop()
  document.getElementById('sbFile').textContent = path
  document.getElementById('sbInfo').textContent = LANG_MAP[ext] || ext
}

// ──────────── Content render ────────────
function renderContent(file) {
  const main = document.getElementById('content')
  let body
  switch (file.kind) {
    case 'about-readme':
      body = renderAboutReadme()
      break
    case 'about-contact':
      body = renderAboutContact()
      break
    case 'skill':
      body = renderSkill(file)
      break
    case 'company':
      body = renderCompany(file)
      break
    case 'project':
      body = renderProject(file)
      break
    case 'personal':
      body = renderPersonal(file)
      break
    case 'awards':
      body = renderAwards()
      break
    case 'licenses':
      body = renderLicenses()
      break
    case 'education':
      body = renderEducation()
      break
    default:
      body = `<p class="dim">// empty</p>`
  }

  main.innerHTML = `
    <div class="file-tab"><span class="dot"></span><span class="lineno">●</span>${esc(file.path)}</div>
    <div class="file-body">${body}</div>
  `
  main.scrollTop = 0
}

// ──────────── Renderers ────────────
function renderAboutReadme() {
  const b = profileData.basicInfo
  return `
    <h1><span class="hash">#</span>${esc(b.name)}<span class="cursor"></span></h1>
    <p class="dim">${esc(b.title)}</p>
    <blockquote>${esc(b.tagline)}</blockquote>
    <h2><span class="hash">##</span>${esc(s('introduction'))}</h2>
    <p>${esc(b.introduction)}</p>
  `
}

function renderAboutContact() {
  const c = profileData.contact
  const sl = profileData.socialLinks
  const rows = [
    ['email', `<a href="mailto:${esc(c.email)}">${esc(c.email)}</a>`],
    ['location', esc(c.location)],
    ['homepage', linkOut(sl.homepage)],
    ['github', linkOut(sl.github)],
    ['linkedin', linkOut(sl.linkedin)],
    ['devto', linkOut(sl.devto)],
    ['x', linkOut(sl.x)],
  ]
  const maxKey = Math.max(...rows.map(([k]) => k.length))
  const lines = rows
    .map(([k, v]) => `<span class="label">${esc(k.padEnd(maxKey))}</span> <span class="punct">:</span> ${v}`)
    .join('\n')
  return `<pre class="code"><span class="com"># ${esc(s('contact_info'))}</span>\n\n${lines}</pre>`
}

function linkOut(url) {
  return `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(url)}</a>`
}

function renderSkill(file) {
  const items = profileData.skills[file.skillKey] || []
  const ext = file.path.split('.').pop()
  const name = file.path.split('/').pop().split('.')[0]
  const label = s('skill_' + file.skillKey) || cap(name)

  switch (ext) {
    case 'ts':
      return code(`<span class="com">// ${esc(label)}</span>
<span class="kw">export const</span> <span class="val">${name}</span> <span class="punct">=</span> [
${items.map((i) => `  <span class="str">'${esc(i)}'</span><span class="punct">,</span>`).join('\n')}
] <span class="kw">as const</span>`)
    case 'tf':
      return code(`<span class="com"># ${esc(label)}</span>
<span class="kw">resource</span> <span class="str">"skills"</span> <span class="str">"cloud"</span> {
${items.map((i, idx) => `  stack[${idx}] <span class="punct">=</span> <span class="str">"${esc(i)}"</span>`).join('\n')}
}`)
    case 'sql':
      return code(`<span class="com">-- ${esc(label)}</span>
<span class="kw">SELECT</span> <span class="val">name</span>
<span class="kw">FROM</span>   skills.databases<span class="punct">;</span>

${items.map((i) => ` <span class="str">${esc(i)}</span>`).join('\n')}

<span class="com">-- ${items.length} ${esc(items.length === 1 ? s('row') : s('rows'))}</span>`)
    case 'sol':
      return code(`<span class="com">// SPDX-License-Identifier: MIT</span>
<span class="com">// ${esc(label)}</span>
<span class="kw">pragma solidity</span> ^0.8.20<span class="punct">;</span>

<span class="kw">contract</span> <span class="val">Web3Skills</span> {
${items.map((i, idx) => `  <span class="kw">string</span> <span class="kw">public</span> stack${idx} <span class="punct">=</span> <span class="str">"${esc(i)}"</span><span class="punct">;</span>`).join('\n')}
}`)
    case 'yaml':
      return code(`<span class="com"># ${esc(label)}</span>
<span class="label">${name}</span><span class="punct">:</span>
${items.map((i) => `  <span class="punct">-</span> <span class="str">${esc(i)}</span>`).join('\n')}`)
    case 'txt':
    default:
      return code(`<span class="com"># ${esc(label)}</span>

${items.map((i) => `  ${esc(i)}`).join('\n')}`)
  }
}

function renderCompany(file) {
  const co = profileData.workProjects[file.co]
  if (!co) return `<p class="dim">// no data</p>`
  const career = (profileData.career || []).find((c) =>
    c.company.startsWith(file.co) || file.co.startsWith(c.company.split(' ')[0])
  )
  const position = career?.position || ''

  return `
    <h1><span class="hash">#</span>${esc(file.co)}</h1>
    <dl class="kv">
      <dt>${esc(s('period'))}</dt><dd>${esc(co.period)}</dd>
      ${position ? `<dt>${esc(s('role'))}</dt><dd>${esc(position)}</dd>` : ''}
      <dt>${esc(s('proj_count'))}</dt><dd>${co.projects.length}</dd>
    </dl>
    <p>${esc(co.summary)}</p>
    ${
      co.tools
        ? `
    <h2><span class="hash">##</span>${esc(s('tools'))}</h2>
    <dl class="kv">
      ${Object.entries(co.tools)
        .map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v.join(', '))}</dd>`)
        .join('')}
    </dl>`
        : ''
    }
    <h2><span class="hash">##</span>${esc(s('projects'))}</h2>
    <ul>
      ${co.projects.map((p) => `<li>${esc(p.name)}</li>`).join('')}
    </ul>
  `
}

function renderProject(file) {
  const co = profileData.workProjects[file.co]
  const p = co?.projects[file.idx]
  if (!p) return `<p class="dim">// no data</p>`

  const ext = file.path.split('.').pop()
  const sentences = String(p.description)
    .split(/\.\s+(?=[A-Z])/)
    .map((s, i, arr) => (i === arr.length - 1 ? s : s + '.'))

  if (ext === 'sql') {
    return code(`<span class="com">/*
 * ${esc(p.name)}
 * ${esc(p.role || '')}${p.url ? ` · <span class="str">${esc(p.url)}</span>` : ''}
 */</span>

<span class="kw">SELECT</span> *
<span class="kw">FROM</span>   problems
<span class="kw">WHERE</span>  solved <span class="punct">=</span> <span class="str">'true'</span><span class="punct">;</span>

${sentences.map((s) => `<span class="com">-- ${esc(s)}</span>`).join('\n')}

<span class="com">-- stack</span>
${(p.techStack || []).map((t) => `<span class="com">--   · ${esc(t)}</span>`).join('\n')}`)
  }

  if (ext === 'tf') {
    return code(`<span class="com"># ${esc(p.name)}</span>
<span class="com"># ${esc(p.role || '')}</span>

<span class="kw">resource</span> <span class="str">"project"</span> <span class="str">"${slug(p.name)}"</span> {
  <span class="label">name</span>        <span class="punct">=</span> <span class="str">"${esc(p.name)}"</span>
  <span class="label">role</span>        <span class="punct">=</span> <span class="str">"${esc(p.role || '')}"</span>${p.url ? `\n  <span class="label">url</span>         <span class="punct">=</span> <span class="str">"${esc(p.url)}"</span>` : ''}
  <span class="label">description</span> <span class="punct">=</span> <span class="str">&lt;&lt;-EOT
${sentences.map((s) => `    ${esc(s)}`).join('\n')}
  EOT</span>
  <span class="label">stack</span>       <span class="punct">=</span> [${(p.techStack || []).map((t) => `<span class="str">"${esc(t)}"</span>`).join(', ')}]
}`)
  }

  if (ext === 'java') {
    return code(`<span class="com">/**
 * ${esc(p.name)}
 * @role ${esc(p.role || '')}
 */</span>
<span class="kw">public class</span> <span class="val">${slugClass(p.name)}</span> {
  <span class="kw">String</span> role <span class="punct">=</span> <span class="str">"${esc(p.role || '')}"</span><span class="punct">;</span>
  <span class="kw">String</span>[] stack <span class="punct">=</span> {${(p.techStack || []).map((t) => `<span class="str">"${esc(t)}"</span>`).join(', ')}}<span class="punct">;</span>

  <span class="com">/* description */</span>
${sentences.map((s) => `  <span class="com">// ${esc(s)}</span>`).join('\n')}
}`)
  }

  // default ts
  return code(`<span class="com">/**
 * ${esc(p.name)}
 *
 * @role     ${esc(p.role || '')}
 * @company  ${esc(file.co)}${p.url ? `\n * @url      <span class="str">${esc(p.url)}</span>` : ''}
 */</span>

<span class="kw">export const</span> <span class="val">project</span> <span class="punct">=</span> {
  <span class="label">name</span><span class="punct">:</span> <span class="str">'${esc(p.name)}'</span><span class="punct">,</span>
  <span class="label">role</span><span class="punct">:</span> <span class="str">'${esc(p.role || '')}'</span><span class="punct">,</span>${p.url ? `\n  <span class="label">url</span><span class="punct">:</span>  <span class="str">'${esc(p.url)}'</span><span class="punct">,</span>` : ''}

  <span class="label">description</span><span class="punct">:</span> <span class="str">\`
${sentences.map((s) => `    ${esc(s)}`).join('\n')}
  \`</span><span class="punct">,</span>

  <span class="label">techStack</span><span class="punct">:</span> [
${(p.techStack || []).map((t) => `    <span class="str">'${esc(t)}'</span><span class="punct">,</span>`).join('\n')}
  ] <span class="kw">as const</span><span class="punct">,</span>
} <span class="kw">satisfies</span> <span class="val">Project</span>`)
}

function renderPersonal(file) {
  const p = profileData.personalProjects[file.idx]
  if (!p) return `<p class="dim">// no data</p>`
  return `
    <h1><span class="hash">#</span>${esc(p.name)}</h1>
    <p class="dim">${esc(p.period || '')}</p>
    ${p.url ? `<p>${linkOut(p.url)}</p>` : ''}
    <p>${esc(p.description)}</p>
    ${
      p.features?.length
        ? `<h2><span class="hash">##</span>${esc(s('features'))}</h2>
           <ul>${p.features.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>`
        : ''
    }
    ${
      p.techStack?.length
        ? `<h2><span class="hash">##</span>${esc(s('stack'))}</h2>
           <div class="tags">${p.techStack.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>`
        : ''
    }
  `
}

function renderAwards() {
  const items = profileData.awards || []
  const win = s('win')
  const maxRank = Math.max(...items.map((a) => a.rank.length))
  const maxTitle = Math.max(...items.map((a) => a.title.length))
  const lines = items
    .map((a) => {
      const rank = a.rank.padEnd(maxRank)
      const title = a.title.padEnd(maxTitle)
      return `<span class="kw">[${esc(win)} ${esc(rank)}]</span> ${esc(title)} <span class="punct">→</span> <span class="str">${esc(a.project || '-')}</span>`
    })
    .join('\n')
  const entryLabel = items.length === 1 ? s('entry') : s('entries')
  return code(`<span class="com"># ${esc(s('awards_log'))} — ${items.length} ${esc(entryLabel)}</span>\n\n${lines}`)
}

function renderLicenses() {
  const items = profileData.licenses || []
  const titleKey = s('title')
  const statusKey = s('status')
  const verifiedVal = s('verified')
  const maxKeyLen = Math.max(titleKey.length, statusKey.length)
  const lines = items
    .map(
      (l) => `<span class="kw">─── CERT</span> ──────────────────────────────
<span class="label">${esc(titleKey.padEnd(maxKeyLen))}</span>  <span class="punct">:</span> <span class="str">${esc(l)}</span>
<span class="label">${esc(statusKey.padEnd(maxKeyLen))}</span>  <span class="punct">:</span> <span class="val">${esc(verifiedVal)}</span>`
    )
    .join('\n\n')
  return code(`<span class="com"># ${esc(s('licenses_certs'))}</span>\n\n${lines}`)
}

function renderEducation() {
  const e = profileData.education || {}
  const schoolKey = s('school')
  const degreeKey = s('degree')
  const periodKey = s('period')
  const maxKeyLen = Math.max(schoolKey.length, degreeKey.length, periodKey.length)
  return code(`<span class="com"># ${esc(s('education_record'))}</span>

<span class="label">${esc(schoolKey.padEnd(maxKeyLen))}</span>  <span class="punct">:</span> <span class="str">${esc(e.school || '')}</span>
<span class="label">${esc(degreeKey.padEnd(maxKeyLen))}</span>  <span class="punct">:</span> <span class="str">${esc(e.degree || '')}</span>
<span class="label">${esc(periodKey.padEnd(maxKeyLen))}</span>  <span class="punct">:</span> <span class="val">${esc(e.period || '')}</span>`)
}

// ──────────── helpers ────────────
function code(inner) {
  return `<pre class="code">${inner}</pre>`
}
function esc(s) {
  if (s == null) return ''
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}
function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}
function slug(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '')
}
function slugClass(s) {
  return String(s)
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('')
}
