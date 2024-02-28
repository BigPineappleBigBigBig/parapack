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
        // {
        //     src: ,
        //     scss: true
        // },
    ],
    plugins,
    buildModules: [
        'nuxt-windicss',
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
                locales: [
                    { code: 'zhCN', iso: 'zh-CN', file: 'zh-CN.json'},
                    { code: 'enUS', iso: 'en-US', file: 'en-US.json'}
                ],
                vueI18nLoader: true,
                lazy: true,
                langDir: 'lang/',
                defaultLocale: 'zhCN',
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
        },
        // postcss: {
        //     // 添加插件名称作为键，参数作为值
        //     plugins: {
        //         "postcss-px-to-viewport": {
        //             unitToConvert: "px", // 默认值`px`，需要转换的单位
        //             viewportWidth: 1920, // 视窗的宽度,对应设计稿宽度
        //             //   viewportHeight: 667, // 视窗的高度, 根据375设备的宽度来指定，一般是667，也可不配置
        //             unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数
        //             propList: ["*"], // 转化为vw的属性列表
        //             viewportUnit: "vw", // 指定需要转换成视窗单位
        //             fontViewportUnit: "vw", // 字体使用的视窗单位
        //             selectorBlaskList: [".ignore-"], // 指定不需要转换为视窗单位的类
        //             mediaQuery: false, // 允许在媒体查询中转换`px`
        //             minPixelValue: 1, // 小于或等于`1px`时不转换为视窗单位
        //             replace: true, // 是否直接更换属性值而不添加备用属性
        //             exclude: [], // 忽略某些文件夹下的文件或特定文件
        //             landscape: false, // 是否添加根据landscapeWidth生成的媒体查询条件 @media (orientation: landscape)
        //         }
        //     },
        //     preset: {
        //         // 更改postcss-preset-env 设置
        //         autoprefixer: {}
        //     }
        // },
        extractCSS: {
            ignoreOrder: true
        },
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
        "/test": {
            target: BASE_URL,
            ws: false,	// 是否代理 websocket
            pathRewrite: {"^/test" : ""}, // 'http://www.baidu.com:8000/api' 重写为 'http://www.baidu.com:8000/'
            changeOrigin: true, // 代理时不显示主机头的真实来源
            secure: false, // 不验证 https 证书
        },
        "/nft-market": MARKET_URL,
        "/nft-mall-web": BASE_URL,
    },
};
