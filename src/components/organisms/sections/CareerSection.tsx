import React from 'react';

export const CareerSection: React.FC = () => {
  return (
    <section id="career" className="section career-section">
      <div className="section-container">
        <h2 className="section-title">Career / Experience</h2>
        <div className="timeline-container">
          {/* タイムライン表示エリア（Worksと時間軸を統一） */}
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">[Timeline Marker]</div>
              <div className="timeline-content">
                <div className="career-card">
                  <h3 className="company-name">[Company Name]</h3>
                  <div className="employment-period">[Employment Period]</div>
                  <div className="job-description">
                    [Job Description]
                  </div>
                  <div className="tech-stack">
                    [Tech Stack Tags]
                  </div>
                </div>
              </div>
            </div>

            {/* 追加の経歴アイテムがここに入る */}
            <div className="timeline-item">
              <div className="timeline-marker">[Timeline Marker]</div>
              <div className="timeline-content">
                [Another Career Card]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
