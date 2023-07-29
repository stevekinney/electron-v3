import remarkAbbr from 'remark-abbr';
import rehypeSlug from 'rehype-slug';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkToc from 'remark-toc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { defineMDSveXConfig as defineConfig, escapeSvelte } from 'mdsvex';
import shiki from 'shiki';

const config = defineConfig({
	extensions: ['.md', '.mdx', '.svx'],

	layout: {
		_: 'src/lib/components/content-layout.svelte'
	},

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [remarkAbbr],
	rehypePlugins: [
		rehypeSlug,
		[
			rehypeAutolinkHeadings,
			{
				behavior: 'wrap'
			}
		],
		remarkUnwrapImages,
		[remarkToc, { tight: true }]
	],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await shiki.getHighlighter({ theme: 'poimandres' });
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang }));
			return `{@html \`${html}\` }`;
		}
	}
});

export default config;
