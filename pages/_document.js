import { Html, Head, Main, NextScript } from 'next/document'
import { ga_measurement_id } from '../lib/google-analytics'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='description' content='Justin To - Software Developer passionate about game development, web development, and building user-friendly applications. Specializing in C++, C#, Python, and modern web technologies.' />
        <meta name='keywords' content='Justin To, Software Developer, Game Developer, Web Developer, C++, Unreal Engine, React, TypeScript' />
        <meta name='author' content='Justin To' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://justinto.dev/' />
        <meta property='og:title' content='Justin To - Software Developer' />
        <meta property='og:description' content='Software Developer passionate about game development, web development, and building user-friendly applications.' />
        <meta property='og:image' content='https://justinto.dev/og-image.jpg' />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://justinto.dev/' />
        <meta property='twitter:title' content='Justin To - Software Developer' />
        <meta property='twitter:description' content='Software Developer passionate about game development, web development, and building user-friendly applications.' />
        <meta property='twitter:image' content='https://justinto.dev/og-image.jpg' />

        <link rel='canonical' href='https://justinto.dev/' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        {ga_measurement_id && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${ga_measurement_id}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${ga_measurement_id}', {
  page_path: window.location.pathname,
});
`,
              }}
            />
          </>
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
