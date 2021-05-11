import yaml from '@rollup/plugin-yaml';

export default {
	input: 'src/index.js',
	output: {
		file: 'dist/index.js',
		exports: 'default',
		format: 'cjs',
	},
	plugins: [
		yaml(),
	],
};
