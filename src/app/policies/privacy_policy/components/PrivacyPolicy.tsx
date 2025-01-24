export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 pt-40">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-gray-600 mb-8">Effective Date: 24.01.2025</p>
      
      <div className="prose prose-lg max-w-none">
        <p className="mb-8">
          At LetsProject.co, we value your privacy and are committed to protecting your personal information. 
          This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website 
          or interact with us through our contact form.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p>We collect two types of information:</p>
          
          <h3 className="text-xl font-medium mt-4 mb-2">a) Website Analytics Data</h3>
          <p>We use Simply Analytics to track basic visitor activity on our website. This includes anonymized information such as:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Pages viewed</li>
            <li>Time spent on the website</li>
            <li>General geographic location (e.g., city or country)</li>
            <li>Browser type and operating system</li>
          </ul>
          <p>This data is collected in aggregate and cannot be used to personally identify you.</p>
          
          <h3 className="text-xl font-medium mt-4 mb-2">b) Contact Form Data</h3>
          <p>When you fill out and submit the contact form on our website, we collect the following information:</p>
          <ul className="list-disc pl-6">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Company Name</li>
            <li>Message Content</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p>The data we collect is used solely for the following purposes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Website Analytics Data: To analyze and improve the performance, usability, and content of our website.</li>
            <li>Contact Form Data: To respond to your inquiries, provide information about our services, and communicate with you directly.</li>
          </ul>
          <p>We do not use your data for marketing purposes unless explicitly agreed upon by you.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Data Sharing</h2>
          <p>We respect your privacy and do not sell, trade, or share your personal information with third parties, except as necessary to:</p>
          <ul className="list-disc pl-6">
            <li>Comply with applicable laws or legal obligations.</li>
            <li>Protect the rights, safety, or property of LetsProject.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Retention</h2>
          <ul className="list-disc pl-6">
            <li>Contact Form Data: We retain the information you provide in the contact form for as long as necessary to respond to your inquiries or comply with legal obligations.</li>
            <li>Website Analytics Data: Data collected via Simply Analytics is retained in aggregate form and is not tied to any individual user.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
          <p>You have the following rights regarding your personal data:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access: Request access to the personal data we have about you.</li>
            <li>Correction: Request corrections to any inaccurate or incomplete data.</li>
            <li>Deletion: Request the deletion of your personal data.</li>
          </ul>
          <p>To exercise these rights, please contact us at letsproject.hello@gmail.com.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
          <p>We implement industry-standard security measures to protect your data from unauthorized access, loss, or misuse. However, please note that no method of transmission over the internet or electronic storage is 100% secure.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Cookies and Tracking</h2>
          <p>We may use cookies to enhance your browsing experience. These cookies do not store personal information and can be managed through your browser settings.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Third-Party Services</h2>
          <p>We use Simply Analytics for website analytics. Their privacy policy can be found at <a href="https://dashboard.simpleanalytics.com/privacy-policy" className="text-blue-600 hover:underline">https://dashboard.simpleanalytics.com/privacy-policy</a>.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Changes to This Privacy Policy</h2>
          <p>We reserve the right to update or modify this Privacy Policy at any time. Changes will be effective immediately upon posting on this page. Please review this policy periodically for updates.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
          <p className="mt-2">
            Email: <a href="mailto:letsproject.hello@gmail.com" className="text-blue-600 hover:underline">
              letsproject.hello@gmail.com
            </a>
          </p>
        </section>

        <p className="mt-8 text-gray-600">
          This Privacy Policy ensures transparency and protects both your rights and our commitment to data privacy.
        </p>
      </div>
    </div>
  )
}
