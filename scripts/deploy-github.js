const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'git@github.com:ricovitch/ricovitch.github.io.git',
  },
  (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('Deploy Complete!')
  }
)