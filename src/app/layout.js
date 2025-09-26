//= Global Styles
import "@/styles/main.scss";
import "@/styles/preloader.css";
import "@/styles/modal-video.css";
import "swiper/css/bundle";
import "react-circular-progressbar/dist/styles.css";
import Script from "next/script";

export const metadata = {
  title: 'QuantaLeaps-Home IT Consulting and IT Services',
  description: 'QuantaLeaps-IT Consulting and IT Services company with 20+ years of industry experince in identifying high quality resources for enterprise needs.',
  keywords: ['IT Consulting', 'Software Resources', 'developers', 'Devops', 'testing', 'test automation','selenium', 'gitlab cicd', 'java resources', 'adobe experience manager', 'AEM','NodeJS', 'happyJS', 'cypress', 'springboot', 'powerBI', 'load runner', 'gatling', 'C#','dotnet', 'AWS', 'Azure', 'android', 'IOS dev', 'Swift programming'],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico"
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <link rel="stylesheet" href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css"/>
        <Script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js" strategy="afterInteractive" />
        <df-messenger
          location="us-central1"
          project-id="quantaleaps"
          agent-id="a5bc883c-155c-4e73-9f66-3e4001e85163"
          language-code="en"
          max-query-length="-1">
          <df-messenger-chat-bubble
           chat-title="AI Agent">
          </df-messenger-chat-bubble>
        </df-messenger>
      </body>
    </html>
  )
}
