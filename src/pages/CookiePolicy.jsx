import LegalPage from '../components/LegalPage'
import { COMPANY as C } from '../company'

export default function CookiePolicy() {
  return (
    <LegalPage title="Cookie Policy">
      <div className="notice">
        This Cookie Policy explains how <strong>{C.name}</strong> uses cookies and similar tracking
        technologies on our website. You can manage your cookie preferences at any time using the banner
        displayed when you first visit the site, or by adjusting your browser settings.
      </div>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files placed on your device (computer, smartphone, or tablet) when you visit
        a website. They allow the website to recognise your device and remember certain information about
        your visit — such as your preferences or the contents of a shopping basket.
      </p>
      <p>
        Cookies set by the website owner (in this case, {C.name}) are called "first-party cookies".
        Cookies set by parties other than the website owner are called "third-party cookies".
      </p>

      <h2>2. What This Website Uses</h2>

      <h3>a) Strictly necessary storage</h3>
      <p>
        This website keeps its use of cookies and similar technologies to a minimum. At present it stores
        only one item in your browser, which is needed to remember your choice on the cookie banner:
      </p>
      <ul>
        <li><strong>{C.consentKey}</strong> (browser local storage) — records your cookie preference so the banner is not shown on every visit. It stays until you clear your browser data.</li>
      </ul>
      <p>You cannot opt out of this item, because the site needs it to respect your choice.</p>

      <h3>b) Analytics, functional and marketing cookies</h3>
      <p>
        We do not currently use analytics, advertising or social-media tracking cookies. If we introduce any in
        future, we will update this policy first and only set them after you have given consent through the
        cookie banner.
      </p>

      <h3>c) Fonts</h3>
      <p>
        This website loads its typefaces from Google Fonts. When a page loads, your browser connects to Google's
        servers, which receive your IP address. Google Fonts does not set cookies. See{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.
      </p>

      <h2>3. How to Manage Cookies</h2>
      <h3>Via our cookie banner</h3>
      <p>
        When you first visit our website, you will see a cookie consent banner. You can choose to accept or to
        allow essential storage only. You can change your preferences at any time by clearing
        your browser cookies and revisiting the site.
      </p>
      <h3>Via your browser settings</h3>
      <p>
        Most web browsers allow you to control cookies through their settings. You can typically find these
        in the "Privacy" or "Security" section of your browser. Below are links to guidance for common browsers:
      </p>
      <ul>
        <li>Google Chrome — Settings &gt; Privacy and security &gt; Cookies</li>
        <li>Mozilla Firefox — Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
        <li>Apple Safari — Preferences &gt; Privacy &gt; Manage Website Data</li>
        <li>Microsoft Edge — Settings &gt; Cookies and site permissions</li>
      </ul>
      <p>
        Please note that disabling certain cookies may affect the functionality of our website and prevent
        you from using some features.
      </p>

      <h2>4. Third-Party Cookies</h2>
      <p>
        Some pages on our website embed content or functionality from third-party services (such as payment
        processors, social media share buttons, or video content). These third parties may set their own
        cookies on your device. We do not control these third-party cookies. Please refer to the respective
        third parties' privacy and cookie policies for more information.
      </p>

      <h2>5. Do Not Track</h2>
      <p>
        Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not wish
        to be tracked. Our website does not currently respond to DNT signals, but you can use the cookie
        management options described above to control tracking cookies.
      </p>

      <h2>6. Changes to This Cookie Policy</h2>
      <p>
        We may update this Cookie Policy periodically. When we do, we will revise the "last updated" date
        at the top of this page. We encourage you to review this policy from time to time.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions about our use of cookies, please contact us at{' '}
        <a href={`mailto:${C.email}`}>{C.email}</a> or write to:
      </p>
      <ul>
        <li>{C.name}, {C.address}</li>
      </ul>
    </LegalPage>
  )
}
