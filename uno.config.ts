import {
    defineConfig,
    presetTypography,
    presetAttributify,
    presetIcons,
    presetWebFonts,
    presetUno,
    transformerDirectives
} from 'unocss'

export default defineConfig({
    shortcuts: {
        'border-base': 'border-gray-200 dark:border-gray-800',
        'bg-active': 'bg-gray:dex10',
        'link-active': 'text-[#00DB82]',
        'bg-base': 'bg-white dark:bg-[#020420]',
        'border-style': 'dark:border-[#1E293B] border-[#F1F5F9]',
    },
    presets: [
        presetUno(),
        presetIcons(),
        presetAttributify(),
        presetWebFonts({
            provider: 'bunny',
            fonts: {
                'sans': 'DM Sans',
                'mono': 'DM Mono'
            }
        }),
        presetTypography()
    ],
    transformers: [
        transformerDirectives()
    ]
})
