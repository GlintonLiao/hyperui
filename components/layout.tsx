import type { FunctionComponent } from 'react'
import Head from 'next/head'

import Announcements from './announcements'
import Announcement from './announcement'
import Header from './header'
import Footer from './footer'

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VE5EHLYPZP"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-VE5EHLYPZP');
            `,
          }}
        />
      </Head>

      <Announcements>
        <Announcement
          text="🎉 Want a New Component? Create a Request on GitHub 🎉"
          url="https://github.com/markmead/hyperui/issues/new?assignees=markmead&labels=request&template=component-request.md&title=New+Component+Request"
        />

        <Announcement
          text="🌟 HyperUI is Open Source! Drop a Star on GitHub 🌟"
          url="https://github.com/markmead/hyperui"
        />
      </Announcements>

      <Header />

      <main role="main">{children}</main>

      <Footer />
    </>
  )
}

export default Layout
