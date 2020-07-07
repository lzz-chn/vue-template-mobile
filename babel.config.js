const IS_PROD = ['production'].includes(process.env.NODE_ENV)

const removeConsole = []
if (IS_PROD) {
    removeConsole.push('transform-remove-console')
}

module.exports = {
    presets: ['@vue/cli-plugin-babel/preset'],
    plugins: [
        ...removeConsole,
        [
            'import',
            {
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: true
            },
            'vant'
        ]
    ]
}
