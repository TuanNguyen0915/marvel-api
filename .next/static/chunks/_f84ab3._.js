(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_f84ab3._.js", {

"[project]/lib/api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
// import axios from 'axios'
__turbopack_esm__({
    "getCharacterByBane": (()=>getCharacterByBane),
    "getCharacterById": (()=>getCharacterById),
    "getComicsByCharacterId": (()=>getComicsByCharacterId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$md5$2f$md5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/md5/md5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
;
const timeStamp = new Date().getTime();
const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$md5$2f$md5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(String(timeStamp + ("TURBOPACK compile-time value", "8945a8b0942949caf1f0785bedaff83be3f515da") + ("TURBOPACK compile-time value", "177126498059691d01bb4f4d4eb60653")));
const getCharacterByBane = async (name)=>{
    const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&apikey=${("TURBOPACK compile-time value", "177126498059691d01bb4f4d4eb60653")}&hash=${hash}&ts=${timeStamp}&limit=100`;
    const res = await fetch(url);
    const result = await res.json();
    const { data } = result;
    return data.results;
};
const getCharacterById = async (id)=>{
    const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${("TURBOPACK compile-time value", "177126498059691d01bb4f4d4eb60653")}&hash=${hash}&ts=${timeStamp}&limit=50`;
    const res = await fetch(url);
    const result = await res.json();
    const { data } = result;
    return data.results[0];
};
const getComicsByCharacterId = async (id)=>{
    const url = `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?apikey=${("TURBOPACK compile-time value", "177126498059691d01bb4f4d4eb60653")}&hash=${hash}&ts=${timeStamp}&limit=50`;
    const res = await fetch(url);
    const result = await res.json();
    const { data } = result;
    return data.results;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/characterPage/Comic.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
const Comic = ({ characterId, available })=>{
    _s();
    const [isOpen, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [comics, setComics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Comic.useEffect": ()=>{
            const fetchData = {
                "Comic.useEffect.fetchData": async ()=>{
                    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComicsByCharacterId"])(characterId);
                    setComics(data);
                }
            }["Comic.useEffect.fetchData"];
            fetchData();
        }
    }["Comic.useEffect"], [
        characterId
    ]);
    console.log(comics);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setOpen(!isOpen),
                className: "flex w-full cursor-pointer items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "cursor-pointer text-4xl font-bold text-white",
                        children: [
                            "View Comics ( ",
                            available,
                            " available)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/characterPage/Comic.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        size: 40,
                        className: `${isOpen && "rotate-90"} text-white transition-all`
                    }, void 0, false, {
                        fileName: "[project]/components/characterPage/Comic.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/characterPage/Comic.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            isOpen && (!comics ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/characterPage/Comic.tsx",
                lineNumber: 43,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid w-full grid-cols-3 gap-4 max-md:gap-2 md:grid-cols-4 lg:grid-cols-5",
                children: comics.map((comic)=>{
                    const thumbnailUrl = comic.thumbnail.path + "." + comic.thumbnail.extension;
                    const link = `/comic/${comic.id}`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: comic.title,
                        link: link,
                        thumbnailUrl: thumbnailUrl,
                        type: "comic"
                    }, comic.id, false, {
                        fileName: "[project]/components/characterPage/Comic.tsx",
                        lineNumber: 51,
                        columnNumber: 17
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/characterPage/Comic.tsx",
                lineNumber: 45,
                columnNumber: 11
            }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/characterPage/Comic.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
};
_s(Comic, "5itycp37VGcg7nKe/TM8R927ROs=");
_c = Comic;
const __TURBOPACK__default__export__ = Comic;
var _c;
__turbopack_refresh__.register(_c, "Comic");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/character/[characterId]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_f84ab3._.js.map