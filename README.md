# Secure RISC-V Zephyr — Website (React + MUI)


## Quickstart


```bash
npm create vite@latest secure-riscv-zephyr-site -- --template react
cd secure-riscv-zephyr-site
# replace files with this repository layout
npm i
npm run dev
```


## Content editing
- Update text via files in `src/data/` (no JSX edits needed).
- Add sections by creating a new page in `src/pages/` and linking it in `NAV` in `App.jsx`.
- The design system lives in `src/theme.js` (colors, radius, typography).