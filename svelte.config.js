import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import UnoCss from 'unocss/vite'
import { extractorSvelte } from '@unocss/core'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
/*
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import { presetTypography } from 'unocss-preset-typography'
import presetWebFonts from '@unocss/preset-web-fonts'
*/
 
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
	}),
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			extractors: [extractorSvelte],
			plugins: UnoCss({
				shortcuts: [
					{ logo: 'i-logos-svelte-icon w-6em h-6em transform transition-800 hover:rotate-180' },
					{ foo: 'bg-yellow-400' },
					{ bar: 'bg-green-400' },
				  ],
				  presets: [
					presetUno(),
					presetIcons({
					  extraProperties: {
						'display': 'inline-block',
						'vertical-align': 'middle',
					  },
					}),
				  ],
			})
		}
	}
};

export default config;
