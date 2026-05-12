
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FadeUp, ScaleUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem } from './Animations';
import jsPDF from 'jspdf';
import { useLanguage } from '../i18n/LanguageContext';

interface GuidelinesProps {
  onBack: () => void;
}

/* ─── Animated Counter ─── */
const AnimatedCounter: React.FC<{ target: number; suffix?: string; label: string; delay?: number }> = ({ target, suffix = '', label, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1500;
          const steps = 40;
          const inc = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += inc;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, dur / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-2">
        {count}{suffix}
      </div>
      <div className="mono text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">{label}</div>
    </motion.div>
  );
};

/* ─── Accordion Item ─── */
const AccordionItem: React.FC<{ title: string; icon: string; children: React.ReactNode; index: number; isOpen: boolean; onToggle: () => void }> = ({ title, icon, children, isOpen, onToggle }) => {
  return (
    <motion.div
      className={`border rounded-3xl overflow-hidden transition-all duration-500 ${isOpen ? 'border-[#005bb7]/30 bg-white shadow-xl shadow-[#005bb7]/5' : 'border-slate-100 bg-[#fcfcfc] hover:border-slate-200'}`}
      layout
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-5 p-7 md:p-8 text-left group cursor-pointer"
      >
        <div className={`text-3xl md:text-4xl shrink-0 transition-transform duration-500 ${isOpen ? 'scale-110 rotate-6' : 'group-hover:scale-105'}`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={`text-xl md:text-2xl font-black tracking-tight transition-colors duration-300 ${isOpen ? 'text-[#005bb7]' : 'text-slate-900 group-hover:text-[#005bb7]'}`}>
            {title}
          </h3>
        </div>
        <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-500 ${isOpen ? 'border-[#005bb7] bg-[#005bb7] rotate-45' : 'border-slate-200 group-hover:border-[#005bb7]'}`}>
          <svg className={`w-4 h-4 transition-colors ${isOpen ? 'text-white' : 'text-slate-400 group-hover:text-[#005bb7]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="px-7 md:px-8 pb-8 pt-0">
              <div className="h-[1px] w-full bg-slate-100 mb-6"></div>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ─── Phase Tab ─── */
const PhaseTab: React.FC<{ label: string; active: boolean; onClick: () => void }> = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`relative px-8 md:px-12 py-4 rounded-full font-black text-sm uppercase tracking-[0.2em] transition-all duration-500 cursor-pointer ${active ? 'bg-[#005bb7] text-white shadow-xl shadow-[#005bb7]/30' : 'bg-white/5 text-white/40 hover:text-white/70 hover:bg-white/10'}`}
  >
    {label}
  </button>
);


const Guidelines: React.FC<GuidelinesProps> = ({ onBack }) => {
  const { t } = useLanguage();
  const g = t.guidelines;
  const [activePhase, setActivePhase] = useState<1 | 2>(1);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [hoveredPrize, setHoveredPrize] = useState<number | null>(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  /* ─── PDF Generation ─── */
  const generatePDF = useCallback(() => {
    setIsGeneratingPDF(true);

    setTimeout(() => {
      try {
        const doc = new jsPDF('p', 'mm', 'a4');
        const pageW = doc.internal.pageSize.getWidth();
        const pageH = doc.internal.pageSize.getHeight();
        const mL = 18;
        const mR = 18;
        const cW = pageW - mL - mR;
        let y = 0;

        const blue: [number, number, number] = [0, 91, 183];
        const dark: [number, number, number] = [15, 23, 42];
        const mid: [number, number, number] = [100, 116, 139];
        const light: [number, number, number] = [148, 163, 184];
        const white: [number, number, number] = [255, 255, 255];
        const amber: [number, number, number] = [245, 158, 11];
        const red: [number, number, number] = [220, 38, 38];
        const cardBg: [number, number, number] = [248, 250, 252];

        const ensureSpace = (h: number) => {
          if (y + h > pageH - 22) { doc.addPage(); y = 28; }
        };

        const wrapText = (text: string, x: number, maxW: number, lh: number, style: string, size: number, color: [number, number, number]): number => {
          doc.setFont('helvetica', style);
          doc.setFontSize(size);
          doc.setTextColor(...color);
          const lines = doc.splitTextToSize(text, maxW);
          for (let i = 0; i < lines.length; i++) {
            ensureSpace(lh);
            doc.text(lines[i], x, y);
            y += lh;
          }
          return y;
        };

        /* ── Styled Section Header (blue accent bar + large title) ── */
        const sectionHeader = (label: string, title: string, accentColor: [number, number, number] = blue) => {
          ensureSpace(32);
          // Accent bar
          doc.setFillColor(...accentColor);
          doc.roundedRect(mL, y - 2, 3, 18, 1.5, 1.5, 'F');
          // Label
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(7.5);
          doc.setTextColor(...accentColor);
          doc.text(label.toUpperCase(), mL + 8, y + 2);
          y += 8;
          // Title
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(20);
          doc.setTextColor(...dark);
          const lines = doc.splitTextToSize(title, cW - 10);
          for (const ln of lines) {
            doc.text(ln, mL + 8, y);
            y += 9;
          }
          y += 6;
        };


        /* ── Bullet point ── */
        const bullet = (text: string, indent = 0, color: [number, number, number] = blue) => {
          const bx = mL + 10 + indent;
          const tx = bx + 5;
          const maxW = cW - 18 - indent;
          ensureSpace(6);
          doc.setFillColor(...color);
          doc.circle(bx + 1, y - 1.2, 1, 'F');
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(9);
          doc.setTextColor(...mid);
          const lines = doc.splitTextToSize(text, maxW);
          for (let i = 0; i < lines.length; i++) {
            ensureSpace(4.5);
            doc.text(lines[i], tx, y + i * 4.5);
          }
          y += lines.length * 4.5 + 2;
        };

        // ═══════════════════════════════════════
        // COVER PAGE
        // ═══════════════════════════════════════
        // Top blue accent bar
        doc.setFillColor(...blue);
        doc.rect(0, 0, pageW, 5, 'F');

        // Large SC watermark
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(160);
        doc.setTextColor(245, 245, 245);
        doc.text('SC', pageW / 2, 160, { align: 'center' });

        // Branding label
        y = 50;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(...blue);
        doc.text('SYNERGY CIRCLE 2026', mL, y);
        // Blue underline
        doc.setDrawColor(...blue);
        doc.setLineWidth(0.8);
        doc.line(mL, y + 3, mL + 42, y + 3);

        // Main title
        y = 78;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(42);
        doc.setTextColor(...dark);
        doc.text("Delegates'", mL, y);
        y += 18;
        doc.text('Handbook', mL, y);

        y += 16;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(11);
        doc.setTextColor(...mid);
        doc.text('Organized by the Rotaract Club of SLIIT', mL, y);
        y += 6;
        doc.text('In collaboration with SLIIT Entrepreneurship Club', mL, y);

        y += 16;
        doc.setDrawColor(...blue);
        doc.setLineWidth(1.2);
        doc.line(mL, y, mL + 50, y);

        y += 12;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(...light);
        doc.text('This document contains all information, guidelines, and regulations', mL, y);
        y += 5;
        doc.text('for delegates participating in Synergy Circle 2026.', mL, y);

        // Cover footer
        doc.setFillColor(...dark);
        doc.rect(0, pageH - 14, pageW, 14, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7);
        doc.setTextColor(...white);
        doc.text('SYNERGY CIRCLE 2026   |   ROTARACT SLIIT  x  SLIIT BUSINESS SCHOOL   |   www.synergycircle.online', pageW / 2, pageH - 5.5, { align: 'center' });

        // ═══════════════════════════════════════
        // WHAT IS SYNERGY CIRCLE
        // ═══════════════════════════════════════
        doc.addPage();
        y = 28;

        sectionHeader('Overview', 'What is Synergy Circle?');
        wrapText(
          'Synergy Circle is designed to cultivate innovation, strategic thinking, and entrepreneurial confidence among undergraduates. This initiative is not merely a pitching competition \u2014 it is a structured journey that equips participants with the mindset, tools, and exposure required to translate ideas into viable ventures.',
          mL + 8, cW - 10, 5, 'normal', 10, mid
        );
        y += 3;
        wrapText(
          'Through a two-phase structure combining skill development and competitive evaluation, Synergy Circle bridges academic learning with real-world entrepreneurial expectations.',
          mL + 8, cW - 10, 5, 'normal', 10, mid
        );
        y += 4;

        // Quote card
        ensureSpace(22);
        doc.setFillColor(240, 246, 255);
        doc.roundedRect(mL, y - 3, cW, 18, 3, 3, 'F');
        doc.setFillColor(...blue);
        doc.roundedRect(mL, y - 3, 2.5, 18, 1.2, 1.2, 'F');
        doc.setFont('helvetica', 'bolditalic');
        doc.setFontSize(9);
        doc.setTextColor(...dark);
        const quoteLines = doc.splitTextToSize('"We encourage all delegates to approach this opportunity with professionalism, preparation, and bold thinking."', cW - 16);
        quoteLines.forEach((ln: string, i: number) => {
          doc.text(ln, mL + 8, y + 4 + i * 4.5);
        });
        y += 24;

        // ═══════════════════════════════════════
        // PHASE 1
        // ═══════════════════════════════════════
        y += 4;
        sectionHeader('Phase 01', 'Pitch Olympics \u2014 Workshop');
        wrapText(
          'A structured training workshop designed to develop pitching competence and business validation skills.',
          mL + 8, cW - 10, 5, 'normal', 10, mid
        );
        y += 5;

        // Sub-header
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.setTextColor(...dark);
        ensureSpace(8);
        doc.text('Workshop Guidelines', mL + 8, y);
        y += 8;

        const guidelines = [
          'Registration confirmation is required to enter the workshop.',
          'Please arrive on or before the scheduled start time.',
          'Bring a notebook or device for taking notes.',
          'No prior pitching knowledge or business idea is required.',
          'Follow all instructions given by the organising committee and facilitators.',
          'Active participation in all activities is expected.',
          'Be respectful to facilitators and fellow participants at all times.',
          'Food and drinks are allowed only in designated areas.',
          'Certificates will be given only to participants who complete the full programme.',
        ];
        guidelines.forEach((g, i) => {
          ensureSpace(12);
          // Number badge
          doc.setFillColor(...blue);
          doc.roundedRect(mL + 8, y - 3.5, 8, 5, 1.5, 1.5, 'F');
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(6.5);
          doc.setTextColor(...white);
          doc.text(String(i + 1).padStart(2, '0'), mL + 9.5, y);
          // Text
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(9);
          doc.setTextColor(...mid);
          const lines = doc.splitTextToSize(g, cW - 26);
          lines.forEach((ln: string, j: number) => {
            doc.text(ln, mL + 19, y + j * 4.5);
          });
          y += lines.length * 4.5 + 3.5;
        });

        // ═══════════════════════════════════════
        // PHASE 2
        // ═══════════════════════════════════════
        y += 6;
        sectionHeader('Phase 02', 'Synergy Circle Competition');
        wrapText(
          'A competitive evaluation round where teams present their refined business concepts before a judging panel.',
          mL + 8, cW - 10, 5, 'normal', 10, mid
        );
        y += 6;

        // Day Card
        const dayCardH = 62;
        ensureSpace(dayCardH + 6);
        const dayCardW = cW; // Full width

        // Day 1
        doc.setFillColor(...cardBg);
        doc.setDrawColor(220, 228, 240);
        doc.setLineWidth(0.3);
        doc.roundedRect(mL, y - 3, dayCardW, dayCardH, 3, 3, 'FD');
        doc.setFillColor(...blue);
        doc.roundedRect(mL, y - 3, dayCardW, 8, 3, 3, 'F');
        doc.rect(mL, y + 1, dayCardW, 4, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(...white);
        doc.text('COMPETITION DAY', mL + 5, y + 2);

        let dy1 = y + 12;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(...mid);
        doc.text('Evaluate teams & determine final winners', mL + 5, dy1); dy1 += 6;
        doc.setFillColor(...blue);
        doc.circle(mL + 7, dy1 - 1, 0.8, 'F');
        doc.text('10-minute detailed pitch', mL + 10, dy1); dy1 += 5;
        doc.setFillColor(...blue);
        doc.circle(mL + 7, dy1 - 1, 0.8, 'F');
        doc.text('5-10 minute Q&A session', mL + 10, dy1); dy1 += 7;

        // Details
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(...dark);
        doc.text('Date:', mL + 5, dy1); doc.setFont('helvetica', 'normal'); doc.text('17th May 2026', mL + 15, dy1); dy1 += 5;
        doc.setFont('helvetica', 'bold');
        doc.text('Time:', mL + 5, dy1); doc.setFont('helvetica', 'normal'); doc.text('09:30 AM onwards', mL + 15, dy1); dy1 += 5;
        doc.setFont('helvetica', 'bold');
        doc.text('Venue:', mL + 5, dy1); doc.setFont('helvetica', 'normal'); doc.text('14th Floor, G Block, New Building, SLIIT Malabe', mL + 17, dy1); dy1 += 7;

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7.5);
        doc.setTextColor(...blue);
        doc.text('Winners announced at closing ceremony', mL + 5, dy1);

        y += dayCardH + 8;

        // Note
        ensureSpace(14);
        doc.setFillColor(248, 250, 252);
        doc.setDrawColor(220, 225, 235);
        doc.roundedRect(mL, y - 3, cW, 12, 2.5, 2.5, 'FD');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(...dark);
        doc.text('Note:', mL + 5, y + 2);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(...mid);
        doc.text('Judges may probe questions on finance, scalability, risk mitigation, & sustainability.', mL + 18, y + 2);
        y += 18;

        // ═══════════════════════════════════════
        // ELIGIBLE CATEGORIES
        // ═══════════════════════════════════════
        sectionHeader('Categories', 'Eligible Categories');
        wrapText(
          'No restrictions on category or industry. Propose concepts across any sector:',
          mL + 8, cW - 10, 5, 'normal', 10, mid
        );
        y += 3;

        // Category pills
        const cats = ['Technology', 'Social Innovation', 'Sustainability', 'Consumer Products', 'Digital Platforms', 'Services', 'Emerging Industries'];
        let pillX = mL + 8;
        const pillH = 6;
        ensureSpace(20);
        cats.forEach(cat => {
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(7.5);
          const tw = doc.getTextWidth(cat) + 8;
          if (pillX + tw > pageW - mR) {
            pillX = mL + 8;
            y += pillH + 3;
            ensureSpace(pillH + 4);
          }
          doc.setFillColor(240, 246, 255);
          doc.setDrawColor(200, 220, 245);
          doc.setLineWidth(0.2);
          doc.roundedRect(pillX, y - 3, tw, pillH, 3, 3, 'FD');
          doc.setTextColor(...blue);
          doc.text(cat, pillX + 4, y + 0.5);
          pillX += tw + 3;
        });
        y += pillH + 8;

        // Restrictions warning
        ensureSpace(16);
        doc.setFillColor(255, 245, 245);
        doc.setDrawColor(252, 200, 200);
        doc.setLineWidth(0.3);
        doc.roundedRect(mL, y - 3, cW, 14, 2.5, 2.5, 'FD');
        doc.setFillColor(...red);
        doc.roundedRect(mL, y - 3, 2.5, 14, 1.2, 1.2, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(...red);
        doc.text('Restrictions', mL + 7, y + 1);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(120, 80, 80);
        const rLines = doc.splitTextToSize('All ideas must be original. Concepts promoting illegal, unethical, harmful, or discriminatory practices will not be accepted.', cW - 14);
        rLines.forEach((ln: string, i: number) => {
          doc.text(ln, mL + 7, y + 5.5 + i * 4);
        });
        y += 22;

        // ═══════════════════════════════════════
        // TEAM STRUCTURE
        // ═══════════════════════════════════════
        sectionHeader('Structure', 'Team Requirements');
        bullet('1\u20135 members per team');
        bullet('Cross-university collaboration allowed');
        bullet('Each participant may join only one team');
        bullet('Teams cannot change members after the submission deadline');
        y += 8;

        // ═══════════════════════════════════════
        // TIME REGULATIONS
        // ═══════════════════════════════════════
        sectionHeader('Regulations', 'Time Management', amber);
        bullet('Timer will be visible throughout your presentation.', 0, amber);
        bullet('1-minute warning will be given.', 0, amber);
        bullet('Exceeding allocated time may result in scoring penalties.', 0, amber);
        y += 8;

        // ═══════════════════════════════════════
        // PROFESSIONAL CONDUCT
        // ═══════════════════════════════════════
        sectionHeader('Conduct', 'Professional Standards');
        wrapText('Participants are expected to:', mL + 8, cW - 10, 5, 'normal', 10, mid);
        y += 2;
        bullet('Maintain professional attire');
        bullet('Show respect toward judges and peers');
        bullet('Avoid disruptive behavior');
        y += 2;
        wrapText('Misconduct may lead to disqualification.', mL + 8, cW - 10, 5, 'bold', 9, red);
        y += 8;

        // ═══════════════════════════════════════
        // DISQUALIFICATION
        // ═══════════════════════════════════════
        sectionHeader('Warning', 'Disqualification Conditions', red);
        wrapText('A team may be disqualified for:', mL + 8, cW - 10, 5, 'normal', 10, mid);
        y += 2;
        bullet('Plagiarism \u2014 All ideas must be original and developed by the team.', 0, red);
        bullet('Conduct Violation \u2014 Any breach of the professional conduct policy.', 0, red);
        bullet('Ethical Breaches \u2014 Concepts promoting illegal, unethical, or harmful practices.', 0, red);
        y += 8;

        // ═══════════════════════════════════════
        // PRIZES & RECOGNITION
        // ═══════════════════════════════════════
        sectionHeader('Recognition', 'Prizes & Recognition');
        wrapText('The prize structure will be announced at a later stage. Winners may receive:', mL + 8, cW - 10, 5, 'normal', 10, mid);
        y += 3;
        bullet('Awards and official recognition certificates issued by the Rotaract Club of SLIIT.');
        bullet('Finalists and all registered participants will receive recognition certificates.');
        bullet('Networking exposure with judges, industry professionals, and academic representatives.');
        bullet('Support in developing a professional website for their business.');
        bullet('Access to potential mentorship opportunities from industry professionals.');

        // ═══════════════════════════════════════
        // PAGE NUMBERING & BRANDING
        // ═══════════════════════════════════════
        const totalPages = doc.getNumberOfPages();
        for (let i = 1; i <= totalPages; i++) {
          doc.setPage(i);

          // Page number
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(7);
          doc.setTextColor(...light);
          doc.text(`${i} / ${totalPages}`, pageW - mR, pageH - 8, { align: 'right' });

          if (i > 1) {
            // Top brand bar
            doc.setFillColor(...blue);
            doc.rect(0, 0, pageW, 2, 'F');
            // Top-right branding
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(6.5);
            doc.setTextColor(...blue);
            doc.text('SYNERGY CIRCLE 2026', pageW - mR, 10, { align: 'right' });
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(6.5);
            doc.setTextColor(...light);
            doc.text("Delegates' Handbook", mL, 10);
            // Thin line
            doc.setDrawColor(230, 235, 240);
            doc.setLineWidth(0.3);
            doc.line(mL, 14, pageW - mR, 14);
            // Bottom line
            doc.setDrawColor(230, 235, 240);
            doc.line(mL, pageH - 12, pageW - mR, pageH - 12);
          }
        }

        doc.save('Synergy_Circle_2026_Delegates_Handbook.pdf');
      } catch (err) {
        console.error('PDF generation error:', err);
      } finally {
        setIsGeneratingPDF(false);
      }
    }, 100);
  }, []);

  const workshopGuidelineIcons = ['✅', '⏰', '📝', '💡', '📋', '🙋', '🤝', '🍽️', '🎓'];
  const workshopGuidelines = g.phase1Guidelines.map((item, idx) => ({
    ...item,
    icon: workshopGuidelineIcons[idx] || '📌',
  }));

  const prizeItemIcons = ['🏆', '📜', '🌐', '💻', '🎓'];
  const prizeItems = g.prizeItems.map((item, idx) => ({
    ...item,
    icon: prizeItemIcons[idx] || '🎖️',
  }));

  return (
    <div className="min-h-screen bg-[#fcfcfc] relative overflow-hidden">
      {/* ─── FIXED WATERMARKS ─── */}
      <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#005bb7]/[0.03] blur-[120px] animate-morph"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-500/[0.02] blur-[100px] animate-morph" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-[5%] right-[-5%] text-[25vw] font-black text-slate-900/[0.015] rotate-[12deg] whitespace-nowrap leading-none">
          GUIDE
        </div>
        <div className="absolute top-[40%] -left-[10%] text-[22vw] font-black text-[#005bb7]/[0.012] rotate-[-8deg] whitespace-nowrap leading-none">
          LINES
        </div>
        <div className="absolute bottom-[5%] right-[5%] text-[18vw] font-black text-slate-900/[0.01] rotate-[5deg] whitespace-nowrap leading-none">
          SC 2026
        </div>
      </div>

      {/* ─── FLOATING BACK BUTTON ─── */}
      <motion.button
        onClick={onBack}
        className="fixed top-6 left-6 z-50 group flex items-center gap-3 px-6 py-3.5 bg-white/90 backdrop-blur-xl border border-slate-200/60 rounded-full shadow-lg hover:shadow-2xl hover:bg-white transition-all duration-300"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ scale: 1.08, x: -3 }}
        whileTap={{ scale: 0.92 }}
      >
        <svg className="w-5 h-5 text-slate-600 group-hover:text-[#005bb7] transition-all group-hover:-translate-x-1.5 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="text-xs font-black uppercase tracking-widest text-slate-600 group-hover:text-[#005bb7] transition-colors">{g.homeButton}</span>
      </motion.button>

      {/* ─── FLOATING DOWNLOAD PDF BUTTON ─── */}
      <motion.button
        onClick={generatePDF}
        disabled={isGeneratingPDF}
        className="fixed bottom-8 right-8 z-50 group flex items-center gap-3 pl-5 pr-6 py-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-full shadow-2xl shadow-slate-900/30 hover:from-[#005bb7] hover:to-[#0070e0] hover:shadow-[#005bb7]/30 transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed"
        initial={{ opacity: 0, y: 40, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        whileHover={isGeneratingPDF ? {} : { scale: 1.1 }}
        whileTap={isGeneratingPDF ? {} : { scale: 0.95 }}
      >
        {isGeneratingPDF ? (
          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" />
          </svg>
        )}
        <span className="text-xs font-black uppercase tracking-widest">
          {isGeneratingPDF ? g.generating : g.downloadPdf}
        </span>
      </motion.button>

      {/* ─── HERO HEADER (Parallax) ─── */}
      <section ref={heroRef} className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center textured-bg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <div className="absolute text-[350px] md:text-[600px] font-black tracking-tighter leading-none text-slate-900/[0.02]">
            SC
          </div>
        </div>

        <motion.div
          className="max-w-6xl mx-auto px-6 relative z-10 text-center"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              className="mono text-[11px] font-black uppercase tracking-[0.6em] text-[#005bb7] mb-8 inline-flex items-center gap-4"
              initial={{ opacity: 0, letterSpacing: '0.2em' }}
              animate={{ opacity: 1, letterSpacing: '0.6em' }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <motion.div className="w-10 h-[2px] bg-[#005bb7]" initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.8, delay: 0.6 }} />
              {g.heroLabel}
              <motion.div className="w-10 h-[2px] bg-[#005bb7]" initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.8, delay: 0.6 }} />
            </motion.div>

            <h1 className="text-6xl sm:text-7xl md:text-9xl lg:text-[160px] font-black text-slate-900 tracking-tighter leading-[0.85] mb-8">
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {g.heroTitle1}
              </motion.span>
              <motion.span
                className="block text-[#005bb7]"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {g.heroTitle2}
              </motion.span>
            </h1>

            <motion.p
              className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {g.heroDescription}<span className="text-slate-900 font-bold">{g.heroDescBold}</span>.
            </motion.p>
          </motion.div>

          {/* Scroll prompt */}
          <motion.div
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300">{g.scrollPrompt}</span>
            <motion.div
              className="w-[1px] h-10 bg-gradient-to-b from-slate-300 to-transparent"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="py-16 md:py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#005bb7]/10 via-transparent to-[#005bb7]/10"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <AnimatedCounter target={2} label={g.statPhases} />
            <AnimatedCounter target={5} label={g.statMaxTeam} delay={0.1} />
            <AnimatedCounter target={1} label={g.statDays} delay={0.3} />
          </div>
        </div>
      </section>

      {/* ─── WHAT IS SYNERGY CIRCLE ─── */}
      <section className="py-24 md:py-40 relative bg-white border-t border-slate-100 overflow-hidden">
        <div className="absolute -right-[8%] top-1/2 -translate-y-1/2 text-[20vw] font-black text-slate-900/[0.01] select-none pointer-events-none uppercase rotate-[-5deg]">
          What?
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <FadeUp>
            <div className="mb-16 md:mb-20">
              <div className="mono text-[#005bb7] mb-6 font-black uppercase tracking-[0.5em] text-xs">{g.overviewLabel}</div>
              <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 tracking-tighter leading-[0.85]">
                {g.overviewHeading1}<br />{g.overviewHeading2}<span className="text-[#005bb7]">{g.overviewHeading3}</span>
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SlideLeft>
              <div className="space-y-8">
                <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed">
                  {g.overviewParagraph1}<strong className="text-slate-900">{g.overviewBold1}</strong>, <strong className="text-slate-900">{g.overviewBold2}</strong>, {g.overviewBold3}
                </p>
                <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
                  {g.overviewParagraph2}<span className="text-[#005bb7] font-bold">{g.overviewParagraph2Bold}</span>
                </p>
                <div className="flex items-start gap-5 pt-4 p-6 bg-[#005bb7]/5 rounded-2xl border border-[#005bb7]/10">
                  <div className="w-1 h-full min-h-[60px] bg-[#005bb7] rounded-full shrink-0"></div>
                  <p className="text-slate-800 font-bold text-lg md:text-xl italic leading-relaxed">
                    {g.overviewQuote}
                  </p>
                </div>
              </div>
            </SlideLeft>

            <SlideRight>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { emoji: '🧠', ...g.overviewCards[0] },
                  { emoji: '🚀', ...g.overviewCards[1] },
                  { emoji: '🎤', ...g.overviewCards[2] },
                  { emoji: '🌍', ...g.overviewCards[3] },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="group bg-[#fcfcfc] border border-slate-100 rounded-3xl p-8 text-center cursor-default hover:bg-white hover:border-[#005bb7]/20 hover:shadow-xl hover:shadow-[#005bb7]/5 transition-all duration-500"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500">{item.emoji}</div>
                    <p className="text-slate-900 font-black text-lg tracking-tight">{item.title}</p>
                    <p className="text-slate-400 text-sm font-bold">{item.subtitle}</p>
                  </motion.div>
                ))}
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ─── PROGRAM PHASES (Interactive Tabs) ─── */}
      <section className="py-24 md:py-40 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 text-[300px] font-black text-white/[0.015] select-none pointer-events-none translate-x-1/4">{activePhase}</div>
        <div className="absolute top-20 left-1/2 w-[600px] h-[600px] bg-[#005bb7]/[0.04] blur-[150px] rounded-full"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <FadeUp>
            <div className="text-center mb-16 md:mb-20">
              <div className="mono text-[#005bb7] mb-6 font-black uppercase tracking-[0.5em] text-xs">{g.phasesLabel}</div>
              <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.85] mb-6">
                {g.phasesHeading1}<br /><span className="text-white/20">{g.phasesHeading2}</span>
              </h2>
            </div>
          </FadeUp>

          {/* Tab Buttons */}
          <FadeUp delay={0.2}>
            <div className="flex justify-center gap-4 mb-16">
              <PhaseTab label={g.phaseTab1} active={activePhase === 1} onClick={() => setActivePhase(1)} />
              <PhaseTab label={g.phaseTab2} active={activePhase === 2} onClick={() => setActivePhase(2)} />
            </div>
          </FadeUp>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activePhase === 1 && (
              <motion.div
                key="phase1"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative overflow-hidden bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-14">
                  {/* OVERLAY: Successfully Concluded */}
                  <div className="absolute inset-0 z-30 bg-slate-900/70 backdrop-blur-[4px] flex flex-col items-center justify-center rounded-[40px] pointer-events-none">
                    <div className="bg-emerald-500/90 text-white px-8 py-4 rounded-full font-black uppercase tracking-[0.2em] text-sm shadow-2xl shadow-emerald-500/30 rotate-[-10deg] border border-white/20 backdrop-blur-md">
                      Successfully Concluded
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.06] to-transparent pointer-events-none z-0"></div>
                  <div className="relative z-10 opacity-40 grayscale select-none pointer-events-none">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                      <div>
                        <span className="mono text-[#005bb7] text-sm font-black tracking-[0.3em]">{g.phase1Label}</span>
                        <h3 className="text-4xl md:text-6xl font-black text-white tracking-tight mt-2">{g.phase1Title}</h3>
                        <p className="text-[#005bb7] font-black uppercase text-xs tracking-widest mt-2">{g.phase1Subtitle}</p>
                      </div>
                      <p className="text-white/50 text-lg font-medium max-w-md leading-relaxed">
                        {g.phase1Description}
                      </p>
                    </div>

                    <div className="h-[1px] w-full bg-white/10 mb-10"></div>
                    <h4 className="text-white font-black text-lg uppercase tracking-widest mb-8">{g.phase1GuidelinesTitle}</h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {workshopGuidelines.map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="group flex items-start gap-4 p-5 bg-white/[0.03] border border-white/[0.06] rounded-2xl hover:bg-white/[0.08] hover:border-[#005bb7]/30 transition-all duration-300 cursor-default"
                          whileHover={{ scale: 1.03, y: -4 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <span className="text-2xl shrink-0 group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
                          <div>
                            <span className="mono text-[#005bb7]/60 text-[9px] font-black tracking-wider">{item.num}</span>
                            <p className="text-white/70 text-sm font-medium leading-relaxed group-hover:text-white/95 transition-colors">{item.text}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activePhase === 2 && (
              <motion.div
                key="phase2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative overflow-hidden bg-white/[0.06] backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-14">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.08] to-transparent pointer-events-none"></div>
                  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#005bb7]/[0.06] blur-[120px] rounded-full"></div>

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                      <div>
                        <span className="mono text-white/50 text-sm font-black tracking-[0.3em]">{g.phase2Label}</span>
                        <h3 className="text-4xl md:text-6xl font-black text-white tracking-tight mt-2">{g.phase2Title}</h3>
                        <p className="text-white/50 font-black uppercase text-xs tracking-widest mt-2">{g.phase2Subtitle}</p>
                      </div>
                      <p className="text-white/50 text-lg font-medium max-w-md leading-relaxed">
                        {g.phase2Description}
                      </p>
                    </div>

                    {/* Day Cards - Interactive */}
                    <div className="grid grid-cols-1 gap-8 mb-10">
                      {/* Day 1 */}
                      <motion.div
                        className="relative bg-white/[0.05] backdrop-blur-md rounded-3xl p-8 border border-white/10 overflow-hidden group cursor-default"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                      >
                        <div className="absolute top-0 right-0 text-[120px] font-black text-white/[0.03] leading-none">1</div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-5">
                            <div className="w-12 h-12 bg-[#005bb7]/20 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">📅</div>
                            <div>
                              <p className="text-white font-black text-lg uppercase tracking-widest">{g.phase2Day1Title}</p>
                            </div>
                          </div>
                          <p className="text-white/80 text-base leading-relaxed font-medium mb-6">{g.phase2Day1Desc}</p>
                          <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                              <div className="w-8 h-8 bg-[#005bb7]/20 rounded-lg flex items-center justify-center text-sm">🎤</div>
                              <span className="text-white/70 font-bold text-sm">{g.phase2Day1Detail1}</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                              <div className="w-8 h-8 bg-[#005bb7]/20 rounded-lg flex items-center justify-center text-sm">❓</div>
                              <span className="text-white/70 font-bold text-sm">{g.phase2Day1Detail2}</span>
                            </div>
                          </div>

                          {/* Event Details */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                            <div className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/[0.05] rounded-xl">
                              <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-sm">📅</div>
                              <div>
                                <div className="text-[9px] uppercase tracking-widest text-white/40 font-bold mb-0.5">Date</div>
                                <span className="text-white/80 font-bold text-sm">17th May 2026</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/[0.05] rounded-xl">
                              <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-sm">⏰</div>
                              <div>
                                <div className="text-[9px] uppercase tracking-widest text-white/40 font-bold mb-0.5">Time</div>
                                <span className="text-white/80 font-bold text-sm">09:30 AM onwards</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 p-3 bg-white/[0.02] border border-white/[0.05] rounded-xl mb-4">
                            <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-sm shrink-0">📍</div>
                            <div>
                              <div className="text-[9px] uppercase tracking-widest text-white/40 font-bold mb-0.5">Location</div>
                              <span className="text-white/80 font-bold text-sm leading-tight">14th Floor, G Block, New Building, SLIIT Malabe</span>
                            </div>
                          </div>

                          <div className="mt-6 flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#005bb7] rounded-full animate-pulse"></div>
                            <span className="text-[#005bb7] font-black text-xs uppercase tracking-wider">{g.phase2Day1Advance}</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <div className="p-6 bg-white/[0.04] border border-white/[0.08] rounded-2xl">
                      <p className="text-white/60 text-base leading-relaxed font-medium">
                        <span className="text-white font-bold text-lg">{g.phase2Note}</span> {g.phase2NoteText}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ─── ELIGIBLE CATEGORIES ─── */}
      <section className="py-24 md:py-36 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="absolute top-1/2 -right-[5%] text-[18vw] font-black text-slate-900/[0.01] -translate-y-1/2 rotate-[6deg] select-none pointer-events-none uppercase">
          Open
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <FadeUp>
            <div className="text-center mb-16 md:mb-20">
              <div className="mono text-[#005bb7] mb-6 font-black uppercase tracking-[0.5em] text-xs">{g.categoriesLabel}</div>
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-8">
                {g.categoriesHeading1}<br /><span className="text-[#005bb7]">{g.categoriesHeading2}</span>
              </h2>
              <p className="text-slate-500 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
                {g.categoriesDescription}
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-4" staggerDelay={0.06}>
            {[
              { name: g.categoryNames[0], emoji: '💻' },
              { name: g.categoryNames[1], emoji: '🤲' },
              { name: g.categoryNames[2], emoji: '🌿' },
              { name: g.categoryNames[3], emoji: '📦' },
              { name: g.categoryNames[4], emoji: '📱' },
              { name: g.categoryNames[5], emoji: '🛎️' },
              { name: g.categoryNames[6], emoji: '⚡' },
              { name: g.categoryNames[7], emoji: '✨' },
            ].map((cat, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  className="group bg-[#fcfcfc] border border-slate-100 rounded-3xl p-6 md:p-8 text-center cursor-default hover:bg-white hover:border-[#005bb7]/20 hover:shadow-xl hover:shadow-[#005bb7]/5 transition-all duration-500"
                  whileHover={{ y: -6, scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="text-4xl md:text-5xl mb-4 group-hover:scale-125 transition-transform duration-500">{cat.emoji}</div>
                  <p className="text-slate-700 font-black text-sm md:text-base group-hover:text-[#005bb7] transition-colors">{cat.name}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp delay={0.3}>
            <div className="mt-14 p-7 bg-red-50/70 border border-red-200/40 rounded-3xl flex items-start gap-5">
              <div className="text-3xl shrink-0 mt-1">⚠️</div>
              <div>
                <p className="text-slate-900 font-black text-lg mb-2">{g.restrictionsTitle}</p>
                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  {g.restrictionsText1}<strong>{g.restrictionsBold1}</strong>{g.restrictionsText2}<strong>{g.restrictionsBold2}</strong>.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── TEAM & TIME (Interactive Accordions) ─── */}
      <section className="py-24 md:py-36 bg-[#fcfcfc] textured-bg relative overflow-hidden">
        <div className="absolute -left-[8%] bottom-[10%] text-[22vw] font-black text-slate-900/[0.01] rotate-[-5deg] select-none pointer-events-none uppercase">
          Rules
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <FadeUp>
            <div className="mb-16 md:mb-20">
              <div className="mono text-[#005bb7] mb-6 font-black uppercase tracking-[0.5em] text-xs">{g.regulationsLabel}</div>
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85]">
                {g.regulationsHeading1}<span className="text-[#005bb7]">{g.regulationsHeading2}</span>
              </h2>
            </div>
          </FadeUp>

          <div className="space-y-4">
            <AccordionItem
              title={g.teamTitle}
              icon="👥"
              index={0}
              isOpen={openAccordion === 0}
              onToggle={() => setOpenAccordion(openAccordion === 0 ? null : 0)}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { ...g.teamItems[0], icon: '👤' },
                  { ...g.teamItems[1], icon: '🏫' },
                  { ...g.teamItems[2], icon: '☝️' },
                  { ...g.teamItems[3], icon: '🔒' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl group hover:bg-[#005bb7]/5 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-slate-900 font-black text-base">{item.label}</p>
                      <p className="text-slate-500 text-sm font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AccordionItem>

            <AccordionItem
              title={g.timeTitle}
              icon="⏱️"
              index={1}
              isOpen={openAccordion === 1}
              onToggle={() => setOpenAccordion(openAccordion === 1 ? null : 1)}
            >
              <div className="space-y-4 mb-8">
                {[
                  { ...g.timeItems[0], icon: '👁️' },
                  { ...g.timeItems[1], icon: '⚡' },
                  { ...g.timeItems[2], icon: '📉' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4 p-5 bg-white/80 backdrop-blur-md border border-slate-100/80 rounded-2xl group hover:border-[#005bb7]/20 hover:shadow-lg hover:shadow-[#005bb7]/5 transition-all duration-500"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#005bb7]/10 to-[#005bb7]/5 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-slate-900 font-black text-base">{item.label}</p>
                      <p className="text-slate-500 text-sm font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pitch Duration Cards */}
              <div className="grid grid-cols-1 gap-4">
                <motion.div
                  className="relative overflow-hidden bg-gradient-to-br from-[#005bb7]/[0.06] to-[#005bb7]/[0.02] backdrop-blur-md border border-[#005bb7]/15 rounded-3xl p-6 group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="mono text-[9px] font-black uppercase tracking-[0.3em] text-[#005bb7]">Competition</span>
                      <div className="w-2 h-2 bg-[#005bb7] rounded-full animate-pulse"></div>
                    </div>
                    <h4 className="text-slate-900 font-black text-xl tracking-tight mb-1">Pitch Session</h4>
                    <p className="text-slate-400 text-xs font-bold mb-5">{g.phase2Day1Detail1}</p>
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm border border-[#005bb7]/10 rounded-full">
                        <span className="text-xs">🎤</span>
                        <span className="text-slate-700 font-bold text-xs">{g.timePitch10}</span>
                      </div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm border border-[#005bb7]/10 rounded-full ml-1">
                        <span className="text-xs">💬</span>
                        <span className="text-slate-700 font-bold text-xs">{g.timeQA510}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AccordionItem>

            <AccordionItem
              title={g.conductTitle}
              icon="👔"
              index={2}
              isOpen={openAccordion === 2}
              onToggle={() => setOpenAccordion(openAccordion === 2 ? null : 2)}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                  { icon: '👔', text: g.conductRules[0], bg: 'bg-blue-50' },
                  { icon: '🤝', text: g.conductRules[1], bg: 'bg-emerald-50' },
                  { icon: '🚫', text: g.conductRules[2], bg: 'bg-red-50' },
                ].map((rule, idx) => (
                  <motion.div
                    key={idx}
                    className={`flex items-center gap-4 p-6 ${rule.bg} rounded-2xl border border-transparent hover:border-[#005bb7]/10 transition-all`}
                    whileHover={{ scale: 1.04, y: -4 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <span className="text-3xl">{rule.icon}</span>
                    <span className="text-slate-800 font-bold text-base">{rule.text}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-red-500 font-black text-sm uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                {g.conductWarning}
              </p>
            </AccordionItem>

            <AccordionItem
              title={g.disqualTitle}
              icon="🛡️"
              index={3}
              isOpen={openAccordion === 3}
              onToggle={() => setOpenAccordion(openAccordion === 3 ? null : 3)}
            >
              <div className="space-y-4">
                {[
                  { icon: '📋', ...g.disqualItems[0] },
                  { icon: '⚖️', ...g.disqualItems[1] },
                  { icon: '🛡️', ...g.disqualItems[2] },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-5 p-6 bg-white border border-slate-100 rounded-2xl hover:border-red-200/60 hover:shadow-md transition-all duration-300 group"
                    whileHover={{ x: 8 }}
                  >
                    <span className="text-3xl shrink-0 group-hover:scale-110 transition-transform">{item.icon}</span>
                    <div>
                      <p className="text-slate-900 font-black text-lg mb-1">{item.title}</p>
                      <p className="text-slate-500 text-base font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AccordionItem>
          </div>
        </div>
      </section>

      {/* ─── PRIZES & RECOGNITION (Interactive Cards) ─── */}
      <section className="py-24 md:py-36 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#005bb7]/[0.05] blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/[0.03] blur-[100px] rounded-full"></div>
        <div className="absolute top-0 right-0 text-[250px] font-black text-white/[0.015] select-none pointer-events-none translate-x-1/4">🎖️</div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <FadeUp>
            <div className="text-center mb-16 md:mb-20">
              <div className="mono text-[#005bb7] mb-6 font-black uppercase tracking-[0.5em] text-xs">{g.prizesLabel}</div>
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-6">
                {g.prizesHeading1}<br /><span className="text-white/20">{g.prizesHeading2}</span>
              </h2>
              <p className="text-slate-400 text-xl font-medium max-w-xl mx-auto">
                {g.prizesDescription}
              </p>
            </div>
          </FadeUp>

          <div className="space-y-4">
            {prizeItems.map((item, idx) => (
              <motion.div
                key={idx}
                className={`relative flex items-start gap-6 p-7 md:p-8 rounded-3xl border cursor-default transition-all duration-500 overflow-hidden ${hoveredPrize === idx ? 'bg-white/[0.08] border-[#005bb7]/30 shadow-2xl shadow-[#005bb7]/10' : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]'}`}
                onMouseEnter={() => setHoveredPrize(idx)}
                onMouseLeave={() => setHoveredPrize(null)}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                {/* Animated glow on hover */}
                <AnimatePresence>
                  {hoveredPrize === idx && (
                    <motion.div
                      className="absolute -left-20 top-0 w-40 h-full bg-[#005bb7]/10 blur-[60px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>

                <div className={`text-4xl md:text-5xl shrink-0 transition-transform duration-500 relative z-10 ${hoveredPrize === idx ? 'scale-125 rotate-6' : ''}`}>
                  {item.icon}
                </div>
                <div className="relative z-10">
                  <h4 className={`font-black text-lg md:text-xl mb-1 transition-colors duration-300 ${hoveredPrize === idx ? 'text-[#005bb7]' : 'text-white'}`}>
                    {item.title}
                  </h4>
                  <p className={`text-base font-medium leading-relaxed transition-colors duration-300 ${hoveredPrize === idx ? 'text-white/80' : 'text-white/50'}`}>
                    {item.text}
                  </p>
                </div>
                <div className={`absolute right-6 top-1/2 -translate-y-1/2 mono text-[10px] font-black tracking-widest text-white/10 transition-all duration-500 ${hoveredPrize === idx ? 'opacity-100 text-[#005bb7]/30' : 'opacity-0'}`}>
                  0{idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-28 md:py-40 bg-[#fcfcfc] textured-bg relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#005bb7]/[0.04] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-400/[0.03] blur-[100px] rounded-full"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <ScaleUp>
            <div className="mono text-[#005bb7] mb-8 font-black uppercase tracking-[0.5em] text-xs">{g.ctaLabel}</div>
            <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-8">
              {g.ctaHeading1}<br />{g.ctaHeading2}<span className="text-[#005bb7]">{g.ctaHeading3}</span>
            </h2>
            <p className="text-slate-500 text-xl md:text-2xl font-medium leading-relaxed mb-14 max-w-xl mx-auto">
              {g.ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <motion.button
                onClick={onBack}
                className="group inline-flex items-center gap-3 px-10 py-6 bg-slate-900 text-white rounded-full font-black text-sm uppercase tracking-[0.15em] hover:bg-[#005bb7] transition-all duration-300 shadow-2xl shadow-slate-900/20"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                {g.ctaButton}
              </motion.button>
            </div>
          </ScaleUp>
        </div>
      </section>

      {/* ─── MINI FOOTER ─── */}
      <div className="py-10 border-t border-slate-100 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs font-black uppercase tracking-widest">
            {g.footerTitle}
          </p>
          <p className="text-slate-300 text-xs font-medium">
            {g.footerOrganized}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
