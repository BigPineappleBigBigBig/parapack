<template>
    <div class="flex flex-col gap-y-34px mt-56px">
        <div class="flex justify-between items-center">
            <div class="flex flex-col gap-y-9px">
                <p
                    :class="`text-19px pp-text-t1 border-l-2px pl-9px ${rose ? getNumberClass(Math.round(rose),'border') : ''}`"
                >
                    ${{ yData[yData.length-1]||'--' }}
                </p>
                <span class="text-15px"
                    >{{ rose }}%</span
                >
            </div>
            <div :class="rose ? getNumberClass(Math.round(rose)): ''">
                {{ data.symbol ?? "--" }} / USDT
            </div>
            <a
                class="hover_opacity pp-text-primary"
                :href="data.url"
                target="_blank"
                rel="noopener noreferrer"
                >去兑换</a
            >
        </div>
        <div
            ref="chart"
            style="width: 100%; height: 400px"
            v-loading="loading"
        ></div>
    </div>
</template>

<script>
import { getNumberClass } from "~/utils/public";
import * as echarts from "echarts";
import option from "./config";
import { getKline } from "~/api";
import { deepMerge, time2Date } from "~/plugins/utils";

export default {
    name: "Chart",
    props: {
        data: {
            default: () =>{return {}},
            typeof: Object,
        },
    },
    data() {
        return {
            option,
            chart: null,
            loading: false,
            klineSource: [
                {
                    time: +new Date() - 160000 * 24,
                    price: "100",
                },
                {
                    time: +new Date() - 160000 * 23,
                    price: "140",
                },
                {
                    time: +new Date() - 160000 * 22,
                    price: "130",
                },
                {
                    time: +new Date() - 160000 * 21,
                    price: "120",
                },
                {
                    time: +new Date() - 160000 * 20,
                    price: "123",
                },
                {
                    time: +new Date() - 160000 * 19,
                    price: "143",
                },
                {
                    time: +new Date() - 160000 * 18,
                    price: "112",
                },
                {
                    time: +new Date() - 160000 * 16,
                    price: "170",
                },
                {
                    time: +new Date() - 160000 * 17,
                    price: "112",
                },
                {
                    time: +new Date() - 160000 * 15,
                    price: "132",
                },
                {
                    time: +new Date() - 36000 * 14,
                    price: "123",
                },
                {
                    time: +new Date() - 36000 * 13,
                    price: "121",
                },
                {
                    time: +new Date() - 36000 * 12,
                    price: "145",
                },
                {
                    time: +new Date() - 36000 * 11,
                    price: "155",
                },
                {
                    time: +new Date() - 36000 * 10,
                    price: "165",
                },
                {
                    time: +new Date() - 36000 * 9,
                    price: "170",
                },
                {
                    time: +new Date() - 36000 * 8,
                    price: "170",
                },
                {
                    time: +new Date() - 36000 * 7,
                    price: "170",
                },
                {
                    time: +new Date() - 36000 * 6,
                    price: "170",
                },
                {
                    time: +new Date() - 36000 * 5,
                    price: "98",
                },
                {
                    time: +new Date() - 36000 * 4,
                    price: "125",
                },
                {
                    time: +new Date() - 36000 * 3,
                    price: "120",
                },
                {
                    time: +new Date() - 36000 * 2,
                    price: "140",
                },
                {
                    time: +new Date() - 36000 * 1,
                    price: "190",
                },
            ],
            rose: '--'
        };
    },
    mounted() {
        this.initChart();
    },
    watch: {
        klineSource(v) {
            if (v) {
                this.resetChart();
            }
        },
        "data.symbol": {
          handler(v) {
            v && this.fetchData();
            },
            immediate:true
            
        },
    },
    computed: {
        xData() {
            return this.klineSource.map((item) => time2Date(item.time, "h:i"));
        },
        yData() {
            return this.klineSource.map((item) => item.price);
        },
    },
    methods: {
        getNumberClass,
        initChart() {
            this.chart = echarts.init(this.$refs.chart);
            this.resetChart()
        },
        async fetchData() {
            this.loading = true;
            const { code, msg, data } = await getKline({
                symbol: this.data.symbol,
            });
            this.loading = false;
            if (code === 200) {
              this.rose = data.rose * 100
                this.klineSource = [...data.kline].sort((a, b) => a.time - b.time);
            } else {
                Message.error(msg);
            }
        },
        resetChart() {
          console.log(12312)
            const resetOptions = deepMerge(this.option, {
                xAxis: this.option.xAxis.map((axis) =>
                    deepMerge(axis, {
                        data: this.xData,
                    })
                ),
                series: this.option.series.map((seri) =>
                    deepMerge(seri, {
                      name: "价格",
                        data: this.yData,
                    })
                ),
            });
            console.log(resetOptions)
            this.chart.setOption(resetOptions);
        },
    },
    beforeDestroy() {
        echarts.dispose(this.$refs.chart);
    },
};
</script>
