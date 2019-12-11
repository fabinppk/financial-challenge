import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { DefaultSeo } from 'next-seo';

const DEFAULT_SEO = {
    title: 'Nubank',
    description: 'Best bank ever',
    openGraph: {
        type: 'website',
        locale: 'pt-br',
        url: '',
        title: 'Nubank',
        description: 'Best bank ever',
        image: 'https://blog.nubank.com.br/wp-content/uploads/2018/11/novo-cartao.jpg',
        site_name: 'Calculator Nubank',
        imageWidth: 1440,
        imageHeight: 600
    },
    twitter: {
        handle: '@nubank',
        cardType: 'summary_large_image'
    }
};

export default class DefaultDocument extends Document {
    // eslint-disable-next-line class-methods-use-this
    render() {
        return (
            <html lang="pt-BR">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <meta name="theme-color" content="#84489c" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                    <DefaultSeo {...DEFAULT_SEO} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
