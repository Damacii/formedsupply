(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Hero.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "hero": "Hero-module__Z8hQ_W__hero",
  "heroActions": "Hero-module__Z8hQ_W__heroActions",
  "heroContent": "Hero-module__Z8hQ_W__heroContent",
  "heroEditor": "Hero-module__Z8hQ_W__heroEditor",
  "heroEditorActions": "Hero-module__Z8hQ_W__heroEditorActions",
  "heroEditorAnchor": "Hero-module__Z8hQ_W__heroEditorAnchor",
  "heroEditorEmpty": "Hero-module__Z8hQ_W__heroEditorEmpty",
  "heroEditorError": "Hero-module__Z8hQ_W__heroEditorError",
  "heroEditorField": "Hero-module__Z8hQ_W__heroEditorField",
  "heroEditorForm": "Hero-module__Z8hQ_W__heroEditorForm",
  "heroEditorHeader": "Hero-module__Z8hQ_W__heroEditorHeader",
  "heroEditorItem": "Hero-module__Z8hQ_W__heroEditorItem",
  "heroEditorList": "Hero-module__Z8hQ_W__heroEditorList",
  "heroEditorOpen": "Hero-module__Z8hQ_W__heroEditorOpen",
  "heroEditorThumb": "Hero-module__Z8hQ_W__heroEditorThumb",
  "heroGrid": "Hero-module__Z8hQ_W__heroGrid",
  "heroSkuBox": "Hero-module__Z8hQ_W__heroSkuBox",
  "heroSlide": "Hero-module__Z8hQ_W__heroSlide",
  "heroSlideBack": "Hero-module__Z8hQ_W__heroSlideBack",
  "heroSlideFront": "Hero-module__Z8hQ_W__heroSlideFront",
  "heroSlideMid": "Hero-module__Z8hQ_W__heroSlideMid",
  "heroSlideOne": "Hero-module__Z8hQ_W__heroSlideOne",
  "heroSlideThree": "Hero-module__Z8hQ_W__heroSlideThree",
  "heroSlideTwo": "Hero-module__Z8hQ_W__heroSlideTwo",
  "heroSlider": "Hero-module__Z8hQ_W__heroSlider",
  "heroSliderDragging": "Hero-module__Z8hQ_W__heroSliderDragging",
  "heroSliderWrap": "Hero-module__Z8hQ_W__heroSliderWrap",
  "heroSubhead": "Hero-module__Z8hQ_W__heroSubhead",
  "heroVisual": "Hero-module__Z8hQ_W__heroVisual",
  "trustRow": "Hero-module__Z8hQ_W__trustRow",
});
}),
"[project]/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Hero.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const HERO_SLIDES_KEY = "formedSupplyHeroSlides";
function Hero() {
    _s();
    const defaultSlides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Hero.useMemo[defaultSlides]": ()=>[
                {
                    id: "default-1",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroSlideOne,
                    sku: "FS-101"
                },
                {
                    id: "default-2",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroSlideTwo,
                    sku: "FS-204"
                },
                {
                    id: "default-3",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroSlideThree,
                    sku: "FS-318"
                }
            ]
    }["Hero.useMemo[defaultSlides]"], []);
    const [customSlides, setCustomSlides] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [storageError, setStorageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDirty, setIsDirty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const slides = customSlides.length ? customSlides : defaultSlides;
    const slideCount = slides.length;
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dragX, setDragX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dragStartX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const dragMoved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const hasLoaded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const dragStyle = {
        "--drag-x": `${dragX}px`
    };
    const activeSlide = slides[activeIndex];
    const activeSku = activeSlide?.sku ?? "";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const stored = window.localStorage.getItem(HERO_SLIDES_KEY);
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    if (Array.isArray(parsed)) {
                        setCustomSlides(parsed.map({
                            "Hero.useEffect": (slide)=>({
                                    id: slide.id || `stored-${Math.random().toString(16).slice(2)}`,
                                    src: slide.src,
                                    sku: slide.sku,
                                    href: slide.href
                                })
                        }["Hero.useEffect"]));
                    }
                } catch  {
                    setCustomSlides([]);
                }
            }
            hasLoaded.current = true;
            setIsDirty(false);
        }
    }["Hero.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const updateEditorState = {
                "Hero.useEffect.updateEditorState": ()=>{
                    setIsEditing(window.location.hash === "#edit-site");
                }
            }["Hero.useEffect.updateEditorState"];
            updateEditorState();
            window.addEventListener("hashchange", updateEditorState);
            return ({
                "Hero.useEffect": ()=>window.removeEventListener("hashchange", updateEditorState)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            if (isDragging || isHovered || slideCount < 2) {
                return;
            }
            const timer = window.setInterval({
                "Hero.useEffect.timer": ()=>{
                    setActiveIndex({
                        "Hero.useEffect.timer": (index)=>(index + 1) % slideCount
                    }["Hero.useEffect.timer"]);
                }
            }["Hero.useEffect.timer"], 3500);
            return ({
                "Hero.useEffect": ()=>window.clearInterval(timer)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], [
        isDragging,
        isHovered,
        slideCount
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            if (activeIndex >= slideCount) {
                setActiveIndex(0);
            }
        }
    }["Hero.useEffect"], [
        activeIndex,
        slideCount
    ]);
    const handleCloseEditor = ()=>{
        setIsEditing(false);
        if (window.location.hash === "#edit-site") {
            history.replaceState(null, "", window.location.pathname + window.location.search);
        }
    };
    const handleSaveSlides = ()=>{
        if (!hasLoaded.current) return;
        try {
            if (customSlides.length === 0) {
                window.localStorage.removeItem(HERO_SLIDES_KEY);
            } else {
                window.localStorage.setItem(HERO_SLIDES_KEY, JSON.stringify(customSlides));
            }
            setStorageError(false);
            setIsDirty(false);
        } catch  {
            setStorageError(true);
        }
    };
    const compressImage = async (file)=>{
        const bitmap = await createImageBitmap(file);
        const maxSize = 2560;
        const scale = Math.min(1, maxSize / Math.max(bitmap.width, bitmap.height));
        const targetWidth = Math.round(bitmap.width * scale);
        const targetHeight = Math.round(bitmap.height * scale);
        const canvas = document.createElement("canvas");
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            throw new Error("No canvas context");
        }
        ctx.drawImage(bitmap, 0, 0, targetWidth, targetHeight);
        return canvas.toDataURL("image/webp", 0.95);
    };
    const handleImageUpload = async (event)=>{
        const files = Array.from(event.target.files ?? []);
        if (!files.length) return;
        const uploads = await Promise.all(files.map((file)=>new Promise((resolve, reject)=>{
                compressImage(file).then((dataUrl)=>{
                    resolve({
                        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
                        src: dataUrl,
                        sku: "",
                        href: ""
                    });
                }).catch(()=>{
                    const reader = new FileReader();
                    reader.onload = ()=>{
                        resolve({
                            id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
                            src: String(reader.result || ""),
                            sku: "",
                            href: ""
                        });
                    };
                    reader.onerror = ()=>reject(new Error("Failed to read image"));
                    reader.readAsDataURL(file);
                });
            })));
        setCustomSlides((prev)=>[
                ...prev,
                ...uploads
            ]);
        setIsDirty(true);
        event.target.value = "";
    };
    const handleSlideMetaChange = (index, field, value)=>{
        setCustomSlides((prev)=>prev.map((slide, slideIndex)=>slideIndex === index ? {
                    ...slide,
                    [field]: value
                } : slide));
        setIsDirty(true);
    };
    const handleRemoveSlide = (index)=>{
        setCustomSlides((prev)=>prev.filter((_, slideIndex)=>slideIndex !== index));
        setIsDirty(true);
    };
    const handlePointerDown = (event)=>{
        dragStartX.current = event.clientX;
        dragMoved.current = false;
        setIsDragging(true);
        event.currentTarget.setPointerCapture(event.pointerId);
    };
    const handlePointerMove = (event)=>{
        if (!isDragging) return;
        const delta = event.clientX - dragStartX.current;
        if (Math.abs(delta) > 6) {
            dragMoved.current = true;
        }
        setDragX(delta);
    };
    const handlePointerUp = (event)=>{
        if (!isDragging) return;
        const delta = event.clientX - dragStartX.current;
        setIsDragging(false);
        setDragX(0);
        event.currentTarget.releasePointerCapture(event.pointerId);
        if (Math.abs(delta) < 40) {
            return;
        }
        setActiveIndex((index)=>{
            if (delta > 0) {
                return (index - 1 + slideCount) % slideCount;
            }
            return (index + 1) % slideCount;
        });
    };
    const handlePointerCancel = ()=>{
        setIsDragging(false);
        setDragX(0);
        dragMoved.current = false;
    };
    const handleSliderClick = ()=>{
        if (isDragging || dragMoved.current) {
            return;
        }
        const href = activeSlide?.href;
        if (href) {
            window.location.href = href;
        }
    };
    const handleKeyDown = (event)=>{
        if (event.key === "ArrowLeft") {
            setActiveIndex((index)=>(index - 1 + slideCount) % slideCount);
        }
        if (event.key === "ArrowRight") {
            setActiveIndex((index)=>(index + 1) % slideCount);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hero,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `container ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroGrid}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroContent,
                        "data-reveal": true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "Branded print & supplies for coffee shops and restaurants."
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroSubhead,
                                children: "Cups, menus, labels, packaging, signage — consistent, fast, and clean."
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroActions,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "btn btn-primary",
                                        href: "/request-form",
                                        children: "Request a Quote"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 260,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "btn btn-secondary",
                                        href: "#products",
                                        children: "View Products"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trustRow,
                                "aria-label": "Hero trust points",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Proof before print"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Quotes in 24 hours"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Reorder-ready"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 267,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroVisual,
                        role: "img",
                        "aria-label": "Rotating product highlights",
                        "data-reveal": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroSliderWrap,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroSlider} ${isDragging ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroSliderDragging : ""}`,
                                    style: dragStyle,
                                    role: "group",
                                    "aria-roledescription": "carousel",
                                    "aria-label": "Product visuals",
                                    tabIndex: 0,
                                    onPointerDown: handlePointerDown,
                                    onPointerMove: handlePointerMove,
                                    onPointerUp: handlePointerUp,
                                    onPointerCancel: handlePointerCancel,
                                    onKeyDown: handleKeyDown,
                                    onMouseEnter: ()=>setIsHovered(true),
                                    onMouseLeave: ()=>setIsHovered(false),
                                    onClick: handleSliderClick,
                                    children: slides.map((slide, index)=>{
                                        const position = index === activeIndex ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroSlideFront : index === (activeIndex + 1) % slideCount ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroSlideMid : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroSlideBack;
                                        const slideStyle = slide.src ? {
                                            backgroundImage: `url(${slide.src})`
                                        } : undefined;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroSlide} ${slide.className ?? ""} ${position}`,
                                            style: slideStyle,
                                            "aria-hidden": "true"
                                        }, slide.id, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 307,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroSkuBox,
                                    children: [
                                        "Product being shown is SKU:",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: activeSku ? activeSku : "Unassigned"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 318,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 316,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `container ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroEditorAnchor}`,
                id: "edit-site"
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 323,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `container ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroEditor} ${isEditing ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroEditorOpen : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroEditorHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Edit Site"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Upload hero images and link each one to a SKU or product page."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 328,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 326,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroEditorActions,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-primary",
                                        type: "button",
                                        onClick: handleSaveSlides,
                                        disabled: !isDirty,
                                        children: "Save Changes"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 331,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-secondary",
                                        type: "button",
                                        onClick: handleCloseEditor,
                                        children: "Close Editor"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 339,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 330,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroEditorForm,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroEditorField,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Upload hero images"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 346,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        accept: "image/*",
                                        multiple: true,
                                        onChange: handleImageUpload
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 347,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 345,
                                columnNumber: 11
                            }, this),
                            storageError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroEditorError,
                                children: "Storage limit reached. Upload fewer/smaller images or refresh to clear saved data."
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 350,
                                columnNumber: 13
                            }, this) : null,
                            customSlides.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroEditorEmpty,
                                children: "No hero images uploaded yet."
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 356,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroEditorList,
                                children: customSlides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroEditorItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroEditorThumb,
                                                children: slide.src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: slide.src,
                                                    alt: ""
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Hero.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 34
                                                }, this) : null
                                            }, void 0, false, {
                                                fileName: "[project]/components/Hero.tsx",
                                                lineNumber: 361,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroEditorField,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "SKU"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Hero.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: slide.sku ?? "",
                                                        onChange: (event)=>handleSlideMetaChange(index, "sku", event.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Hero.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Hero.tsx",
                                                lineNumber: 364,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroEditorField,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Product link"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Hero.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "url",
                                                        value: slide.href ?? "",
                                                        placeholder: "https://",
                                                        onChange: (event)=>handleSlideMetaChange(index, "href", event.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Hero.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Hero.tsx",
                                                lineNumber: 374,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn btn-secondary",
                                                type: "button",
                                                onClick: ()=>handleRemoveSlide(index),
                                                children: "Remove"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Hero.tsx",
                                                lineNumber: 385,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, slide.id, true, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 360,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 358,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 324,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Hero.tsx",
        lineNumber: 252,
        columnNumber: 5
    }, this);
}
_s(Hero, "RYMqrN8X4uK9mmePcwoyjlwSqxM=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Trusted.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "logoEditor": "Trusted-module__TZMPnq__logoEditor",
  "logoEditorActions": "Trusted-module__TZMPnq__logoEditorActions",
  "logoEditorEmpty": "Trusted-module__TZMPnq__logoEditorEmpty",
  "logoEditorError": "Trusted-module__TZMPnq__logoEditorError",
  "logoEditorField": "Trusted-module__TZMPnq__logoEditorField",
  "logoEditorHeader": "Trusted-module__TZMPnq__logoEditorHeader",
  "logoEditorItem": "Trusted-module__TZMPnq__logoEditorItem",
  "logoEditorList": "Trusted-module__TZMPnq__logoEditorList",
  "logoEditorThumb": "Trusted-module__TZMPnq__logoEditorThumb",
  "logoImage": "Trusted-module__TZMPnq__logoImage",
  "logoMarquee": "Trusted-module__TZMPnq__logoMarquee",
  "logoTrack": "Trusted-module__TZMPnq__logoTrack",
  "marquee": "Trusted-module__TZMPnq__marquee",
  "trusted": "Trusted-module__TZMPnq__trusted",
});
}),
"[project]/components/Trusted.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Trusted
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Trusted$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Trusted.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const LOGO_STORAGE_KEY = "formedSupplyMarqueeLogos";
function Trusted() {
    _s();
    const [customLogos, setCustomLogos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDirty, setIsDirty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [storageError, setStorageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const hasLoaded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Trusted.useEffect": ()=>{
            const stored = window.localStorage.getItem(LOGO_STORAGE_KEY);
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    if (Array.isArray(parsed)) {
                        setCustomLogos(parsed.map({
                            "Trusted.useEffect": (logo)=>({
                                    id: logo.id || `logo-${Math.random().toString(16).slice(2)}`,
                                    src: logo.src,
                                    alt: logo.alt || "Partner logo"
                                })
                        }["Trusted.useEffect"]));
                    }
                } catch  {
                    setCustomLogos([]);
                }
            }
            hasLoaded.current = true;
            setIsDirty(false);
        }
    }["Trusted.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Trusted.useEffect": ()=>{
            const updateEditorState = {
                "Trusted.useEffect.updateEditorState": ()=>{
                    setIsEditing(window.location.hash === "#edit-site");
                }
            }["Trusted.useEffect.updateEditorState"];
            updateEditorState();
            window.addEventListener("hashchange", updateEditorState);
            return ({
                "Trusted.useEffect": ()=>window.removeEventListener("hashchange", updateEditorState)
            })["Trusted.useEffect"];
        }
    }["Trusted.useEffect"], []);
    const compressLogo = async (file)=>{
        const bitmap = await createImageBitmap(file);
        const maxSize = 600;
        const scale = Math.min(1, maxSize / Math.max(bitmap.width, bitmap.height));
        const targetWidth = Math.round(bitmap.width * scale);
        const targetHeight = Math.round(bitmap.height * scale);
        const canvas = document.createElement("canvas");
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            throw new Error("No canvas context");
        }
        ctx.drawImage(bitmap, 0, 0, targetWidth, targetHeight);
        return canvas.toDataURL("image/webp", 0.82);
    };
    const handleLogoUpload = async (event)=>{
        const files = Array.from(event.target.files ?? []);
        if (!files.length) return;
        const uploads = await Promise.all(files.map(async (file)=>{
            try {
                const dataUrl = await compressLogo(file);
                return {
                    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
                    src: dataUrl,
                    alt: file.name.replace(/\.[^/.]+$/, "") || "Partner logo"
                };
            } catch  {
                return null;
            }
        }));
        setCustomLogos((prev)=>[
                ...prev,
                ...uploads.filter(Boolean)
            ]);
        setIsDirty(true);
        event.target.value = "";
    };
    const handleRemoveLogo = (index)=>{
        setCustomLogos((prev)=>prev.filter((_, logoIndex)=>logoIndex !== index));
        setIsDirty(true);
    };
    const handleSaveLogos = ()=>{
        if (!hasLoaded.current) return;
        try {
            if (customLogos.length === 0) {
                window.localStorage.removeItem(LOGO_STORAGE_KEY);
            } else {
                window.localStorage.setItem(LOGO_STORAGE_KEY, JSON.stringify(customLogos));
            }
            setStorageError(false);
            setIsDirty(false);
        } catch  {
            setStorageError(true);
        }
    };
    const logoItems = customLogos.length ? customLogos : null;
    const marqueeItems = logoItems ? [
        ...logoItems,
        ...logoItems
    ] : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Trusted$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trusted,
        "aria-label": "Trusted by",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "section-label",
                    children: "Trusted by"
                }, void 0, false, {
                    fileName: "[project]/components/Trusted.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Trusted$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoMarquee,
                    "data-reveal": true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Trusted$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoTrack,
                        children: marqueeItems ? marqueeItems.map((logo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Trusted$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage,
                                src: logo.src,
                                alt: logo.alt
                            }, `${logo.id}-${index}`, false, {
                                fileName: "[project]/components/Trusted.tsx",
                                lineNumber: 122,
                                columnNumber: 17
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 160 40",
                                    role: "img",
                                    "aria-label": "Northline Coffee",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: "160",
                                            height: "40",
                                            rx: "8",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Trusted.tsx",
                                            lineNumber: 132,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "18",
                                            y: "26",
                                            fontSize: "14",
                                            fontFamily: "system-ui, sans-serif",
                                            children: "Northline"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Trusted.tsx",
                                            lineNumber: 133,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Trusted.tsx",
                                    lineNumber: 131,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 160 40",
                                    role: "img",
                                    "aria-label": "Harbor Roasters",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: "160",
                                            height: "40",
                                            rx: "8",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Trusted.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "18",
                                            y: "26",
                                            fontSize: "14",
                                            fontFamily: "system-ui, sans-serif",
                                            children: "Harbor"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Trusted.tsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Trusted.tsx",
                                    lineNumber: 135,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 160 40",
                                    role: "img",
                                    "aria-label": "Union Kitchen",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: "160",
                                            height: "40",
                                            rx: "8",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Trusted.tsx",
                                            lineNumber: 140,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "18",
                                            y: "26",
                                            fontSize: "14",
                                            fontFamily: "system-ui, sans-serif",
                                            children: "Union"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Trusted.tsx",
                                            lineNumber: 141,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Trusted.tsx",
                                    lineNumber: 139,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 160 40",
                                    role: "img",
                                    "aria-label": "Drift Markets",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: "160",
                                            height: "40",
                                            rx: "8",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Trusted.tsx",
                                            lineNumber: 144,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "18",
                                            y: "26",
                                            fontSize: "14",
                                            fontFamily: "system-ui, sans-serif",
                                            children: "Drift"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Trusted.tsx",
                                            lineNumber: 145,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Trusted.tsx",
                                    lineNumber: 143,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 160 40",
                                    role: "img",
                                    "aria-label": "Slate Cafe",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: "160",
                                            height: "40",
                                            rx: "8",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Trusted.tsx",
                                            lineNumber: 148,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "18",
                                            y: "26",
                                            fontSize: "14",
                                            fontFamily: "system-ui, sans-serif",
                                            children: "Slate"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Trusted.tsx",
                                            lineNumber: 149,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Trusted.tsx",
                                    lineNumber: 147,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 160 40",
                                    role: "img",
                                    "aria-label": "Northline Coffee",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: "160",
                                            height: "40",
                                            rx: "8",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Trusted.tsx",
                                            lineNumber: 152,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "18",
                                            y: "26",
                                            fontSize: "14",
                                            fontFamily: "system-ui, sans-serif",
                                            children: "Northline"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Trusted.tsx",
                                            lineNumber: 153,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Trusted.tsx",
                                    lineNumber: 151,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 160 40",
                                    role: "img",
                                    "aria-label": "Harbor Roasters",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: "160",
                                            height: "40",
                                            rx: "8",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Trusted.tsx",
                                            lineNumber: 156,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "18",
                                            y: "26",
                                            fontSize: "14",
                                            fontFamily: "system-ui, sans-serif",
                                            children: "Harbor"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Trusted.tsx",
                                            lineNumber: 157,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Trusted.tsx",
                                    lineNumber: 155,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 160 40",
                                    role: "img",
                                    "aria-label": "Union Kitchen",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: "160",
                                            height: "40",
                                            rx: "8",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Trusted.tsx",
                                            lineNumber: 160,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "18",
                                            y: "26",
                                            fontSize: "14",
                                            fontFamily: "system-ui, sans-serif",
                                            children: "Union"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Trusted.tsx",
                                            lineNumber: 161,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Trusted.tsx",
                                    lineNumber: 159,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 160 40",
                                    role: "img",
                                    "aria-label": "Drift Markets",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: "160",
                                            height: "40",
                                            rx: "8",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Trusted.tsx",
                                            lineNumber: 164,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "18",
                                            y: "26",
                                            fontSize: "14",
                                            fontFamily: "system-ui, sans-serif",
                                            children: "Drift"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Trusted.tsx",
                                            lineNumber: 165,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Trusted.tsx",
                                    lineNumber: 163,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 160 40",
                                    role: "img",
                                    "aria-label": "Slate Cafe",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: "160",
                                            height: "40",
                                            rx: "8",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Trusted.tsx",
                                            lineNumber: 168,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "18",
                                            y: "26",
                                            fontSize: "14",
                                            fontFamily: "system-ui, sans-serif",
                                            children: "Slate"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Trusted.tsx",
                                            lineNumber: 169,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Trusted.tsx",
                                    lineNumber: 167,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/components/Trusted.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Trusted.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
                isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Trusted$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoEditor,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Trusted$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoEditorHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Edit Marquee Logos"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Trusted.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Upload brand logos to display in the marquee."
                                        }, void 0, false, {
                                            fileName: "[project]/components/Trusted.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Trusted.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Trusted$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoEditorActions,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-primary",
                                        type: "button",
                                        onClick: handleSaveLogos,
                                        disabled: !isDirty,
                                        children: "Save Logos"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Trusted.tsx",
                                        lineNumber: 183,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Trusted.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Trusted.tsx",
                            lineNumber: 177,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Trusted$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoEditorField,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Upload logos"
                                }, void 0, false, {
                                    fileName: "[project]/components/Trusted.tsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    accept: "image/*",
                                    multiple: true,
                                    onChange: handleLogoUpload
                                }, void 0, false, {
                                    fileName: "[project]/components/Trusted.tsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Trusted.tsx",
                            lineNumber: 193,
                            columnNumber: 13
                        }, this),
                        storageError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Trusted$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoEditorError,
                            children: "Storage limit reached. Upload fewer/smaller logos."
                        }, void 0, false, {
                            fileName: "[project]/components/Trusted.tsx",
                            lineNumber: 198,
                            columnNumber: 15
                        }, this) : null,
                        customLogos.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Trusted$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoEditorEmpty,
                            children: "No custom logos uploaded yet."
                        }, void 0, false, {
                            fileName: "[project]/components/Trusted.tsx",
                            lineNumber: 203,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Trusted$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoEditorList,
                            children: customLogos.map((logo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Trusted$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoEditorItem,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Trusted$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoEditorThumb,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: logo.src,
                                                alt: logo.alt
                                            }, void 0, false, {
                                                fileName: "[project]/components/Trusted.tsx",
                                                lineNumber: 209,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Trusted.tsx",
                                            lineNumber: 208,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: logo.alt
                                        }, void 0, false, {
                                            fileName: "[project]/components/Trusted.tsx",
                                            lineNumber: 211,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-secondary",
                                            type: "button",
                                            onClick: ()=>handleRemoveLogo(index),
                                            children: "Remove"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Trusted.tsx",
                                            lineNumber: 212,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, logo.id, true, {
                                    fileName: "[project]/components/Trusted.tsx",
                                    lineNumber: 207,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Trusted.tsx",
                            lineNumber: 205,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Trusted.tsx",
                    lineNumber: 176,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/components/Trusted.tsx",
            lineNumber: 116,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Trusted.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_s(Trusted, "XvoVdRy05Hoq/b6b0da9s6k48+8=");
_c = Trusted;
var _c;
__turbopack_context__.k.register(_c, "Trusted");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Reviews.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "carousel": "Reviews-module__XcOq9a__carousel",
  "carouselDots": "Reviews-module__XcOq9a__carouselDots",
  "carouselTrack": "Reviews-module__XcOq9a__carouselTrack",
  "reviewCard": "Reviews-module__XcOq9a__reviewCard",
  "reviewFooter": "Reviews-module__XcOq9a__reviewFooter",
  "reviewSource": "Reviews-module__XcOq9a__reviewSource",
  "reviewer": "Reviews-module__XcOq9a__reviewer",
  "reviews": "Reviews-module__XcOq9a__reviews",
  "stars": "Reviews-module__XcOq9a__stars",
});
}),
"[project]/components/Reviews.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Reviews.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const reviews = [
    {
        id: 1,
        text: "“Clean proofing process and fast turnaround. Our cafes stay stocked without chasing vendors.”",
        name: "Ops Director, Urban Bean"
    },
    {
        id: 2,
        text: "“We consolidated menus, labels, and cups into one supplier. Reorders are painless.”",
        name: "GM, Riverline Kitchen"
    },
    {
        id: 3,
        text: "“Formed understood our brand standards and matched color across every location.”",
        name: "Founder, Harbor Roasters"
    },
    {
        id: 4,
        text: "“We needed last-minute signage for a launch. They got it done with proof approval in hours.”",
        name: "Marketing, Slate Cafe"
    }
];
function Reviews() {
    _s();
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const scrollToIndex = (index)=>{
        const track = trackRef.current;
        if (!track) return;
        const card = track.children[index];
        if (!card) return;
        track.scrollTo({
            left: card.offsetLeft,
            behavior: "smooth"
        });
    };
    const updateActiveIndex = ()=>{
        const track = trackRef.current;
        if (!track) return;
        const scrollLeft = track.scrollLeft;
        let closestIndex = 0;
        let minDistance = Infinity;
        Array.from(track.children).forEach((child, index)=>{
            const distance = Math.abs(child.offsetLeft - scrollLeft);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
            }
        });
        setActiveIndex(closestIndex);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reviews.useEffect": ()=>{
            const track = trackRef.current;
            if (!track) return;
            let rafId = null;
            const onScroll = {
                "Reviews.useEffect.onScroll": ()=>{
                    if (rafId) return;
                    rafId = window.requestAnimationFrame({
                        "Reviews.useEffect.onScroll": ()=>{
                            updateActiveIndex();
                            rafId = null;
                        }
                    }["Reviews.useEffect.onScroll"]);
                }
            }["Reviews.useEffect.onScroll"];
            track.addEventListener("scroll", onScroll, {
                passive: true
            });
            updateActiveIndex();
            return ({
                "Reviews.useEffect": ()=>{
                    track.removeEventListener("scroll", onScroll);
                    if (rafId) window.cancelAnimationFrame(rafId);
                }
            })["Reviews.useEffect"];
        }
    }["Reviews.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "reviews",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reviews,
        "aria-labelledby": "reviews-title",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-label",
                            children: "Reviews"
                        }, void 0, false, {
                            fileName: "[project]/components/Reviews.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "reviews-title",
                            children: "Loved by operators."
                        }, void 0, false, {
                            fileName: "[project]/components/Reviews.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Reviews.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carousel,
                    "data-reveal": true,
                    tabIndex: 0,
                    onKeyDown: (event)=>{
                        if (event.key === "ArrowLeft") {
                            event.preventDefault();
                            scrollToIndex(Math.max(0, activeIndex - 1));
                        }
                        if (event.key === "ArrowRight") {
                            event.preventDefault();
                            scrollToIndex(Math.min(reviews.length - 1, activeIndex + 1));
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselBtn,
                            type: "button",
                            "aria-label": "Previous review",
                            onClick: ()=>scrollToIndex(Math.max(0, activeIndex - 1)),
                            children: "←"
                        }, void 0, false, {
                            fileName: "[project]/components/Reviews.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselTrack,
                            ref: trackRef,
                            "data-carousel-track": true,
                            children: reviews.map((review)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reviewCard,
                                    "aria-label": `Review ${review.id}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stars,
                                            "aria-hidden": "true",
                                            children: "★★★★★"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Reviews.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: review.text
                                        }, void 0, false, {
                                            fileName: "[project]/components/Reviews.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reviewFooter,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reviewer,
                                                    children: review.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Reviews.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reviewSource,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoogleIcon, {}, void 0, false, {
                                                            fileName: "[project]/components/Reviews.tsx",
                                                            lineNumber: 121,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Google"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Reviews.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Reviews.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, review.id, true, {
                                    fileName: "[project]/components/Reviews.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Reviews.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselBtn,
                            type: "button",
                            "aria-label": "Next review",
                            onClick: ()=>scrollToIndex(Math.min(reviews.length - 1, activeIndex + 1)),
                            children: "→"
                        }, void 0, false, {
                            fileName: "[project]/components/Reviews.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Reviews.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselDots,
                    role: "tablist",
                    "aria-label": "Review navigation",
                    children: reviews.map((review, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            "aria-label": `Go to review ${index + 1}`,
                            "aria-current": activeIndex === index,
                            onClick: ()=>scrollToIndex(index)
                        }, review.id, false, {
                            fileName: "[project]/components/Reviews.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Reviews.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Reviews.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Reviews.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s(Reviews, "hP1ana+CUB/9Pl1IDSVzf7sN4kg=");
_c = Reviews;
function GoogleIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].googleMark,
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#EA4335",
                d: "M12 10.2v3.8h5.3c-.2 1.4-1.6 4.1-5.3 4.1-3.2 0-5.8-2.6-5.8-5.9S8.8 6.3 12 6.3c1.8 0 3 .7 3.7 1.4l2.5-2.4C16.7 3.8 14.6 3 12 3 7.6 3 4 6.6 4 10.9S7.6 18.8 12 18.8c4.8 0 7.9-3.4 7.9-8 0-.5-.1-.9-.1-1.3H12z"
            }, void 0, false, {
                fileName: "[project]/components/Reviews.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#34A853",
                d: "M6.9 14.4l-.9 3.4C7.7 19.2 9.7 20 12 20c2.3 0 4.2-.8 5.6-2.1l-2.8-2.1c-.8.5-1.8.8-2.8.8-2.2 0-4.1-1.5-4.8-3.5l-1.7 1.3z"
            }, void 0, false, {
                fileName: "[project]/components/Reviews.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#FBBC05",
                d: "M6.3 10.9c0-.7.1-1.4.3-2L4.9 7.6C4.3 8.8 4 9.8 4 10.9s.3 2.1.9 3.3l1.7-1.3c-.2-.6-.3-1.3-.3-2z"
            }, void 0, false, {
                fileName: "[project]/components/Reviews.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#4285F4",
                d: "M20 10.9c0-.4-.1-.9-.2-1.3H12v3.8h5.3c-.2 1.1-.9 2.1-1.9 2.8l2.8 2.1c1.7-1.5 2.8-3.7 2.8-6.4z"
            }, void 0, false, {
                fileName: "[project]/components/Reviews.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Reviews.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
_c1 = GoogleIcon;
var _c, _c1;
__turbopack_context__.k.register(_c, "Reviews");
__turbopack_context__.k.register(_c1, "GoogleIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_af8e3c75._.js.map