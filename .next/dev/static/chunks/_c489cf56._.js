(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/supabaseClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://zypgfpakzqswibxxqlow.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5cGdmcGFrenFzd2lieHhxbG93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg1MzI4NTQsImV4cCI6MjA4NDEwODg1NH0.WZnZ_Zgufrk5etubQYZs-lDkNz5rE3oDsiBiIgqhymo");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/slugify.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "slugify",
    ()=>slugify
]);
const slugify = (value)=>value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/uploadProductImages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "uploadProductImages",
    ()=>uploadProductImages
]);
const uploadProductImages = async ({ supabase, productId, files })=>{
    const uploads = [];
    for (const [index, file] of files.entries()){
        const extension = file.name.split(".").pop() || "png";
        const path = `${productId}/${Date.now()}-${index}.${extension}`;
        const { error: uploadError } = await supabase.storage.from("product-images").upload(path, file, {
            cacheControl: "3600",
            upsert: false,
            contentType: file.type || "image/png"
        });
        if (uploadError) {
            throw uploadError;
        }
        const { data } = supabase.storage.from("product-images").getPublicUrl(path);
        uploads.push({
            url: data.publicUrl,
            path
        });
    }
    return uploads;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/admin/products/new/AdminProducts.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "checkboxInput": "AdminProducts-module__xCpSqq__checkboxInput",
  "checkboxRow": "AdminProducts-module__xCpSqq__checkboxRow",
  "error": "AdminProducts-module__xCpSqq__error",
  "fieldInput": "AdminProducts-module__xCpSqq__fieldInput",
  "fieldLabel": "AdminProducts-module__xCpSqq__fieldLabel",
  "fieldTextarea": "AdminProducts-module__xCpSqq__fieldTextarea",
  "form": "AdminProducts-module__xCpSqq__form",
  "fullWidth": "AdminProducts-module__xCpSqq__fullWidth",
  "grid": "AdminProducts-module__xCpSqq__grid",
  "header": "AdminProducts-module__xCpSqq__header",
  "page": "AdminProducts-module__xCpSqq__page",
  "success": "AdminProducts-module__xCpSqq__success",
});
}),
"[project]/app/admin/products/new/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewProductPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$slugify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/slugify.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$uploadProductImages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/uploadProductImages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/admin/products/new/AdminProducts.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const initialState = {
    sku: "",
    name: "",
    slug: "",
    description: "",
    type: "",
    style: "",
    material: "",
    plasticType: "",
    industrialUse: "",
    placeOfOrigin: "",
    modelNumber: "",
    brandName: "",
    productName: "",
    colors: "",
    size: "",
    moq: "",
    logo: "",
    feature: "",
    sampleAvailable: false,
    packagingDetails: ""
};
function NewProductPage() {
    _s();
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("guest");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState);
    const [slugEdited, setSlugEdited] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isAdmin = role === "admin";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewProductPage.useEffect": ()=>{
            const loadRole = {
                "NewProductPage.useEffect.loadRole": async ()=>{
                    const { data: userData } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                    const user = userData.user;
                    if (!user) {
                        setRole("guest");
                        setLoading(false);
                        return;
                    }
                    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("profiles").select("role").eq("id", user.id).single();
                    setRole(data?.role || "user");
                    setLoading(false);
                }
            }["NewProductPage.useEffect.loadRole"];
            loadRole();
        }
    }["NewProductPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewProductPage.useEffect": ()=>{
            if (!slugEdited) {
                setForm({
                    "NewProductPage.useEffect": (prev)=>({
                            ...prev,
                            slug: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$slugify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])(prev.name)
                        })
                }["NewProductPage.useEffect"]);
            }
        }
    }["NewProductPage.useEffect"], [
        form.name,
        slugEdited
    ]);
    const parsedColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NewProductPage.useMemo[parsedColors]": ()=>form.colors.split(",").map({
                "NewProductPage.useMemo[parsedColors]": (color)=>color.trim()
            }["NewProductPage.useMemo[parsedColors]"]).filter(Boolean)
    }["NewProductPage.useMemo[parsedColors]"], [
        form.colors
    ]);
    const handleChange = (field, value)=>{
        setForm((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        setStatus(null);
        setSubmitting(true);
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("products").insert({
                sku: form.sku,
                slug: form.slug || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$slugify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])(form.name),
                name: form.name,
                description: form.description || null,
                type: form.type || null,
                style: form.style || null,
                material: form.material || null,
                plastic_type: form.plasticType || null,
                industrial_use: form.industrialUse || null,
                place_of_origin: form.placeOfOrigin || null,
                model_number: form.modelNumber || null,
                brand_name: form.brandName || null,
                product_name: form.productName || null,
                colors: parsedColors.length ? parsedColors : null,
                size: form.size || null,
                moq: form.moq ? Number(form.moq) : null,
                logo: form.logo || null,
                feature: form.feature || null,
                sample_available: form.sampleAvailable,
                packaging_details: form.packagingDetails || null
            }).select("id").single();
            if (error || !data) {
                throw error || new Error("Failed to insert product");
            }
            if (files.length) {
                const uploads = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$uploadProductImages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadProductImages"])({
                    supabase: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"],
                    productId: data.id,
                    files
                });
                const imageRows = uploads.map((upload, index)=>({
                        product_id: data.id,
                        url: upload.url,
                        alt: `${form.name} image ${index + 1}`,
                        sort_order: index
                    }));
                const { error: imageError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("product_images").insert(imageRows);
                if (imageError) {
                    throw imageError;
                }
            }
            setStatus({
                type: "success",
                text: "Product created successfully."
            });
            setForm(initialState);
            setFiles([]);
            setSlugEdited(false);
        } catch (err) {
            const message = err instanceof Error ? err.message : "Something went wrong.";
            setStatus({
                type: "error",
                text: message
            });
        } finally{
            setSubmitting(false);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/app/admin/products/new/page.tsx",
                lineNumber: 186,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/admin/products/new/page.tsx",
            lineNumber: 185,
            columnNumber: 7
        }, this);
    }
    if (!isAdmin) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Access denied"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/products/new/page.tsx",
                        lineNumber: 195,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "You do not have permission to view this page."
                    }, void 0, false, {
                        fileName: "[project]/app/admin/products/new/page.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/products/new/page.tsx",
                lineNumber: 194,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/admin/products/new/page.tsx",
            lineNumber: 193,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Add Product"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/products/new/page.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Create a new product with supplier-ready specifications."
                        }, void 0, false, {
                            fileName: "[project]/app/admin/products/new/page.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/products/new/page.tsx",
                    lineNumber: 205,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                                    children: [
                                        "SKU *",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldInput,
                                            required: true,
                                            value: form.sku,
                                            onChange: (event)=>handleChange("sku", event.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/products/new/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/products/new/page.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                                    children: [
                                        "Name *",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldInput,
                                            required: true,
                                            value: form.name,
                                            onChange: (event)=>handleChange("name", event.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/products/new/page.tsx",
                                            lineNumber: 223,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/products/new/page.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                                    children: [
                                        "Slug",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldInput,
                                            value: form.slug,
                                            onChange: (event)=>{
                                                setSlugEdited(true);
                                                handleChange("slug", event.target.value);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/products/new/page.tsx",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/products/new/page.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fullWidth}`,
                                    children: [
                                        "Description",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldTextarea,
                                            value: form.description,
                                            onChange: (event)=>handleChange("description", event.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/products/new/page.tsx",
                                            lineNumber: 243,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/products/new/page.tsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                                    children: [
                                        "Type",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldInput,
                                            value: form.type,
                                            onChange: (event)=>handleChange("type", event.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/products/new/page.tsx",
                                            lineNumber: 252,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/products/new/page.tsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                                    children: [
                                        "Style",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldInput,
                                            value: form.style,
                                            onChange: (event)=>handleChange("style", event.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/products/new/page.tsx",
                                            lineNumber: 260,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/products/new/page.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                                    children: [
                                        "Material",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldInput,
                                            value: form.material,
                                            onChange: (event)=>handleChange("material", event.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/products/new/page.tsx",
                                            lineNumber: 268,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/products/new/page.tsx",
                                    lineNumber: 266,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                                    children: [
                                        "Plastic Type",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldInput,
                                            value: form.plasticType,
                                            onChange: (event)=>handleChange("plasticType", event.target.value),
                                            placeholder: "PP/PET"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/products/new/page.tsx",
                                            lineNumber: 276,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/products/new/page.tsx",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                                    children: [
                                        "Industrial Use",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldInput,
                                            value: form.industrialUse,
                                            onChange: (event)=>handleChange("industrialUse", event.target.value),
                                            placeholder: "Beverage"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/products/new/page.tsx",
                                            lineNumber: 285,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/products/new/page.tsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                                    children: [
                                        "Place of Origin",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldInput,
                                            value: form.placeOfOrigin,
                                            onChange: (event)=>handleChange("placeOfOrigin", event.target.value),
                                            placeholder: "Zhejiang, China"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/products/new/page.tsx",
                                            lineNumber: 294,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/products/new/page.tsx",
                                    lineNumber: 292,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                                    children: [
                                        "Model Number",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldInput,
                                            value: form.modelNumber,
                                            onChange: (event)=>handleChange("modelNumber", event.target.value),
                                            placeholder: "PP-1214/PET-1214"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/products/new/page.tsx",
                                            lineNumber: 303,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/products/new/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                                    children: [
                                        "Brand Name",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldInput,
                                            value: form.brandName,
                                            onChange: (event)=>handleChange("brandName", event.target.value),
                                            placeholder: "Jimi"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/products/new/page.tsx",
                                            lineNumber: 312,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/products/new/page.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                                    children: [
                                        "Product Name",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldInput,
                                            value: form.productName,
                                            onChange: (event)=>handleChange("productName", event.target.value),
                                            placeholder: "Custom Milk Tea Plastic PP PET Cup With Lids"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/products/new/page.tsx",
                                            lineNumber: 321,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/products/new/page.tsx",
                                    lineNumber: 319,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                                    children: [
                                        "Colors (comma separated)",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldInput,
                                            value: form.colors,
                                            onChange: (event)=>handleChange("colors", event.target.value),
                                            placeholder: "Black, White"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/products/new/page.tsx",
                                            lineNumber: 330,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/products/new/page.tsx",
                                    lineNumber: 328,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                                    children: [
                                        "Size",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldInput,
                                            value: form.size,
                                            onChange: (event)=>handleChange("size", event.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/products/new/page.tsx",
                                            lineNumber: 339,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/products/new/page.tsx",
                                    lineNumber: 337,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                                    children: [
                                        "MOQ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldInput,
                                            type: "number",
                                            min: "0",
                                            value: form.moq,
                                            onChange: (event)=>handleChange("moq", event.target.value),
                                            placeholder: "5000"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/products/new/page.tsx",
                                            lineNumber: 347,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/products/new/page.tsx",
                                    lineNumber: 345,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                                    children: [
                                        "Logo",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldInput,
                                            value: form.logo,
                                            onChange: (event)=>handleChange("logo", event.target.value),
                                            placeholder: "Customer's logo printing"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/products/new/page.tsx",
                                            lineNumber: 358,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/products/new/page.tsx",
                                    lineNumber: 356,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                                    children: [
                                        "Feature",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldInput,
                                            value: form.feature,
                                            onChange: (event)=>handleChange("feature", event.target.value),
                                            placeholder: "Recyclable"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/products/new/page.tsx",
                                            lineNumber: 367,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/products/new/page.tsx",
                                    lineNumber: 365,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                                    children: [
                                        "Packaging Details",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldInput,
                                            value: form.packagingDetails,
                                            onChange: (event)=>handleChange("packagingDetails", event.target.value),
                                            placeholder: "1000pcs/carton"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/products/new/page.tsx",
                                            lineNumber: 376,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/products/new/page.tsx",
                                    lineNumber: 374,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkboxRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkboxInput,
                                            type: "checkbox",
                                            checked: form.sampleAvailable,
                                            onChange: (event)=>handleChange("sampleAvailable", event.target.checked)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/products/new/page.tsx",
                                            lineNumber: 384,
                                            columnNumber: 15
                                        }, this),
                                        "Sample Available"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/products/new/page.tsx",
                                    lineNumber: 383,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fullWidth}`,
                                    children: [
                                        "Images",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldInput,
                                            type: "file",
                                            accept: "image/*",
                                            multiple: true,
                                            onChange: (event)=>setFiles(Array.from(event.target.files || []))
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/products/new/page.tsx",
                                            lineNumber: 394,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/products/new/page.tsx",
                                    lineNumber: 392,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/products/new/page.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this),
                        status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: status.type === "success" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].success : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$products$2f$new$2f$AdminProducts$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                            role: "status",
                            children: status.text
                        }, void 0, false, {
                            fileName: "[project]/app/admin/products/new/page.tsx",
                            lineNumber: 405,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-primary",
                            type: "submit",
                            disabled: submitting,
                            children: submitting ? "Saving..." : "Create product"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/products/new/page.tsx",
                            lineNumber: 413,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/products/new/page.tsx",
                    lineNumber: 210,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/products/new/page.tsx",
            lineNumber: 204,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/admin/products/new/page.tsx",
        lineNumber: 203,
        columnNumber: 5
    }, this);
}
_s(NewProductPage, "vn2V7xLwABiL4eDaNMEg4HRc/3k=");
_c = NewProductPage;
var _c;
__turbopack_context__.k.register(_c, "NewProductPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_c489cf56._.js.map