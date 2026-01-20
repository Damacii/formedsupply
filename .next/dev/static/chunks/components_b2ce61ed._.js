(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ProductDetail.module.css [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/components/ProductDetail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ProductDetail.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const images = product.product_images ?? [];
    const thumbs = images.slice(0, 3);
    const specs = buildSpecs(product);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const activeImage = images[activeIndex] ?? images[0] ?? null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `container ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].layout}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gallery,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mediaMain,
                            children: activeImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mediaImage,
                                src: activeImage.url,
                                alt: activeImage.alt ?? product.name
                            }, void 0, false, {
                                fileName: "[project]/components/ProductDetail.tsx",
                                lineNumber: 71,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mediaPlaceholder,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/ProductDetail.tsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ProductDetail.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mediaThumbs,
                            children: (thumbs.length ? thumbs : [
                                null,
                                null,
                                null
                            ]).map((image, index)=>{
                                const isActive = index === activeIndex;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mediaThumb} ${isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mediaThumbActive : ""}`,
                                    type: "button",
                                    onMouseEnter: ()=>setActiveIndex(index),
                                    onFocus: ()=>setActiveIndex(index),
                                    onMouseLeave: ()=>setActiveIndex(0),
                                    onBlur: ()=>setActiveIndex(0),
                                    "aria-label": `View image ${index + 1}`,
                                    children: image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mediaImage,
                                        src: image.url,
                                        alt: "",
                                        loading: "lazy"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProductDetail.tsx",
                                        lineNumber: 95,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mediaPlaceholder
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProductDetail.tsx",
                                        lineNumber: 97,
                                        columnNumber: 21
                                    }, this)
                                }, `${product.slug}-thumb-${index}`, false, {
                                    fileName: "[project]/components/ProductDetail.tsx",
                                    lineNumber: 84,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/ProductDetail.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ProductDetail.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].details,
                    children: [
                        product.type ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-label",
                            children: product.type
                        }, void 0, false, {
                            fileName: "[project]/components/ProductDetail.tsx",
                            lineNumber: 105,
                            columnNumber: 27
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: product.name
                        }, void 0, false, {
                            fileName: "[project]/components/ProductDetail.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sku,
                            children: [
                                "SKU: ",
                                product.sku
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProductDetail.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        product.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                            children: product.description
                        }, void 0, false, {
                            fileName: "[project]/components/ProductDetail.tsx",
                            lineNumber: 108,
                            columnNumber: 34
                        }, this) : null,
                        specs.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specs,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Specifications"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductDetail.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    children: specs.map((spec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: spec
                                        }, spec, false, {
                                            fileName: "[project]/components/ProductDetail.tsx",
                                            lineNumber: 114,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductDetail.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProductDetail.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "btn btn-primary",
                            href: "/request-form",
                            children: "Request a Quote for this Product"
                        }, void 0, false, {
                            fileName: "[project]/components/ProductDetail.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ProductDetail.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProductDetail.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ProductDetail.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(ProductDetail, "rd+5N/MkYjuYD0I+B+MlySxQysU=");
_c = ProductDetail;
var _c;
__turbopack_context__.k.register(_c, "ProductDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_b2ce61ed._.js.map