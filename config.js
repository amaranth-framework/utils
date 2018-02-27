System.config({
    defaultJSExtensions: true,
    transpiler: false,
    paths: {
        'github:*': 'jspm_packages/github/*',
        'npm:*': 'jspm_packages/npm/*'
    },

    map: {
        'aurelia-polyfills': 'npm:aurelia-polyfills@1.3.0',
        'js-cookie': 'npm:js-cookie@2.2.0',
        'npm:aurelia-polyfills@1.3.0': {
            'aurelia-pal': 'npm:aurelia-pal@1.5.0'
        }
    }
});
