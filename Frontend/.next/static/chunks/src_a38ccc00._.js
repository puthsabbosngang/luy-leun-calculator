(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button(param) {
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/languages.js [app-client] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$translation$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/translation-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Header() {
    _s();
    const { setTheme, theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { language, setLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$translation$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            setMounted(true);
        }
    }["Header.useEffect"], []);
    const navItems = [
        {
            href: "/",
            label: language === 'km' ? 'ទំព័រដើម' : 'Home',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
        },
        {
            href: "/loan-calculator",
            label: language === 'km' ? 'គណនាកម្ចី' : 'Loan Calculator',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"]
        },
        {
            href: "/credit-calculator",
            label: language === 'km' ? 'ឥណទានបុគ្គល' : 'Credit Calculator',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-16 w-60 md:h-12 md:w-48 ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: mounted && theme === 'dark' ? '/logo-kh-dark-mode.png' : '/logo-kh-light-mode.png',
                        alt: "Luy Leun Logo",
                        fill: true,
                        className: "object-contain",
                        priority: true,
                        onError: (e)=>{
                            e.currentTarget.src = '/logo-kh-light-mode.png';
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/header.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/header.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "hidden md:flex items-center gap-4",
                children: navItems.map((item)=>{
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ".concat(isActive ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, this),
                            item.label
                        ]
                    }, item.href, true, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 52,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/header.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "sm",
                        onClick: ()=>setLanguage(language === 'km' ? 'en' : 'km'),
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            language === 'km' ? 'EN' : 'ខ្មែរ'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "sm",
                        onClick: ()=>setTheme(theme === "light" ? "dark" : "light"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                            }, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Toggle theme"
                            }, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/header.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/header.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(Header, "CksrkCUZ/KXD+9sH4q3Tf5buCoA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$translation$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, type, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/progress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-progress/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Progress(param) {
    let { className, value, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "progress",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "progress-indicator",
            className: "bg-primary h-full w-full flex-1 transition-all",
            style: {
                transform: "translateX(-".concat(100 - (value || 0), "%)")
            }
        }, void 0, false, {
            fileName: "[project]/src/components/ui/progress.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/progress.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Progress;
;
var _c;
__turbopack_context__.k.register(_c, "Progress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/creditRiskAPI.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// // src/services/creditRiskAPI.ts
// export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
// export interface ApplicantData {
//   person_age: number;
//   person_income: number;
//   person_home_ownership: string;
//   person_emp_length: number;
//   loan_intent: string;
//   loan_grade: string;
//   loan_amnt: number;
//   loan_int_rate: number;
//   loan_percent_income: number;
//   cb_person_default_on_file: string;
//   cb_person_cred_hist_length: number;
// }
// export async function predictCreditRisk(data: ApplicantData) {
//   const res = await fetch(`${API_URL}/predict`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   if (!res.ok) throw new Error("Failed to predict credit risk");
//   return res.json();
// }
// export async function predictCreditRiskCsv(file: File) {
//   const formData = new FormData();
//   formData.append("file", file);
//   const res = await fetch(`${API_URL}/predict-csv`, {
//     method: "POST",
//     body: formData,
//   });
//   if (!res.ok) throw new Error("Failed to predict from CSV");
//   return res.json();
// }
// src/services/creditRiskAPI.ts
__turbopack_context__.s([
    "API_URL",
    ()=>API_URL,
    "predictCreditRisk",
    ()=>predictCreditRisk,
    "predictCreditRiskCsv",
    ()=>predictCreditRiskCsv
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_URL = ("TURBOPACK compile-time value", "http://localhost:8000") || "http://localhost:8000";
/* ---------- Generic fetch wrapper ---------- */ async function apiFetch(url, options) {
    try {
        const res = await fetch(url, options);
        if (!res.ok) {
            const text = await res.text();
            throw new Error("Server Error (".concat(res.status, "): ").concat(text));
        }
        return await res.json();
    } catch (err) {
        console.error("API Error:", err);
        throw new Error("Unable to connect to the server. Please try again later.");
    }
}
async function predictCreditRisk(data) {
    return apiFetch("".concat(API_URL, "/predict"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}
async function predictCreditRiskCsv(file) {
    const formData = new FormData();
    formData.append("file", file);
    return apiFetch("".concat(API_URL, "/predict-csv"), {
        method: "POST",
        body: formData
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/credit-calculator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client"
// import { useState, useEffect } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
// import { Button } from "@/src/components/ui/button"
// import { Input } from "@/src/components/ui/input"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
// import { Label } from "@/src/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group"
// import { Upload, FileText, Brain, AlertTriangle, CheckCircle, BarChart3, Download } from "lucide-react"
// import { Alert, AlertDescription } from "@/src/components/ui/alert"
// import { Badge } from "@/src/components/ui/badge"
// import { Progress } from "@/src/components/ui/progress"
// import { CreditRiskAPI, type CreditRiskInput, type PredictionResult, type BatchPredictionResult } from "@/src/services/creditRiskAPI"
// const homeOwnershipOptions = ["RENT", "FRIEND", "OWNER", "PARRENT", "COMPANY", "SIBLING"]
// const loanIntentOptions = ["START BUSINESS", "EXPAND BUSINESS", "GENERAL PAYMENT", "HOME REPAIR", "LOGISTIC", "TRAVEL", "PAYMENT", "HEALTH"]
// const loanGradeOptions = ["A", "B", "C", "D", "E", "F"]
// const employmentLengthOptions = [3, 6, 12, 24, 36]
// const loanAmountOptions = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500]
// const interestRateOptions = [0.01, 0.05, 0.1, 0.15, 0.2]
// export default function CreditCalculator() {
//   const [inputMethod, setInputMethod] = useState<"manual" | "csv">("manual")
//   const [formData, setFormData] = useState<CreditRiskInput>({
//     person_age: 20,
//     person_income: 250,
//     person_home_ownership: "RENT",
//     person_emp_length: 12,
//     loan_intent: "START BUSINESS",
//     loan_grade: "A",
//     loan_amnt: 100,
//     loan_int_rate: 0.05,
//     cb_person_default_on_file: "N",
//     cb_person_cred_hist_length: 2
//   })
//   const [csvFile, setCsvFile] = useState<File | null>(null)
//   const [csvData, setCsvData] = useState<CreditRiskInput[]>([])
//   const [prediction, setPrediction] = useState<PredictionResult | null>(null)
//   const [batchPrediction, setBatchPrediction] = useState<BatchPredictionResult | null>(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)
//   // Calculate loan percent income when loan amount or income changes
//   useEffect(() => {
//     setFormData(prev => ({
//       ...prev,
//       loan_percent_income: prev.loan_amnt / prev.person_income
//     }))
//   }, [formData.loan_amnt, formData.person_income])
//   const handleInputChange = (field: keyof CreditRiskInput, value: any) => {
//     setFormData(prev => {
//       // Handle numeric fields with proper validation
//       if (['person_age', 'person_income', 'person_emp_length', 'loan_amnt', 'loan_int_rate', 'cb_person_cred_hist_length'].includes(field)) {
//         const numValue = parseFloat(value)
//         return {
//           ...prev,
//           [field]: isNaN(numValue) ? 0 : numValue
//         }
//       }
//       // Handle string fields
//       return {
//         ...prev,
//         [field]: value || ""
//       }
//     })
//   }
//   const handleCsvUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0]
//     if (file) {
//       setCsvFile(file)
//       // Parse CSV file
//       const reader = new FileReader()
//       reader.onload = (e) => {
//         const text = e.target?.result as string
//         const lines = text.split('\n')
//         const headers = lines[0].split(',').map(h => h.trim())
//         const data = lines.slice(1).filter(line => line.trim()).map(line => {
//           const values = line.split(',').map(v => v.trim())
//           const row: any = {}
//           headers.forEach((header, index) => {
//             const value = values[index]
//             // Convert numeric fields
//             if (['person_age', 'person_income', 'person_emp_length', 'loan_amnt', 'loan_int_rate', 'cb_person_cred_hist_length'].includes(header)) {
//               row[header] = parseFloat(value) || 0
//             } else {
//               row[header] = value
//             }
//           })
//           return row as CreditRiskInput
//         })
//         setCsvData(data)
//       }
//       reader.readAsText(file)
//     }
//   }
//   const predictCreditRisk = async () => {
//     setLoading(true)
//     setError(null)
//     setPrediction(null)
//     setBatchPrediction(null)
//     try {
//       if (inputMethod === "manual") {
//         const result = await CreditRiskAPI.predictSingle(formData)
//         setPrediction(result)
//       } else {
//         const result = await CreditRiskAPI.predictBatch({ data: csvData })
//         setBatchPrediction(result)
//       }
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'An error occurred while predicting credit risk')
//     } finally {
//       setLoading(false)
//     }
//   }
//   const getRiskColor = (risk: string) => {
//     return risk === "High Risk" ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"
//   }
//   const getRiskBadgeVariant = (risk: string) => {
//     return risk === "High Risk" ? "destructive" : "default"
//   }
//   return (
//     <div className="min-h-screen bg-background">
//       <div className="max-w-7xl mx-auto p-4 space-y-6">
//         {/* Header */}
//         <div className="text-center space-y-4">
//           <h1 className="text-4xl font-bold text-foreground flex items-center justify-center gap-2">
//             <Brain className="h-8 w-8 text-blue-600" />
//             DLT Credit Risk Scoring
//           </h1>
//           <p className="text-lg text-muted-foreground">
//             Use this app to predict the credit risk of applicants using a trained <strong>CatBoost</strong> model.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//           {/* Sidebar for large screens, but stacked cards for medium and small */}
//           <div className="lg:col-span-1 space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
//               {/* Model Selection */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     <Brain className="h-5 w-5" />
//                     Model Selection
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <Select defaultValue="catboost">
//                     <SelectTrigger>
//                       <SelectValue />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="catboost">CatBoost</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </CardContent>
//               </Card>
//               {/* Input Options */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Input Options</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <RadioGroup value={inputMethod} onValueChange={(value) => setInputMethod(value as "manual" | "csv")}>
//                     <div className="flex items-center space-x-2">
//                       <RadioGroupItem value="manual" id="manual" />
//                       <Label htmlFor="manual">Manual Input</Label>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <RadioGroupItem value="csv" id="csv" />
//                       <Label htmlFor="csv">Upload CSV</Label>
//                     </div>
//                   </RadioGroup>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//           {/* Main Content */}
//           <div className="lg:col-span-3 space-y-6">
//             {inputMethod === "manual" ? (
//               /* Manual Input Form */
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Enter Applicant Information</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {/* Age */}
//                     <div className="space-y-2">
//                       <Label htmlFor="age">Age</Label>
//                       <Input
//                         id="age"
//                         type="number"
//                         min={18}
//                         max={60}
//                         value={formData.person_age || ''}
//                         onChange={(e) => handleInputChange('person_age', e.target.value)}
//                       />
//                     </div>
//                     {/* Income */}
//                     <div className="space-y-2">
//                       <Label htmlFor="income">Annual Income ($)</Label>
//                       <Input
//                         id="income"
//                         type="number"
//                         min={50}
//                         value={formData.person_income || ''}
//                         onChange={(e) => handleInputChange('person_income', e.target.value)}
//                       />
//                     </div>
//                     {/* Home Ownership */}
//                     <div className="space-y-2">
//                       <Label htmlFor="home-ownership">Home Ownership</Label>
//                       <Select
//                         value={formData.person_home_ownership}
//                         onValueChange={(value) => handleInputChange('person_home_ownership', value)}
//                       >
//                         <SelectTrigger>
//                           <SelectValue />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {homeOwnershipOptions.map(option => (
//                             <SelectItem key={option} value={option}>{option}</SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </div>
//                     {/* Employment Length */}
//                     <div className="space-y-2">
//                       <Label htmlFor="employment">Employment Length (Months)</Label>
//                       <Select
//                         value={formData.person_emp_length.toString()}
//                         onValueChange={(value) => handleInputChange('person_emp_length', parseInt(value))}
//                       >
//                         <SelectTrigger>
//                           <SelectValue />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {employmentLengthOptions.map(option => (
//                             <SelectItem key={option} value={option.toString()}>{option}</SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </div>
//                     {/* Loan Intent */}
//                     <div className="space-y-2">
//                       <Label htmlFor="loan-intent">Loan Intent</Label>
//                       <Select
//                         value={formData.loan_intent}
//                         onValueChange={(value) => handleInputChange('loan_intent', value)}
//                       >
//                         <SelectTrigger>
//                           <SelectValue />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {loanIntentOptions.map(option => (
//                             <SelectItem key={option} value={option}>{option}</SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </div>
//                     {/* Loan Grade */}
//                     <div className="space-y-2">
//                       <Label htmlFor="loan-grade">Loan Grade</Label>
//                       <Select
//                         value={formData.loan_grade}
//                         onValueChange={(value) => handleInputChange('loan_grade', value)}
//                       >
//                         <SelectTrigger>
//                           <SelectValue />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {loanGradeOptions.map(option => (
//                             <SelectItem key={option} value={option}>{option}</SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </div>
//                     {/* Loan Amount */}
//                     <div className="space-y-2">
//                       <Label htmlFor="loan-amount">Loan Amount ($)</Label>
//                       <Select
//                         value={formData.loan_amnt.toString()}
//                         onValueChange={(value) => handleInputChange('loan_amnt', parseInt(value))}
//                       >
//                         <SelectTrigger>
//                           <SelectValue />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {loanAmountOptions.map(option => (
//                             <SelectItem key={option} value={option.toString()}>{option}</SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </div>
//                     {/* Interest Rate */}
//                     <div className="space-y-2">
//                       <Label htmlFor="interest-rate">Loan Interest (%)</Label>
//                       <Select
//                         value={formData.loan_int_rate.toString()}
//                         onValueChange={(value) => handleInputChange('loan_int_rate', parseFloat(value))}
//                       >
//                         <SelectTrigger>
//                           <SelectValue />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {interestRateOptions.map(option => (
//                             <SelectItem key={option} value={option.toString()}>{(option * 100).toFixed(0)}%</SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </div>
//                     {/* Default History */}
//                     <div className="space-y-2">
//                       <Label htmlFor="default">Default History</Label>
//                       <Select
//                         value={formData.cb_person_default_on_file}
//                         onValueChange={(value) => handleInputChange('cb_person_default_on_file', value)}
//                       >
//                         <SelectTrigger>
//                           <SelectValue />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="Y">Yes</SelectItem>
//                           <SelectItem value="N">No</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>
//                     {/* Credit History Length */}
//                     <div className="space-y-2">
//                       <Label htmlFor="credit-history">Credit History Length (years)</Label>
//                       <Input
//                         id="credit-history"
//                         type="number"
//                         min={1}
//                         max={10}
//                         value={formData.cb_person_cred_hist_length || ''}
//                         onChange={(e) => handleInputChange('cb_person_cred_hist_length', e.target.value)}
//                       />
//                     </div>
//                     {/* Calculated Loan Percent Income */}
//                     <div className="space-y-2">
//                       <Label>Loan % of Income</Label>
//                       <div className="p-2 bg-muted rounded-md">
//                         {formData.person_income > 0 
//                           ? ((formData.loan_amnt / formData.person_income) * 100).toFixed(1) + '%'
//                           : 'N/A'}
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ) : (
//               /* CSV Upload */
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     <Upload className="h-5 w-5" />
//                     Upload CSV File
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
//                     <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
//                     <Label htmlFor="csv-upload" className="cursor-pointer">
//                       <span className="text-lg font-medium">Choose CSV file</span>
//                       <br />
//                       <span className="text-sm text-muted-foreground">or drag and drop</span>
//                     </Label>
//                     <Input
//                       id="csv-upload"
//                       type="file"
//                       accept=".csv"
//                       onChange={handleCsvUpload}
//                       className="hidden"
//                     />
//                     <div className="mt-4">
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         onClick={() => window.open(CreditRiskAPI.getSampleCsvUrl(), '_blank')}
//                         className="flex items-center gap-2"
//                       >
//                         <Download className="h-4 w-4" />
//                         Download Sample CSV
//                       </Button>
//                     </div>
//                   </div>
//                   {csvFile && (
//                     <div className="p-4 bg-muted rounded-lg">
//                       <p className="font-medium">File: {csvFile.name}</p>
//                       <p className="text-sm text-muted-foreground">Records: {csvData.length}</p>
//                     </div>
//                   )}
//                   {csvData.length > 0 && (
//                     <Card>
//                       <CardHeader>
//                         <CardTitle>Data Preview</CardTitle>
//                       </CardHeader>
//                       <CardContent>
//                         <Table>
//                           <TableHeader>
//                             <TableRow>
//                               <TableHead>Age</TableHead>
//                               <TableHead>Income</TableHead>
//                               <TableHead>Home Ownership</TableHead>
//                               <TableHead>Loan Amount</TableHead>
//                               <TableHead>Interest Rate</TableHead>
//                             </TableRow>
//                           </TableHeader>
//                           <TableBody>
//                             {csvData.slice(0, 5).map((row, index) => (
//                               <TableRow key={index}>
//                                 <TableCell>{row.person_age}</TableCell>
//                                 <TableCell>${row.person_income}</TableCell>
//                                 <TableCell>{row.person_home_ownership}</TableCell>
//                                 <TableCell>${row.loan_amnt}</TableCell>
//                                 <TableCell>{(row.loan_int_rate * 100).toFixed(1)}%</TableCell>
//                               </TableRow>
//                             ))}
//                           </TableBody>
//                         </Table>
//                         {csvData.length > 5 && (
//                           <p className="text-sm text-muted-foreground mt-2">
//                             Showing 5 of {csvData.length} records
//                           </p>
//                         )}
//                       </CardContent>
//                     </Card>
//                   )}
//                 </CardContent>
//               </Card>
//             )}
//             {/* Input Data Display */}
//             {inputMethod === "manual" && (
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Input Data</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <Table>
//                     <TableHeader>
//                       <TableRow>
//                         <TableHead>Field</TableHead>
//                         <TableHead>Value</TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       <TableRow>
//                         <TableCell>Age</TableCell>
//                         <TableCell>{formData.person_age}</TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell>Income</TableCell>
//                         <TableCell>${formData.person_income}</TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell>Home Ownership</TableCell>
//                         <TableCell>{formData.person_home_ownership}</TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell>Employment Length</TableCell>
//                         <TableCell>{formData.person_emp_length} months</TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell>Loan Intent</TableCell>
//                         <TableCell>{formData.loan_intent}</TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell>Loan Grade</TableCell>
//                         <TableCell>{formData.loan_grade}</TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell>Loan Amount</TableCell>
//                         <TableCell>${formData.loan_amnt}</TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell>Interest Rate</TableCell>
//                         <TableCell>{(formData.loan_int_rate * 100).toFixed(1)}%</TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell>Loan % of Income</TableCell>
//                         <TableCell>{((formData.loan_amnt / formData.person_income) * 100).toFixed(1)}%</TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell>Default History</TableCell>
//                         <TableCell>{formData.cb_person_default_on_file === "Y" ? "Yes" : "No"}</TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell>Credit History Length</TableCell>
//                         <TableCell>{formData.cb_person_cred_hist_length} years</TableCell>
//                       </TableRow>
//                     </TableBody>
//                   </Table>
//                 </CardContent>
//               </Card>
//             )}
//             {/* Predict Button */}
//             <div className="flex justify-center">
//               <Button 
//                 onClick={predictCreditRisk} 
//                 disabled={loading || (inputMethod === "csv" && csvData.length === 0)}
//                 size="lg"
//                 className="w-full max-w-md"
//               >
//                 {loading ? (
//                   <>
//                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                     Predicting...
//                   </>
//                 ) : (
//                   <>
//                     <Brain className="h-5 w-5 mr-2" />
//                     🔮 Predict Credit Risk
//                   </>
//                 )}
//               </Button>
//             </div>
//             {/* Error Display */}
//             {error && (
//               <Alert variant="destructive">
//                 <AlertTriangle className="h-4 w-4" />
//                 <AlertDescription>{error}</AlertDescription>
//               </Alert>
//             )}
//             {/* Single Prediction Results */}
//             {prediction && (
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     <CheckCircle className="h-5 w-5 text-green-600" />
//                     Prediction Complete ✅
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="text-center space-y-4">
//                     <div className="text-2xl font-bold">
//                       🧠 Prediction Result:{" "}
//                       <span className={getRiskColor(prediction.predicted_risk)}>
//                         {prediction.predicted_risk}
//                       </span>
//                     </div>
//                     <div className="text-lg">
//                       High Risk Probability: <strong>{(prediction.high_risk_probability * 100).toFixed(1)}%</strong>
//                     </div>
//                     <div className="w-full max-w-md mx-auto">
//                       <Progress 
//                         value={prediction.high_risk_probability * 100} 
//                         className="h-4"
//                       />
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             )}
//             {/* Batch Prediction Results */}
//             {batchPrediction && (
//               <div className="space-y-6">
//                 {/* Results Table */}
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-600" />
//                       📋 Prediction Results
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <Table>
//                       <TableHeader>
//                         <TableRow>
//                           <TableHead>Age</TableHead>
//                           <TableHead>Income</TableHead>
//                           <TableHead>Loan Amount</TableHead>
//                           <TableHead>Predicted Risk</TableHead>
//                           <TableHead>High Risk %</TableHead>
//                         </TableRow>
//                       </TableHeader>
//                       <TableBody>
//                         {batchPrediction.results.map((result, index) => (
//                           <TableRow key={index}>
//                             <TableCell>{result.input_data.person_age}</TableCell>
//                             <TableCell>${result.input_data.person_income}</TableCell>
//                             <TableCell>${result.input_data.loan_amnt}</TableCell>
//                             <TableCell>
//                               <Badge variant={getRiskBadgeVariant(result.predicted_risk)}>
//                                 {result.predicted_risk}
//                               </Badge>
//                             </TableCell>
//                             <TableCell>{(result.high_risk_probability * 100).toFixed(1)}%</TableCell>
//                           </TableRow>
//                         ))}
//                       </TableBody>
//                     </Table>
//                   </CardContent>
//                 </Card>
//                 {/* Summary Report */}
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <BarChart3 className="h-5 w-5" />
//                       📊 Summary Report
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                       <div className="text-center p-4 bg-muted rounded-lg">
//                         <div className="text-2xl font-bold">{batchPrediction.summary.total}</div>
//                         <div className="text-sm text-muted-foreground">Total Applicants</div>
//                       </div>
//                       <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
//                         <div className="text-2xl font-bold text-red-600">{batchPrediction.summary.high_risk}</div>
//                         <div className="text-sm text-red-600">🟥 High Risk</div>
//                       </div>
//                       <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
//                         <div className="text-2xl font-bold text-green-600">{batchPrediction.summary.low_risk}</div>
//                         <div className="text-sm text-green-600">🟩 Low Risk</div>
//                       </div>
//                     </div>
//                     {/* Risk Distribution Chart */}
//                     <div className="w-full max-w-md mx-auto">
//                       <div className="text-center mb-4 font-medium">Credit Risk Distribution</div>
//                       <div className="flex h-8 rounded-full overflow-hidden">
//                         <div 
//                           className="bg-green-500 flex items-center justify-center text-white text-sm font-medium"
//                           style={{ width: `${(batchPrediction.summary.low_risk / batchPrediction.summary.total) * 100}%` }}
//                         >
//                           {batchPrediction.summary.low_risk > 0 && "Low Risk"}
//                         </div>
//                         <div 
//                           className="bg-red-500 flex items-center justify-center text-white text-sm font-medium"
//                           style={{ width: `${(batchPrediction.summary.high_risk / batchPrediction.summary.total) * 100}%` }}
//                         >
//                           {batchPrediction.summary.high_risk > 0 && "High Risk"}
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             )}
//           </div>
//         </div>
//         {/* Footer */}
//         <div className="text-center py-8 border-t">
//           <p className="text-muted-foreground">
//             Developed with ❤️ using Next.js, TypeScript, and <strong>CatBoost</strong>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }
__turbopack_context__.s([
    "default",
    ()=>CreditCalculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/progress.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/src/components/ui/tabs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$creditRiskAPI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/creditRiskAPI.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function CreditCalculator() {
    _s();
    const [inputMethod, setInputMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("manual");
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        age: "",
        gender: "",
        income: "",
        loan_amount: "",
        employment_status: "",
        credit_score: "",
        loan_purpose: "",
        loan_term: ""
    });
    const [prediction, setPrediction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [batchPrediction, setBatchPrediction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [csvFile, setCsvFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleFileChange = (e)=>{
        if (e.target.files && e.target.files[0]) {
            setCsvFile(e.target.files[0]);
        }
    };
    const handlePredict = async ()=>{
        try {
            setLoading(true);
            setError("");
            setPrediction(null);
            setBatchPrediction(null);
            if (inputMethod === "manual") {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$creditRiskAPI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["predictCreditRisk"])(formData);
                setPrediction(result);
            } else if (csvFile) {
                const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$creditRiskAPI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["predictCreditRiskCsv"])(csvFile);
                const summary = {
                    total: results.length,
                    high_risk: results.filter((r)=>r.Predicted_Risk === "High Risk").length,
                    low_risk: results.filter((r)=>r.Predicted_Risk === "Low Risk").length
                };
                const formattedResults = results.map((r)=>({
                        input_data: formData,
                        predicted_risk: r.Predicted_Risk,
                        high_risk_probability: r.High_Risk_Probability,
                        low_risk_probability: r.Low_Risk_Probability
                    }));
                setBatchPrediction({
                    results: formattedResults,
                    summary
                });
            } else {
                setError("Please upload a CSV file before predicting.");
            }
        } catch (err) {
            console.error("Prediction error:", err);
            setError("An error occurred while predicting. Please try again.");
        } finally{
            setLoading(false);
        }
    };
    const getRiskColor = (risk)=>{
        if (risk === "High Risk") return "text-red-600 font-semibold";
        if (risk === "Low Risk") return "text-green-600 font-semibold";
        return "text-gray-600";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-5xl mx-auto space-y-8 p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-2xl font-bold flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                    className: "h-6 w-6 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/credit-calculator.tsx",
                                    lineNumber: 798,
                                    columnNumber: 13
                                }, this),
                                "Credit Risk Prediction"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/credit-calculator.tsx",
                            lineNumber: 797,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/credit-calculator.tsx",
                        lineNumber: 796,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tabs, {
                                defaultValue: "manual",
                                onValueChange: (v)=>setInputMethod(v),
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsList, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsTrigger, {
                                                value: "manual",
                                                children: "Manual Input"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/credit-calculator.tsx",
                                                lineNumber: 809,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsTrigger, {
                                                value: "csv",
                                                children: "CSV Upload"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/credit-calculator.tsx",
                                                lineNumber: 810,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/credit-calculator.tsx",
                                        lineNumber: 808,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsContent, {
                                        value: "manual",
                                        className: "grid grid-cols-2 gap-4",
                                        children: Object.keys(formData).map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                name: key,
                                                placeholder: key.replace(/_/g, " ").toUpperCase(),
                                                value: formData[key],
                                                onChange: handleInputChange,
                                                className: "col-span-1"
                                            }, key, false, {
                                                fileName: "[project]/src/components/credit-calculator.tsx",
                                                lineNumber: 815,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/credit-calculator.tsx",
                                        lineNumber: 813,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsContent, {
                                        value: "csv",
                                        className: "flex flex-col items-center gap-3 border p-4 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                className: "w-10 h-10 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/credit-calculator.tsx",
                                                lineNumber: 827,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                type: "file",
                                                accept: ".csv",
                                                onChange: handleFileChange
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/credit-calculator.tsx",
                                                lineNumber: 828,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500",
                                                children: "Upload a CSV file with applicant data"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/credit-calculator.tsx",
                                                lineNumber: 829,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/credit-calculator.tsx",
                                        lineNumber: 826,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/credit-calculator.tsx",
                                lineNumber: 803,
                                columnNumber: 11
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-600 text-sm mt-3",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/components/credit-calculator.tsx",
                                lineNumber: 833,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handlePredict,
                                    disabled: loading,
                                    children: loading ? "Predicting..." : "Predict Risk"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/credit-calculator.tsx",
                                    lineNumber: 836,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/credit-calculator.tsx",
                                lineNumber: 835,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/credit-calculator.tsx",
                        lineNumber: 802,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/credit-calculator.tsx",
                lineNumber: 795,
                columnNumber: 7
            }, this),
            prediction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-l-4 border-primary shadow-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: "Prediction Result"
                        }, void 0, false, {
                            fileName: "[project]/src/components/credit-calculator.tsx",
                            lineNumber: 847,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/credit-calculator.tsx",
                        lineNumber: 846,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg",
                                children: [
                                    "Predicted Risk:",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: getRiskColor(prediction.Predicted_Risk),
                                        children: prediction.Predicted_Risk
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/credit-calculator.tsx",
                                        lineNumber: 852,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/credit-calculator.tsx",
                                lineNumber: 850,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "High Risk Probability:",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    (prediction.High_Risk_Probability * 100).toFixed(2),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/credit-calculator.tsx",
                                                lineNumber: 859,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/credit-calculator.tsx",
                                        lineNumber: 857,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                        value: prediction.High_Risk_Probability * 100
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/credit-calculator.tsx",
                                        lineNumber: 861,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/credit-calculator.tsx",
                                lineNumber: 856,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Low Risk Probability:",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    (prediction.Low_Risk_Probability * 100).toFixed(2),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/credit-calculator.tsx",
                                                lineNumber: 866,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/credit-calculator.tsx",
                                        lineNumber: 864,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                        value: prediction.Low_Risk_Probability * 100
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/credit-calculator.tsx",
                                        lineNumber: 868,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/credit-calculator.tsx",
                                lineNumber: 863,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/credit-calculator.tsx",
                        lineNumber: 849,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/credit-calculator.tsx",
                lineNumber: 845,
                columnNumber: 9
            }, this),
            batchPrediction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-md border-l-4 border-blue-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: "Batch Prediction Summary"
                        }, void 0, false, {
                            fileName: "[project]/src/components/credit-calculator.tsx",
                            lineNumber: 878,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/credit-calculator.tsx",
                        lineNumber: 877,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Total Applicants: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: batchPrediction.summary.total
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/credit-calculator.tsx",
                                                lineNumber: 882,
                                                columnNumber: 36
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/credit-calculator.tsx",
                                        lineNumber: 882,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-green-600",
                                        children: [
                                            "Low Risk: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: batchPrediction.summary.low_risk
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/credit-calculator.tsx",
                                                lineNumber: 884,
                                                columnNumber: 27
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/credit-calculator.tsx",
                                        lineNumber: 883,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-600",
                                        children: [
                                            "High Risk: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: batchPrediction.summary.high_risk
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/credit-calculator.tsx",
                                                lineNumber: 887,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/credit-calculator.tsx",
                                        lineNumber: 886,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/credit-calculator.tsx",
                                lineNumber: 881,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t pt-3 space-y-2",
                                children: batchPrediction.results.map((r, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 border rounded-lg flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Applicant #",
                                                    idx + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/credit-calculator.tsx",
                                                lineNumber: 894,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: getRiskColor(r.predicted_risk),
                                                children: r.predicted_risk
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/credit-calculator.tsx",
                                                lineNumber: 895,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/components/credit-calculator.tsx",
                                        lineNumber: 893,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/credit-calculator.tsx",
                                lineNumber: 891,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/credit-calculator.tsx",
                        lineNumber: 880,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/credit-calculator.tsx",
                lineNumber: 876,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/credit-calculator.tsx",
        lineNumber: 794,
        columnNumber: 5
    }, this);
}
_s(CreditCalculator, "S5LbiUpKS6temx9gEM8M53Aw2YM=");
_c = CreditCalculator;
var _c;
__turbopack_context__.k.register(_c, "CreditCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_a38ccc00._.js.map