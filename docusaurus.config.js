// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Phaser Help',
	tagline: 'Phaser and Phaser Editor documentation',
	favicon: 'img/favicon.webp',

	// Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
	future: {
		v4: true, // Improve compatibility with the upcoming Docusaurus v4
		experimental_faster: {
			rspackBundler: true,
			rspackPersistentCache: true,
			ssgWorkerThreads: true,
			mdxCrossCompilerCache: true,
		},
	},

	// Set the production url of your site here
	url: 'https://docs.phaser.io',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'phaser', // Usually your GitHub org/user name.
	projectName: 'phaser-docs', // Usually your repo name.

	onBrokenLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	markdown: {
		format: "detect",
		hooks: {
			onBrokenMarkdownLinks: 'warn',
		}
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: './sidebars.js',
					routeBasePath: '/', // Serve the docs at the site's root
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl:
					//   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: false,
				theme: {
					customCss: './src/css/custom.css',
				},
			}),
		],
	],
	plugins: [
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'api-documentation',
				path: 'api-documentation',
				routeBasePath: 'api-documentation',
				sidebarPath: './sidebarsApi.js',
				lastVersion: '3.87.0',
				includeCurrentVersion: false,
				versions: {
					"3.87.0": {
						label: 'API Documentation',
					},
					"3.86.0": {
						label: 'API Documentation - v3.86.0',
					},
					"3.85.2": {
						label: 'API Documentation - v3.85.2',
					},
				},
			},
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: 'img/docusaurus-social-card.jpg',
			colorMode: {
				respectPrefersColorScheme: true,
			},
			navbar: {
				logo: {
					alt: 'Phaser logo',
					src: 'img/phaser.png',
				},
				items: [
					{
						type: 'docSidebar',
						sidebarId: 'PhaserSidebar',
						position: 'left',
						label: 'Phaser',
					},
					{
						type: 'docsVersionDropdown',
						versions: [
							"3.87.0",
							"3.85.2",
							"3.86.0"
						],
						position: 'left',
						docsPluginId: 'api-documentation',
					},
					// {
					// 	type: 'docSidebar',
					// 	sidebarId: 'PhaserApiSidebar',
					// 	position: 'left',
					// 	label: 'Phaser API Documentation',
					// 	id: 'api-documentation',
					// },
					{
						type: 'docSidebar',
						sidebarId: 'PhaserEditorSidebar',
						position: 'left',
						label: 'Phaser Editor',
					},
					{
						to: 'https://phaser.io/examples/v3.85.0', label: 'Examples', position: 'left'
					},
					{
						to: 'https://phaser.io/news/2025/01/the-wildfires', label: 'Game of the Week', position: 'left'
					},
					{
						href: 'https://github.com/phaserjs/phaser',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Docs',
								to: '/',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Stack Overflow',
								href: 'https://stackoverflow.com/questions/tagged/docusaurus',
							},
							{
								label: 'Discord',
								href: 'https://discordapp.com/invite/docusaurus',
							},
							{
								label: 'X',
								href: 'https://x.com/docusaurus',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
		}),
};

export default config;
