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
    styleResources: {
        scss: [
            "~assets/style/index.scss",
        ],
    },
    css: [
        '~assets/plugin/iconfont/iconfont.css',
        // {
        //     src: '~assets/style/iviewStyle.less',
        //     less: true
        // }
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
        postcss: {
            preset: {
                autoprefixer: {
                    overrideBrowserslist: ['> 0%']
                }
            }
        },
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
