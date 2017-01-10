const fs = require('mz/fs');
const path = require('path');

const dir = process.argv[2];


fs.readdir(dir)
.then((entries) => {
  const files = entries.filter((entry) => {
    const stats = fs.statSync(path.resolve(dir, entry));
    return !stats.isDirectory() && entry.substr(-3) === '.js' && entry !== 'index.js';
  });

  const classes = files.map(file => file.split('.')[0]);
  const imports = classes.map(cls => `import ${cls} from './${cls}';`).join('\n');
  const exports = `export {\n  ${classes.join(',\n  ')},\n};`;

  return fs.writeFile(path.resolve(dir, 'index.js'), `${imports}\n\n${exports}\n`);
})
.then(() => {
  process.stdout.write('Done!\n');
  process.exit(0);
})
.catch((err) => {
  process.stderr.write(err.toString());
  process.exit(1);
});
