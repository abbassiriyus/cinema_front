export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "DUBGO saytida o'zbek tilida onlayn anime tomosha qiling",
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		// Favicons
		link: [
			{ rel: "icon", type: "image/png", href: "/favicon-32x32.png", sizes: "32x32" },
			{
				rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.2/css/lightgallery.css"
			},
			{
				rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.2/css/lg-zoom.css"
			},
			{
				rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.2/css/lg-thumbnail.css"
			},
			{
				rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.2/css/lightgallery-bundle.css"
			}
		],
		script: [
			{
				type: 'text/javascript',
				src: '/js/bootstrap.bundle.min.js',
				body: true
			},
			{
				type: 'text/javascript',
				src: '/js/smooth-scrollbar.js',
				body: true
			},
			{
				type: 'text/javascript',
				src: '/js/splide.min.js',
				body: true
			},
			{
				type: 'text/javascript',
				src: '/js/plyr.min.js',
				body: true
			},
			{
				type: 'text/javascript',
				src: 'https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.2/lightgallery.min.js',
				body: true
			},
			{
				type: 'text/javascript',
				src: '/js/slimselect.min.js',
				body: true
			},
			{
				type: 'text/javascript',
				src: '/js/main.js',
				body: true
			},
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/css/bootstrap.min.css',
		'~/assets/css/splide.min.css',
		'~/assets/css/slimselect.css',
		'~/assets/css/plyr.css',
		'~/assets/css/default-skin.css',
		'~/assets/css/main.css',
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: '/',
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
}



