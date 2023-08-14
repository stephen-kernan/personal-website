import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export const Document = () => {
  return (
      <Html>
          <Head>
              <meta charset="utf-8" />
              <link rel="icon" href="../public/images/personal-logo.svg" />
              <meta name="theme-color" content="#000000" />
              {/* <meta
          name="description"
          content="Web site created using create-react-app"
        /> */}
              <link
                  rel="apple-touch-icon"
                  href="../public/images/personal-logo.svg"
              />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
              <link
                  href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sora:wght@400;500;600;700;800&display=swap"
                  rel="stylesheet"
              />
              <link rel="stylesheet" href="https://use.typekit.net/quc3ezb.css" crossOrigin />
              {/*
          manifest.json provides metadata used when your web app is installed on a
          user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
        */}
              {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
              {/*
          Notice the use of %PUBLIC_URL% in the tags above.
          It will be replaced with the URL of the `public` folder during the build.
          Only files inside the `public` folder can be referenced from the HTML.

          Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
          work correctly both with client-side routing and a non-root public URL.
          Learn how to configure a non-root public URL by running `npm run build`.

        */}
          </Head>
          <body>
              <Main />
              <NextScript />
          </body>
      </Html>
  )
}

export default Document
