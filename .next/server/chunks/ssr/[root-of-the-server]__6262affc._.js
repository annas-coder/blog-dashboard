module.exports = {

"[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("@reduxjs/toolkit");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/@reduxjs/toolkit/query/react [external] (@reduxjs/toolkit/query/react, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("@reduxjs/toolkit/query/react");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/services/index.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "blogApi": (()=>blogApi),
    "useCreateBlogPostMutation": (()=>useCreateBlogPostMutation),
    "useGetBlogByIdQuery": (()=>useGetBlogByIdQuery),
    "useGetBlogCountQuery": (()=>useGetBlogCountQuery),
    "useGetBlogListQuery": (()=>useGetBlogListQuery)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit$2f$query$2f$react__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2f$query$2f$react$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@reduxjs/toolkit/query/react [external] (@reduxjs/toolkit/query/react, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit$2f$query$2f$react__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2f$query$2f$react$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit$2f$query$2f$react__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2f$query$2f$react$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
const blogApi = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit$2f$query$2f$react__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2f$query$2f$react$2c$__esm_import$29$__["createApi"])({
    reducerPath: 'blogApi',
    baseQuery: (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit$2f$query$2f$react__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2f$query$2f$react$2c$__esm_import$29$__["fetchBaseQuery"])({
        baseUrl: ("TURBOPACK compile-time value", "https://67f8fa0b094de2fe6e9ffb9b.mockapi.io/api/blog/")
    }),
    endpoints: (builder)=>({
            getBlogCount: builder.query({
                query: ()=>`list`
            }),
            getBlogList: builder.query({
                query: ({ page, limit })=>`list?page=${page}&limit=${limit}`
            }),
            getBlogById: builder.query({
                query: (id)=>`/list/${id}`
            }),
            createBlogPost: builder.mutation({
                query: (newPost)=>({
                        url: 'list',
                        method: 'POST',
                        body: newPost
                    })
            })
        })
});
const { useGetBlogCountQuery, useGetBlogListQuery, useGetBlogByIdQuery, useCreateBlogPostMutation } = blogApi;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/store/index.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "store": (()=>store)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/index.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
const store = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["configureStore"])({
    reducer: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["blogApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["blogApi"].reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["blogApi"].middleware)
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/react-redux [external] (react-redux, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("react-redux");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/react-hot-toast [external] (react-hot-toast, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("react-hot-toast");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/pages/_app.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>App)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/index.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/react-redux [external] (react-redux, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/react-hot-toast [external] (react-hot-toast, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/ThemeProvider.js [ssr] (ecmascript) <export default as ThemeProvider>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
function App({ Component, pageProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["store"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
            theme: theme,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["Toaster"], {}, void 0, false, {
                    fileName: "[project]/src/pages/_app.tsx",
                    lineNumber: 12,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
                    ...pageProps
                }, void 0, false, {
                    fileName: "[project]/src/pages/_app.tsx",
                    lineNumber: 13,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/_app.tsx",
            lineNumber: 11,
            columnNumber: 8
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/pages/_app.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__6262affc._.js.map