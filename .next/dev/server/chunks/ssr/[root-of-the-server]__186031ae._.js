module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/FORMED SUPPLY/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/FORMED SUPPLY/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/FORMED SUPPLY/components/ProductsPage.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "ProductsPage-module__IR8hbW__card",
  "cardMedia": "ProductsPage-module__IR8hbW__cardMedia",
  "grid": "ProductsPage-module__IR8hbW__grid",
  "hero": "ProductsPage-module__IR8hbW__hero",
  "mediaHover": "ProductsPage-module__IR8hbW__mediaHover",
  "mediaPrimary": "ProductsPage-module__IR8hbW__mediaPrimary",
  "page": "ProductsPage-module__IR8hbW__page",
  "section": "ProductsPage-module__IR8hbW__section",
  "sectionHeader": "ProductsPage-module__IR8hbW__sectionHeader",
  "subhead": "ProductsPage-module__IR8hbW__subhead",
  "viewLink": "ProductsPage-module__IR8hbW__viewLink",
});
}),
"[project]/Desktop/FORMED SUPPLY/lib/products.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories,
    "getProductBySlug",
    ()=>getProductBySlug,
    "products",
    ()=>products,
    "productsByCategory",
    ()=>productsByCategory
]);
const products = [
    {
        slug: "flat-bottom-bag",
        title: "Flat Bottom Bag",
        category: "Coffee Bags",
        sku: "FS-CB-001",
        specs: [
            {
                label: "MOQ: 2,000 pcs / 5,000 pcs"
            },
            {
                label: "Size: Customized"
            },
            {
                label: "Top closure: Normal zipper / Tear-off zipper / Tin tie / None"
            },
            {
                label: "Valve: Yes / No"
            },
            {
                label: "Surface finishes: Matte / Glossy / Spot UV printing / Hot stamping foil"
            },
            {
                label: "Aluminum foil layer: Yes / No"
            },
            {
                label: "Alt materials: Kraft paper or biodegradable PLA (etc.)"
            }
        ],
        images: {
            primary: "#e6dfd7",
            hover: "#d4cbc1",
            gallery: [
                "#e6dfd7",
                "#d4cbc1",
                "#efe7dd"
            ]
        }
    },
    {
        slug: "side-gusset-bag",
        title: "Side Gusset Bag",
        category: "Coffee Bags",
        sku: "FS-CB-002",
        specs: [
            {
                label: "MOQ: 2,000 pcs / 5,000 pcs"
            },
            {
                label: "Size: Customized"
            },
            {
                label: "Top closure: Tin tie / None"
            },
            {
                label: "Valve: Yes / No"
            },
            {
                label: "Finishes: Matte / Glossy / Spot UV / Hot stamping foil"
            },
            {
                label: "Aluminum foil: Yes / No"
            },
            {
                label: "Alt materials: Kraft or biodegradable PLA (etc.)"
            }
        ],
        images: {
            primary: "#e9e2d9",
            hover: "#d8cfc5",
            gallery: [
                "#e9e2d9",
                "#d8cfc5",
                "#efe7dd"
            ]
        }
    },
    {
        slug: "stand-up-pouch",
        title: "Stand Up Pouch",
        category: "Coffee Bags",
        sku: "FS-CB-003",
        specs: [
            {
                label: "MOQ: 2,000 pcs / 5,000 pcs"
            },
            {
                label: "Size: Customized"
            },
            {
                label: "Top closure: None / Normal zipper / Tear-off zipper / Slider zipper / Child-resistant zippers"
            },
            {
                label: "Valve: Yes / No"
            },
            {
                label: "Finishes: Matte / Glossy / Spot UV / Hot stamping foil"
            },
            {
                label: "Aluminum foil: Yes / No"
            },
            {
                label: "Alt materials: Kraft or biodegradable PLA (etc.)"
            }
        ],
        images: {
            primary: "#efe7dd",
            hover: "#dbcfc3",
            gallery: [
                "#efe7dd",
                "#dbcfc3",
                "#e8e1d9"
            ]
        }
    },
    {
        slug: "flat-bags-drip-coffee",
        title: "Flat Bags (Drip coffee bags with filter)",
        category: "Coffee Bags",
        sku: "FS-CB-004",
        specs: [
            {
                label: "MOQ: 2,000 pcs / 5,000 pcs"
            },
            {
                label: "Size: Customized"
            },
            {
                label: "Top closure: None / Normal zipper / Tear-off zipper / Slider zipper / Child-resistant zippers"
            },
            {
                label: "Valve: Yes / No"
            },
            {
                label: "Finishes: Matte / Glossy / Spot UV / Hot stamping foil"
            },
            {
                label: "Aluminum foil: Yes / No"
            },
            {
                label: "Alt materials: Kraft or biodegradable PLA (etc.)"
            }
        ],
        images: {
            primary: "#e8e1d9",
            hover: "#d6ccc1",
            gallery: [
                "#e8e1d9",
                "#d6ccc1",
                "#efe7dd"
            ]
        }
    },
    {
        slug: "paper-cups",
        title: "Paper cups (Double wall / Single wall + Sleeve)",
        category: "Cups & Drink Packaging",
        sku: "FS-CD-001",
        specs: [
            {
                label: "MOQ: 2,000 pcs"
            },
            {
                label: "Size: Customized"
            },
            {
                label: "Materials: Paper/PE, Paper/PLA"
            },
            {
                label: "Cap/Lid: Yes / No"
            }
        ],
        images: {
            primary: "#e8edf0",
            hover: "#d6dfe5",
            gallery: [
                "#e8edf0",
                "#d6dfe5",
                "#e4ebea"
            ]
        }
    },
    {
        slug: "cold-drink-cups",
        title: "Cold drink cups (PET cup / PP cup)",
        category: "Cups & Drink Packaging",
        sku: "FS-CD-002",
        specs: [
            {
                label: "MOQ: 2,000 pcs"
            },
            {
                label: "Size: Customized"
            },
            {
                label: "Materials: PET, PP"
            },
            {
                label: "Capacity: 12oz, 14oz, 16oz, 20oz, 24oz, 32oz"
            }
        ],
        images: {
            primary: "#e4ebea",
            hover: "#d2dddb",
            gallery: [
                "#e4ebea",
                "#d2dddb",
                "#e6ece8"
            ]
        }
    },
    {
        slug: "pet-cans",
        title: "PET Cans",
        category: "Cups & Drink Packaging",
        sku: "FS-CD-003",
        specs: [
            {
                label: "MOQ: 5,000 pcs"
            },
            {
                label: "Sizes: 350ml / 500ml"
            },
            {
                label: "Material: PET"
            }
        ],
        images: {
            primary: "#e6ece8",
            hover: "#d4ddd8",
            gallery: [
                "#e6ece8",
                "#d4ddd8",
                "#e4ebea"
            ]
        }
    },
    {
        slug: "paper-shopping-bags",
        title: "Paper shopping bags with handle / Paper boxes",
        category: "Bags, Boxes, Carriers, Stickers",
        sku: "FS-BB-001",
        specs: [
            {
                label: "MOQ: 2,000 pcs"
            },
            {
                label: "Size: Customized"
            },
            {
                label: "Finishes: Matte / Glossy / Spot UV / Hot stamping foil"
            },
            {
                label: "Alt materials: Kraft paper (etc.)"
            }
        ],
        images: {
            primary: "#ede7df",
            hover: "#d9d1c8",
            gallery: [
                "#ede7df",
                "#d9d1c8",
                "#e8e2d8"
            ]
        }
    },
    {
        slug: "eco-cup-trays",
        title: "Take away / Eco cup trays",
        category: "Bags, Boxes, Carriers, Stickers",
        sku: "FS-BB-002",
        specs: [
            {
                label: "MOQ: 2,000 pcs"
            },
            {
                label: "Sizes: 1 cup / 2 cups / 4 cups"
            },
            {
                label: "Print colors: 1 color / Full color"
            },
            {
                label: "Material: Paper"
            }
        ],
        images: {
            primary: "#e8e2d8",
            hover: "#d5ccbf",
            gallery: [
                "#e8e2d8",
                "#d5ccbf",
                "#eee6dc"
            ]
        }
    },
    {
        slug: "coffee-to-go-box",
        title: "Coffee-to-go box",
        category: "Bags, Boxes, Carriers, Stickers",
        sku: "FS-BB-003",
        specs: [
            {
                label: "MOQ: 1,000 pcs"
            },
            {
                label: "Sizes: 1L, 2L, 3L, 5L, 10L"
            },
            {
                label: "Surface: Kraft paper"
            }
        ],
        images: {
            primary: "#eee6dc",
            hover: "#d7ccbf",
            gallery: [
                "#eee6dc",
                "#d7ccbf",
                "#f0e8de"
            ]
        }
    },
    {
        slug: "stickers",
        title: "Stickers",
        category: "Bags, Boxes, Carriers, Stickers",
        sku: "FS-BB-004",
        specs: [
            {
                label: "MOQ: 1,000 pcs"
            },
            {
                label: "Size: Customized"
            },
            {
                label: "Finishes: Matte / Glossy / Spot UV printing / Hot stamping foil"
            },
            {
                label: "Alt materials: Kraft paper, plastic (etc.)"
            }
        ],
        images: {
            primary: "#f0e8de",
            hover: "#d9cfc2",
            gallery: [
                "#f0e8de",
                "#d9cfc2",
                "#ebe3d8"
            ]
        }
    },
    {
        slug: "paper-cartons",
        title: "Paper cartons",
        category: "Bags, Boxes, Carriers, Stickers",
        sku: "FS-BB-005",
        specs: [
            {
                label: "MOQ: 2,000 pcs"
            },
            {
                label: "Size: Customized"
            },
            {
                label: "Print color: 1 color"
            },
            {
                label: "Surface: Paper"
            }
        ],
        images: {
            primary: "#ebe3d8",
            hover: "#d6cbbd",
            gallery: [
                "#ebe3d8",
                "#d6cbbd",
                "#ede7df"
            ]
        }
    },
    {
        slug: "coffee-beans-paper-tubes",
        title: "Coffee Beans Paper Tubes",
        category: "Specialty Packaging & Accessories",
        sku: "FS-SP-001",
        specs: [
            {
                label: "MOQ: 1,000 pcs"
            },
            {
                label: "Size: Customized"
            },
            {
                label: "Color: Full color"
            },
            {
                label: "Surface: Corrugated paper, white cardboard"
            }
        ],
        images: {
            primary: "#e5e0d8",
            hover: "#d3cbc1",
            gallery: [
                "#e5e0d8",
                "#d3cbc1",
                "#ece6df"
            ]
        }
    },
    {
        slug: "roll-film-sachet",
        title: "Roll film (Sachet)",
        category: "Specialty Packaging & Accessories",
        sku: "FS-SP-002",
        specs: [
            {
                label: "MOQ: 2,000 pcs / 100kg"
            },
            {
                label: "Size: Customized"
            },
            {
                label: "Top closure: None / Heat sealed"
            },
            {
                label: "Finishes: Matte / Glossy / Spot UV / Hot stamping foil"
            },
            {
                label: "Aluminum foil: Yes / No"
            },
            {
                label: "Alt materials: Kraft paper (etc.)"
            }
        ],
        images: {
            primary: "#ece6df",
            hover: "#d7cec5",
            gallery: [
                "#ece6df",
                "#d7cec5",
                "#e5e0d8"
            ]
        }
    },
    {
        slug: "coffee-spoon-with-clip",
        title: "Coffee spoon with clip",
        category: "Specialty Packaging & Accessories",
        sku: "FS-SP-003",
        specs: [
            {
                label: "MOQ: 500 pcs"
            },
            {
                label: "Size: 3.5 × 17.5 cm"
            },
            {
                label: "Material: Stainless steel"
            },
            {
                label: "Colors: Gold, silver, bronze, black, green"
            },
            {
                label: "Custom logo: Yes"
            }
        ],
        images: {
            primary: "#e6e6e6",
            hover: "#d0d0d0",
            gallery: [
                "#e6e6e6",
                "#d0d0d0",
                "#e3e6ea"
            ]
        }
    },
    {
        slug: "stainless-steel-tumblers",
        title: "Stainless steel tumblers",
        category: "Specialty Packaging & Accessories",
        sku: "FS-SP-004",
        specs: [
            {
                label: "MOQ: 50 pcs"
            },
            {
                label: "Popular sizes: 10oz, 20oz, 30oz, 40oz"
            },
            {
                label: "Material: Stainless steel"
            },
            {
                label: "Finish: Matte / Glossy"
            },
            {
                label: "Custom logo: Yes"
            }
        ],
        images: {
            primary: "#e3e6ea",
            hover: "#cfd6de",
            gallery: [
                "#e3e6ea",
                "#cfd6de",
                "#e7e9ec"
            ]
        }
    },
    {
        slug: "glass-item",
        title: "Glass item",
        category: "Specialty Packaging & Accessories",
        sku: "FS-SP-005",
        specs: [
            {
                label: "MOQ: 50 pcs"
            },
            {
                label: "Material: Glass"
            },
            {
                label: "Custom logo: Yes"
            },
            {
                label: "Missing: sizes not provided"
            }
        ],
        images: {
            primary: "#e6edf2",
            hover: "#d1dce4",
            gallery: [
                "#e6edf2",
                "#d1dce4",
                "#e3e6ea"
            ]
        }
    },
    {
        slug: "metal-tins-containers",
        title: "Metal tins/containers",
        category: "Specialty Packaging & Accessories",
        sku: "FS-SP-006",
        specs: [
            {
                label: "MOQ: 500 pcs"
            },
            {
                label: "Popular sizes: 125g, 225g, 350g"
            },
            {
                label: "Material: Metal"
            },
            {
                label: "Custom logo: Yes"
            }
        ],
        images: {
            primary: "#e2e2e2",
            hover: "#cccccc",
            gallery: [
                "#e2e2e2",
                "#cccccc",
                "#e1e1e1"
            ]
        }
    },
    {
        slug: "pvc-pet-item",
        title: "PVC/PET item (unclear product type)",
        category: "Specialty Packaging & Accessories",
        sku: "FS-SP-007",
        specs: [
            {
                label: "MOQ: 5,000 pcs"
            },
            {
                label: "Size: Customized"
            },
            {
                label: "Material: PVC/PET"
            },
            {
                label: "Missing: exact product type/use case"
            }
        ],
        images: {
            primary: "#e7e9ec",
            hover: "#d2d6db",
            gallery: [
                "#e7e9ec",
                "#d2d6db",
                "#e6edf2"
            ]
        }
    },
    {
        slug: "metal-item",
        title: "Metal item (generic)",
        category: "Specialty Packaging & Accessories",
        sku: "FS-SP-008",
        specs: [
            {
                label: "MOQ: 100 pcs"
            },
            {
                label: "Material: Metal"
            },
            {
                label: "Custom logo: Yes"
            },
            {
                label: "Missing: exact product type/use case"
            }
        ],
        images: {
            primary: "#e1e1e1",
            hover: "#cbcbcb",
            gallery: [
                "#e1e1e1",
                "#cbcbcb",
                "#e2e2e2"
            ]
        }
    },
    {
        slug: "coffee-pot-sets",
        title: "French filter press / Arabic coffee pot / Turkish coffee pot",
        category: "Specialty Packaging & Accessories",
        sku: "FS-SP-009",
        specs: [
            {
                label: "MOQ: 50 pcs"
            },
            {
                label: "Size: Customized"
            },
            {
                label: "Materials: Glass / Stainless steel / Copper"
            }
        ],
        images: {
            primary: "#e7e0d8",
            hover: "#d3c8bf",
            gallery: [
                "#e7e0d8",
                "#d3c8bf",
                "#e9e0d3"
            ]
        }
    },
    {
        slug: "kraft-or-sugarcane-product",
        title: "Kraft paper or sugarcane pulp product (generic)",
        category: "Specialty Packaging & Accessories",
        sku: "FS-SP-010",
        specs: [
            {
                label: "Size: Customized"
            },
            {
                label: "Materials: Kraft paper or Sugarcane pulp"
            },
            {
                label: "Missing: MOQ and exact product type/use case"
            }
        ],
        images: {
            primary: "#efe7dc",
            hover: "#d8cebf",
            gallery: [
                "#efe7dc",
                "#d8cebf",
                "#e7e0d8"
            ]
        }
    },
    {
        slug: "wooden-product",
        title: "Wooden product (generic)",
        category: "Specialty Packaging & Accessories",
        sku: "FS-SP-011",
        specs: [
            {
                label: "MOQ: 20 pcs"
            },
            {
                label: "Size: Customized"
            },
            {
                label: "Material: Wood"
            },
            {
                label: "Custom logo: Yes"
            }
        ],
        images: {
            primary: "#e9e0d3",
            hover: "#d5c8b7",
            gallery: [
                "#e9e0d3",
                "#d5c8b7",
                "#efe7dc"
            ]
        }
    },
    {
        slug: "apparel-and-merch",
        title: "Apparel & merch",
        category: "Specialty Packaging & Accessories",
        sku: "FS-SP-012",
        specs: [
            {
                label: "Items: Coffee apron / T-shirt / Canvas bag / Cap"
            },
            {
                label: "Custom logo: Yes"
            }
        ],
        images: {
            primary: "#e7e3df",
            hover: "#d2ccc5",
            gallery: [
                "#e7e3df",
                "#d2ccc5",
                "#e9e0d3"
            ]
        }
    }
];
const categories = [
    "Coffee Bags",
    "Cups & Drink Packaging",
    "Bags, Boxes, Carriers, Stickers",
    "Specialty Packaging & Accessories"
];
const productsByCategory = categories.map((category)=>({
        category,
        items: products.filter((product)=>product.category === category)
    }));
