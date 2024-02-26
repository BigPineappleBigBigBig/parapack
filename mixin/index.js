export const mixin = {
    data() {
        return {
            MIXIN_STATIC_BASEURL: ''
        };
    },
    methods: {
        MIXIN_DATATYPE(data) {
            return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
        },
        MIXIN_AwaitPromise(promise) {
            if (!promise || !Promise.prototype.isPrototypeOf(promise)) {
                return new Promise((resolve, reject) => {
                    reject(new Error('requires promises as the param'));
                }).catch(err => [err, null]);
            }
            return promise.then(function () {
                return [null, ...arguments];
            }).catch(err => [err, null]);
        },
        handleSubmit(name) {
            this.$refs[name].validate(async (valid) => {
                if (valid) {
                    this.$Modal.confirm({
                        title: '{#提示#}',
                        content: '{#确定提交吗？#}',
                        loading: true,
                        onOk: async () => {
                            this.$Modal.remove();
                            this.loading = true;
                            try {
                                const request = this.requestBase;
                                request.data = {...this.formValidate};
                                const res = await this.$axios(request);
                                this.loading = false;
                                if (res.code === 1) {
                                    this.$Message.success({
                                        content: '{#成功#}',
                                        onClose: () => {
                                            if (this.needBack) this.$router.go(-1);
                                        }
                                    });
                                }
                            } catch (error) {
                                console.log('Error: ', error);
                            }
                            this.loading = false;
                        }
                    });
                } else {
                    // this.$Message.error('Fail!');
                }
            });
        },
        handleReset(name) {
            this.$refs[name].resetFields();
        },
        MIXIN_DateFormat(config = {}) {
            const numReg = /^(\d{10}|\d{13})$/;
            const dateStr = /^([1-9]\d{3})[\.\/-](0[1-9]|1[0-2])[\.\/-](0[1-9]|[1-2]\d|3[0-1])\s([0-1]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
            const formatDateStr = data => data.replace(dateStr, '$1/$2/$3 $4:$5:$6');
            const data = config.d;
            let format = config.f;
            let dateInstance = null;
            dateInstance = numReg.test(data) ? new Date(String(data).length === 13 ? data : data * 1000) : dateStr.test(data) ? new Date(formatDateStr(data)) : new Date();
            const o = {
                'y+': dateInstance.getMonth() + 1, // 月份
                'r+': dateInstance.getDate(), // 日
                's+': dateInstance.getHours(), // 小时
                'f+': dateInstance.getMinutes(), // 分
                'm+': dateInstance.getSeconds(), // 秒
                'q+': Math.floor((dateInstance.getMonth() + 3) / 3), // 季度
                S: dateInstance.getMilliseconds() // 毫秒
            };
            /(n+)/.test(format) && (format = format.replace(RegExp.$1, (`${dateInstance.getFullYear()}`).substr(4 - RegExp.$1.length)));
            for (const k in o) {
                new RegExp(`(${k})`).test(format) && (format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : (`00${o[k]}`).substr((`${o[k]}`).length)));
            }
            return format;
        }
    }
};
