const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    // repo: 'https://github.com/ricovitch/ricovitch.github.io.git',
    repo: 'git@github.com:ricovitch/ricovitch.github.io.git',
  },
  (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('Deploy Complete!')
  }
)