import {
  Code2, Cloud, PenTool, LifeBuoy, Laptop, Smartphone, Cable, LayoutGrid,
  FileText, Layers, Mouse, Package,
} from 'lucide-react'

export const services = [
  {
    id: 'web',
    icon: Code2,
    title: 'Web platforms & applications',
    summary: 'Marketing sites, customer portals and internal tools built on a modern, maintainable stack.',
    points: ['React, Next.js and TypeScript front ends', 'Node.js and REST / GraphQL APIs', 'Headless CMS and e-commerce integrations', 'Accessibility to WCAG 2.2 AA'],
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud & DevOps engineering',
    summary: 'Infrastructure that is repeatable, observable and sensibly priced, on AWS, Azure or Google Cloud.',
    points: ['Infrastructure as code (Terraform)', 'CI/CD pipelines and automated testing', 'Monitoring, logging and alerting', 'Cost reviews and right-sizing'],
  },
  {
    id: 'product',
    icon: PenTool,
    title: 'Product & UX design',
    summary: 'From first workshop to clickable prototype: we shape the product before a line of code is written.',
    points: ['Discovery workshops and user research', 'Information architecture and flows', 'Interactive prototypes in Figma', 'Design systems and component libraries'],
  },
  {
    id: 'support',
    icon: LifeBuoy,
    title: 'Maintenance & support',
    summary: 'Monthly retainers that keep your platform patched, fast and secure after launch.',
    points: ['Dependency and security updates', 'Performance and uptime monitoring', 'Small feature requests and fixes', 'Clear monthly reporting'],
  },
]

export const process = [
  { step: '01', title: 'Discover', desc: 'A short paid discovery to agree goals, scope, risks and a realistic budget.' },
  { step: '02', title: 'Design',   desc: 'Flows and prototypes you can click through and sign off before build starts.' },
  { step: '03', title: 'Build',    desc: 'Fortnightly releases to a staging site so you can see progress as it happens.' },
  { step: '04', title: 'Support',  desc: 'Launch, handover documentation and an optional support retainer.' },
]

export const stack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'AWS', 'Azure', 'Docker', 'Terraform', 'GitHub Actions', 'Figma']

export const productCategories = ['All', 'Desk', 'Mobile', 'Cables', 'Digital']

export const products = [
  { id: 1,  name: 'Aluminium Laptop Stand',          category: 'Desk',    price: '£39.00', icon: Laptop,     tone: 'from-[#2A2350] to-[#131926]', desc: 'Anodised aluminium, six height positions, folds flat. Fits 11–16″ laptops.' },
  { id: 2,  name: 'Merino Felt Desk Mat — 90 × 40 cm', category: 'Desk',  price: '£29.00', icon: LayoutGrid, tone: 'from-[#1F2A3A] to-[#131926]', desc: 'Dense merino wool felt with a non-slip natural rubber base. Charcoal or slate.' },
  { id: 3,  name: 'Silent Wireless Mouse',           category: 'Desk',    price: '£24.00', icon: Mouse,      tone: 'from-[#27203F] to-[#131926]', desc: 'Low-noise switches, USB-C rechargeable, Bluetooth and 2.4 GHz dual mode.' },
  { id: 4,  name: 'Laptop Sleeve 14″',               category: 'Desk',    price: '£32.00', icon: Package,    tone: 'from-[#1C2B33] to-[#131926]', desc: 'Water-resistant recycled shell, soft-lined, with a front accessory pocket.' },
  { id: 5,  name: 'MagSafe Clear Case — iPhone 15 / 16', category: 'Mobile', price: '£19.00', icon: Smartphone, tone: 'from-[#2A2350] to-[#131926]', desc: 'Anti-yellowing polycarbonate with a built-in magnetic ring and raised camera lip.' },
  { id: 6,  name: 'Slim Case — Galaxy S24 / S25',     category: 'Mobile',  price: '£17.00', icon: Smartphone, tone: 'from-[#1F2A3A] to-[#131926]', desc: 'Matte TPU frame with shock-absorbing corners and precise button covers.' },
  { id: 7,  name: 'Braided USB-C Cable 2 m (100 W)',  category: 'Cables',  price: '£14.00', icon: Cable,      tone: 'from-[#1C2B33] to-[#131926]', desc: 'Nylon-braided, 100 W power delivery and 480 Mbps data.' },
  { id: 8,  name: 'Magnetic Cable Organiser (3-pack)', category: 'Cables', price: '£9.00',  icon: Cable,      tone: 'from-[#27203F] to-[#131926]', desc: 'Silicone clips with a weighted magnetic base to keep cables tidy on the desk.' },
  { id: 9,  name: 'Product Launch Checklist',        category: 'Digital', price: '£12.00', icon: FileText,   tone: 'from-[#2A2350] to-[#131926]', desc: 'A pre-launch checklist covering performance, SEO, accessibility, legal. PDF + Notion.' },
  { id: 10, name: 'Wireframe UI Kit for Figma',      category: 'Digital', price: '£24.00', icon: Layers,     tone: 'from-[#1F2A3A] to-[#131926]', desc: '180+ low-fidelity components and 30 page templates for quick product sketches.' },
  { id: 11, name: 'Project Brief Template',          category: 'Digital', price: '£8.00',  icon: FileText,   tone: 'from-[#1C2B33] to-[#131926]', desc: 'A structured brief for commissioning a website or app. Word, Google Docs and PDF.' },
  { id: 12, name: 'Developer Handover Pack',         category: 'Digital', price: '£15.00', icon: Layers,     tone: 'from-[#27203F] to-[#131926]', desc: 'README, runbook and architecture-decision templates for handing over a codebase.' },
]
