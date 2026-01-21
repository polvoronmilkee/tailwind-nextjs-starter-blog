/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../app/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: '@storybook/nextjs',
  staticDirs: ['..\\public'],
  webpackFinal: async (config) => {
    const imageRule = config.module.rules.find((rule) => rule?.['test']?.test('.svg'))
    if (imageRule) {
      imageRule['exclude'] = /\.svg$/
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
export default config
