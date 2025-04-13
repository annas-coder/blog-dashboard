module.exports = {

"[externals]/formik [external] (formik, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("formik", () => require("formik"));

module.exports = mod;
}}),
"[externals]/yup [external] (yup, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("yup", () => require("yup"));

module.exports = mod;
}}),
"[project]/src/pages/add-post/index.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Container/Container.js [ssr] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Paper/Paper.js [ssr] (ecmascript) <export default as Paper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/index.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$formik__$5b$external$5d$__$28$formik$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/formik [external] (formik, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$yup__$5b$external$5d$__$28$yup$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/yup [external] (yup, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
const validationSchema = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$yup__$5b$external$5d$__$28$yup$2c$__cjs$29$__["object"])({
    title: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$yup__$5b$external$5d$__$28$yup$2c$__cjs$29$__["string"])().required('Title is required'),
    author: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$yup__$5b$external$5d$__$28$yup$2c$__cjs$29$__["string"])().required('Author is required'),
    body: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$yup__$5b$external$5d$__$28$yup$2c$__cjs$29$__["string"])().required('Body is required')
});
const AddPost = ()=>{
    const [createBlogPost, { isLoading }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useCreateBlogPostMutation"])();
    const formik = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$formik__$5b$external$5d$__$28$formik$2c$__cjs$29$__["useFormik"])({
        initialValues: {
            title: '',
            author: '',
            body: ''
        },
        validationSchema,
        onSubmit: async (values, { resetForm })=>{
            const newPost = {
                title: values.title,
                author: values.author,
                excerpt: values.body,
                date: Date.now()
            };
            try {
                const result = await createBlogPost(newPost).unwrap();
                console.log('Created:', result);
                resetForm();
            } catch (err) {
                console.error('Failed to create post:', err);
            }
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
        maxWidth: "sm",
        sx: {
            mt: 4
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
            elevation: 3,
            sx: {
                p: 4
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "h5",
                    align: "center",
                    gutterBottom: true,
                    children: "Add New Blog Post"
                }, void 0, false, {
                    fileName: "[project]/src/pages/add-post/index.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$formik__$5b$external$5d$__$28$formik$2c$__cjs$29$__["Formik"], {
                    onSubmit: (formData)=>{
                        console.log(formData);
                    },
                    children: ({ isSubmitting })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Form, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Field, {
                                    type: "text",
                                    name: "fullname",
                                    placeholder: "Enter fullname"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/add-post/index.tsx",
                                    lineNumber: 57,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Field, {
                                    type: "email",
                                    name: "email",
                                    placeholder: "Enter address"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/add-post/index.tsx",
                                    lineNumber: 58,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    children: "Submit"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/add-post/index.tsx",
                                    lineNumber: 59,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/add-post/index.tsx",
                            lineNumber: 56,
                            columnNumber: 5
                        }, this)
                }, void 0, false, {
                    fileName: "[project]/src/pages/add-post/index.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/add-post/index.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/pages/add-post/index.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = AddPost;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__13af7770._.js.map