import SecurityIcon from '@mui/icons-material/Security';
import MemoryIcon from '@mui/icons-material/Memory';
import MergeTypeIcon from '@mui/icons-material/MergeType';


export const valueProps = [
    {
        icon: <MemoryIcon/>,
        title: 'Efficiency',
        text: "Reimplementing timers, UARTs, and IPIs for every new SoC is inefficient. Zephyr already supports hundreds of boards; OpenSBI must duplicate that effort."
    },

    {
        icon: <SecurityIcon/>,
        title: 'Accurate',
        text: 'Zephyr’s devicetree + Kconfig flow unifies platform descriptions.'
    },

    {
        icon: <SecurityIcon/>,
        title: 'Privilege separation',
        text: 'Clean M/S/U-mode design with delegated traps and strict isolation via PMP.'
    },

    {
        icon: <MemoryIcon/>,
        title: 'Memory protection',
        text: 'Configurable per-thread/partition regions; negative tests in CI.'
    },

    {   icon: <MergeTypeIcon/>,
        title: 'Upstream-first',
        text: 'RFCs, reviews, tests, docs — no long-lived forks.'
    },

];