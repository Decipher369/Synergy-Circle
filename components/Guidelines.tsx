
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FadeUp, ScaleUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem } from './Animations';
import jsPDF from 'jspdf';

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
        const marginL = 20;
        const marginR = 20;
        const contentW = pageW - marginL - marginR;
        let y = 0;

        const brandBlue: [number, number, number] = [0, 91, 183];
        const darkSlate: [number, number, number] = [15, 23, 42];
        const medGray: [number, number, number] = [100, 116, 139];
        const lightGray: [number, number, number] = [148, 163, 184];

        const checkPage = (needed: number) => {
          if (y + needed > pageH - 20) {
            doc.addPage();
            y = 25;
          }
        };

        const addWrappedText = (text: string, x: number, startY: number, maxW: number, lineH: number, font: string, size: number, color: [number, number, number]): number => {
          doc.setFont('helvetica', font);
          doc.setFontSize(size);
          doc.setTextColor(...color);
          const lines = doc.splitTextToSize(text, maxW);
          for (let i = 0; i < lines.length; i++) {
            checkPage(lineH);
            doc.text(lines[i], x, startY + i * lineH);
          }
          return startY + lines.length * lineH;
        };

        const addDivider = () => {
          checkPage(10);
          doc.setDrawColor(220, 220, 220);
          doc.setLineWidth(0.3);
          doc.line(marginL, y, pageW - marginR, y);
          y += 8;
        };

        const addSectionHeader = (label: string, title: string) => {
          checkPage(30);
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(8);
          doc.setTextColor(...brandBlue);
          doc.text(label.toUpperCase(), marginL, y);
          y += 8;
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(22);
          doc.setTextColor(...darkSlate);
          const titleLines = doc.splitTextToSize(title, contentW);
          for (const line of titleLines) {
            checkPage(12);
            doc.text(line, marginL, y);
            y += 12;
          }
          y += 4;
        };

        const addBullet = (text: string, indent = 0) => {
          const bulletX = marginL + indent;
          const textX = bulletX + 5;
          const maxW = contentW - indent - 5;
          checkPage(6);
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(9.5);
          doc.setTextColor(...medGray);
          doc.text('•', bulletX, y);
          const lines = doc.splitTextToSize(text, maxW);
          for (let i = 0; i < lines.length; i++) {
            checkPage(5);
            doc.text(lines[i], textX, y + i * 5);
          }
          y += lines.length * 5 + 2;
        };

        // ── COVER / TITLE PAGE
        // Brand bar
        doc.setFillColor(...brandBlue);
        doc.rect(0, 0, pageW, 4, 'F');

        // Watermark
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(120);
        doc.setTextColor(240, 240, 240);
        doc.text('SC', pageW / 2, 140, { align: 'center' });

        // Title
        y = 55;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(...brandBlue);
        doc.text('SYNERGY CIRCLE 2026', marginL, y);
        y += 16;

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(36);
        doc.setTextColor(...darkSlate);
        doc.text("Delegates'", marginL, y);
        y += 16;
        doc.text('Handbook', marginL, y);
        y += 20;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(11);
        doc.setTextColor(...medGray);
        y = addWrappedText(
          'Organized by the Rotaract Club of SLIIT in collaboration with SLIIT Business School.',
          marginL, y, contentW, 6, 'normal', 11, medGray
        );
        y += 10;

        // Decorative line
        doc.setDrawColor(...brandBlue);
        doc.setLineWidth(1);
        doc.line(marginL, y, marginL + 40, y);
        y += 15;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(...lightGray);
        doc.text('This document contains all information, guidelines, and regulations', marginL, y);
        y += 5;
        doc.text('for delegates participating in Synergy Circle 2026.', marginL, y);

        // Footer bar
        doc.setFillColor(...darkSlate);
        doc.rect(0, pageH - 12, pageW, 12, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7);
        doc.setTextColor(255, 255, 255);
        doc.text('SYNERGY CIRCLE 2026  |  ROTARACT SLIIT  x  SLIIT BUSINESS SCHOOL', pageW / 2, pageH - 5, { align: 'center' });

        // ── PAGE 2: WHAT IS SYNERGY CIRCLE
        doc.addPage();
        y = 25;

        addSectionHeader('Overview', 'What is Synergy Circle?');
        y = addWrappedText(
          'Synergy Circle is designed to cultivate innovation, strategic thinking, and entrepreneurial confidence among undergraduates. This initiative is not merely a pitching competition — it is a structured journey that equips participants with the mindset, tools, and exposure required to translate ideas into viable ventures.',
          marginL, y, contentW, 5.5, 'normal', 10, medGray
        );
        y += 4;
        y = addWrappedText(
          'Through a two-phase structure combining skill development and competitive evaluation, Synergy Circle bridges academic learning with real-world entrepreneurial expectations.',
          marginL, y, contentW, 5.5, 'normal', 10, medGray
        );
        y += 4;
        y = addWrappedText(
          'We encourage all delegates to approach this opportunity with professionalism, preparation, and bold thinking.',
          marginL, y, contentW, 5.5, 'italic', 10, darkSlate
        );
        y += 10;

        addDivider();

        // ── PHASE 1
        addSectionHeader('Phase 01', 'Pitch Olympics — Workshop');
        y = addWrappedText(
          'A structured training workshop designed to develop pitching competence and business validation skills.',
          marginL, y, contentW, 5.5, 'normal', 10, medGray
        );
        y += 6;

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.setTextColor(...darkSlate);
        checkPage(8);
        doc.text('Detailed Guidelines', marginL, y);
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
          checkPage(7);
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(8);
          doc.setTextColor(...brandBlue);
          doc.text(`${String(i + 1).padStart(2, '0')}`, marginL, y);
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(9.5);
          doc.setTextColor(...medGray);
          const lines = doc.splitTextToSize(g, contentW - 12);
          for (let j = 0; j < lines.length; j++) {
            doc.text(lines[j], marginL + 12, y + j * 5);
          }
          y += lines.length * 5 + 3;
        });

        y += 6;
        addDivider();

        // ── PHASE 2
        addSectionHeader('Phase 02', 'Synergy Circle Competition');
        y = addWrappedText(
          'A competitive evaluation round where teams present their refined business concepts before a judging panel.',
          marginL, y, contentW, 5.5, 'normal', 10, medGray
        );
        y += 8;

        // Day 1
        checkPage(40);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(13);
        doc.setTextColor(...darkSlate);
        doc.text('DAY 1 — Preliminary Round', marginL, y);
        y += 8;
        y = addWrappedText('Objective: To evaluate all participating teams and shortlist finalists.', marginL, y, contentW, 5.5, 'normal', 10, medGray);
        y += 3;
        addBullet('5-7 minute pitch presentation');
        addBullet('3-5 minute Q&A session');
        y += 2;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(...brandBlue);
        checkPage(6);
        doc.text('Outcome: The 5 top-performing teams will qualify for the Grand Finale.', marginL, y);
        y += 10;

        // Day 2
        checkPage(40);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(13);
        doc.setTextColor(...darkSlate);
        doc.text('DAY 2 — Grand Finale', marginL, y);
        y += 8;
        y = addWrappedText('Objective: To determine the final winners of the competition.', marginL, y, contentW, 5.5, 'normal', 10, medGray);
        y += 3;
        addBullet('10-minute detailed pitch');
        addBullet('5-10 minute Q&A');
        y += 2;
        y = addWrappedText(
          'Judges may probe questions based on financial aspects, market scalability, risk mitigation, competitive sustainability, etc. Winners will be announced during the closing ceremony.',
          marginL, y, contentW, 5.5, 'normal', 9.5, medGray
        );
        y += 8;

        addDivider();

        // ── ELIGIBLE CATEGORIES
        addSectionHeader('Categories', 'Eligible Categories');
        y = addWrappedText(
          'There are no restrictions on the category or industry of the idea presented. Participants are free to propose concepts across any sector, including but not limited to:',
          marginL, y, contentW, 5.5, 'normal', 10, medGray
        );
        y += 4;
        ['Technology', 'Social Innovation', 'Sustainability', 'Consumer Products', 'Digital Platforms', 'Services', 'Emerging Industries'].forEach(cat => {
          addBullet(cat, 4);
        });
        y += 4;

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(...darkSlate);
        checkPage(8);
        doc.text('Restrictions', marginL, y);
        y += 6;
        y = addWrappedText(
          'All submitted ideas must be original and developed by the participating team. Concepts that promote illegal, unethical, harmful, discriminatory, or socially irresponsible practices will not be accepted.',
          marginL, y, contentW, 5.5, 'normal', 9.5, medGray
        );
        y += 8;

        addDivider();

        // ── TEAM STRUCTURE
        addSectionHeader('Structure', 'Team Requirements');
        addBullet('1-5 members per team');
        addBullet('Cross-university collaboration allowed');
        addBullet('Each participant may join only one team');
        addBullet('Teams cannot change members after the submission deadline');
        y += 6;

        addDivider();

        // ── TIME REGULATIONS
        addSectionHeader('Regulations', 'Time Management');
        addBullet('Timer will be visible throughout your presentation.');
        addBullet('1-minute warning will be given.');
        addBullet('Exceeding allocated time may result in scoring penalties.');
        y += 3;

        checkPage(12);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(...darkSlate);
        doc.text('Pitch Durations:', marginL, y);
        y += 6;
        addBullet('Preliminary Round: 5-7 minutes pitch + 3-5 minutes Q&A');
        addBullet('Grand Finale: 10 minutes pitch + 5-10 minutes Q&A');
        y += 6;

        addDivider();

        // ── PROFESSIONAL CONDUCT
        addSectionHeader('Conduct', 'Professional Standards');
        y = addWrappedText('Participants are expected to:', marginL, y, contentW, 5.5, 'normal', 10, medGray);
        y += 3;
        addBullet('Maintain professional attire');
        addBullet('Show respect toward judges and peers');
        addBullet('Avoid disruptive behavior');
        y += 3;
        y = addWrappedText('Misconduct may lead to disqualification.', marginL, y, contentW, 5.5, 'bold', 9.5, [220, 38, 38]);
        y += 8;

        addDivider();

        // ── DISQUALIFICATION
        addSectionHeader('Warning', 'Disqualification Conditions');
        y = addWrappedText('A team may be disqualified for:', marginL, y, contentW, 5.5, 'normal', 10, medGray);
        y += 3;
        addBullet('Plagiarism — All submitted ideas must be original and developed by the participating team.');
        addBullet('Violation of Conduct Policy — Any breach of the professional conduct policy during any phase.');
        addBullet('Ethical Breaches — Concepts promoting illegal, unethical, harmful, discriminatory, or socially irresponsible practices.');
        y += 8;

        addDivider();

        // ── PRIZES & RECOGNITION
        addSectionHeader('Recognition', 'Prizes & Recognition');
        y = addWrappedText('The prize structure will be announced at a later stage. Winners may receive:', marginL, y, contentW, 5.5, 'normal', 10, medGray);
        y += 4;
        addBullet('Winning teams will receive awards and official recognition certificates issued by the Rotaract Club of SLIIT for their achievements.');
        addBullet('Finalists and all registered participants will receive recognition certificates in appreciation of their active participation.');
        addBullet('Participants will gain networking exposure through interactions with judges, industry professionals, academic representatives, and fellow student entrepreneurs.');
        addBullet('Winning teams will receive support in the development of a professional website to assist in marketing their business.');
        addBullet('Participants, particularly finalists and winning teams, may gain access to potential mentorship opportunities from industry professionals and academic experts.');

        // ── Footer on last page
        y = pageH - 25;
        doc.setDrawColor(...brandBlue);
        doc.setLineWidth(0.5);
        doc.line(marginL, y, pageW - marginR, y);
        y += 8;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(...brandBlue);
        doc.text('SYNERGY CIRCLE 2026', marginL, y);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.5);
        doc.setTextColor(...lightGray);
        doc.text('Organized by the Rotaract Club of SLIIT in collaboration with SLIIT Business School', marginL, y + 5);
        doc.text('www.synergycircle.online', pageW - marginR, y + 5, { align: 'right' });

        // Add page numbers to all pages
        const totalPages = doc.getNumberOfPages();
        for (let i = 1; i <= totalPages; i++) {
          doc.setPage(i);
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(7);
          doc.setTextColor(...lightGray);
          doc.text(`Page ${i} of ${totalPages}`, pageW - marginR, pageH - 8, { align: 'right' });
          // Top right branding on each page after cover
          if (i > 1) {
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(7);
            doc.setTextColor(...brandBlue);
            doc.text('SYNERGY CIRCLE 2026', pageW - marginR, 12, { align: 'right' });
            // Top accent line
            doc.setDrawColor(...brandBlue);
            doc.setLineWidth(0.8);
            doc.line(marginL, 16, pageW - marginR, 16);
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

  const workshopGuidelines = [
    { num: '01', text: 'Registration confirmation is required to enter the workshop.', icon: '✅' },
    { num: '02', text: 'Please arrive on or before the scheduled start time.', icon: '⏰' },
    { num: '03', text: 'Bring a notebook or device for taking notes.', icon: '📝' },
    { num: '04', text: 'No prior pitching knowledge or business idea is required.', icon: '💡' },
    { num: '05', text: 'Follow all instructions given by the organising committee and facilitators.', icon: '📋' },
    { num: '06', text: 'Active participation in all activities is expected.', icon: '🙋' },
    { num: '07', text: 'Be respectful to facilitators and fellow participants at all times.', icon: '🤝' },
    { num: '08', text: 'Food and drinks are allowed only in designated areas.', icon: '🍽️' },
    { num: '09', text: 'Certificates will be given only to participants who complete the full programme.', icon: '🎓' },
  ];

  const prizeItems = [
    { icon: '🏆', title: 'Awards & Certificates', text: 'Winning teams will receive awards and official recognition certificates issued by the Rotaract Club of SLIIT.' },
    { icon: '📜', title: 'Participation Certificates', text: 'Finalists and all registered participants will receive recognition certificates for their active participation.' },
    { icon: '🌐', title: 'Networking Exposure', text: 'Gain exposure through interactions with judges, industry professionals, academic representatives, and fellow student entrepreneurs.' },
    { icon: '💻', title: 'Website Development', text: 'Winning teams will receive support in the development of a professional website for their business.' },
    { icon: '🎓', title: 'Mentorship Access', text: 'Finalists and winning teams may gain access to potential mentorship opportunities from industry professionals and academic experts.' },
  ];

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
        <span className="text-xs font-black uppercase tracking-widest text-slate-600 group-hover:text-[#005bb7] transition-colors">Home</span>
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
          {isGeneratingPDF ? 'Generating...' : 'Download PDF'}
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
              Delegates' Handbook
              <motion.div className="w-10 h-[2px] bg-[#005bb7]" initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.8, delay: 0.6 }} />
            </motion.div>

            <h1 className="text-6xl sm:text-7xl md:text-9xl lg:text-[160px] font-black text-slate-900 tracking-tighter leading-[0.85] mb-8">
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Info &
              </motion.span>
              <motion.span
                className="block text-[#005bb7]"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Guidelines.
              </motion.span>
            </h1>

            <motion.p
              className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Everything you need to know about <span className="text-slate-900 font-bold">Synergy Circle 2026</span>.
            </motion.p>
          </motion.div>

          {/* Scroll prompt */}
          <motion.div
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300">Scroll</span>
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
            <AnimatedCounter target={2} label="Phases" />
            <AnimatedCounter target={5} label="Max Team Size" delay={0.1} />
            <AnimatedCounter target={5} label="Finalists" delay={0.2} />
            <AnimatedCounter target={2} label="Competition Days" delay={0.3} />
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
              <div className="mono text-[#005bb7] mb-6 font-black uppercase tracking-[0.5em] text-xs">Overview</div>
              <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 tracking-tighter leading-[0.85]">
                What is <br />Synergy <span className="text-[#005bb7]">Circle?</span>
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SlideLeft>
              <div className="space-y-8">
                <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed">
                  Synergy Circle is designed to cultivate <strong className="text-slate-900">innovation</strong>, <strong className="text-slate-900">strategic thinking</strong>, and <strong className="text-slate-900">entrepreneurial confidence</strong> among undergraduates.
                </p>
                <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
                  This initiative is not merely a pitching competition — it is a <span className="text-[#005bb7] font-bold">structured journey</span> that equips participants with the mindset, tools, and exposure required to translate ideas into viable ventures.
                </p>
                <div className="flex items-start gap-5 pt-4 p-6 bg-[#005bb7]/5 rounded-2xl border border-[#005bb7]/10">
                  <div className="w-1 h-full min-h-[60px] bg-[#005bb7] rounded-full shrink-0"></div>
                  <p className="text-slate-800 font-bold text-lg md:text-xl italic leading-relaxed">
                    "We encourage all delegates to approach this opportunity with professionalism, preparation, and bold thinking."
                  </p>
                </div>
              </div>
            </SlideLeft>

            <SlideRight>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { emoji: '🧠', title: 'Strategic', subtitle: 'Thinking' },
                  { emoji: '🚀', title: 'Startup', subtitle: 'Mindset' },
                  { emoji: '🎤', title: 'Pitching', subtitle: 'Skills' },
                  { emoji: '🌍', title: 'Real-World', subtitle: 'Exposure' },
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
              <div className="mono text-[#005bb7] mb-6 font-black uppercase tracking-[0.5em] text-xs">Program Structure</div>
              <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.85] mb-6">
                Two Phases.<br /><span className="text-white/20">One Journey.</span>
              </h2>
            </div>
          </FadeUp>

          {/* Tab Buttons */}
          <FadeUp delay={0.2}>
            <div className="flex justify-center gap-4 mb-16">
              <PhaseTab label="Phase 1 — Workshop" active={activePhase === 1} onClick={() => setActivePhase(1)} />
              <PhaseTab label="Phase 2 — Competition" active={activePhase === 2} onClick={() => setActivePhase(2)} />
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
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.06] to-transparent pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                      <div>
                        <span className="mono text-[#005bb7] text-sm font-black tracking-[0.3em]">PHASE 01</span>
                        <h3 className="text-4xl md:text-6xl font-black text-white tracking-tight mt-2">Pitch Olympics</h3>
                        <p className="text-[#005bb7] font-black uppercase text-xs tracking-widest mt-2">Workshop</p>
                      </div>
                      <p className="text-white/50 text-lg font-medium max-w-md leading-relaxed">
                        A structured training workshop designed to develop pitching competence and business validation skills.
                      </p>
                    </div>

                    <div className="h-[1px] w-full bg-white/10 mb-10"></div>
                    <h4 className="text-white font-black text-lg uppercase tracking-widest mb-8">Workshop Guidelines</h4>

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
                        <span className="mono text-white/50 text-sm font-black tracking-[0.3em]">PHASE 02</span>
                        <h3 className="text-4xl md:text-6xl font-black text-white tracking-tight mt-2">The Competition</h3>
                        <p className="text-white/50 font-black uppercase text-xs tracking-widest mt-2">Competitive Evaluation</p>
                      </div>
                      <p className="text-white/50 text-lg font-medium max-w-md leading-relaxed">
                        Teams present their refined business concepts before a judging panel across two days.
                      </p>
                    </div>

                    {/* Day Cards - Interactive */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
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
                              <p className="text-white font-black text-lg uppercase tracking-widest">Day 1</p>
                              <p className="text-white/40 text-xs font-bold uppercase tracking-wider">Preliminary Round</p>
                            </div>
                          </div>
                          <p className="text-white/80 text-base leading-relaxed font-medium mb-6">Evaluate all participating teams and shortlist finalists.</p>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                              <div className="w-8 h-8 bg-[#005bb7]/20 rounded-lg flex items-center justify-center text-sm">🎤</div>
                              <span className="text-white/70 font-bold text-sm">5-7 minute pitch presentation</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                              <div className="w-8 h-8 bg-[#005bb7]/20 rounded-lg flex items-center justify-center text-sm">❓</div>
                              <span className="text-white/70 font-bold text-sm">3-5 minute Q&A session</span>
                            </div>
                          </div>
                          <div className="mt-6 flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#005bb7] rounded-full animate-pulse"></div>
                            <span className="text-[#005bb7] font-black text-xs uppercase tracking-wider">Top 5 teams advance</span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Day 2 */}
                      <motion.div
                        className="relative bg-white/[0.05] backdrop-blur-md rounded-3xl p-8 border border-white/10 overflow-hidden group cursor-default"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                      >
                        <div className="absolute top-0 right-0 text-[120px] font-black text-white/[0.03] leading-none">2</div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-5">
                            <div className="w-12 h-12 bg-amber-400/20 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🏆</div>
                            <div>
                              <p className="text-white font-black text-lg uppercase tracking-widest">Day 2</p>
                              <p className="text-white/40 text-xs font-bold uppercase tracking-wider">Grand Finale</p>
                            </div>
                          </div>
                          <p className="text-white/80 text-base leading-relaxed font-medium mb-6">Determine the final winners of the competition.</p>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                              <div className="w-8 h-8 bg-amber-400/20 rounded-lg flex items-center justify-center text-sm">🎤</div>
                              <span className="text-white/70 font-bold text-sm">10-minute detailed pitch</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                              <div className="w-8 h-8 bg-amber-400/20 rounded-lg flex items-center justify-center text-sm">❓</div>
                              <span className="text-white/70 font-bold text-sm">5-10 minute Q&A</span>
                            </div>
                          </div>
                          <div className="mt-6 flex items-center gap-2">
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                            <span className="text-amber-400 font-black text-xs uppercase tracking-wider">Winners announced at closing ceremony</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <div className="p-6 bg-white/[0.04] border border-white/[0.08] rounded-2xl">
                      <p className="text-white/60 text-base leading-relaxed font-medium">
                        <span className="text-white font-bold text-lg">Note:</span> Judges may probe questions on financial aspects, market scalability, risk mitigation, competitive sustainability, and more.
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
              <div className="mono text-[#005bb7] mb-6 font-black uppercase tracking-[0.5em] text-xs">Categories</div>
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-8">
                Any Sector.<br /><span className="text-[#005bb7]">Any Industry.</span>
              </h2>
              <p className="text-slate-500 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
                No restrictions on the category. Propose concepts across any sector.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-4" staggerDelay={0.06}>
            {[
              { name: 'Technology', emoji: '💻' },
              { name: 'Social Innovation', emoji: '🤲' },
              { name: 'Sustainability', emoji: '🌿' },
              { name: 'Consumer Products', emoji: '📦' },
              { name: 'Digital Platforms', emoji: '📱' },
              { name: 'Services', emoji: '🛎️' },
              { name: 'Emerging Industries', emoji: '⚡' },
              { name: 'And More...', emoji: '✨' },
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
                <p className="text-slate-900 font-black text-lg mb-2">Restrictions</p>
                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  All submitted ideas must be <strong>original</strong> and developed by the participating team. Concepts that promote illegal, unethical, harmful, discriminatory, or socially irresponsible practices will <strong>not be accepted</strong>.
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
              <div className="mono text-[#005bb7] mb-6 font-black uppercase tracking-[0.5em] text-xs">Regulations</div>
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85]">
                Rules & <span className="text-[#005bb7]">Regulations.</span>
              </h2>
            </div>
          </FadeUp>

          <div className="space-y-4">
            <AccordionItem
              title="Team Structure"
              icon="👥"
              index={0}
              isOpen={openAccordion === 0}
              onToggle={() => setOpenAccordion(openAccordion === 0 ? null : 0)}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'Team Size', value: '1–5 members per team', icon: '👤' },
                  { label: 'Collaboration', value: 'Cross-university collaboration allowed', icon: '🏫' },
                  { label: 'Participation', value: 'Each participant may join only one team', icon: '☝️' },
                  { label: 'Deadline', value: 'Teams cannot change members after submission deadline', icon: '🔒' },
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
              title="Time Regulations"
              icon="⏱️"
              index={1}
              isOpen={openAccordion === 1}
              onToggle={() => setOpenAccordion(openAccordion === 1 ? null : 1)}
            >
              <div className="space-y-4 mb-8">
                {[
                  { label: 'Timer Visibility', value: 'Timer will be visible throughout your presentation', icon: '👁️' },
                  { label: '1-Minute Warning', value: 'A warning will be given when 1 minute remains', icon: '⚡' },
                  { label: 'Scoring Penalty', value: 'Exceeding allocated time may result in scoring penalties', icon: '📉' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl group hover:bg-amber-50/60 transition-colors duration-300"
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

              {/* Visual Duration Bars */}
              <div className="p-7 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl">
                <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-6">Pitch Duration Comparison</p>
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white/80 text-sm font-bold">Preliminary</span>
                      <span className="text-[#005bb7] text-sm font-black">5-7 min</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3">
                      <motion.div
                        className="h-3 bg-gradient-to-r from-[#005bb7] to-[#0070e0] rounded-full"
                        initial={{ width: '0%' }}
                        whileInView={{ width: '60%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white/80 text-sm font-bold">Grand Finale</span>
                      <span className="text-amber-400 text-sm font-black">10 min</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3">
                      <motion.div
                        className="h-3 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                        initial={{ width: '0%' }}
                        whileInView={{ width: '85%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem
              title="Professional Conduct"
              icon="👔"
              index={2}
              isOpen={openAccordion === 2}
              onToggle={() => setOpenAccordion(openAccordion === 2 ? null : 2)}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                  { icon: '👔', text: 'Maintain professional attire', bg: 'bg-blue-50' },
                  { icon: '🤝', text: 'Show respect toward judges and peers', bg: 'bg-emerald-50' },
                  { icon: '🚫', text: 'Avoid disruptive behavior', bg: 'bg-red-50' },
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
                Misconduct may lead to disqualification
              </p>
            </AccordionItem>

            <AccordionItem
              title="Disqualification Conditions"
              icon="🛡️"
              index={3}
              isOpen={openAccordion === 3}
              onToggle={() => setOpenAccordion(openAccordion === 3 ? null : 3)}
            >
              <div className="space-y-4">
                {[
                  { icon: '📋', title: 'Plagiarism', desc: 'All submitted ideas must be original and developed by the participating team.' },
                  { icon: '⚖️', title: 'Conduct Violation', desc: 'Violation of the professional conduct policy during any phase of the program.' },
                  { icon: '🛡️', title: 'Ethical Breaches', desc: 'Concepts promoting illegal, unethical, harmful, discriminatory, or socially irresponsible practices.' },
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
              <div className="mono text-[#005bb7] mb-6 font-black uppercase tracking-[0.5em] text-xs">Recognition</div>
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-6">
                Prizes & <br /><span className="text-white/20">Recognition.</span>
              </h2>
              <p className="text-slate-400 text-xl font-medium max-w-xl mx-auto">
                The prize structure will be announced at a later stage.
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
            <div className="mono text-[#005bb7] mb-8 font-black uppercase tracking-[0.5em] text-xs">Ready?</div>
            <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-8">
              Register<br />Your <span className="text-[#005bb7]">Vision.</span>
            </h2>
            <p className="text-slate-500 text-xl md:text-2xl font-medium leading-relaxed mb-14 max-w-xl mx-auto">
              Now that you know the guidelines, it's time to take the first step.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <motion.a
                href="https://forms.gle/ktFne6zniNcP1QvG6"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 px-14 py-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-full font-black text-sm uppercase tracking-[0.2em] hover:from-[#005bb7] hover:to-[#0070e0] transition-all duration-300 shadow-2xl shadow-slate-900/20"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
                <span className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
              </motion.a>
              <motion.button
                onClick={onBack}
                className="group inline-flex items-center gap-3 px-10 py-6 bg-white border-2 border-slate-200 text-slate-600 rounded-full font-black text-sm uppercase tracking-[0.15em] hover:border-[#005bb7]/40 hover:text-[#005bb7] transition-all duration-300"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </motion.button>
            </div>
          </ScaleUp>
        </div>
      </section>

      {/* ─── MINI FOOTER ─── */}
      <div className="py-10 border-t border-slate-100 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs font-black uppercase tracking-widest">
            Synergy Circle 2026 — Delegates' Handbook
          </p>
          <p className="text-slate-300 text-xs font-medium">
            Organized by Rotaract Club of SLIIT × SLIIT Business School
          </p>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
