const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/Dash2/main.js',
    './dist/Dash2/polyfills.js',
    './dist/Dash2/runtime.js',
    './dist/Dash2/scripts.js',
  ];

  await fs.ensureDir('element');
  await concat(files, 'element/dash-script.js');
})();
