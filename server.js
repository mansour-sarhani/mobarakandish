const fs = require('fs');
const https = require('https');
const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
    key: fs.readFileSync('./localhost-key.pem'),
    cert: fs.readFileSync('./localhost.pem'),
};

app.prepare().then(() => {
    const server = express();

    server.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', 'https://localhost:3005');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

    // server.use(
    //     '/api',
    //     createProxyMiddleware({
    //         target: 'https://geapi.mobarakandish.com',
    //         changeOrigin: true,
    //         pathRewrite: {
    //             '^/api': '',
    //         },
    //         onProxyRes: (proxyRes, req, res) => {
    //             proxyRes.headers['Access-Control-Allow-Origin'] =
    //                 'https://localhost:3005';
    //         },
    //     })
    // );

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    https.createServer(httpsOptions, server).listen(3005, (err) => {
        if (err) throw err;
        console.log('> Ready on https://localhost:3005');
    });
});
