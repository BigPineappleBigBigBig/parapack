<template>
    <div v-if="news && news.length">
        <dl
            class="rounded-9px bg-[#F2F3F6] py-26px px-17px"
            v-for="item in news"
            :key="item.ctime"
        >
            <dt class="flex justify-between items-center">
                <div>
                    <p class="flex items-center mr-34px">
                        <img
                            class="w-27px h-27px rounded-full mr-9px"
                            :src="data.miniCoverPicture"
                        />
                        <span class="text-19px pp-text-t1">
                            {{ data.title }}
                        </span>
                    </p>
                    <p
                        class="text-15px pp-text-t1 flex items-center gap-x-22px"
                    >
                        <span>
                            {{ item.ctime ? time2Date(time2Date,'m/d') : '--' }}
                        </span>
                        <span>
                            {{ item.ctime ? getDay(time2Date) : '--' }}
                        </span>
                    </p>
                </div>
                <div
                    class="cursor-pointer hover_opacity"
                    @click="
                        () => {
                            clickCopy();
                        }
                    "
                >
                    <img
                        class="w-17px h-21px"
                        src="~/assets/images/newsShare.png"
                        alt=""
                    />
                </div>
            </dt>
            <dd class="mt-27px bg-white p-26px">
                <h6 class="mb-17px pp-text-t1 text-19px flex items-center gap-x-17px">
                  {{item.title}}
                  <img src="~/assets/images/newsTitle.png" class="w-16px h-17px">
                  </h6>
                <p class="text-[#999999] text-15px leading-24px overflow-ellipsis">
                  {{ item.content }}
                </p>
            </dd>
        </dl>
    </div>
</template>

<script>
import copy from "copy-to-clipboard";
import { Message } from "element-ui";
import {time2Date,getDay} from '~/plugins/utils'
export default {
    name: "News",
    props: {
        data: {
            default: () => {return{}},
            typeof: Object,
        },
    },
    computed: {
        news() {
            return this.data.news || [];
        },
    },
    methods: {
      time2Date,
      getDay,
        // 复制链接
        clickCopy() {
            copy(location.href);
            Message.success("复制成功");
        },
    },
};
</script>
