const express = require('express');

const router = express.Router();

// LOL the
router.get("/", (request, response, next) => {
    response.send('<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Bulma website Lab11</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></head><body><nav class="navbar is-dark has-shadow" role="navigation" aria-label="main navigation"><div class="navbar-brand"><a class="navbar-item" href="https://bulma.io"><img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></a><a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"data-target="navbarBasicExample"><span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span></a></div><div id="navbarBasicExample" class="navbar-menu"><div class="navbar-start"><a class="navbar-item">Home</a><a class="navbar-item">Sample</a><div class="navbar-item has-dropdown is-hoverable"><a class="navbar-link">More</a><div class="navbar-dropdown"><a class="navbar-item">About</a><a class="navbar-item">Jobs</a><a class="navbar-item">Contact</a><hr class="navbar-divider"><a class="navbar-item">Report an issue</a></div></div></div><div class="navbar-end"><div class="navbar-item"><div class="buttons"><a class="button is-primary"><strong>Sign up</strong></a><a class="button is-light">Log in</a></div></div></div></div></nav><section class="section"><div class="container"><h1 class="title">Sample page. Nothing here</h1></div></section><footer class="footer"><div class="content has-text-centered"><p><strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.</p></div></footer></body></html>');
});

router.post("/", (request, response, next) => {
  console.log(request.body);
});


module.exports = router;