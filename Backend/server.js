const fs = require('fs');
const plt = require('nodeplotlib');

// Create the plot data
const t = Array.from({ length: 100 }, (_, i) => i / 10);
const y = t.map(v => Math.sin(v));

const plotData = [{ x: t, y, type: 'line', name: 'sin(x)' }];

// Generate an HTML string
const html = plt.getHtml(plotData);

// Save the HTML file instead of opening a browser
fs.writeFileSync('./plot.html', html, 'utf-8');

console.log('Plot saved to plot.html');
