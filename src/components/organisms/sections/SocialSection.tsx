import React from 'react';

export const SocialSection: React.FC = () => {
  return (
    <section id="social" className="section social-section">
      <div className="section-container">
        <h2 className="section-title">Social Links</h2>
        <div className="social-content">
          {/* GitHub */}
          <div className="social-item github">
            <h3>[GitHub]</h3>
            <div className="github-contribution">
              [GitHub Contribution Graph]
            </div>
            <a href="#" className="social-link">[GitHub Profile Link]</a>
          </div>

          {/* 技術ブログ */}
          <div className="social-item blog">
            <h3>[Tech Blog]</h3>
            <div className="blog-links">
              <a href="#" className="social-link">[Qiita]</a>
              <a href="#" className="social-link">[Zenn]</a>
              <a href="#" className="social-link">[Note]</a>
            </div>
          </div>

          {/* X (Twitter) */}
          <div className="social-item twitter">
            <h3>[X (Twitter)]</h3>
            <a href="#" className="social-link">[Twitter Profile Link]</a>
          </div>
        </div>
      </div>
    </section>
  );
};
