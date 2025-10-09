import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          {/* プロフィール画像エリア */}
          <div className="profile-image-container">
            <div className="profile-image-placeholder">
              [Profile Image]
            </div>
          </div>

          {/* プロフィール情報エリア */}
          <div className="profile-info">
            <div className="name-container">
              [Name]
            </div>
            <div className="catchphrase-container">
              [Catchphrase / Title]
            </div>
            <div className="self-pr-container">
              [Self PR / Vision]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
