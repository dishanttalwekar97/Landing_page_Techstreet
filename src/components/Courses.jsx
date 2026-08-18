import React, { useState, useMemo } from 'react';
import {
  TrendingUp,
  Zap,
  Layers,
  Target,
  Coins,
  Compass,
  ArrowRight,
  Clock,
  BookOpen,
  CheckCircle2,
  BarChart2,
  FileText,
  Award
} from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';
import { COURSES_DATA, COURSES_CATEGORIES } from '../data/content';

const iconMap = {
  TrendingUp: TrendingUp,
  Zap: Zap,
  Layers: Layers,
  Target: Target,
  Coins: Coins,
  Compass: Compass
};

export function Courses() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('All Programs');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filteredCourses = useMemo(() => {
    if (activeCategory === 'All Programs') return COURSES_DATA;
    return COURSES_DATA.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="courses" className="section-wrapper">
      <div className="content-container">
        <div ref={ref} className={`reveal-init ${isInView ? 'reveal-visible' : ''}`}>
          <SectionHeading
            badge="Structured Masterclasses"
            badgeIcon={BookOpen}
            title="Institutional-Grade"
            titleHighlight="Trading Programs."
            subtitle="Engineered to transform complete beginners and intermediate traders into disciplined, rule-based market professionals."
          />

          {/* Category Filter Tabs */}
          <div className="courses-filter-tabs">
            {COURSES_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="courses-grid">
            {filteredCourses.map((course, idx) => {
              const IconComp = iconMap[course.icon] || TrendingUp;
              return (
                <Card
                  key={course.id}
                  className={`course-card delay-${(idx % 3 + 1) * 100}`}
                  onClick={() => setSelectedCourse(course)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="course-header">
                    <div className="course-icon-wrap">
                      <IconComp size={24} strokeWidth={2.2} />
                    </div>
                    <span className="course-level-badge">{course.level}</span>
                  </div>

                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-desc">{course.description}</p>

                  {/* Difficulty Meter */}
                  <div className="course-difficulty-row">
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                      <span>Program Intensity</span>
                      <span style={{ color: 'var(--accent-gold-light)', fontWeight: 600 }}>{course.difficulty}%</span>
                    </div>
                    <div className="difficulty-track">
                      <div className="difficulty-fill" style={{ width: `${course.difficulty}%` }} />
                    </div>
                  </div>

                  {/* Features / Inclusion Badges */}
                  <div className="course-features-pills">
                    {course.features.slice(0, 2).map((feat) => (
                      <span key={feat} className="course-feature-pill">
                        <CheckCircle2 size={12} color="#10B981" />
                        {feat}
                      </span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="course-meta-tags">
                    {course.tags.map((tag) => (
                      <span key={tag} className="course-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="course-footer">
                    <div className="course-duration">
                      <Clock size={14} />
                      <span>{course.duration.split('•')[0]}</span>
                    </div>

                    <button
                      type="button"
                      className="course-action-link"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCourse(course);
                      }}
                    >
                      <span>Syllabus</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Course Curriculum Preview Modal */}
      <Modal
        isOpen={Boolean(selectedCourse)}
        onClose={() => setSelectedCourse(null)}
        title={selectedCourse ? selectedCourse.title : ''}
      >
        {selectedCourse && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span className="course-level-badge" style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--accent-gold-light)', border: '1px solid rgba(245,158,11,0.3)' }}>
                {selectedCourse.level}
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {selectedCourse.duration}
              </span>
            </div>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.6 }}>
              {selectedCourse.description}
            </p>

            {/* Course Features Overview */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '22px' }}>
              {selectedCourse.features.map((feat) => (
                <div
                  key={feat}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    background: 'rgba(245, 158, 11, 0.05)',
                    border: '1px solid rgba(245, 158, 11, 0.2)',
                    fontSize: '0.82rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  <Award size={15} color="#F59E0B" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <h4 style={{ fontSize: '0.98rem', color: '#FFF', marginBottom: '12px', fontWeight: 700 }}>
              Syllabus Modules & Learning Plan:
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '26px' }}>
              {selectedCourse.curriculum.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                  }}
                >
                  <CheckCircle2 size={16} color="#F59E0B" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <Button variant="secondary" size="sm" onClick={() => setSelectedCourse(null)}>
                Close
              </Button>
              <Button
                variant="primary"
                size="sm"
                href="#community"
                onClick={() => setSelectedCourse(null)}
              >
                Enroll via App
                <ArrowRight size={15} />
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
