(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/request-form/RequestForm.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "chip": "RequestForm-module__okqXIq__chip",
  "chipGroup": "RequestForm-module__okqXIq__chipGroup",
  "copy": "RequestForm-module__okqXIq__copy",
  "form": "RequestForm-module__okqXIq__form",
  "formActions": "RequestForm-module__okqXIq__formActions",
  "formNote": "RequestForm-module__okqXIq__formNote",
  "formRow": "RequestForm-module__okqXIq__formRow",
  "fullWidth": "RequestForm-module__okqXIq__fullWidth",
  "groupLabel": "RequestForm-module__okqXIq__groupLabel",
  "helperText": "RequestForm-module__okqXIq__helperText",
  "imagePlaceholder": "RequestForm-module__okqXIq__imagePlaceholder",
  "layout": "RequestForm-module__okqXIq__layout",
  "page": "RequestForm-module__okqXIq__page",
  "productList": "RequestForm-module__okqXIq__productList",
  "productMeta": "RequestForm-module__okqXIq__productMeta",
  "productMoq": "RequestForm-module__okqXIq__productMoq",
  "productName": "RequestForm-module__okqXIq__productName",
  "productRow": "RequestForm-module__okqXIq__productRow",
  "productRowActive": "RequestForm-module__okqXIq__productRowActive",
  "productThumb": "RequestForm-module__okqXIq__productThumb",
  "productsColumn": "RequestForm-module__okqXIq__productsColumn",
  "productsLayout": "RequestForm-module__okqXIq__productsLayout",
  "removeButton": "RequestForm-module__okqXIq__removeButton",
  "selectionInfo": "RequestForm-module__okqXIq__selectionInfo",
  "selectionItem": "RequestForm-module__okqXIq__selectionItem",
  "selectionList": "RequestForm-module__okqXIq__selectionList",
  "selectionMedia": "RequestForm-module__okqXIq__selectionMedia",
  "selectionPanel": "RequestForm-module__okqXIq__selectionPanel",
  "stepDescription": "RequestForm-module__okqXIq__stepDescription",
  "stepDot": "RequestForm-module__okqXIq__stepDot",
  "stepDotActive": "RequestForm-module__okqXIq__stepDotActive",
  "stepEyebrow": "RequestForm-module__okqXIq__stepEyebrow",
  "stepHeader": "RequestForm-module__okqXIq__stepHeader",
  "stepper": "RequestForm-module__okqXIq__stepper",
  "trustRow": "RequestForm-module__okqXIq__trustRow",
});
}),
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
"[project]/app/request-form/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RequestFormPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/request-form/RequestForm.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function RequestFormPage() {
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        company: "",
        phone: "",
        language: "",
        address: "",
        contactMethod: "",
        instagramHandle: "",
        productSelections: [],
        quantities: {},
        logoColor: "",
        message: ""
    });
    const [logoFile, setLogoFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleChange = (field, value)=>{
        setForm((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    const formatPhone = (value)=>{
        const digits = value.replace(/\D/g, "").slice(0, 10);
        if (digits.length <= 3) return digits;
        if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
        return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        setStatus("");
        setSubmitting(true);
        if (step < steps.length - 1) {
            handleNext();
            setSubmitting(false);
            return;
        }
        if (!form.name || !form.email) {
            setStatus("Name and work email are required.");
            setSubmitting(false);
            return;
        }
        if (form.productSelections.length === 0) {
            setStatus("Select at least one product.");
            setSubmitting(false);
            return;
        }
        if (!logoFile) {
            setStatus("Please upload a logo file.");
            setSubmitting(false);
            return;
        }
        const invalidQuantity = form.productSelections.find((product)=>{
            const raw = form.quantities[product.id];
            if (!raw) return true;
            const value = Number(raw);
            if (Number.isNaN(value) || value <= 0) return true;
            if (product.moq && value < product.moq) return true;
            return false;
        });
        if (invalidQuantity) {
            setStatus("Please enter valid quantities (meet MOQ when listed).");
            setSubmitting(false);
            return;
        }
        try {
            let logoUrl = null;
            if (logoFile) {
                const extension = logoFile.name.split(".").pop() || "png";
                const safeName = logoFile.name.replace(/[^a-zA-Z0-9._-]/g, "_");
                const path = `requests/${Date.now()}-${safeName || `logo.${extension}`}`;
                const { error: uploadError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from("request-logos").upload(path, logoFile, {
                    cacheControl: "3600",
                    upsert: false,
                    contentType: logoFile.type || "image/png"
                });
                if (uploadError) {
                    throw new Error(`Logo upload failed. Make sure the 'request-logos' bucket exists and allows public inserts.`);
                }
                const { data } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from("request-logos").getPublicUrl(path);
                logoUrl = data.publicUrl;
            }
            const response = await fetch("/api/requests", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...form,
                    logoUrl
                })
            });
            if (!response.ok) {
                throw new Error("Unable to submit request.");
            }
            setStatus("Request received. Our team will reach out within 24 hours.");
            setForm({
                name: "",
                email: "",
                company: "",
                phone: "",
                language: "",
                address: "",
                contactMethod: "",
                instagramHandle: "",
                productSelections: [],
                quantities: {},
                logoColor: "",
                message: ""
            });
            setLogoFile(null);
        } catch (error) {
            setStatus("Something went wrong. Please try again.");
        } finally{
            setSubmitting(false);
        }
    };
    const handleNext = ()=>{
        if (step === 0 && (!form.name || !form.email)) {
            setStatus("Please add your name and work email.");
            return;
        }
        if (step === 1 && form.productSelections.length === 0) {
            setStatus("Select at least one product.");
            return;
        }
        setStatus("");
        setStep((prev)=>Math.min(prev + 1, 1));
    };
    const handleBack = ()=>{
        setStatus("");
        setStep((prev)=>Math.max(prev - 1, 0));
    };
    const steps = [
        {
            title: "Contact",
            description: "Tell us who to follow up with."
        },
        {
            title: "Products",
            description: "Select products and quantities."
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RequestFormPage.useEffect": ()=>{
            const loadProducts = {
                "RequestFormPage.useEffect.loadProducts": async ()=>{
                    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("products").select("id, name, moq, product_images (url, sort_order)").eq("is_active", true).order("created_at", {
                        ascending: false
                    });
                    if (data) {
                        const mapped = data.map({
                            "RequestFormPage.useEffect.loadProducts.mapped": (item)=>{
                                const image = Array.isArray(item.product_images) ? item.product_images[0] : null;
                                const url = image?.url && image.url.startsWith("http") ? image.url : image?.url ? `${"TURBOPACK compile-time value", "https://zypgfpakzqswibxxqlow.supabase.co"}/storage/v1/object/public/product-images/${image.url.replace(/^\/+/, "")}` : null;
                                return {
                                    id: item.id,
                                    name: item.name,
                                    moq: item.moq ?? null,
                                    image: url
                                };
                            }
                        }["RequestFormPage.useEffect.loadProducts.mapped"]);
                        setProducts(mapped);
                    }
                }
            }["RequestFormPage.useEffect.loadProducts"];
            loadProducts();
        }
    }["RequestFormPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RequestFormPage.useEffect": ()=>{
            const googleKey = ("TURBOPACK compile-time value", "AIzaSyBna-wAd7DFLal9ey48j3EWZGZ7EGa3T8U");
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=${googleKey}&libraries=places`;
            script.async = true;
            script.onload = ({
                "RequestFormPage.useEffect": ()=>{
                    const input = document.getElementById("address");
                    const googleApi = window.google;
                    if (!input || !googleApi?.maps?.places) return;
                    const autocomplete = new googleApi.maps.places.Autocomplete(input, {
                        types: [
                            "address"
                        ]
                    });
                    autocomplete.addListener("place_changed", {
                        "RequestFormPage.useEffect": ()=>{
                            const place = autocomplete.getPlace();
                            if (place?.formatted_address) {
                                handleChange("address", place.formatted_address);
                            }
                        }
                    }["RequestFormPage.useEffect"]);
                }
            })["RequestFormPage.useEffect"];
            document.body.appendChild(script);
            return ({
                "RequestFormPage.useEffect": ()=>{
                    document.body.removeChild(script);
                }
            })["RequestFormPage.useEffect"];
        }
    }["RequestFormPage.useEffect"], []);
    const filteredProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RequestFormPage.useMemo[filteredProducts]": ()=>{
            const query = search.trim().toLowerCase();
            if (!query) return products;
            return products.filter({
                "RequestFormPage.useMemo[filteredProducts]": (product)=>product.name.toLowerCase().includes(query)
            }["RequestFormPage.useMemo[filteredProducts]"]);
        }
    }["RequestFormPage.useMemo[filteredProducts]"], [
        products,
        search
    ]);
    const toggleProduct = (product)=>{
        setForm((prev)=>{
            const exists = prev.productSelections.some((item)=>item.id === product.id);
            if (exists) {
                const nextSelections = prev.productSelections.filter((item)=>item.id !== product.id);
                const nextQuantities = {
                    ...prev.quantities
                };
                delete nextQuantities[product.id];
                return {
                    ...prev,
                    productSelections: nextSelections,
                    quantities: nextQuantities
                };
            }
            return {
                ...prev,
                productSelections: [
                    ...prev.productSelections,
                    product
                ]
            };
        });
    };
    const removeProduct = (productId)=>{
        setForm((prev)=>{
            const nextSelections = prev.productSelections.filter((item)=>item.id !== productId);
            const nextQuantities = {
                ...prev.quantities
            };
            delete nextQuantities[productId];
            return {
                ...prev,
                productSelections: nextSelections,
                quantities: nextQuantities
            };
        });
    };
    const updateQuantity = (productId, value)=>{
        setForm((prev)=>({
                ...prev,
                quantities: {
                    ...prev.quantities,
                    [productId]: value
                }
            }));
    };
    const isInstagram = form.contactMethod === "Instagram";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `container ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].layout}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].copy,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Request a quote."
                        }, void 0, false, {
                            fileName: "[project]/app/request-form/page.tsx",
                            lineNumber: 277,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trustRow,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Proof before print"
                                }, void 0, false, {
                                    fileName: "[project]/app/request-form/page.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Reorder-ready"
                                }, void 0, false, {
                                    fileName: "[project]/app/request-form/page.tsx",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/request-form/page.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Our team responds within 24 hours with a supplier-ready quote."
                        }, void 0, false, {
                            fileName: "[project]/app/request-form/page.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/request-form/page.tsx",
                    lineNumber: 276,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepEyebrow,
                                            children: [
                                                "Step ",
                                                step + 1,
                                                " of ",
                                                steps.length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/request-form/page.tsx",
                                            lineNumber: 289,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: steps[step].title
                                        }, void 0, false, {
                                            fileName: "[project]/app/request-form/page.tsx",
                                            lineNumber: 292,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepDescription,
                                            children: steps[step].description
                                        }, void 0, false, {
                                            fileName: "[project]/app/request-form/page.tsx",
                                            lineNumber: 293,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/request-form/page.tsx",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepper,
                                    "aria-hidden": "true",
                                    children: steps.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepDot} ${index <= step ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepDotActive : ""}`
                                        }, item.title, false, {
                                            fileName: "[project]/app/request-form/page.tsx",
                                            lineNumber: 297,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/request-form/page.tsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/request-form/page.tsx",
                            lineNumber: 287,
                            columnNumber: 11
                        }, this),
                        step === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                "Name *",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    required: true,
                                                    value: form.name,
                                                    onChange: (event)=>handleChange("name", event.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/request-form/page.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/request-form/page.tsx",
                                            lineNumber: 308,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                "Work email *",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    required: true,
                                                    value: form.email,
                                                    onChange: (event)=>handleChange("email", event.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/request-form/page.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/request-form/page.tsx",
                                            lineNumber: 317,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/request-form/page.tsx",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                "Phone number",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    value: form.phone,
                                                    onChange: (event)=>handleChange("phone", formatPhone(event.target.value))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/request-form/page.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/request-form/page.tsx",
                                            lineNumber: 328,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                "Language",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: form.language,
                                                    onChange: (event)=>handleChange("language", event.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select language"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/request-form/page.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "English",
                                                            children: "English"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/request-form/page.tsx",
                                                            lineNumber: 343,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Spanish",
                                                            children: "Spanish"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/request-form/page.tsx",
                                                            lineNumber: 344,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "French",
                                                            children: "French"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/request-form/page.tsx",
                                                            lineNumber: 345,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Arabic",
                                                            children: "Arabic"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/request-form/page.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/request-form/page.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/request-form/page.tsx",
                                            lineNumber: 336,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/request-form/page.tsx",
                                    lineNumber: 327,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fullWidth,
                                    children: [
                                        "Shipping address",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "address",
                                            type: "text",
                                            placeholder: "Start typing your address",
                                            value: form.address,
                                            onChange: (event)=>handleChange("address", event.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/app/request-form/page.tsx",
                                            lineNumber: 352,
                                            columnNumber: 17
                                        }, this),
                                        ("TURBOPACK compile-time falsy", 0) ? /*#__PURE__*/ "TURBOPACK unreachable" : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/request-form/page.tsx",
                                    lineNumber: 350,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                "Preferred contact method",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: form.contactMethod,
                                                    onChange: (event)=>handleChange("contactMethod", event.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select method"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/request-form/page.tsx",
                                                            lineNumber: 372,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Email",
                                                            children: "Email"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/request-form/page.tsx",
                                                            lineNumber: 373,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Text",
                                                            children: "Text"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/request-form/page.tsx",
                                                            lineNumber: 374,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "WhatsApp",
                                                            children: "WhatsApp"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/request-form/page.tsx",
                                                            lineNumber: 375,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Instagram",
                                                            children: "Instagram"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/request-form/page.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/request-form/page.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/request-form/page.tsx",
                                            lineNumber: 366,
                                            columnNumber: 17
                                        }, this),
                                        isInstagram ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                "Instagram username",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "@yourhandle",
                                                    value: form.instagramHandle,
                                                    onChange: (event)=>handleChange("instagramHandle", event.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/request-form/page.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/request-form/page.tsx",
                                            lineNumber: 380,
                                            columnNumber: 19
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/request-form/page.tsx",
                                    lineNumber: 365,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : null,
                        step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productsLayout,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productsColumn,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fullWidth,
                                                children: [
                                                    "Search products",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "search",
                                                        placeholder: "Search by product name",
                                                        value: search,
                                                        onChange: (event)=>setSearch(event.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/request-form/page.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/request-form/page.tsx",
                                                lineNumber: 398,
                                                columnNumber: 19
                                            }, this),
                                            search.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productList,
                                                children: filteredProducts.map((product)=>{
                                                    const selected = form.productSelections.some((item)=>item.id === product.id);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productRow} ${selected ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productRowActive : ""}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: selected,
                                                                onChange: ()=>toggleProduct(product)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/request-form/page.tsx",
                                                                lineNumber: 420,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productThumb,
                                                                children: product.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: product.image,
                                                                    alt: product.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/request-form/page.tsx",
                                                                    lineNumber: 427,
                                                                    columnNumber: 33
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imagePlaceholder
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/request-form/page.tsx",
                                                                    lineNumber: 429,
                                                                    columnNumber: 33
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/request-form/page.tsx",
                                                                lineNumber: 425,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productMeta,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productName,
                                                                        children: product.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/request-form/page.tsx",
                                                                        lineNumber: 433,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productMoq,
                                                                        children: product.moq ? `MOQ ${product.moq}` : "No MOQ"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/request-form/page.tsx",
                                                                        lineNumber: 434,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/request-form/page.tsx",
                                                                lineNumber: 432,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, product.id, true, {
                                                        fileName: "[project]/app/request-form/page.tsx",
                                                        lineNumber: 414,
                                                        columnNumber: 27
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/request-form/page.tsx",
                                                lineNumber: 408,
                                                columnNumber: 21
                                            }, this) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formRow,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            "Upload logo file",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                accept: "image/*",
                                                                required: true,
                                                                onChange: (event)=>setLogoFile(event.target.files?.[0] ?? null)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/request-form/page.tsx",
                                                                lineNumber: 446,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/request-form/page.tsx",
                                                        lineNumber: 444,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            "Logo color",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                placeholder: "Black, white, Pantone 186",
                                                                value: form.logoColor,
                                                                onChange: (event)=>handleChange("logoColor", event.target.value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/request-form/page.tsx",
                                                                lineNumber: 457,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/request-form/page.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/request-form/page.tsx",
                                                lineNumber: 443,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fullWidth,
                                                children: [
                                                    "Project details",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        rows: 5,
                                                        value: form.message,
                                                        onChange: (event)=>handleChange("message", event.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/request-form/page.tsx",
                                                        lineNumber: 467,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/request-form/page.tsx",
                                                lineNumber: 465,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/request-form/page.tsx",
                                        lineNumber: 397,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productsColumn,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectionPanel,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: "Selected products"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/request-form/page.tsx",
                                                    lineNumber: 476,
                                                    columnNumber: 21
                                                }, this),
                                                form.productSelections.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectionList,
                                                    children: form.productSelections.map((product)=>{
                                                        const image = products.find((item)=>item.id === product.id)?.image;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectionItem,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectionMedia,
                                                                    children: image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: image,
                                                                        alt: product.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/request-form/page.tsx",
                                                                        lineNumber: 486,
                                                                        columnNumber: 35
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imagePlaceholder
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/request-form/page.tsx",
                                                                        lineNumber: 488,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/request-form/page.tsx",
                                                                    lineNumber: 484,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectionInfo,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: product.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/request-form/page.tsx",
                                                                            lineNumber: 492,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: product.moq ? `MOQ ${product.moq}` : "No MOQ listed"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/request-form/page.tsx",
                                                                            lineNumber: 493,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/request-form/page.tsx",
                                                                    lineNumber: 491,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    min: product.moq ?? 1,
                                                                    value: form.quantities[product.id] ?? "",
                                                                    placeholder: "Quantity",
                                                                    onChange: (event)=>updateQuantity(product.id, event.target.value)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/request-form/page.tsx",
                                                                    lineNumber: 497,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].removeButton,
                                                                    type: "button",
                                                                    onClick: ()=>removeProduct(product.id),
                                                                    children: "Remove"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/request-form/page.tsx",
                                                                    lineNumber: 506,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, product.id, true, {
                                                            fileName: "[project]/app/request-form/page.tsx",
                                                            lineNumber: 483,
                                                            columnNumber: 29
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/request-form/page.tsx",
                                                    lineNumber: 478,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                                                    children: "No products selected yet."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/request-form/page.tsx",
                                                    lineNumber: 518,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/request-form/page.tsx",
                                            lineNumber: 475,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/request-form/page.tsx",
                                        lineNumber: 474,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/request-form/page.tsx",
                                lineNumber: 396,
                                columnNumber: 15
                            }, this)
                        }, void 0, false) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formActions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-secondary",
                                    type: "button",
                                    onClick: handleBack,
                                    disabled: step === 0,
                                    children: "Back"
                                }, void 0, false, {
                                    fileName: "[project]/app/request-form/page.tsx",
                                    lineNumber: 527,
                                    columnNumber: 13
                                }, this),
                                step < steps.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-primary",
                                    type: "button",
                                    onClick: handleNext,
                                    children: "Continue"
                                }, void 0, false, {
                                    fileName: "[project]/app/request-form/page.tsx",
                                    lineNumber: 536,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-primary",
                                    type: "submit",
                                    disabled: submitting,
                                    children: submitting ? "Sending..." : "Request a Quote"
                                }, void 0, false, {
                                    fileName: "[project]/app/request-form/page.tsx",
                                    lineNumber: 540,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/request-form/page.tsx",
                            lineNumber: 526,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$request$2d$form$2f$RequestForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formNote,
                            role: "status",
                            "aria-live": "polite",
                            children: status
                        }, void 0, false, {
                            fileName: "[project]/app/request-form/page.tsx",
                            lineNumber: 546,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/request-form/page.tsx",
                    lineNumber: 286,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/request-form/page.tsx",
            lineNumber: 275,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/request-form/page.tsx",
        lineNumber: 274,
        columnNumber: 5
    }, this);
}
_s(RequestFormPage, "lFhpFVjKxxhiHbtpR21gUzyxl8U=");
_c = RequestFormPage;
var _c;
__turbopack_context__.k.register(_c, "RequestFormPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_dbdca3d0._.js.map