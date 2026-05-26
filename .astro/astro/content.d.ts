declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"01-gemini-vision/index.md": {
	id: "01-gemini-vision/index.md";
  slug: "01-gemini-vision";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"01-relaunch-gemini-astro/index.md": {
	id: "01-relaunch-gemini-astro/index.md";
  slug: "01-relaunch-gemini-astro";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"01-teaching-kids/index.md": {
	id: "01-teaching-kids/index.md";
  slug: "01-teaching-kids";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"02-binance-regulations/index.md": {
	id: "02-binance-regulations/index.md";
  slug: "02-binance-regulations";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"02-blockchain-revolution/index.md": {
	id: "02-blockchain-revolution/index.md";
  slug: "02-blockchain-revolution";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"02-decision-complex-dynamic/index.md": {
	id: "02-decision-complex-dynamic/index.md";
  slug: "02-decision-complex-dynamic";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"02-ethereum-beyond/index.md": {
	id: "02-ethereum-beyond/index.md";
  slug: "02-ethereum-beyond";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"02-mobile-apps-financemarkets/index.md": {
	id: "02-mobile-apps-financemarkets/index.md";
  slug: "02-mobile-apps-financemarkets";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"02-ripple-2023/index.md": {
	id: "02-ripple-2023/index.md";
  slug: "02-ripple-2023";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"02-sidechain-breakthrough/index.md": {
	id: "02-sidechain-breakthrough/index.md";
  slug: "02-sidechain-breakthrough";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"02-technology-perception/index.md": {
	id: "02-technology-perception/index.md";
  slug: "02-technology-perception";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"03-abused-technology/index.md": {
	id: "03-abused-technology/index.md";
  slug: "03-abused-technology";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"04-crypto_tales-01-die_unsichtbare_vollmacht/index.md": {
	id: "04-crypto_tales-01-die_unsichtbare_vollmacht/index.md";
  slug: "04-crypto_tales-01-die_unsichtbare_vollmacht";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"04-crypto_tales-02-der_preiszauber/index.md": {
	id: "04-crypto_tales-02-der_preiszauber/index.md";
  slug: "04-crypto_tales-02-der_preiszauber";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"04-crypto_tales-03-das_phantom_volumen/index.md": {
	id: "04-crypto_tales-03-das_phantom_volumen/index.md";
  slug: "04-crypto_tales-03-das_phantom_volumen";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"04-crypto_tales-04-falsche_dezentralität/index.md": {
	id: "04-crypto_tales-04-falsche_dezentralität/index.md";
  slug: "04-crypto_tales-04-falsche_dezentralität";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"05-crypto_tales-05-gasfalle/index.md": {
	id: "05-crypto_tales-05-gasfalle/index.md";
  slug: "05-crypto_tales-05-gasfalle";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"06-crypto_tales-06-ewige_sicherheitslücke/index.md": {
	id: "06-crypto_tales-06-ewige_sicherheitslücke/index.md";
  slug: "06-crypto_tales-06-ewige_sicherheitslücke";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"07-crypto_tales-07-luftschlösser_der_tokenomics/index.md": {
	id: "07-crypto_tales-07-luftschlösser_der_tokenomics/index.md";
  slug: "07-crypto_tales-07-luftschlösser_der_tokenomics";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"08-crypto_tales-08-brücken_ins_nichts/index.md": {
	id: "08-crypto_tales-08-brücken_ins_nichts/index.md";
  slug: "08-crypto_tales-08-brücken_ins_nichts";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"09-crypto_tales-09-trügerische_stabilität/index.md": {
	id: "09-crypto_tales-09-trügerische_stabilität/index.md";
  slug: "09-crypto_tales-09-trügerische_stabilität";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"10-crypto_tales-10-falsche_demokratie/index.md": {
	id: "10-crypto_tales-10-falsche_demokratie/index.md";
  slug: "10-crypto_tales-10-falsche_demokratie";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"11-crypto_tales-11-schatten_der_regulierung/index.md": {
	id: "11-crypto_tales-11-schatten_der_regulierung/index.md";
  slug: "11-crypto_tales-11-schatten_der_regulierung";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"12-crypto_tales-12-ende_der_alten_geschichten/index.md": {
	id: "12-crypto_tales-12-ende_der_alten_geschichten/index.md";
  slug: "12-crypto_tales-12-ende_der_alten_geschichten";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"13-crypto-tales-kolumne-gemini/index.md": {
	id: "13-crypto-tales-kolumne-gemini/index.md";
  slug: "13-crypto-tales-kolumne-gemini";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"14-xfp-paper-release/index.md": {
	id: "14-xfp-paper-release/index.md";
  slug: "14-xfp-paper-release";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"15-snft-paper-release/index.md": {
	id: "15-snft-paper-release/index.md";
  slug: "15-snft-paper-release";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
"legal": {
"ACTIVITIES.md": {
	id: "ACTIVITIES.md";
  slug: "activities";
  body: string;
  collection: "legal";
  data: InferEntrySchema<"legal">
} & { render(): Render[".md"] };
"privacy.md": {
	id: "privacy.md";
  slug: "privacy";
  body: string;
  collection: "legal";
  data: InferEntrySchema<"legal">
} & { render(): Render[".md"] };
"terms.md": {
	id: "terms.md";
  slug: "terms";
  body: string;
  collection: "legal";
  data: InferEntrySchema<"legal">
} & { render(): Render[".md"] };
};
"projects": {
"gmn001-verschränkter-digitaler-vermögenswert/index.md": {
	id: "gmn001-verschränkter-digitaler-vermögenswert/index.md";
  slug: "gmn001-verschränkter-digitaler-vermögenswert";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"gmn002-kyc-nontransferable-token/index.md": {
	id: "gmn002-kyc-nontransferable-token/index.md";
  slug: "gmn002-kyc-nontransferable-token";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"gmn003-foureyes-controlled-contractsystem/index.md": {
	id: "gmn003-foureyes-controlled-contractsystem/index.md";
  slug: "gmn003-foureyes-controlled-contractsystem";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
};
"work": {
"snft-forschungsprojekt.md": {
	id: "snft-forschungsprojekt.md";
  slug: "snft-forschungsprojekt";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
