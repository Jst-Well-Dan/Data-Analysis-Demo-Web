// 共享 Tailwind 配置 - 由 index.html / dashboard.html / report.html 共同引用
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
                serif: ['Noto Serif SC', 'STSong', 'serif'],
                mono: ['JetBrains Mono', 'Consolas', 'monospace']
            },
            colors: {
                brand: {
                    navy: '#1C3461',
                    blue: '#2B4E9E',
                    mid: '#3D6BC4',
                    light: '#6B96D8',
                    pale: '#C8DAEF',
                    tint: '#EBF2FB'
                },
                slate: {
                    900: '#1A2233',
                    800: '#2A364E',
                    700: '#3D4E68',
                    600: '#546682',
                    500: '#6B7A96',
                    400: '#92A0B7',
                    300: '#B8C2D4',
                    200: '#D5DFED',
                    100: '#EEF1F6',
                    50:  '#F7F9FC'
                }
            }
        }
    }
};
