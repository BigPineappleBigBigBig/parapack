<template>
    <div class="flex flex-col gap-y-34px mt-56px">
        <div class="flex justify-between items-center">
            <div class="flex flex-col gap-y-9px">
                <p
                    :class="`text-19px pp-text-t1 border-l-2px pl-9px ${rose ? getNumberClass(Math.round(rose),'border') : ''}`"
                >
                    ${{ yData[yData.length-1]||'--' }}
                </p>
                <span class="text-15px" :class="rose ? getNumberClass(Math.round(rose)): ''"
                    >{{ rose ? `${formatNumber(rose, 0, true)}%` : '--' }}</span
                >
            </div>
            <div>
                {{ data.symbol ?? "--" }} / USDT
            </div>
            <div>

            </div>
            <!-- <a
                class="hover_opacity pp-text-primary"
                :href="data.url"
                target="_blank"
                rel="noopener noreferrer"
                >去兑换</a
            > -->
        </div>
        <div
            ref="chart"
            style="width: 100%; height: 400px"
            v-loading="loading"
        ></div>
    </div>
</template>

<script>
import { getNumberClass, formatNumber } from "~/utils/public";
import * as echarts from "echarts";
import option from "./config";
import { getKline } from "~/api";
import { deepMerge, time2Date } from "~/plugins/utils";
import { axisHelper } from './axisHelper';
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
            klineSource: [],
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
            return this.klineSource.map((item) => Number(item.price));
        },
    },
    methods: {
        getNumberClass,
        formatNumber,
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
            if (code === 200 && data) {
              this.rose = data.rose ? Math.round(Number(data.rose) * 100).toString() : undefined
                this.klineSource = [...data.kline].sort((a, b) => a.time - b.time);
            } else {
                this.$message.error(msg);
            }
        },
        resetChart() {
            const _max = Math.max(...this.yData);
      const _min = Math.min(...this.yData);
      const { interval, max, min, splitNumber } = axisHelper({
        max: _max,
        min: _min,
        splitNumber: 5
      });
      console.log(interval, max, min, splitNumber,'interval, max, min, splitNumberinterval, max, min, splitNumber')
            const resetOptions = deepMerge(this.option, {
                xAxis: this.option.xAxis.map((axis) =>
                    deepMerge(axis, {
                        data: this.xData,
                    })
                ),
                yAxis: (this.option.yAxis).map(axis => deepMerge(axis, {
            max,
            min,
            interval,
            splitNumber
        })),
                series: this.option.series.map((seri) =>
                    deepMerge(seri, {
                      name: "价格",
                        data: this.yData,
                    })
                ),
            });
            this.chart.setOption(resetOptions);
        },
    },
    beforeDestroy() {
        echarts.dispose(this.$refs.chart);
    },
};
</script>
