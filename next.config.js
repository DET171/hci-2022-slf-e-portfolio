/* eslint-disable react-hooks/rules-of-hooks */
// I mean I'm not using React in this config file
/* eslint-disable no-shadow */
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const esbuild = require('esbuild');

function useEsbuildMinify(config, options) {
	const { minimizer } = config.optimization;
	const terserIndex = minimizer.findIndex(
		minifier => minifier.constructor.name === 'TerserPlugin',
	);

	minimizer.splice(terserIndex, 1, new ESBuildMinifyPlugin(options));
}

function useEsbuildLoader(config, options) {
	const { rules } = config.module;
	const rule = rules.find(rule => rule.test.test('.js'));

	rule.use = {
		loader: 'esbuild-loader',
		options,
	};
}

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.plugins.push(
			new webpack.ProvidePlugin({
				React: 'react',
			}),
		);

		useEsbuildMinify(config);
		useEsbuildLoader(config, {
			// Specify `tsx` if you're using TypeScript
			loader: 'jsx',
			target: 'esnext',
			implementation: esbuild,
		});

		return config;
	},
};

module.exports = nextConfig;
