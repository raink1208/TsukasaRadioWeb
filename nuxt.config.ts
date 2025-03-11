// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: ['@nuxtjs/sitemap', '@nuxt/content', '@nuxt/icon'],
    site: {
        url: 'radio.tsukasa-kingdom.net'
    },
    css: [
        'ress/ress.css',
        "@/assets/style/reset.css",
    ],
    app: {
        head: {
            link: [
                { rel: 'icon', type: 'image/png', href: '/favicon.png' },
            ]
        }
    },
    content: {
        renderer: {
            anchorLinks: {
                h1: false,
                h2: false,
                h3: false,
                h4: false,
                h5: false,
                h6: false,
            }
        }
    }
})