const fs = require('fs');
const child_process = require('child_process');

const output_directory_name = '../../clipper_v1';

console.log('Moving old build back to where it came from')
{
  fs.renameSync(output_directory_name, './build');
}

console.log('Executing: npx react-scripts build');
{
  child_process.execSync('npx react-scripts build');
}

console.log('Removing one character from the build')
{
  const index_html = fs.readFileSync('./build/index.html', 'utf-8');
  const character_to_remove = index_html.match(/static/).index - 1;
  const new_index_html = index_html.slice(0, character_to_remove) + index_html.slice(character_to_remove + 1);
  fs.writeFileSync('./build/index.html', new_index_html);
}

console.log('Moving build to where it is supposed to be');
{
  fs.renameSync('./build', output_directory_name);
}
