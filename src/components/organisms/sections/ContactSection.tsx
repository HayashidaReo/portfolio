import React from 'react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          {/* メールアドレス */}
          <div className="contact-item email">
            <h3>[Email]</h3>
            <div className="email-address">
              [email@example.com]
            </div>
          </div>

          {/* お問い合わせフォーム */}
          <div className="contact-item form">
            <h3>[Contact Form]</h3>
            <div className="contact-form-container">
              <form className="contact-form">
                <div className="form-field">
                  <label>[Name]</label>
                  <input type="text" placeholder="Your name" />
                </div>
                <div className="form-field">
                  <label>[Email]</label>
                  <input type="email" placeholder="your@email.com" />
                </div>
                <div className="form-field">
                  <label>[Message]</label>
                  <textarea placeholder="Your message"></textarea>
                </div>
                <button type="submit">[Submit]</button>
              </form>
            </div>
          </div>

          {/* SNS DM */}
          <div className="contact-item dm">
            <h3>[Direct Message]</h3>
            <a href="#" className="dm-link">[X (Twitter) DM]</a>
          </div>
        </div>
      </div>
    </section>
  );
};
