require('dotenv').config()
const express = require('express');

const app = express();

const githubData = {
    "login": "Addy2012",
    "id": 53235844,
    "node_id": "MDQ6VXNlcjUzMjM1ODQ0",
    "avatar_url": "https://avatars.githubusercontent.com/u/53235844?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Addy2012",
    "html_url": "https://github.com/Addy2012",
    "followers_url": "https://api.github.com/users/Addy2012/followers",
    "following_url": "https://api.github.com/users/Addy2012/following{/other_user}",
    "gists_url": "https://api.github.com/users/Addy2012/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Addy2012/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Addy2012/subscriptions",
    "organizations_url": "https://api.github.com/users/Addy2012/orgs",
    "repos_url": "https://api.github.com/users/Addy2012/repos",
    "events_url": "https://api.github.com/users/Addy2012/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Addy2012/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 28,
    "public_gists": 0,
    "followers": 1,
    "following": 0,
    "created_at": "2019-07-23T19:16:28Z",
    "updated_at": "2025-10-26T15:26:14Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/twitter', (req, res) => {
    res.send(`<h1>Anand twitter user</h1>`)
})

app.get('/login', (req, res) => {
    res.send(`<h1>Please login at Chai aur Code.</h1>`)
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Chai aur code</h2>")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app is being listened on port ${process.env.PORT}`)
})