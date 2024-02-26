import Vue from "vue";
let VueQuillEditor;
if (process.browser) {
    VueQuillEditor = require("vue-quill-editor/dist/ssr");
}

Vue.use(VueQuillEditor);
