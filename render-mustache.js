const fs = require('fs');
const Mustache = require('mustache');

const template = fs.readFileSync('views/template.mustache', 'utf8');
const output = Mustache.render(template);

fs.writeFileSync('build/index.html', output);

// mustache tenque ser compilado