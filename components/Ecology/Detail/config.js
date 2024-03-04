
import { time2Date } from "~/plugins/utils"
const hexToRgb = hex => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  // eslint-disable-next-line no-param-reassign
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  /* eslint-disable indent */
  return result
     ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
     }
     : null
  /* eslint-enable */
}


let option = {
  color: '#5C43DC',
  series:[
    {
      type: 'line',
      smooth: true,
      showSymbol: false,
      // symbol: 'none',
      symbolSize: 10,
      emphasis: { focus: 'series' },
      animationDuration: 2500,
      animationEasing: 'cubicInOut',
      lineStyle: {
         width: 2,
         color: '#5C43DC'
      },
      areaStyle: {
         width: 2,
         opacity: 0.25,
         color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
               { offset: 0.389, color: '#5C43DC' },
               { offset: 1, color: 'rgba(0,0,0,0)' },
            ],
            global: false,
         },
      },
   }
  ],
  tooltip: {
     trigger: 'axis',
     axisPointer: {
        type: 'line',
     },

     // formatter: '{a}: {c}',
     textStyle: {
        color: '#fafafa',
     },
     borderColor: 'transparent',
     backgroundColor: 'rgba(0, 0, 0, 0.5)',
     extraCssText: 'backdrop-filter: blur(6px);',
  },
  grid: {
     top: '20%',
     left: '2%',
     right: '2.5%',
     bottom: '0%',
     containLabel: true,
  },
  xAxis: [
{
        type: 'category',
        splitNumber: 25,
        boundaryGap: false,
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: {
          show:false
        },
      }
  ],
  yAxis: [
     {
        show: true,
        type: 'value',
        axisLabel:{
          show: false
        },
     },
  ],
}
export default option