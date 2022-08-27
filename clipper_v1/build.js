const fs = require('fs');

const index_html = fs.readFileSync('./build/index.html', 'utf-8');
const character_to_remove = index_html.match(/static/).index - 1;
const new_index_html = index_html.slice(0, character_to_remove) + index_html.slice(character_to_remove + 1);
fs.writeFileSync('./build/index.html', new_index_html);
