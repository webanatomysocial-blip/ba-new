const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx')) {
      results.push(file);
    }
  });
  return results;
}
const files = walk('d:/ba-new/src/app/services');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<br\s*\/>/g, ' <br className="desktop-br" /> ');
  fs.writeFileSync(file, content);
});
console.log('Replaced in ' + files.length + ' files');
