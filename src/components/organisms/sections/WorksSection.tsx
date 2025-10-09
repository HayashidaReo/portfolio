import React from 'react';

export const WorksSection: React.FC = () => {
  return (
    <section id="works" className="section works-section">
      <div className="section-container">
        <h2 className="section-title">Works / Projects</h2>
        <div className="timeline-container">
          {/* タイムライン表示エリア（降順: 新しい順） */}
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">[Timeline Marker]</div>
              <div className="timeline-content">
                <div className="project-card">
                  <div className="project-icon">[App Icon]</div>
                  <h3 className="project-name">[Project Name]</h3>
                  <div className="project-period">[Development Period]</div>
                  <div className="project-tech-stack">
                    [Tech Stack Icons]
                  </div>
                  <div className="project-overview">
                    [Project Overview - truncated to 3 lines]
                  </div>
                  <button className="read-more-btn">[Read More]</button>
                </div>
              </div>
            </div>

            {/* 追加のプロジェクトアイテムがここに入る */}
            <div className="timeline-item">
              <div className="timeline-marker">[Timeline Marker]</div>
              <div className="timeline-content">
                [Another Project Card]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
