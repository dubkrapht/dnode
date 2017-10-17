#!/usr/bin/env bash
npm install

case "$NODE_ENV" in
    production )
        node index.js;;
    * )
        nodemon --harmony --watch app --watch config -L --debug=0.0.0.0:5858 ./index.js;;
esac