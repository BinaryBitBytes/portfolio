const open = require('open');

// Open a URL in the default browser
open('https://example.com');

// Open a file with its default associated program
open('path/to/file.txt');

// Open a file with a specific application
open('path/to/file.txt', { app: 'notepad' });
