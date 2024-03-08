import i18n from './config/i18n';

const path = require('path');
const {MARKET_URL, BASE_URL} = require('./config/app');

const plugins = [
    '~/plugins/extends',
];
const clientPlugins = [
    '~/plugins/filter',
    '~/plugins/axios',
    '~/plugins/vue-use',
    "~plugins/nuxt-quill-plugin",
];
clientPlugins.forEach((src) => {
    plugins.push({
        src,
        ssr: false
    });
});

if(process.env.MOCK){
    const mockArray = process.env.MOCK.split(',');
    console.log('Mock === ', mockArray);
    mockArray.forEach((mock) => {
        plugins.push({
            src: `~/mock/${mock}`,
            ssr: true
        });
    });
}
export default {
    target: 'static',
    head: {
        title: "ParaPack",
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'ParaPack'},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {
                rel: "icon",
                type: "image/x-icon",
                href: "/favicon.ico"
            },
            {
                preload: "icon",
                type: "image/x-icon",
                href: "/favicon.ico"
            },
        ],
    },
    // styleResources: {
    //     scss: [
    //         "~assets/style/index.scss",
    //     ],
    // },
    css: [
        "~assets/style/element-variables.scss",
        "~assets/style/index.scss",
        // "~assets/style/windicss.css",
    ],
    plugins,
    buildModules: [
        'nuxt-windicss',
        'lodash-es'
    ],
    modules: [
        '@nuxt/typescript-build',
        "cookie-universal-nuxt",
        "@nuxtjs/proxy",
        '@nuxtjs/html-minifier',
        "@nuxtjs/style-resources",
        ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }],
        [
            '@nuxtjs/i18n',
            {
                strategy: 'prefix',
                locales: [
                    { code: 'zh_CN'},
                    { code: 'en_US'},
                    { code: 'zh_HK'},
                    { code: 'ja_JP'},
                    { code: 'ko_KR'},
                ],
                vueI18nLoader: true,
                defaultLocale: 'zh_CN',
                vueI18n: i18n
            }
        ]
    ],
    modulesDir: ["node_modules", path.resolve(__dirname, "loader")],
    generate: {
        crawler: false,
    },
    build: {
        terser: {
            terserOptions: {
                compress: {
                    // drop_debugger: true,
                    // drop_console: true,
                },
                safari10: true
            }
        },
        html: {
            minify: {
                decodeEntities: true,
                minifyCSS: true,
                minifyJS: true,
                processConditionalComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                trimCustomFragments: true,
                collapseWhitespace: true,
                removeComments: true
            }
        },
        loaders: {
            fontUrl: {limit: 1},
            imgUrl: {limit: 1}
        },
        babel: {
            babelrc: true,
            plugins: [
                '@babel/plugin-proposal-optional-chaining'
            ]
        },
        // postcss: {
        //     // 添加插件名称作为键，参数作为值
        //     plugins: {
        //         "postcss-pxtorem": {
        //             //根元素字体大小
        //             rootValue: 192,// 设计稿宽度或者目前正常分辨率的1/10
        //             //匹配CSS中的属性，* 代表启用所有属性
        //             propList: ['*'],
        //             //转换成rem后保留的小数点位数
        //             unitPrecision: 5,
        //             //小于12px的样式不被替换成rem
        //             minPixelValue: 12,
        //             selectorBlackList: ['ignore-'],// 要忽略的选择器并保留为px。
        //             //忽略一些文件，不进行转换，比如我想忽略 依赖的UI框架
        //             exclude: ['node_modules','element-variables.scss'],
        //         },
        //         'postcss-windicss': {
        //             config: '~windi.config.js',
        //         },
        //     },
        //     preset: {
        //         // 更改postcss-preset-env 设置
        //         autoprefixer: {}
        //     }
        // },
        extractCSS: true,
        optimization: {
            splitChunks: {}
        },
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
            }
            config.module.rules.push({
                test: /\.tsx?$/,
                loader: 'babel-loader',
                exclude: ['/node_modules/', '/vendor/', '/.nuxt/'],
                options: {
                    presets: [
                        '@babel/preset-env',
                        [
                            '@babel/preset-typescript', // 引用Typescript插件
                            {
                                allExtensions: true, // ?支持所有文件扩展名
                            },
                        ],
                    ],
                    plugins: [
                        '@babel/plugin-transform-runtime'
                    ]
                },
            });
            config.module.rules.push({
                test: /\.(ts)$/,
                exclude: ['/node_modules/', '/vendor/', '/.nuxt/'],
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                    transpileOnly: true
                }
            });
            // // 解决引用路径问题
            // config.resolve.alias['nft-common'] = path.resolve(__dirname, 'node_modules/nft-common');
        }
    },
    proxy: {
        // "/test": {
        //     target: BASE_URL,
        //     ws: false,	// 是否代理 websocket
        //     // pathRewrite: {"^/test" : ""}, // 'http://www.baidu.com:8000/api' 重写为 'http://www.baidu.com:8000/'
        //     changeOrigin: true, // 代理时不显示主机头的真实来源
        //     secure: false, // 不验证 https 证书
        // },
        "/wallet-app-api": BASE_URL,
        "/nft-mall-web": BASE_URL,
    },
};
