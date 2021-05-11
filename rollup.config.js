import yaml from '@rollup/plugin-yaml';

export default {
	input: 'index.js',
	output: {
		file: 'dist/index.js',
		exports: 'default',
		format: 'cjs',
	},
	plugins: [
		yaml(),
	],
};
