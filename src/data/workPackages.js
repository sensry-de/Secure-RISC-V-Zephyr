export const workPackages = [
    {
        id: 'wp1', title: 'WP1 — Analysis & Architecture', hours: 210, bullets: [
            'Gap analysis (arch/riscv, traps, context switch, riscv_pmp)',
            'Design doc: M/S/U roles, MIDELEG/MEDELEG, OpenSBI path',
            'Threat model (STRIDE) and security requirements',
        ]
    },
    {
        id: 'wp2', title: 'WP2 — Kernel Extension (Secure Mode)', hours: 650, bullets: [
            'M-mode monitor, secure trap routing, ePMP setup',
            'Context switch enabling U-mode tasks; safe boot hand-off',
            'Generic PMP API and integration in Zephyr start-up',
        ]
    },
    {
        id: 'wp3', title: 'WP3 — Security Tests & CI', hours: 390, bullets: [
            'Negative tests (illegal access, trap injection)',
            'Twister integration (QEMU/renode + hardware)',
            'Coverage & sanitizers, reports and dashboards',
        ]
    },
    {
        id: 'wp4', title: 'WP4 — Reference Platforms', hours: 325, bullets: [
            'MCU (no MMU), 64-bit SoC (OpenSBI), QEMU/renode',
            'Board-layer updates (DTS, defconfig, linker)',
            'Automated hardware tests & benchmarks',
        ]
    },
    {
        id: 'wp5', title: 'WP5 — Documentation & Guidelines', hours: 260, bullets: [
            'Security/Porting guides (Sphinx/ReST)',
            'Checklists and architecture diagrams',
            'Two upstream PRs (code + tests) prepared',
        ]
    },
    {
        id: 'wp6', title: 'WP6 — Dissemination & Sustainability', hours: 250, bullets: [
            'Long-term maintenance (rebases, CVE backports)',
            'Secure profile (Kconfig) and roadmap',
            'Talks/blogs (Zephyr Dev Summit/FOSDEM)',
        ]
    },
];