const getProductBySlug = (slug)=>products.find((product)=>product.slug === slug);
}),
"[project]/Desktop/FORMED SUPPLY/components/ProductsPage.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FORMED SUPPLY/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FORMED SUPPLY/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$components$2f$ProductsPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/FORMED SUPPLY/components/ProductsPage.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$lib$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FORMED SUPPLY/lib/products.ts [app-rsc] (ecmascript)");
;
;
;
;
const toId = (value)=>value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
function ProductsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$components$2f$ProductsPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].page,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$lib$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["productsByCategory"].map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: toId(category.category),
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$components$2f$ProductsPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].section,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$components$2f$ProductsPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].sectionHeader,
                            "data-reveal": true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: category.category
                            }, void 0, false, {
                                fileName: "[project]/Desktop/FORMED SUPPLY/components/ProductsPage.tsx",
                                lineNumber: 19,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/FORMED SUPPLY/components/ProductsPage.tsx",
                            lineNumber: 18,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$components$2f$ProductsPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].grid,
                            "data-reveal-group": true,
                            children: category.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$components$2f$ProductsPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].card} reveal-item`,
                                    style: {
                                        "--media-primary": item.images.primary,
                                        "--media-hover": item.images.hover
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$components$2f$ProductsPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].cardMedia,
                                            "aria-hidden": "true",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$components$2f$ProductsPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mediaPrimary
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/FORMED SUPPLY/components/ProductsPage.tsx",
                                                    lineNumber: 34,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$components$2f$ProductsPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mediaHover
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/FORMED SUPPLY/components/ProductsPage.tsx",
                                                    lineNumber: 35,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/FORMED SUPPLY/components/ProductsPage.tsx",
                                            lineNumber: 33,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/FORMED SUPPLY/components/ProductsPage.tsx",
                                            lineNumber: 37,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$components$2f$ProductsPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].viewLink,
                                            href: `/products/${item.slug}`,
                                            children: "View product"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/FORMED SUPPLY/components/ProductsPage.tsx",
                                            lineNumber: 38,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.slug, true, {
                                    fileName: "[project]/Desktop/FORMED SUPPLY/components/ProductsPage.tsx",
                                    lineNumber: 23,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/FORMED SUPPLY/components/ProductsPage.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/FORMED SUPPLY/components/ProductsPage.tsx",
                    lineNumber: 17,
                    columnNumber: 11
                }, this)
            }, category.category, false, {
                fileName: "[project]/Desktop/FORMED SUPPLY/components/ProductsPage.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/FORMED SUPPLY/components/ProductsPage.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/FORMED SUPPLY/app/products/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Products
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FORMED SUPPLY/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$components$2f$ProductsPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FORMED SUPPLY/components/ProductsPage.tsx [app-rsc] (ecmascript)");
;
;
function Products() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FORMED__SUPPLY$2f$components$2f$ProductsPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/Desktop/FORMED SUPPLY/app/products/page.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
}),
"[project]/Desktop/FORMED SUPPLY/app/products/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/FORMED SUPPLY/app/products/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__186031ae._.js.map