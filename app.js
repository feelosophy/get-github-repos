const github = require('./github');

const username = process.argv[2];

github.getRepos(username, (err, repos) => {
    if(err) return console.error(`Ошибка: ${err.message}`);

    repos.forEach(repo => console.log(repo.name));
});