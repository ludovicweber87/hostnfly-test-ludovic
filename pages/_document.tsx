import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  private setSplashScreens() {
    return (
      <>
        {/* <link
          rel="apple-touch-startup-image"
          href="splashs/apple_splash_640.png"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="splashs/apple_splash_750.png"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="splashs/apple_splash_1242.png"
          media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="splashs/apple_splash_1125.png"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="splashs/apple_splash_1536.png"
          media="(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="splashs/apple_splash_1668.png"
          media="(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="splashs/apple_splash_2048.png"
          media="(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
        /> */}
      </>
    );
  }

  private setMetasElements() {
    return (
      <>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Hostnfly App" />

        <meta name="application-name" content="Hostnfly" />

        <meta name="description" content="Hostnfly" />

        <meta name="format-detection" content="telephone=no" />

        <meta name="mobile-web-app-capable" content="yes" />

        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-tap-highlight" content="no" />
      </>
    );
  }

  private setLinksElements() {
    return (
      <>
        <link rel="manifest" href="/manifest.json" />

        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" />

        <link rel="shortcut icon" href="/favicons/favicon.ico" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;0,700;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </>
    );
  }

  render() {
    return (
      <Html>
        <Head>
          {this.setMetasElements()}
          {this.setLinksElements()}

          {this.setSplashScreens()}
          <noscript>
            An error occured, you either have JavaScript turned off or your
            browser doesn&apos;t support JavaScript
          </noscript>
          <noscript>
            Une erreur est survenue, soit JavaScript est désactivé, soit votre
            navigateur ne prend pas en charge JavaScript
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
