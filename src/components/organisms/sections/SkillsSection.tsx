import React from 'react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-content">
          {/* スキルカテゴリー別エリア */}
          <div className="skill-category">
            <h3>[Languages]</h3>
            <div className="skill-items">
              [Skill items with level indicators]
            </div>
          </div>

          <div className="skill-category">
            <h3>[Frameworks / Libraries]</h3>
            <div className="skill-items">
              [Skill items with level indicators]
            </div>
          </div>

          <div className="skill-category">
            <h3>[Infrastructure / Cloud]</h3>
            <div className="skill-items">
              [Skill items with level indicators]
            </div>
          </div>

          <div className="skill-category">
            <h3>[Other Tools]</h3>
            <div className="skill-items">
              [Skill items with level indicators]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
