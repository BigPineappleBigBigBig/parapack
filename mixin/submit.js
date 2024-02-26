export default {
    data() {
        return {
            MIXIN_STATIC_BASEURL: ''
        };
    },
    methods: {
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
                        content: '{#确认提交吗？#}',
                        loading: true,
                        onOk: async () => {
                            this.$Modal.remove();
                            this.loading = true;
                            try {
                                const request = this.requestBase;
                                request.data = { ...this.formValidate };
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
        }
    }
};
