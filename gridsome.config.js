// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require('tailwindcss')

module.exports = {
  siteName: 'o79',
  plugins: [{
      use: "gridsome-plugin-tailwindcss",
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        searchFields: ['name', 'function', 'presentation', 'skills'],
        collections: [{
          typeName: 'User',
          indexName: 'User',
          fields: ['name', 'function', 'presentation', 'skills']
        }]
      }
    }

  ]
}
