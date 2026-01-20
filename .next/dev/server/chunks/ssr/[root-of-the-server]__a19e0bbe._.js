module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/components/ProductDetail.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "description": "ProductDetail-module__ybfFta__description",
  "details": "ProductDetail-module__ybfFta__details",
  "gallery": "ProductDetail-module__ybfFta__gallery",
  "layout": "ProductDetail-module__ybfFta__layout",
  "mediaImage": "ProductDetail-module__ybfFta__mediaImage",
  "mediaMain": "ProductDetail-module__ybfFta__mediaMain",
  "mediaPlaceholder": "ProductDetail-module__ybfFta__mediaPlaceholder",
  "mediaThumb": "ProductDetail-module__ybfFta__mediaThumb",
  "mediaThumbs": "ProductDetail-module__ybfFta__mediaThumbs",
  "page": "ProductDetail-module__ybfFta__page",
  "sku": "ProductDetail-module__ybfFta__sku",
  "specs": "ProductDetail-module__ybfFta__specs",
});
}),
"[project]/components/ProductDetail.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ProductDetail.module.css [app-rsc] (css module)");
;
;
const buildSpecs = (product)=>[
        product.type && `Type: ${product.type}`,
        product.style && `Style: ${product.style}`,
        product.material && `Material: ${product.material}`,
        product.plastic_type && `Plastic type: ${product.plastic_type}`,
        product.industrial_use && `Industrial use: ${product.industrial_use}`,
        product.place_of_origin && `Place of origin: ${product.place_of_origin}`,
        product.model_number && `Model number: ${product.model_number}`,
        product.brand_name && `Brand name: ${product.brand_name}`,
        product.colors?.length ? `Colors: ${product.colors.join(", ")}` : null,
        product.size && `Size: ${product.size}`,
        typeof product.moq === "number" ? `MOQ: ${product.moq}` : null,
        product.logo && `Customizable: ${product.logo}`,
        product.feature && `Feature: ${product.feature}`,
        product.sample_available === null ? null : `Sample available: ${product.sample_available ? "Yes" : "No"}`,
        product.packaging_details && `Packaging details: ${product.packaging_details}`
    ].filter(Boolean);
function ProductDetail({ product }) {
    const images = product.product_images ?? [];
    const mainImage = images[0];
    const thumbs = images.slice(0, 3);
    const specs = buildSpecs(product);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `container ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].layout}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].gallery,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mediaMain,
                            children: mainImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mediaImage,
                                src: mainImage.url,
                                alt: mainImage.alt ?? product.name
                            }, void 0, false, {
                                fileName: "[project]/components/ProductDetail.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mediaPlaceholder,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/ProductDetail.tsx",
                                lineNumber: 73,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ProductDetail.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mediaThumbs,
                            "aria-hidden": "true",
                            children: (thumbs.length ? thumbs : [
                                null,
                                null,
                                null
                            ]).map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mediaThumb,
                                    children: image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mediaImage,
                                        src: image.url,
                                        alt: "",
                                        loading: "lazy",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProductDetail.tsx",
                                        lineNumber: 80,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mediaPlaceholder
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProductDetail.tsx",
                                        lineNumber: 88,
                                        columnNumber: 19
                                    }, this)
                                }, `${product.slug}-thumb-${index}`, false, {
                                    fileName: "[project]/components/ProductDetail.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ProductDetail.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ProductDetail.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].details,
                    children: [
                        product.type ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-label",
                            children: product.type
                        }, void 0, false, {
                            fileName: "[project]/components/ProductDetail.tsx",
                            lineNumber: 95,
                            columnNumber: 27
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: product.name
                        }, void 0, false, {
                            fileName: "[project]/components/ProductDetail.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].sku,
                            children: [
                                "SKU: ",
                                product.sku
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProductDetail.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        product.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].description,
                            children: product.description
                        }, void 0, false, {
                            fileName: "[project]/components/ProductDetail.tsx",
                            lineNumber: 98,
                            columnNumber: 34
                        }, this) : null,
                        specs.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].specs,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Specifications"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductDetail.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    children: specs.map((spec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: spec
                                        }, spec, false, {
                                            fileName: "[project]/components/ProductDetail.tsx",
                                            lineNumber: 104,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductDetail.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProductDetail.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "btn btn-primary",
                            href: "/#lead",
                            children: "Request a Quote for this Product"
                        }, void 0, false, {
                            fileName: "[project]/components/ProductDetail.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ProductDetail.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProductDetail.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ProductDetail.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/supabaseServer.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabaseServer",
    ()=>supabaseServer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-rsc] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://zypgfpakzqswibxxqlow.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5cGdmcGFrenFzd2lieHhxbG93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg1MzI4NTQsImV4cCI6MjA4NDEwODg1NH0.WZnZ_Zgufrk5etubQYZs-lDkNz5rE3oDsiBiIgqhymo");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabaseServer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey, {
    auth: {
        persistSession: false,
        autoRefreshToken: false
    }
});
}),
"[project]/app/products/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProductDetail.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseServer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseServer.ts [app-rsc] (ecmascript)");
;
;
;
;
const resolveImageUrl = (url)=>{
    if (!url) {
        return null;
    }
    if (url.startsWith("http://") || url.startsWith("https://")) {
        return url;
    }
    const baseUrl = ("TURBOPACK compile-time value", "https://zypgfpakzqswibxxqlow.supabase.co");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const trimmed = url.replace(/^\/+/, "");
    return `${baseUrl}/storage/v1/object/public/product-images/${trimmed}`;
};
async function getProduct(slug) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseServer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabaseServer"].from("products").select(`slug,
      id,
      name,
      sku,
      description,
      type,
      style,
      material,
      plastic_type,
      industrial_use,
      place_of_origin,
      model_number,
      brand_name,
      product_name,
      colors,
      size,
      moq,
      logo,
      feature,
      sample_available,
      packaging_details`).eq("slug", slug).eq("is_active", true).maybeSingle();
    if (error || !data) {
        if (error) {
            console.error("Failed to load product:", error);
        }
        return null;
    }
    const { data: images, error: imagesError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseServer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabaseServer"].from("product_images").select("url, alt, sort_order").eq("product_id", data.id).order("sort_order", {
        ascending: true
    });
    if (imagesError) {
        console.error("Failed to load product images:", imagesError);
    }
    const normalizedImages = (images ?? []).map((image)=>({
            ...image,
            url: resolveImageUrl(image.url)
        }));
    return {
        ...data,
        product_images: normalizedImages
    };
}
async function ProductPage({ params }) {
    const { slug } = await params;
    const product = await getProduct(slug);
    if (!product) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        product: product
    }, void 0, false, {
        fileName: "[project]/app/products/[slug]/page.tsx",
        lineNumber: 91,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/products/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/products/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a19e0bbe._.js.map