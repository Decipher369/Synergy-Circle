export type Language = 'en' | 'si';

export interface Translations {
  // Navbar
  nav: {
    about: string;
    phases: string;
    criteria: string;
    prizes: string;
    timeline: string;
    guidelines: string;
  };

  // Hero
  hero: {
    badge: string;
    tagline: string;
    description: string;
    rotaractSliit: string;
    sliitBs: string;
    countdownLabel: string;
    explore: string;
  };

  // Countdown
  countdown: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };

  // About
  about: {
    watermark: string;
    sectionLabel: string;
    heading1: string;
    heading2: string;
    paragraph1: string;
    paragraph1Bold1: string;
    paragraph1OrganizedBy: string;
    paragraph1Bold2: string;
    paragraph2: string;
    paragraph2Bold: string;
    paragraph3Start: string;
    paragraph3Bold: string;
    paragraph3End: string;
    statCross: string;
    statCrossLabel: string;
    statImpact: string;
    statImpactLabel: string;
    statTop5: string;
    statTop5Label: string;
    statExpert: string;
    statExpertLabel: string;
  };

  // Phases
  phases: {
    sectionLabel: string;
    heading1: string;
    heading2: string;
    phase1Label: string;
    phase1Title: string;
    phase1Subtitle: string;
    phase1Description: string;
    phase1Items: string[];
    phase1Cta: string;
    phase2Label: string;
    phase2Title: string;
    phase2Subtitle: string;
    phase2Day1Title: string;
    phase2Day1Desc: string;
    phase2Day2Title: string;
    phase2Day2Desc: string;
    phase2Cta: string;
  };

  // Eligibility
  eligibility: {
    sectionLabel: string;
    heading1: string;
    heading2: string;
    criteria: Array<{
      title: string;
      description: string;
    }>;
    ctaText: string;
    ctaSubtext: string;
    ctaButton: string;
  };

  // Prize Pool
  prizes: {
    sectionLabel: string;
    heading1: string;
    heading2: string;
    description: string;
    place: string;
    titles: string[];
    updateNotice: string;
  };

  // Value Prop
  valueProp: {
    sectionLabel: string;
    heading: string;
    values: Array<{
      title: string;
      description: string;
    }>;
  };

  // Timeline
  timeline: {
    sectionLabel: string;
    heading: string;
    subheading: string;
    steps: Array<{
      event: string;
      status: string;
    }>;
    bottomLabel: string;
  };

  // Registration
  registration: {
    sectionLabel: string;
    heading1: string;
    heading2: string;
    description: string;
    individuals: string;
    orAs: string;
    teams: string;
    teamLeaders: string;
    openingLabel: string;
  };

  // Footer
  footer: {
    inquiries: string;
    backToTop: string;
    allRights: string;
  };

  // Guidelines Page
  guidelines: {
    // Floating buttons
    homeButton: string;
    downloadPdf: string;
    generating: string;

    // Hero
    heroLabel: string;
    heroTitle1: string;
    heroTitle2: string;
    heroDescription: string;
    heroDescBold: string;
    scrollPrompt: string;

    // Stats bar
    statPhases: string;
    statMaxTeam: string;
    statFinalists: string;
    statDays: string;

    // What is Synergy Circle
    overviewLabel: string;
    overviewHeading1: string;
    overviewHeading2: string;
    overviewHeading3: string;
    overviewParagraph1: string;
    overviewBold1: string;
    overviewBold2: string;
    overviewBold3: string;
    overviewParagraph2: string;
    overviewParagraph2Bold: string;
    overviewQuote: string;
    overviewCards: Array<{ title: string; subtitle: string }>;

    // Program Phases
    phasesLabel: string;
    phasesHeading1: string;
    phasesHeading2: string;
    phaseTab1: string;
    phaseTab2: string;

    // Phase 1
    phase1Label: string;
    phase1Title: string;
    phase1Subtitle: string;
    phase1Description: string;
    phase1GuidelinesTitle: string;
    phase1Guidelines: Array<{ num: string; text: string }>;

    // Phase 2
    phase2Label: string;
    phase2Title: string;
    phase2Subtitle: string;
    phase2Description: string;
    phase2Day1Title: string;
    phase2Day1Subtitle: string;
    phase2Day1Desc: string;
    phase2Day1Detail1: string;
    phase2Day1Detail2: string;
    phase2Day1Advance: string;
    phase2Day2Title: string;
    phase2Day2Subtitle: string;
    phase2Day2Desc: string;
    phase2Day2Detail1: string;
    phase2Day2Detail2: string;
    phase2Day2Announce: string;
    phase2Note: string;
    phase2NoteText: string;

    // Eligible Categories
    categoriesLabel: string;
    categoriesHeading1: string;
    categoriesHeading2: string;
    categoriesDescription: string;
    categoryNames: string[];
    restrictionsTitle: string;
    restrictionsText1: string;
    restrictionsBold1: string;
    restrictionsText2: string;
    restrictionsBold2: string;

    // Rules & Regulations
    regulationsLabel: string;
    regulationsHeading1: string;
    regulationsHeading2: string;

    // Team Structure
    teamTitle: string;
    teamItems: Array<{ label: string; value: string }>;

    // Time Regulations
    timeTitle: string;
    timeItems: Array<{ label: string; value: string }>;
    timePreliminary: string;
    timeFirstRound: string;
    timePitch57: string;
    timeQA35: string;
    timeGrandFinale: string;
    timeFinalRound: string;
    timePitch10: string;
    timeQA510: string;

    // Professional Conduct
    conductTitle: string;
    conductRules: string[];
    conductWarning: string;

    // Disqualification
    disqualTitle: string;
    disqualItems: Array<{ title: string; desc: string }>;

    // Prizes
    prizesLabel: string;
    prizesHeading1: string;
    prizesHeading2: string;
    prizesDescription: string;
    prizeItems: Array<{ title: string; text: string }>;

    // Bottom CTA
    ctaLabel: string;
    ctaHeading1: string;
    ctaHeading2: string;
    ctaHeading3: string;
    ctaDescription: string;
    ctaButton: string;

    // Mini Footer
    footerTitle: string;
    footerOrganized: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About',
      phases: 'Phases',
      criteria: 'Criteria',
      prizes: 'Prizes',
      timeline: 'Timeline',
      guidelines: 'Guidelines',
    },
    hero: {
      badge: 'Professional Development Initiative',
      tagline: 'Where Ideas Turn Into Impact.',
      description: 'Bridging the gap between student innovation and corporate excellence. A collaboration between',
      rotaractSliit: 'Rotaract SLIIT',
      sliitBs: 'SLIIT Business School',
      countdownLabel: 'Registrations Open In',
      explore: 'Explore',
    },
    countdown: {
      days: 'days',
      hours: 'hours',
      minutes: 'minutes',
      seconds: 'seconds',
    },
    about: {
      watermark: 'Innovation',
      sectionLabel: 'The Mission',
      heading1: 'Forging the',
      heading2: 'standard.',
      paragraph1: 'Synergy Circle 2026 is a',
      paragraph1Bold1: 'cross-university entrepreneurial initiative',
      paragraph1OrganizedBy: ' organized by the ',
      paragraph1Bold2: 'Rotaract Club of SLIIT',
      paragraph2: ', designed to empower young innovators and future business leaders.',
      paragraph2Bold: 'SLIIT Business School',
      paragraph3Start: 'In partnership with the ',
      paragraph3Bold: 'SLIIT Business School',
      paragraph3End: ', we provide the elite resources required for global-scale impact \u2014 from guided mentorship and capacity-building to competitive pitching on a grand stage.',
      statCross: 'Cross',
      statCrossLabel: 'University Initiative',
      statImpact: 'Impact',
      statImpactLabel: 'Driven Curriculum',
      statTop5: 'Top 5',
      statTop5Label: 'Finalist Track',
      statExpert: 'Expert',
      statExpertLabel: 'Mentorship',
    },
    phases: {
      sectionLabel: 'The Architecture',
      heading1: 'Two Phases.',
      heading2: 'Total Immersion.',
      phase1Label: 'PHASE 01',
      phase1Title: 'Pitch Olympics',
      phase1Subtitle: 'The Workshop',
      phase1Description: 'A guided mentorship and capacity-building workshop where participants gain practical knowledge on business development, startup fundamentals, strategic thinking, and effective pitching techniques.',
      phase1Items: ['Business Development', 'Startup Fundamentals', 'Strategic Thinking', 'Pitching Techniques'],
      phase1Cta: 'Refine Your Ideas',
      phase2Label: 'PHASE 02',
      phase2Title: 'The Pitch Competition',
      phase2Subtitle: 'Two-Day Grand Event',
      phase2Day1Title: 'Day 1 — First Round',
      phase2Day1Desc: 'Registered participants present their business concepts before a judging panel. The top five ideas are selected as finalists.',
      phase2Day2Title: 'Day 2 — Grand Finale',
      phase2Day2Desc: 'Finalists compete in the Grand Finale, pitching their ventures to secure a place among the Top Three Ventures of Synergy Circle 2026.',
      phase2Cta: 'The Grand Stage',
    },
    eligibility: {
      sectionLabel: 'The Standard',
      heading1: 'What We Are',
      heading2: 'Looking For.',
      criteria: [
        { title: 'Venture Stage', description: 'From conceptual ideas to early seed-stage startups looking for their first major breakthrough.' },
        { title: 'Founders', description: 'Young entrepreneurs and university students driven by innovation and strategic thinking.' },
        { title: 'Market Focus', description: 'Ideas with potential for significant local or global market impact and high scalability.' },
        { title: 'Innovation', description: 'Low initial capital requirements with high revenue potential and disruptive technology.' },
      ],
      ctaText: 'Ready to showcase your vision?',
      ctaSubtext: 'Applications are evaluated on a rolling basis.',
      ctaButton: 'Check Guidelines',
    },
    prizes: {
      sectionLabel: 'Rewards',
      heading1: 'Prize',
      heading2: 'Pool',
      description: 'Compete for exciting prizes and recognition. The top three ventures of Synergy Circle 2026 walk away with more than just a title.',
      place: 'Place',
      titles: ['Grand Champion', 'First Runner-Up', 'Second Runner-Up'],
      updateNotice: 'Prize details will be updated soon',
    },
    valueProp: {
      sectionLabel: 'Value Proposition',
      heading: 'Why join the Circle?',
      values: [
        { title: 'Master the Pitch', description: 'Learn to articulate value clearly and confidently to any audience with expert-led workshops.' },
        { title: 'Expert Evaluation', description: 'Get ruthless, constructive feedback from people who have actually built and sold companies.' },
        { title: 'Massive Exposure', description: 'Get your idea in front of the business school network and the wider startup ecosystem.' },
        { title: 'Capital Access', description: 'Direct introduction to angel investors, venture capitalists, and seed-funding grants.' },
      ],
    },
    timeline: {
      sectionLabel: 'The Roadmap',
      heading: 'Key Milestones',
      subheading: 'Your journey from idea to impact — mapped out.',
      steps: [
        { event: 'Registration Opens', status: 'Registration Open' },
        { event: 'Registration Closes', status: 'Final Deadline' },
        { event: 'Pitch Olympics Workshop', status: 'Phase 1' },
        { event: 'Competition — First Round', status: 'Phase 2 · Day 1' },
        { event: 'The Grand Finale', status: 'Phase 2 · Day 2' },
      ],
      bottomLabel: 'Mar — Apr 2026',
    },
    registration: {
      sectionLabel: 'Opening Soon',
      heading1: 'Prepare Your',
      heading2: 'Startup Vision.',
      description: 'Participants may register as',
      individuals: 'individuals',
      orAs: ' or as ',
      teams: 'teams',
      teamLeaders: '. Team leaders will be required to complete the registration on behalf of their team members.',
      openingLabel: 'Opening on March 3rd',
    },
    footer: {
      inquiries: 'Inquiries',
      backToTop: 'Back to top',
      allRights: 'All rights reserved.',
    },
    guidelines: {
      homeButton: 'Home',
      downloadPdf: 'Download PDF',
      generating: 'Generating...',

      heroLabel: "Delegates' Handbook",
      heroTitle1: 'Info &',
      heroTitle2: 'Guidelines.',
      heroDescription: 'Everything you need to know about ',
      heroDescBold: 'Synergy Circle 2026',
      scrollPrompt: 'Scroll',

      statPhases: 'Phases',
      statMaxTeam: 'Max Team Size',
      statFinalists: 'Finalists',
      statDays: 'Competition Days',

      overviewLabel: 'Overview',
      overviewHeading1: 'What is ',
      overviewHeading2: 'Synergy ',
      overviewHeading3: 'Circle?',
      overviewParagraph1: 'Synergy Circle is designed to cultivate ',
      overviewBold1: 'innovation',
      overviewBold2: 'strategic thinking',
      overviewBold3: 'entrepreneurial confidence',
      overviewParagraph2: 'This initiative is not merely a pitching competition — it is a ',
      overviewParagraph2Bold: 'structured journey',
      overviewQuote: '"We encourage all delegates to approach this opportunity with professionalism, preparation, and bold thinking."',
      overviewCards: [
        { title: 'Strategic', subtitle: 'Thinking' },
        { title: 'Startup', subtitle: 'Mindset' },
        { title: 'Pitching', subtitle: 'Skills' },
        { title: 'Real-World', subtitle: 'Exposure' },
      ],

      phasesLabel: 'Program Structure',
      phasesHeading1: 'Two Phases.',
      phasesHeading2: 'One Journey.',
      phaseTab1: 'Phase 1 — Workshop',
      phaseTab2: 'Phase 2 — Competition',

      phase1Label: 'PHASE 01',
      phase1Title: 'Pitch Olympics',
      phase1Subtitle: 'Workshop',
      phase1Description: 'A structured training workshop designed to develop pitching competence and business validation skills.',
      phase1GuidelinesTitle: 'Workshop Guidelines',
      phase1Guidelines: [
        { num: '01', text: 'Registration confirmation is required to enter the workshop.' },
        { num: '02', text: 'Please arrive on or before the scheduled start time.' },
        { num: '03', text: 'Bring a notebook or device for taking notes.' },
        { num: '04', text: 'No prior pitching knowledge or business idea is required.' },
        { num: '05', text: 'Follow all instructions given by the organising committee and facilitators.' },
        { num: '06', text: 'Active participation in all activities is expected.' },
        { num: '07', text: 'Be respectful to facilitators and fellow participants at all times.' },
        { num: '08', text: 'Food and drinks are allowed only in designated areas.' },
        { num: '09', text: 'Certificates will be given only to participants who complete the full programme.' },
      ],

      phase2Label: 'PHASE 02',
      phase2Title: 'The Competition',
      phase2Subtitle: 'Competitive Evaluation',
      phase2Description: 'Teams present their refined business concepts before a judging panel across two days.',
      phase2Day1Title: 'Day 1',
      phase2Day1Subtitle: 'Preliminary Round',
      phase2Day1Desc: 'Evaluate all participating teams and shortlist finalists.',
      phase2Day1Detail1: '5-7 minute pitch presentation',
      phase2Day1Detail2: '3-5 minute Q&A session',
      phase2Day1Advance: 'Top 5 teams advance',
      phase2Day2Title: 'Day 2',
      phase2Day2Subtitle: 'Grand Finale',
      phase2Day2Desc: 'Determine the final winners of the competition.',
      phase2Day2Detail1: '10-minute detailed pitch',
      phase2Day2Detail2: '5-10 minute Q&A',
      phase2Day2Announce: 'Winners announced at closing ceremony',
      phase2Note: 'Note:',
      phase2NoteText: 'Judges may probe questions on financial aspects, market scalability, risk mitigation, competitive sustainability, and more.',

      categoriesLabel: 'Categories',
      categoriesHeading1: 'Any Sector.',
      categoriesHeading2: 'Any Industry.',
      categoriesDescription: 'No restrictions on the category. Propose concepts across any sector.',
      categoryNames: ['Technology', 'Social Innovation', 'Sustainability', 'Consumer Products', 'Digital Platforms', 'Services', 'Emerging Industries', 'And More...'],
      restrictionsTitle: 'Restrictions',
      restrictionsText1: 'All submitted ideas must be ',
      restrictionsBold1: 'original',
      restrictionsText2: ' and developed by the participating team. Concepts that promote illegal, unethical, harmful, discriminatory, or socially irresponsible practices will ',
      restrictionsBold2: 'not be accepted',

      regulationsLabel: 'Regulations',
      regulationsHeading1: 'Rules & ',
      regulationsHeading2: 'Regulations.',

      teamTitle: 'Team Structure',
      teamItems: [
        { label: 'Team Size', value: '1–5 members per team' },
        { label: 'Collaboration', value: 'Cross-university collaboration allowed' },
        { label: 'Participation', value: 'Each participant may join only one team' },
        { label: 'Deadline', value: 'Teams cannot change members after submission deadline' },
      ],

      timeTitle: 'Time Regulations',
      timeItems: [
        { label: 'Timer Visibility', value: 'Timer will be visible throughout your presentation' },
        { label: '1-Minute Warning', value: 'A warning will be given when 1 minute remains' },
        { label: 'Scoring Penalty', value: 'Exceeding allocated time may result in scoring penalties' },
      ],
      timePreliminary: 'Preliminary',
      timeFirstRound: 'First Round',
      timePitch57: '5-7 min pitch',
      timeQA35: '3-5 min Q&A',
      timeGrandFinale: 'Grand Finale',
      timeFinalRound: 'Final Round',
      timePitch10: '10 min pitch',
      timeQA510: '5-10 min Q&A',

      conductTitle: 'Professional Conduct',
      conductRules: ['Maintain professional attire', 'Show respect toward judges and peers', 'Avoid disruptive behavior'],
      conductWarning: 'Misconduct may lead to disqualification',

      disqualTitle: 'Disqualification Conditions',
      disqualItems: [
        { title: 'Plagiarism', desc: 'All submitted ideas must be original and developed by the participating team.' },
        { title: 'Conduct Violation', desc: 'Violation of the professional conduct policy during any phase of the program.' },
        { title: 'Ethical Breaches', desc: 'Concepts promoting illegal, unethical, harmful, discriminatory, or socially irresponsible practices.' },
      ],

      prizesLabel: 'Recognition',
      prizesHeading1: 'Prizes & ',
      prizesHeading2: 'Recognition.',
      prizesDescription: 'The prize structure will be announced at a later stage.',
      prizeItems: [
        { title: 'Awards & Certificates', text: 'Winning teams will receive awards and official recognition certificates issued by the Rotaract Club of SLIIT.' },
        { title: 'Participation Certificates', text: 'Finalists and all registered participants will receive recognition certificates for their active participation.' },
        { title: 'Networking Exposure', text: 'Gain exposure through interactions with judges, industry professionals, academic representatives, and fellow student entrepreneurs.' },
        { title: 'Website Development', text: 'Winning teams will receive support in the development of a professional website for their business.' },
        { title: 'Mentorship Access', text: 'Finalists and winning teams may gain access to potential mentorship opportunities from industry professionals and academic experts.' },
      ],

      ctaLabel: 'Ready?',
      ctaHeading1: 'Prepare',
      ctaHeading2: 'Your ',
      ctaHeading3: 'Vision.',
      ctaDescription: 'Now that you know the guidelines, get ready to take the first step. Registrations open on March 3rd.',
      ctaButton: 'Back to Home',

      footerTitle: "Synergy Circle 2026 — Delegates' Handbook",
      footerOrganized: 'Organized by Rotaract Club of SLIIT × SLIIT Business School',
    },
  },

  si: {
    nav: {
      about: 'පිළිබඳව',
      phases: 'අදියර',
      criteria: 'නිර්ණායක',
      prizes: 'ත්‍යාග',
      timeline: 'කාලසටහන',
      guidelines: 'මාර්ගෝපදේශ',
    },
    hero: {
      badge: 'වෘත්තීය සංවර්ධන වැඩසටහන',
      tagline: 'අදහස් බලපෑමක් බවට පත්වන තැන.',
      description: 'ශිෂ්‍ය නවෝත්පාදනය සහ ආයතනික විශිෂ්ටත්වය අතර පරතරය පිරවීම. මෙය',
      rotaractSliit: 'රොටරැක්ට් SLIIT',
      sliitBs: 'SLIIT ව්‍යාපාර පීඨය',
      countdownLabel: 'ලියාපදිංචිය ආරම්භ වන්නේ',
      explore: 'ගවේෂණය',
    },
    countdown: {
      days: 'දින',
      hours: 'පැය',
      minutes: 'මිනි',
      seconds: 'තත්',
    },
    about: {
      watermark: 'නවෝත්පාදනය',
      sectionLabel: 'මෙහෙවර',
      heading1: 'ඊළඟ',
      heading2: 'ප්‍රමිතිය නිර්මාණය.',
      paragraph1: 'Synergy Circle 2026 යනු',
      paragraph1Bold1: 'බහු-විශ්වවිද්‍යාල ව්‍යවසායකත්ව වැඩසටහනකි',
      paragraph1OrganizedBy: ' සංවිධානය කරන ලද්දේ ',
      paragraph1Bold2: 'SLIIT රොටරැක්ට් සමාජය',
      paragraph2: ', තරුණ නවෝත්පාදකයින් සහ අනාගත ව්‍යාපාර නායකයින් බලගැන්වීම සඳහා සැලසුම් කර ඇත.',
      paragraph2Bold: 'SLIIT ව්‍යාපාර පීඨය',
      paragraph3Start: '',
      paragraph3Bold: 'SLIIT ව්‍යාපාර පීඨය',
      paragraph3End: ' සමඟ අපි ගෝලීය පරිමාණයේ බලපෑම සඳහා අවශ්‍ය විශිෂ්ට සම්පත් සපයමු — මෙන්ටෝර්ෂිප් සහ ධාරිතා වර්ධනය සිට තරගකාරී පිච් කිරීම දක්වා.',
      statCross: 'බහු',
      statCrossLabel: 'විශ්වවිද්‍යාල වැඩසටහන',
      statImpact: 'බලපෑම්',
      statImpactLabel: 'මූලික විෂය මාලාව',
      statTop5: 'හොඳම 5',
      statTop5Label: 'අවසන් වටය',
      statExpert: 'විශේෂඥ',
      statExpertLabel: 'උපදේශනය',
    },
    phases: {
      sectionLabel: 'ව්‍යුහය',
      heading1: 'අදියර දෙකක්.',
      heading2: 'සම්පූර්ණ අත්දැකීම.',
      phase1Label: 'අදියර 01',
      phase1Title: 'පිච් ඔලිම්පික්ස්',
      phase1Subtitle: 'වැඩමුළුව',
      phase1Description: 'ව්‍යාපාර සංවර්ධනය, ආරම්භක මූලධර්ම, උපායමාර්ගික චින්තනය සහ ඵලදායී පිච් ක්‍රමවේද පිළිබඳ ප්‍රායෝගික දැනුම ලබා ගැනීම සඳහා මෙන්ටෝර්ෂිප් සහ ධාරිතා වැඩිදියුණු කිරීමේ වැඩමුළුවකි.',
      phase1Items: ['ව්‍යාපාර සංවර්ධනය', 'ආරම්භක මූලධර්ම', 'උපායමාර්ගික චින්තනය', 'පිච් ක්‍රමවේද'],
      phase1Cta: 'ඔබගේ අදහස් පිරිපහදු කරන්න',
      phase2Label: 'අදියර 02',
      phase2Title: 'පිච් තරගය',
      phase2Subtitle: 'දින දෙකක මහා උත්සවය',
      phase2Day1Title: 'දින 1 — පළමු වටය',
      phase2Day1Desc: 'ලියාපදිංචි සහභාගිවන්නන් තම ව්‍යාපාර අදහස් විනිශ්චය මණ්ඩලයක් ඉදිරියේ ඉදිරිපත් කරයි. හොඳම අදහස් පහක් අවසන් වටයට තෝරා ගැනේ.',
      phase2Day2Title: 'දින 2 — මහා අවසන් වටය',
      phase2Day2Desc: 'අවසන් වටයේ තරගකරුවන් මහා අවසන් වටයේදී තම ව්‍යාපාර ඉදිරිපත් කර Synergy Circle 2026 හොඳම ව්‍යාපාර තුන අතරට පැමිණීමට තරග කරයි.',
      phase2Cta: 'මහා වේදිකාව',
    },
    eligibility: {
      sectionLabel: 'ප්‍රමිතිය',
      heading1: 'අප සොයන්නේ',
      heading2: 'කුමක්ද?',
      criteria: [
        { title: 'ව්‍යාපාර අදියර', description: 'සංකල්පමය අදහස් සිට ඔවුන්ගේ පළමු ප්‍රධාන සාර්ථකත්වය සොයන මුල් අදියරේ ආරම්භක ව්‍යාපාර දක්වා.' },
        { title: 'නිර්මාතෘවරුන්', description: 'නවෝත්පාදනය සහ උපායමාර්ගික චින්තනය මගින් මෙහෙයවනු ලබන තරුණ ව්‍යවසායකයින් සහ විශ්වවිද්‍යාල සිසුන්.' },
        { title: 'වෙළඳපල අවධානය', description: 'සැලකිය යුතු දේශීය හෝ ගෝලීය වෙළඳපල බලපෑමක් සහ ඉහළ පරිමාණයකින් පුළුල් කළ හැකි අදහස්.' },
        { title: 'නවෝත්පාදනය', description: 'අඩු ආරම්භක ප්‍රාග්ධන අවශ්‍යතා සහිත ඉහළ ආදායම් හැකියාව සහ විප්ලවකාරී තාක්ෂණය.' },
      ],
      ctaText: 'ඔබේ දැක්ම ප්‍රදර්ශනය කිරීමට සූදානම්ද?',
      ctaSubtext: 'අයදුම්පත් ඉදිරිපත් කරන පිළිවෙළට ඇගයීමට ලක් කෙරේ.',
      ctaButton: 'මාර්ගෝපදේශ බලන්න',
    },
    prizes: {
      sectionLabel: 'ත්‍යාග',
      heading1: 'ත්‍යාග',
      heading2: 'සංචිතය',
      description: 'ආකර්ෂණීය ත්‍යාග සහ පිළිගැනීම සඳහා තරග කරන්න. Synergy Circle 2026 හොඳම ව්‍යාපාර තුන හුදු ශීර්ෂයකට වඩා වැඩි දෙයක් ලබා ගනී.',
      place: 'ස්ථානය',
      titles: ['මහා ශූරතාව', 'පළමු අනුශූරතාව', 'දෙවන අනුශූරතාව'],
      updateNotice: 'ත්‍යාග විස්තර ඉක්මනින් යාවත්කාලීන කෙරේ',
    },
    valueProp: {
      sectionLabel: 'වටිනාකම් යෝජනාව',
      heading: 'Circle එකට ඇයි සම්බන්ධ වෙන්නේ?',
      values: [
        { title: 'පිච් දක්ෂතාව', description: 'විශේෂඥ-මෙහෙයවන ලද වැඩමුළු සමඟ ඕනෑම ප්‍රේක්ෂකයන්ට පැහැදිලිව සහ විශ්වාසයෙන් වටිනාකම ප්‍රකාශ කිරීමට ඉගෙන ගන්න.' },
        { title: 'විශේෂඥ ඇගයීම', description: 'සැබවින්ම සමාගම් ගොඩනගා විකුණා ඇති පුද්ගලයින්ගෙන් නිර්මාණාත්මක ප්‍රතිපෝෂණ ලබා ගන්න.' },
        { title: 'විශාල ප්‍රචාරය', description: 'ව්‍යාපාර පීඨ ජාලය සහ පුළුල් ආරම්භක පරිසර පද්ධතිය ඉදිරියේ ඔබේ අදහස ඉදිරිපත් කරන්න.' },
        { title: 'ප්‍රාග්ධන ප්‍රවේශය', description: 'ඒන්ජල් ආයෝජකයින්, වෙන්චර් කැපිටලිස්ට්වරුන් සහ බීජ-අරමුදල් ප්‍රදාන සඳහා සෘජු හැඳින්වීම.' },
      ],
    },
    timeline: {
      sectionLabel: 'මාර්ග සිතියම',
      heading: 'ප්‍රධාන සන්ධිස්ථාන',
      subheading: 'අදහසේ සිට බලපෑම දක්වා ඔබේ ගමන — සිතියම් ගත කර ඇත.',
      steps: [
        { event: 'ලියාපදිංචිය ආරම්භ වේ', status: 'ලියාපදිංචිය විවෘතයි' },
        { event: 'ලියාපදිංචිය අවසන් වේ', status: 'අවසන් දිනය' },
        { event: 'පිච් ඔලිම්පික්ස් වැඩමුළුව', status: 'අදියර 1' },
        { event: 'තරගය — පළමු වටය', status: 'අදියර 2 · දින 1' },
        { event: 'මහා අවසන් වටය', status: 'අදියර 2 · දින 2' },
      ],
      bottomLabel: 'මාර්තු — අප්‍රේල් 2026',
    },
    registration: {
      sectionLabel: 'ඉක්මනින්',
      heading1: 'ඔබේ ආරම්භක',
      heading2: 'දැක්ම සකසන්න.',
      description: 'සහභාගිවන්නන්ට',
      individuals: 'තනි පුද්ගලයින්',
      orAs: ' හෝ ',
      teams: 'කණ්ඩායම්',
      teamLeaders: ' ලෙස ලියාපදිංචි විය හැකිය. කණ්ඩායම් නායකයින් ඔවුන්ගේ කණ්ඩායම් සාමාජිකයින් වනුවෙන් ලියාපදිංචිය සම්පූර්ණ කිරීම අවශ්‍යයි.',
      openingLabel: 'මාර්තු 3 වැනිදා විවෘත වේ',
    },
    footer: {
      inquiries: 'විමසීම්',
      backToTop: 'ඉහළට යන්න',
      allRights: 'සියලු හිමිකම් ඇවිරිණි.',
    },
    guidelines: {
      homeButton: 'මුල් පිටුව',
      downloadPdf: 'PDF බාගන්න',
      generating: 'සෑදෙමින්...',

      heroLabel: 'නියෝජිතයින්ගේ අත්පොත',
      heroTitle1: 'තොරතුරු &',
      heroTitle2: 'මාර්ගෝපදේශ.',
      heroDescription: 'ඔබට දැනගත යුතු සියල්ල ',
      heroDescBold: 'Synergy Circle 2026',
      scrollPrompt: 'පහළට',

      statPhases: 'අදියර',
      statMaxTeam: 'උපරිම කණ්ඩායම් ප්‍රමාණය',
      statFinalists: 'අවසන් වටයේ තරගකරුවන්',
      statDays: 'තරග දින',

      overviewLabel: 'දළ විශ්ලේෂණය',
      overviewHeading1: 'Synergy ',
      overviewHeading2: 'Circle ',
      overviewHeading3: 'යනු කුමක්ද?',
      overviewParagraph1: 'Synergy Circle නිර්මාණය කර ඇත්තේ ',
      overviewBold1: 'නවෝත්පාදනය',
      overviewBold2: 'උපායමාර්ගික චින්තනය',
      overviewBold3: 'ව්‍යවසායකත්ව විශ්වාසය',
      overviewParagraph2: 'මෙය හුදු පිච් තරගයක් නොවේ — එය සහභාගිවන්නන්ට අදහස් ක්‍රියාත්මක ව්‍යාපාර බවට පරිවර්තනය කිරීමට අවශ්‍ය මානසිකත්වය, මෙවලම් සහ නිරාවරණය සපයන ',
      overviewParagraph2Bold: 'ව්‍යුහාත්මක ගමනකි',
      overviewQuote: '"සියලු නියෝජිතයින්ට වෘත්තීයභාවය, සූදානම සහ නිර්භීත චින්තනය සමඟ මෙම අවස්ථාවට ප්‍රවේශ වන ලෙස අපි දිරිගන්වමු."',
      overviewCards: [
        { title: 'උපායමාර්ගික', subtitle: 'චින්තනය' },
        { title: 'ආරම්භක', subtitle: 'මානසිකත්වය' },
        { title: 'පිච් කිරීමේ', subtitle: 'කුසලතා' },
        { title: 'යථාර්ථවාදී', subtitle: 'නිරාවරණය' },
      ],

      phasesLabel: 'වැඩසටහන් ව්‍යුහය',
      phasesHeading1: 'අදියර දෙකක්.',
      phasesHeading2: 'එක ගමනක්.',
      phaseTab1: 'අදියර 1 — වැඩමුළුව',
      phaseTab2: 'අදියර 2 — තරගය',

      phase1Label: 'අදියර 01',
      phase1Title: 'පිච් ඔලිම්පික්ස්',
      phase1Subtitle: 'වැඩමුළුව',
      phase1Description: 'පිච් කිරීමේ නිපුණතාව සහ ව්‍යාපාර වලංගුකරණ කුසලතා වර්ධනය කිරීම සඳහා නිර්මාණය කරන ලද ව්‍යුහාත්මක පුහුණු වැඩමුළුවකි.',
      phase1GuidelinesTitle: 'වැඩමුළු මාර්ගෝපදේශ',
      phase1Guidelines: [
        { num: '01', text: 'වැඩමුළුවට ඇතුළු වීම සඳහා ලියාපදිංචිය තහවුරු කිරීම අවශ්‍යයි.' },
        { num: '02', text: 'කරුණාකර නියමිත ආරම්භක වේලාවට හෝ ඊට පෙර පැමිණෙන්න.' },
        { num: '03', text: 'සටහන් ලිවීම සඳහා පොතක් හෝ උපකරණයක් ගෙන එන්න.' },
        { num: '04', text: 'පෙර පිච් කිරීමේ දැනුමක් හෝ ව්‍යාපාර අදහසක් අවශ්‍ය නොවේ.' },
        { num: '05', text: 'සංවිධාන කමිටුව සහ පහසුකම් සපයන්නන් විසින් ලබා දෙන සියලු උපදෙස් අනුගමනය කරන්න.' },
        { num: '06', text: 'සියලු ක්‍රියාකාරකම්වල ක්‍රියාශීලීව සහභාගී වීම අපේක්ෂා කෙරේ.' },
        { num: '07', text: 'පහසුකම් සපයන්නන්ට සහ සෙසු සහභාගිවන්නන්ට සැමවිට ගෞරවාන්විතව සලකන්න.' },
        { num: '08', text: 'ආහාර සහ පාන වර්ග නම් කරන ලද ස්ථානවල පමණක් අවසර ඇත.' },
        { num: '09', text: 'සම්පූර්ණ වැඩසටහන අවසන් කරන සහභාගිවන්නන්ට පමණක් සහතිකපත් ලබා දෙනු ඇත.' },
      ],

      phase2Label: 'අදියර 02',
      phase2Title: 'තරගය',
      phase2Subtitle: 'තරගකාරී ඇගයීම',
      phase2Description: 'කණ්ඩායම් දින දෙකක් පුරා විනිශ්චය මණ්ඩලයක් ඉදිරියේ ඔවුන්ගේ පිරිපහදු කරන ලද ව්‍යාපාර සංකල්ප ඉදිරිපත් කරයි.',
      phase2Day1Title: 'දින 1',
      phase2Day1Subtitle: 'මූලික වටය',
      phase2Day1Desc: 'සියලු සහභාගිවන්නන් කණ්ඩායම් ඇගයීම සහ අවසන් වට තරගකරුවන් තෝරා ගැනීම.',
      phase2Day1Detail1: 'විනාඩි 5-7 පිච් ඉදිරිපත් කිරීම',
      phase2Day1Detail2: 'විනාඩි 3-5 ප්‍රශ්න සහ පිළිතුරු',
      phase2Day1Advance: 'හොඳම කණ්ඩායම් 5 ඉදිරියට',
      phase2Day2Title: 'දින 2',
      phase2Day2Subtitle: 'මහා අවසන් වටය',
      phase2Day2Desc: 'තරගයේ අවසන් ජයග්‍රාහකයින් තීරණය කිරීම.',
      phase2Day2Detail1: 'විනාඩි 10 ක විස්තරාත්මක පිච් එකක්',
      phase2Day2Detail2: 'විනාඩි 5-10 ප්‍රශ්න සහ පිළිතුරු',
      phase2Day2Announce: 'අවසන් උත්සවයේදී ජයග්‍රාහකයින් නිවේදනය කෙරේ',
      phase2Note: 'සැලකිය යුතුයි:',
      phase2NoteText: 'විනිශ්චයකරුවන්ට මූල්‍ය අංශ, වෙළඳපල පරිමාණය, අවදානම් අවම කිරීම, තරගකාරී පවත්වාගෙන යාම සහ තවත් බොහෝ කරුණු පිළිබඳ ප්‍රශ්න ඇසිය හැකිය.',

      categoriesLabel: 'කාණ්ඩ',
      categoriesHeading1: 'ඕනෑම අංශයක්.',
      categoriesHeading2: 'ඕනෑම කර්මාන්තයක්.',
      categoriesDescription: 'කාණ්ඩය පිළිබඳ සීමාවන් නැත. ඕනෑම අංශයක් හරහා සංකල්ප ඉදිරිපත් කරන්න.',
      categoryNames: ['තාක්ෂණය', 'සමාජ නවෝත්පාදනය', 'තිරසාරභාවය', 'පාරිභෝගික නිෂ්පාදන', 'ඩිජිටල් වේදිකා', 'සේවා', 'නැගෙන කර්මාන්ත', 'තවත් බොහෝ...'],
      restrictionsTitle: 'සීමාවන්',
      restrictionsText1: 'ඉදිරිපත් කරන සියලු අදහස් ',
      restrictionsBold1: 'මුල් පිටපත්',
      restrictionsText2: ' විය යුතු අතර සහභාගී වන කණ්ඩායම විසින් සංවර්ධනය කළ යුතුය. නීති විරෝධී, අනෛතික, හානිකර, වෙනස්කම් සාධක හෝ සමාජීය වගකීම් රහිත පිළිවෙත් ප්‍රවර්ධනය කරන සංකල්ප ',
      restrictionsBold2: 'පිළිගනු නොලැබේ',

      regulationsLabel: 'නියෝග',
      regulationsHeading1: 'නීති සහ ',
      regulationsHeading2: 'නියෝග.',

      teamTitle: 'කණ්ඩායම් ව්‍යුහය',
      teamItems: [
        { label: 'කණ්ඩායම් ප්‍රමාණය', value: 'කණ්ඩායමකට සාමාජිකයින් 1–5 දෙනෙකු' },
        { label: 'සහයෝගීතාවය', value: 'බහු-විශ්වවිද්‍යාල සහයෝගීතාවය අවසර ඇත' },
        { label: 'සහභාගීත්වය', value: 'එක් සහභාගිකයෙකුට එක් කණ්ඩායමකට පමණක් සම්බන්ධ විය හැක' },
        { label: 'අවසාන දිනය', value: 'ඉදිරිපත් කිරීමේ අවසාන දිනයෙන් පසු කණ්ඩායම් සාමාජිකයින් වෙනස් කළ නොහැක' },
      ],

      timeTitle: 'කාල නියෝග',
      timeItems: [
        { label: 'ටයිමර් දෘශ්‍යතාව', value: 'ඔබේ ඉදිරිපත් කිරීම පුරාවටම ටයිමරය දෘශ්‍යමාන වේ' },
        { label: 'විනාඩි 1 ක අනතුරු ඇඟවීම', value: 'විනාඩි 1 ක් ඉතිරිව ඇති විට අනතුරු ඇඟවීමක් ලබා දෙනු ඇත' },
        { label: 'ලකුණු දඞුවම', value: 'වෙන් කරන ලද කාලය ඉක්මවා යාම ලකුණු දඞුවමකට හේතු විය හැක' },
      ],
      timePreliminary: 'මූලික',
      timeFirstRound: 'පළමු වටය',
      timePitch57: 'විනාඩි 5-7 පිච්',
      timeQA35: 'විනාඩි 3-5 ප්‍රශ්නෝත්තර',
      timeGrandFinale: 'මහා අවසන් වටය',
      timeFinalRound: 'අවසන් වටය',
      timePitch10: 'විනාඩි 10 පිච්',
      timeQA510: 'විනාඩි 5-10 ප්‍රශ්නෝත්තර',

      conductTitle: 'වෘත්තීය හැසිරීම',
      conductRules: ['වෘත්තීය ඇඳුම් පැළඳුම් පවත්වාගෙන යන්න', 'විනිශ්චයකරුවන්ට සහ සහකරුවන්ට ගෞරවය දක්වන්න', 'බාධාකාරී හැසිරීම් වළකින්න'],
      conductWarning: 'වැරදි හැසිරීම අයෝග්‍ය කිරීමට හේතු විය හැක',

      disqualTitle: 'අයෝග්‍ය කිරීමේ කොන්දේසි',
      disqualItems: [
        { title: 'ප්‍රකාශන සොරකම', desc: 'ඉදිරිපත් කරන සියලු අදහස් මුල් පිටපත් විය යුතු අතර සහභාගී වන කණ්ඩායම විසින් සංවර්ධනය කළ යුතුය.' },
        { title: 'හැසිරීම් උල්ලංඝනය', desc: 'වැඩසටහනේ ඕනෑම අදියරකදී වෘත්තීය හැසිරීම් ප්‍රතිපත්තිය උල්ලංඝනය කිරීම.' },
        { title: 'ආචාරධර්ම උල්ලංඝනය', desc: 'නීති විරෝධී, අනෛතික, හානිකර, වෙනස්කම් සාධක හෝ සමාජීය වගකීම් රහිත පිළිවෙත් ප්‍රවර්ධනය කරන සංකල්ප.' },
      ],

      prizesLabel: 'ඇගයීම්',
      prizesHeading1: 'ත්‍යාග & ',
      prizesHeading2: 'ඇගයීම්.',
      prizesDescription: 'ත්‍යාග ව්‍යුහය පසු අදියරකදී නිවේදනය කෙරේ.',
      prizeItems: [
        { title: 'සම්මාන සහ සහතිකපත්', text: 'ජයග්‍රාහී කණ්ඩායම්වලට SLIIT රොටරැක්ට් සමාජය විසින් නිකුත් කරන ලද සම්මාන සහ නිල පිළිගැනීමේ සහතිකපත් හිමිවනු ඇත.' },
        { title: 'සහභාගීත්ව සහතිකපත්', text: 'අවසන් වටයේ තරගකරුවන්ට සහ ලියාපදිංචි සියලු සහභාගිවන්නන්ට ඔවුන්ගේ ක්‍රියාශීලී සහභාගීත්වය සඳහා පිළිගැනීමේ සහතිකපත් හිමිවනු ඇත.' },
        { title: 'ජාලකරණ නිරාවරණය', text: 'විනිශ්චයකරුවන්, කර්මාන්ත වෘත්තිකයන්, අධ්‍යයන නියෝජිතයින් සහ සෙසු ශිෂ්‍ය ව්‍යවසායකයින් සමඟ අන්තර්ක්‍රියා හරහා නිරාවරණය ලබා ගන්න.' },
        { title: 'වෙබ් අඩවි සංවර්ධනය', text: 'ජයග්‍රාහී කණ්ඩායම්වලට ඔවුන්ගේ ව්‍යාපාරය සඳහා වෘත්තීය වෙබ් අඩවියක් සංවර්ධනය කිරීමේ සහාය ලැබෙනු ඇත.' },
        { title: 'උපදේශන ප්‍රවේශය', text: 'අවසන් වටයේ තරගකරුවන්ට සහ ජයග්‍රාහී කණ්ඩායම්වලට කර්මාන්ත වෘත්තිකයන් සහ අධ්‍යයන විශේෂඥයින්ගෙන් උපදේශන අවස්ථාවන් ලබා ගත හැකිය.' },
      ],

      ctaLabel: 'සූදානම්ද?',
      ctaHeading1: 'ඔබේ',
      ctaHeading2: 'දැක්ම ',
      ctaHeading3: 'සකසන්න.',
      ctaDescription: 'දැන් ඔබ මාර්ගෝපදේශ දන්නා බැවින්, පළමු පියවර තැබීමට සූදානම් වන්න. ලියාපදිංචිය මාර්තු 3 වැනිදා විවෘත වේ.',
      ctaButton: 'මුල් පිටුවට',

      footerTitle: 'Synergy Circle 2026 — නියෝජිතයින්ගේ අත්පොත',
      footerOrganized: 'SLIIT රොටරැක්ට් සමාජය × SLIIT ව්‍යාපාර පීඨය විසින් සංවිධානය කරන ලදී',
    },
  },
};
