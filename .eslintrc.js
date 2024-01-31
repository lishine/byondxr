module.exports={
	"root": true,
	"ignorePatterns": ["**/*"],
	"env": {
		"node": true,
		"browser": true
	},
	"plugins": [
		"unused-imports",
		"@typescript-eslint",
		"prefer-arrow-functions",
		"import",
		"react-refresh",
		"jsx-a11y",
        "@byondxr/automate"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"sourceType": "module",
		"ecmaVersion": "latest",
		"project": ["./tsconfig.json"]
	},
	"extends": [
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:react/jsx-runtime"
	],
	"settings": {
		"react": {
			"version": "detect"
		}
	},
	"overrides": [
		{
			"files": ["*.tsx"],
			"rules": {
				"react-refresh/only-export-components": ["error", { "allowConstantExport": true }],
				"react/jsx-no-useless-fragment": "off",
				"react/prop-types": "off",
				"jsx-a11y/click-events-have-key-events": "error",
				"jsx-a11y/media-has-caption": "off",
				"react/jsx-pascal-case": "off",
				"react-hooks/exhaustive-deps": "off",
				"prefer-arrow-functions/prefer-arrow-functions": [
					"error",
					{
						"classPropertiesAllowed": false,
						"disallowPrototype": true,
						"returnStyle": "unchanged",
						"singleReturnOnly": false
					}
				],
                "@byondxr/automate/generate-react-component": "error",
				"react/jsx-curly-brace-presence": ["error", { "props": "never", "children": "never" }],
				"@byondxr/automate/recoil-gen-template": "error",
				"@byondxr/automate/recoil-add-key": "error",
				"@byondxr/automate/control-recoil-value-usage": "error",
				"@byondxr/automate/react-wrap-jsx-callback": [
					"error",
					{
						"wrap": {
							"wrapName": "r",
							"importName": "useInlineHandler",
							"importSource": "@byondxr/react-utils"
						}
					}
				],
				"@byondxr/automate/react-wrap": [
					"error",
					{
						"emptyLineBeforeReturn": true,
						"addDataComponent": true,
						"banDisableDepsEslint": "(useAsync|useUpdateEffect|useShallowCompareEffect|useRecoilMemoSelector|useRecoilEffect|useRecoilMemoParamSelector)",
						"wrapHandler": {
							"wrapName": "useHandler",
							"importSource": "@byondxr/react-utils",
							"replaces": "(effectDep)"
						},
						"wrapMemo": {
							"wrapName": "memo",
							"importSource": "@byondxr/react-utils"
						},
						"wrapUseMemo": {
							"wrapName": "useMemo",
							"importSource": "react"
						}
					}
				],
				"@byondxr/automate/exhaustive-deps": [
					"error",
					{
						"hooksToIncludeAllDependencies": "(useRecoilMemoSelector|useRecoilMemoParamSelector|useRecoilMemoValue)",
						"enableDangerousAutofixThisMayCauseInfiniteLoops": true,
						"useEffectRemoveUnnecessaryDependencies": true,
						"useEffectDisregardFunctions": true,
						"additionalHooks": "(useAsync|useUpdateEffect|useShallowCompareEffect|useRecoilMemoSelector|useRecoilEffect|useRecoilMemoParamSelector|useRecoilMemoValue)",
						"additionalStableHandlers": "(useLatest|useHandler|useConst|useRecoilAtom|useRecoilLocalAtom|useSignal)"
					}
				]
			}
		},
		{
			"files": ["*.ts", "*.tsx"],
			"rules": {
				"@byondxr/automate/imports-spacing": "error",
				"import/order": [
					"error",
					{
						"groups": ["builtin", "external", "internal", "type", "parent", "sibling", "index"],
						"pathGroups": [
							{
								"pattern": "@byondxr/**",
								"group": "internal"
							}
						],
						"pathGroupsExcludedImportTypes": ["type"],
						"newlines-between": "never",
						"alphabetize": {
							"orderImportKind": "asc",
							"order": "asc",
							"caseInsensitive": true
						}
					}
				],
				"@typescript-eslint/no-extra-semi": "off",
				"import/no-duplicates": "error",
				"@typescript-eslint/no-namespace": "off",
				"no-lone-blocks": "off",
				"no-mixed-spaces-and-tabs": "off",
				"no-template-curly-in-string": "off",
				"prefer-const": "off",
				"@typescript-eslint/ban-types": "off",
				"@typescript-eslint/ban-ts-comment": "off",
				"@typescript-eslint/interface-name-prefix": "off",
				"no-unreachable": "warn",
				"prefer-template": "error",
				"@typescript-eslint/consistent-type-imports": "error",
				"@typescript-eslint/consistent-type-exports": "error",
				"@typescript-eslint/no-explicit-any": "off",
				"max-lines": "off",
				"@typescript-eslint/no-unused-vars": "off",
				"@typescript-eslint/no-empty-function": "off",
				"unused-imports/no-unused-imports": "error",
				"@typescript-eslint/no-non-null-assertion": "off",
				"array-callback-return": "error",
				"curly": "error",
				"consistent-return": "error",
				"no-param-reassign": "off",
				"no-use-before-define": "off",
				"no-case-declarations": "off",
				"no-useless-concat": "off"
			}
		},
		{
			"files": "*.json",
			"parser": "jsonc-eslint-parser",
			"rules": {}
		}
	]
}
