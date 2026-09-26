export type Language = 'en' | 'si' | 'ta';

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
    registrationOpen: string;
    explore: string;
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
    openNowLabel: string;
    registrationsOpen: string;
    registerNow: string;

  };

  // Footer
  footer: {
    inquiries: string;
    backToTop: string;
    allRights: string;
  };

  // Concluded Page
  concluded: {
    title: string;
    badge: string;
    subtitle: string;
    quote: string;
    author: string;
    enterSite: string;
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
      sliitBs: 'SLIIT Entrepreneurship Club',
      registrationOpen: 'Registration Open',
      explore: 'Explore',
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
      paragraph2Bold: 'SLIIT Entrepreneurship Club',
      paragraph3Start: 'In partnership with the ',
      paragraph3Bold: 'SLIIT Entrepreneurship Club',
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
      phase2Subtitle: 'Grand Event',
      phase2Day1Title: 'Competition Day',
      phase2Day1Desc: 'Registered participants present their business concepts before a judging panel. All rounds will be conducted on this day.',
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
        { event: 'The Pitch Competition', status: 'Phase 2' },
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
      openNowLabel: 'Now Open',
      registrationsOpen: 'Registrations are now open!',
      registerNow: 'Register Now',

    },
    footer: {
      inquiries: 'Inquiries',
      backToTop: 'Back to top',
      allRights: 'All rights reserved.',
    },
    concluded: {
      title: 'SYNERGY CIRCLE 2026',
      badge: 'Event Successfully Concluded',
      subtitle: "See y'all soon next year!",
      quote: '“Chase the vision, not the money; the money will end up following you.”',
      author: 'Tony Hsieh',
      enterSite: 'Enter Website',
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
      phase2Description: 'Teams present their refined business concepts before a judging panel.',
      phase2Day1Title: 'Competition Day',
      phase2Day1Subtitle: '',
      phase2Day1Desc: 'Evaluate all participating teams and determine final winners.',
      phase2Day1Detail1: '10-minute detailed pitch',
      phase2Day1Detail2: '5-10 minute Q&A',
      phase2Day1Advance: 'Winners announced at closing ceremony',
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
      footerOrganized: 'Organized by Rotaract Club of SLIIT × SLIIT Entrepreneurship Club',
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
      registrationOpen: 'ලියාපදිංචිය විවෘතයි',
      explore: 'ගවේෂණය',
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
      phase2Subtitle: 'මහා උත්සවය',
      phase2Day1Title: 'තරග දිනය',
      phase2Day1Desc: 'ලියාපදිංචි සහභාගිවන්නන් තම ව්‍යාපාර අදහස් විනිශ්චය මණ්ඩලයක් ඉදිරියේ ඉදිරිපත් කරයි. සියලුම වටයන් මෙම දිනයේදී පැවැත්වේ.',
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
        { event: 'පිච් තරගය', status: 'අදියර 2' },
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
      openNowLabel: 'දැන් විවෘතයි',
      registrationsOpen: 'ලියාපදිංචිය දැන් විවෘතයි!',
      registerNow: 'දැන් ලියාපදිංචි වන්න',

    },
    footer: {
      inquiries: 'විමසීම්',
      backToTop: 'ඉහළට යන්න',
      allRights: 'සියලු හිමිකම් ඇවිරිණි.',
    },
    concluded: {
      title: 'SYNERGY CIRCLE 2026',
      badge: 'වැඩසටහන සාර්ථකව නිම විය',
      subtitle: 'ලබන වසරේ නැවත හමුවෙමු!',
      quote: '“අරමුණ පසුපස හඹා යන්න, මුදල් පසුපස නොවේ; එවිට මුදල් ඔබ පසුපස පැමිණෙනු ඇත.”',
      author: 'ටෝනි ෂේ',
      enterSite: 'වෙබ් අඩවියට පිවිසෙන්න',
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
      phase2Description: 'කණ්ඩායම් විනිශ්චය මණ්ඩලයක් ඉදිරියේ ඔවුන්ගේ පිරිපහදු කරන ලද ව්‍යාපාර සංකල්ප ඉදිරිපත් කරයි.',
      phase2Day1Title: 'තරග දිනය',
      phase2Day1Subtitle: '',
      phase2Day1Desc: 'සියලු සහභාගිවන්නන් කණ්ඩායම් ඇගයීම සහ අවසන් ජයග්‍රාහකයින් තීරණය කිරීම.',
      phase2Day1Detail1: 'විනාඩි 10 ක විස්තරාත්මක පිච් එකක්',
      phase2Day1Detail2: 'විනාඩි 5-10 ප්‍රශ්න සහ පිළිතුරු',
      phase2Day1Advance: 'අවසන් උත්සවයේදී ජයග්‍රාහකයින් නිවේදනය කෙරේ',
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

  ta: {
    nav: {
      about: 'பற்றி',
      phases: 'கட்டங்கள்',
      criteria: 'அளவுகோல்',
      prizes: 'பரிசுகள்',
      timeline: 'காலவரிசை',
      guidelines: 'வழிகாட்டுதல்',
    },
    hero: {
      badge: 'தொழில்முறை வளர்ச்சி முன்முயற்சி',
      tagline: 'யோசனைகள் தாக்கமாக மாறும் இடம்.',
      description: 'மாணவர் கண்டுபிடிப்புக்கும் கார்ப்பரேட் சிறப்புக்கும் இடையிலான இடைவெளியை நிரப்புதல். இது',
      rotaractSliit: 'ரோட்டராக்ட் SLIIT',
      sliitBs: 'SLIIT வணிக பள்ளி',
      registrationOpen: 'பதிவு திறந்தது',
      explore: 'ஆராய்க',
    },

    about: {
      watermark: 'கண்டுபிடிப்பு',
      sectionLabel: 'நோக்கம்',
      heading1: 'அடுத்த',
      heading2: 'தரத்தை வடிவமைத்தல்.',
      paragraph1: 'Synergy Circle 2026 என்பது ஒரு',
      paragraph1Bold1: 'பல பல்கலைக்கழக தொழில்முனைவு முன்முயற்சி',
      paragraph1OrganizedBy: ' ஏற்பாடு செய்யப்பட்டது ',
      paragraph1Bold2: 'SLIIT ரோட்டராக்ட் கழகம்',
      paragraph2: ', இளம் கண்டுபிடிப்பாளர்களையும் எதிர்கால வணிகத் தலைவர்களையும் மேம்படுத்த வடிவமைக்கப்பட்டது.',
      paragraph2Bold: 'SLIIT வணிக பள்ளி',
      paragraph3Start: '',
      paragraph3Bold: 'SLIIT வணிக பள்ளி',
      paragraph3End: ' உடன் இணைந்து, உலகளாவிய தாக்கத்திற்கு தேவையான சிறந்த ஆதாரங்களை நாங்கள் வழங்குகிறோம் — வழிகாட்டுதல் மற்றும் திறன் வளர்ச்சி முதல் போட்டி பிட்ச்சிங் வரை.',
      statCross: 'பல',
      statCrossLabel: 'பல்கலைக்கழக முன்முயற்சி',
      statImpact: 'தாக்கம்',
      statImpactLabel: 'இயக்கிய பாடத்திட்டம்',
      statTop5: 'முதல் 5',
      statTop5Label: 'இறுதிச் சுற்று',
      statExpert: 'நிபுணர்',
      statExpertLabel: 'வழிகாட்டுதல்',
    },
    phases: {
      sectionLabel: 'கட்டமைப்பு',
      heading1: 'இரண்டு கட்டங்கள்.',
      heading2: 'முழு மூழ்கல்.',
      phase1Label: 'கட்டம் 01',
      phase1Title: 'பிட்ச் ஒலிம்பிக்ஸ்',
      phase1Subtitle: 'பயிலரங்கு',
      phase1Description: 'வணிக மேம்பாடு, தொடக்க அடிப்படைகள், மூலோபாய சிந்தனை மற்றும் பயனுள்ள பிட்ச்சிங் நுட்பங்கள் பற்றி நடைமுறை அறிவை பெறுவதற்கான வழிகாட்டும் பயிலரங்கு.',
      phase1Items: ['வணிக மேம்பாடு', 'தொடக்க அடிப்படைகள்', 'மூலோபாய சிந்தனை', 'பிட்ச்சிங் நுட்பங்கள்'],
      phase1Cta: 'உங்கள் யோசனைகளை செம்மைப்படுத்துங்கள்',
      phase2Label: 'கட்டம் 02',
      phase2Title: 'பிட்ச் போட்டி',
      phase2Subtitle: 'பிரதான நிகழ்வு',
      phase2Day1Title: 'போட்டி நாள்',
      phase2Day1Desc: 'பதிவு செய்த பங்கேற்பாளர்கள் நீதிபதி குழுவின் முன் தங்கள் வணிக கருத்துகளை வழங்குவார்கள். அனைத்து சுற்றுகளும் இந்த நாளில் நடைபெறும்.',
      phase2Day2Title: 'நாள் 2 — இறுதிப் போட்டி',
      phase2Day2Desc: 'இறுதிப் போட்டியாளர்கள் Synergy Circle 2026 இன் சிறந்த மூன்று நிறுவனங்களில் இடம் பிடிக்க தங்கள் முயற்சிகளை சமர்ப்பிப்பார்கள்.',
      phase2Cta: 'பிரதான மேடை',
    },
    eligibility: {
      sectionLabel: 'தரநிலை',
      heading1: 'நாங்கள் என்ன',
      heading2: 'தேடுகிறோம்.',
      criteria: [
        { title: 'நிறுவன நிலை', description: 'கருத்தியல் யோசனைகள் முதல் முதல் பெரிய முன்னேற்றத்தை தேடும் ஆரம்ப நிலை தொடக்க நிறுவனங்கள் வரை.' },
        { title: 'நிறுவனர்கள்', description: 'கண்டுபிடிப்பு மற்றும் மூலோபாய சிந்தனையால் இயக்கப்படும் இளம் தொழில்முனைவோர் மற்றும் பல்கலைக்கழக மாணவர்கள்.' },
        { title: 'சந்தை கவனம்', description: 'குறிப்பிடத்தக்க உள்நாட்டு அல்லது உலகளாவிய சந்தை தாக்கம் மற்றும் உயர் அளவீட்டு திறன் கொண்ட யோசனைகள்.' },
        { title: 'கண்டுபிடிப்பு', description: 'குறைந்த ஆரம்ப மூலதன தேவைகளுடன் உயர் வருவாய் திறன் மற்றும் சீர்குலைக்கும் தொழில்நுட்பம்.' },
      ],
      ctaText: 'உங்கள் பார்வையை காட்ட தயாரா?',
      ctaSubtext: 'விண்ணப்பங்கள் தொடர்ந்து மதிப்பீடு செய்யப்படும்.',
      ctaButton: 'வழிகாட்டுதல்களை பார்க்கவும்',
    },
    prizes: {
      sectionLabel: 'வெகுமதிகள்',
      heading1: 'பரிசு',
      heading2: 'குளம்',
      description: 'சுவாரஸ்யமான பரிசுகள் மற்றும் அங்கீகாரத்திற்கு போட்டியிடுங்கள். Synergy Circle 2026 இன் சிறந்த மூன்று நிறுவனங்கள் ஒரு பட்டத்தை விட அதிகம் பெறும்.',
      place: 'இடம்',
      titles: ['பிரதான சாம்பியன்', 'முதல் ரன்னர்-அப்', 'இரண்டாவது ரன்னர்-அப்'],
      updateNotice: 'பரிசு விவரங்கள் விரைவில் புதுப்பிக்கப்படும்',
    },
    valueProp: {
      sectionLabel: 'மதிப்பு முன்மொழிவு',
      heading: 'ஏன் Circle-இல் சேர வேண்டும்?',
      values: [
        { title: 'பிட்ச்சை மாஸ்டர் செய்யுங்கள்', description: 'நிபுணர் தலைமையிலான பயிலரங்குகளுடன் எந்த பார்வையாளர்களிடமும் தெளிவாகவும் நம்பிக்கையுடனும் மதிப்பை வெளிப்படுத்த கற்றுக்கொள்ளுங்கள்.' },
        { title: 'நிபுணர் மதிப்பீடு', description: 'உண்மையில் நிறுவனங்களை உருவாக்கி விற்ற நபர்களிடமிருந்து ஆக்கப்பூர்வமான கருத்துக்களை பெறுங்கள்.' },
        { title: 'பரந்த வெளிப்பாடு', description: 'வணிக பள்ளி நெட்வொர்க் மற்றும் பரந்த தொடக்க சுற்றுச்சூழல் முன் உங்கள் யோசனையை வைக்கவும்.' },
        { title: 'மூலதன அணுகல்', description: 'தூதர் முதலீட்டாளர்கள், வெஞ்சர் கேபிடலிஸ்டுகள் மற்றும் விதை நிதி மானியங்களுக்கு நேரடி அறிமுகம்.' },
      ],
    },
    timeline: {
      sectionLabel: 'வழிபடம்',
      heading: 'முக்கிய மைல்கற்கள்',
      subheading: 'யோசனையிலிருந்து தாக்கம் வரை உங்கள் பயணம் — வரைபடமாக்கப்பட்டது.',
      steps: [
        { event: 'பதிவு தொடங்குகிறது', status: 'பதிவு திறந்தது' },
        { event: 'பதிவு மூடப்படுகிறது', status: 'இறுதி காலக்கெடு' },
        { event: 'பிட்ச் ஒலிம்பிக்ஸ் பயிலரங்கு', status: 'கட்டம் 1' },
        { event: 'பிட்ச் போட்டி', status: 'கட்டம் 2' },
      ],
      bottomLabel: 'மார்ச் — ஏப்ரல் 2026',
    },
    registration: {
      sectionLabel: 'விரைவில் திறக்கப்படும்',
      heading1: 'உங்கள் தொடக்க',
      heading2: 'பார்வையை தயாருங்கள்.',
      description: 'பங்கேற்பாளர்கள்',
      individuals: 'தனிநபர்களாக',
      orAs: ' அல்லது ',
      teams: 'குழுக்களாக',
      teamLeaders: ' பதிவு செய்யலாம். குழு தலைவர்கள் தங்கள் குழு உறுப்பினர்கள் சார்பாக பதிவை முடிக்க வேண்டும்.',
      openingLabel: 'மார்ச் 3 அன்று திறக்கப்படும்',
      openNowLabel: 'இப்போது திறந்தது',
      registrationsOpen: 'பதிவுகள் இப்போது திறந்தன!',
      registerNow: 'இப்போது பதிவு செய்யுங்கள்',
    },
    footer: {
      inquiries: 'விசாரணைகள்',
      backToTop: 'மேலே செல்',
      allRights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    },
    concluded: {
      title: 'SYNERGY CIRCLE 2026',
      badge: 'நிகழ்வு வெற்றிகரமாக முடிந்தது',
      subtitle: 'அடுத்த ஆண்டு மீண்டும் சந்திப்போம்!',
      quote: '“தொலைநோக்குப் பார்வையைத் தொடருங்கள், பணத்தை அல்ல; பணம் தானாகவே உங்களைத் தொடரும்.”',
      author: 'டோனி ஷீ',
      enterSite: 'வலைத்தளத்திற்குள் நுழைய',
    },
    guidelines: {
      homeButton: 'முகப்பு',
      downloadPdf: 'PDF பதிவிறக்கம்',
      generating: 'உருவாக்குகிறது...',

      heroLabel: 'பிரதிநிதிகளின் கையேடு',
      heroTitle1: 'தகவல் &',
      heroTitle2: 'வழிகாட்டுதல்கள்.',
      heroDescription: 'அனைத்தையும் தெரிந்துகொள்ளுங்கள் ',
      heroDescBold: 'Synergy Circle 2026',
      scrollPrompt: 'கீழே',

      statPhases: 'கட்டங்கள்',
      statMaxTeam: 'அதிகபட்ச குழு அளவு',
      statFinalists: 'இறுதிப் போட்டியாளர்கள்',
      statDays: 'போட்டி நாட்கள்',

      overviewLabel: 'கண்ணோட்டம்',
      overviewHeading1: 'Synergy ',
      overviewHeading2: 'Circle ',
      overviewHeading3: 'என்றால் என்ன?',
      overviewParagraph1: 'Synergy Circle வடிவமைக்கப்பட்டது ',
      overviewBold1: 'கண்டுபிடிப்பு',
      overviewBold2: 'மூலோபாய சிந்தனை',
      overviewBold3: 'தொழில்முனைவு நம்பிக்கை',
      overviewParagraph2: 'இது வெறும் பிட்ச்சிங் போட்டி அல்ல — இது பங்கேற்பாளர்களுக்கு யோசனைகளை செயல்படும் வணிகங்களாக மாற்றுவதற்கு தேவையான மனநிலை, கருவிகள் மற்றும் வெளிப்பாட்டை வழங்கும் ஒரு ',
      overviewParagraph2Bold: 'கட்டமைக்கப்பட்ட பயணம்',
      overviewQuote: '"அனைத்து பிரதிநிதிகளும் தொழில்முறை, தயாரிப்பு மற்றும் தைரியமான சிந்தனையுடன் இந்த வாய்ப்பை அணுகுமாறு நாங்கள் ஊக்குவிக்கிறோம்."',
      overviewCards: [
        { title: 'மூலோபாய', subtitle: 'சிந்தனை' },
        { title: 'தொடக்க', subtitle: 'மனநிலை' },
        { title: 'பிட்ச்சிங்', subtitle: 'திறன்கள்' },
        { title: 'நிஜ உலக', subtitle: 'வெளிப்பாடு' },
      ],

      phasesLabel: 'திட்ட அமைப்பு',
      phasesHeading1: 'இரண்டு கட்டங்கள்.',
      phasesHeading2: 'ஒரு பயணம்.',
      phaseTab1: 'கட்டம் 1 — பயிலரங்கு',
      phaseTab2: 'கட்டம் 2 — போட்டி',

      phase1Label: 'கட்டம் 01',
      phase1Title: 'பிட்ச் ஒலிம்பிக்ஸ்',
      phase1Subtitle: 'பயிலரங்கு',
      phase1Description: 'பிட்ச்சிங் திறன் மற்றும் வணிக சரிபார்ப்பு திறன்களை வளர்க்க வடிவமைக்கப்பட்ட கட்டமைக்கப்பட்ட பயிற்சி பயிலரங்கு.',
      phase1GuidelinesTitle: 'பயிலரங்கு வழிகாட்டுதல்கள்',
      phase1Guidelines: [
        { num: '01', text: 'பயிலரங்கில் நுழைய பதிவு உறுதிப்படுத்தல் தேவை.' },
        { num: '02', text: 'கரு தொடங்கும் நேரத்திற்கு முன் அல்லது அப்போது வருக.' },
        { num: '03', text: 'குறிப்புகள் எழுத நோட்புக் அல்லது சாதனம் கொண்டுவாருங்கள்.' },
        { num: '04', text: 'முன் பிட்ச்சிங் அறிவு அல்லது வணிக யோசனை தேவையில்லை.' },
        { num: '05', text: 'ஏற்பாட்டு குழு மற்றும் வசதியாளர்கள் அளிக்கும் அனைத்து வழிமுறைகளையும் பின்பற்றுங்கள்.' },
        { num: '06', text: 'அனைத்து நடவடிக்கைகளிலும் செயலில் பங்கேற்பு எதிர்பார்க்கப்படுகிறது.' },
        { num: '07', text: 'வசதியாளர்கள் மற்றும் சக பங்கேற்பாளர்களிடம் எப்போதும் மரியாதையுடன் நடந்துகொள்ளுங்கள்.' },
        { num: '08', text: 'உணவு மற்றும் பானங்கள் நியமிக்கப்பட்ட இடங்களில் மட்டுமே அனுமதிக்கப்படும்.' },
        { num: '09', text: 'முழு திட்டத்தையும் முடிக்கும் பங்கேற்பாளர்களுக்கு மட்டுமே சான்றிதழ்கள் வழங்கப்படும்.' },
      ],

      phase2Label: 'கட்டம் 02',
      phase2Title: 'போட்டி',
      phase2Subtitle: 'போட்டி மதிப்பீடு',
      phase2Description: 'குழுக்கள் நீதிபதி குழுவின் முன் தங்கள் செம்மைப்படுத்தப்பட்ட வணிக கருத்துகளை சமர்ப்பிக்கின்றன.',
      phase2Day1Title: 'போட்டி நாள்',
      phase2Day1Subtitle: '',
      phase2Day1Desc: 'அனைத்து பங்கேற்பு குழுக்களையும் மதிப்பிட்டு இறுதி வெற்றியாளர்களை தீர்மானிக்கவும்.',
      phase2Day1Detail1: '10 நிமிட விரிவான பிட்ச்',
      phase2Day1Detail2: '5-10 நிமிட கேள்வி & பதில்',
      phase2Day1Advance: 'முடிவு விழாவில் வெற்றியாளர்கள் அறிவிக்கப்படுவார்கள்',
      phase2Day2Title: 'நாள் 2',
      phase2Day2Subtitle: 'இறுதிப் போட்டி',
      phase2Day2Desc: 'போட்டியின் இறுதி வெற்றியாளர்களை தீர்மானிக்கவும்.',
      phase2Day2Detail1: '10 நிமிட விரிவான பிட்ச்',
      phase2Day2Detail2: '5-10 நிமிட கேள்வி & பதில்',
      phase2Day2Announce: 'முடிவு விழாவில் வெற்றியாளர்கள் அறிவிக்கப்படுவார்கள்',
      phase2Note: 'குறிப்பு:',
      phase2NoteText: 'நீதிபதிகள் நிதி அம்சங்கள், சந்தை அளவீடு, இடர் குறைப்பு, போட்டி நிலைத்தன்மை மற்றும் பலவற்றில் கேள்விகள் கேட்கலாம்.',

      categoriesLabel: 'வகைகள்',
      categoriesHeading1: 'எந்த துறையும்.',
      categoriesHeading2: 'எந்த தொழிலும்.',
      categoriesDescription: 'வகையில் கட்டுப்பாடுகள் இல்லை. எந்த துறையிலும் கருத்துகளை முன்மொழியுங்கள்.',
      categoryNames: ['தொழில்நுட்பம்', 'சமூக கண்டுபிடிப்பு', 'நிலைத்தன்மை', 'நுகர்வோர் தயாரிப்புகள்', 'டிஜிட்டல் தளங்கள்', 'சேவைகள்', 'வளர்ந்து வரும் தொழில்கள்', 'மேலும் பல...'],
      restrictionsTitle: 'கட்டுப்பாடுகள்',
      restrictionsText1: 'சமர்ப்பிக்கப்பட்ட அனைத்து யோசனைகளும் ',
      restrictionsBold1: 'அசல்',
      restrictionsText2: ' ஆக இருக்க வேண்டும் மற்றும் பங்கேற்கும் குழுவால் உருவாக்கப்பட வேண்டும். சட்டவிரோத, நெறிமுறையற்ற, தீங்கான, பாரபட்சமான அல்லது சமூக பொறுப்பற்ற நடைமுறைகளை மேம்படுத்தும் கருத்துகள் ',
      restrictionsBold2: 'ஏற்றுக்கொள்ளப்படமாட்டாது',

      regulationsLabel: 'விதிமுறைகள்',
      regulationsHeading1: 'விதிகள் & ',
      regulationsHeading2: 'விதிமுறைகள்.',

      teamTitle: 'குழு அமைப்பு',
      teamItems: [
        { label: 'குழு அளவு', value: 'குழுவிற்கு 1–5 உறுப்பினர்கள்' },
        { label: 'ஒத்துழைப்பு', value: 'பல பல்கலைக்கழக ஒத்துழைப்பு அனுமதிக்கப்படும்' },
        { label: 'பங்கேற்பு', value: 'ஒவ்வொரு பங்கேற்பாளரும் ஒரு குழுவில் மட்டுமே சேரலாம்' },
        { label: 'காலக்கெடு', value: 'சமர்ப்பிப்பு காலக்கெடுவிற்குப் பிறகு குழு உறுப்பினர்களை மாற்ற முடியாது' },
      ],

      timeTitle: 'நேர விதிமுறைகள்',
      timeItems: [
        { label: 'டைமர் தெரிவுநிலை', value: 'உங்கள் வழங்கல் முழுவதும் டைமர் தெரியும்' },
        { label: '1 நிமிட எச்சரிக்கை', value: '1 நிமிடம் மீதம் இருக்கும்போது எச்சரிக்கை கொடுக்கப்படும்' },
        { label: 'மதிப்பெண் அபராதம்', value: 'ஒதுக்கப்பட்ட நேரத்தை மீறுவது மதிப்பெண் அபராதத்தை ஏற்படுத்தலாம்' },
      ],
      timePreliminary: 'முதல் சுற்று',
      timeFirstRound: 'முதல் சுற்று',
      timePitch57: '5-7 நிமிட பிட்ச்',
      timeQA35: '3-5 நிமிட கேள்வி & பதில்',
      timeGrandFinale: 'இறுதிப் போட்டி',
      timeFinalRound: 'இறுதி சுற்று',
      timePitch10: '10 நிமிட பிட்ச்',
      timeQA510: '5-10 நிமிட கேள்வி & பதில்',

      conductTitle: 'தொழில்முறை நடத்தை',
      conductRules: ['தொழில்முறை உடை அணியுங்கள்', 'நீதிபதிகள் மற்றும் சகாக்களை மதியுங்கள்', 'இடையூறான நடத்தையை தவிர்க்கவும்'],
      conductWarning: 'தவறான நடத்தை தகுதியிழப்புக்கு வழிவகுக்கலாம்',

      disqualTitle: 'தகுதியிழப்பு நிபந்தனைகள்',
      disqualItems: [
        { title: 'காப்புரிமை மீறல்', desc: 'சமர்ப்பிக்கப்பட்ட அனைத்து யோசனைகளும் அசல் ஆக இருக்க வேண்டும் மற்றும் பங்கேற்கும் குழுவால் உருவாக்கப்பட வேண்டும்.' },
        { title: 'நடத்தை மீறல்', desc: 'திட்டத்தின் எந்த கட்டத்திலும் தொழில்முறை நடத்தை கொள்கையை மீறுவது.' },
        { title: 'நெறிமுறை மீறல்கள்', desc: 'சட்டவிரோத, நெறிமுறையற்ற, தீங்கான, பாரபட்சமான அல்லது சமூக பொறுப்பற்ற நடைமுறைகளை மேம்படுத்தும் கருத்துகள்.' },
      ],

      prizesLabel: 'அங்கீகாரம்',
      prizesHeading1: 'பரிசுகள் & ',
      prizesHeading2: 'அங்கீகாரம்.',
      prizesDescription: 'பரிசு அமைப்பு பிறகு அறிவிக்கப்படும்.',
      prizeItems: [
        { title: 'விருதுகள் & சான்றிதழ்கள்', text: 'வெற்றி பெற்ற குழுக்கள் SLIIT ரோட்டராக்ட் கழகம் வழங்கும் விருதுகள் மற்றும் அதிகாரப்பூர்வ அங்கீகார சான்றிதழ்கள் பெறுவார்கள்.' },
        { title: 'பங்கேற்பு சான்றிதழ்கள்', text: 'இறுதிப் போட்டியாளர்கள் மற்றும் அனைத்து பதிவு செய்த பங்கேற்பாளர்களும் தங்கள் செயலில் பங்கேற்பிற்கான அங்கீகார சான்றிதழ்கள் பெறுவார்கள்.' },
        { title: 'நெட்வொர்க்கிங் வெளிப்பாடு', text: 'நீதிபதிகள், தொழில் வல்லுனர்கள், கல்வி பிரதிநிதிகள் மற்றும் சக மாணவ தொழில்முனைவோருடன் தொடர்புகொள்வதன் மூலம் வெளிப்பாட்டை பெறுங்கள்.' },
        { title: 'வலைத்தள மேம்பாடு', text: 'வெற்றி பெற்ற குழுக்கள் தங்கள் வணிகத்திற்கான தொழில்முறை வலைத்தளம் உருவாக்கும் ஆதரவை பெறுவார்கள்.' },
        { title: 'வழிகாட்டுதல் அணுகல்', text: 'இறுதிப் போட்டியாளர்கள் மற்றும் வெற்றி பெற்ற குழுக்கள் தொழில் வல்லுனர்கள் மற்றும் கல்வி நிபுணர்களிடமிருந்து வழிகாட்டுதல் வாய்ப்புகளை பெறலாம்.' },
      ],

      ctaLabel: 'தயாரா?',
      ctaHeading1: 'உங்கள்',
      ctaHeading2: 'பார்வையை ',
      ctaHeading3: 'தயாருங்கள்.',
      ctaDescription: 'இப்போது வழிகாட்டுதல்கள் தெரியும், முதல் படி எடுக்க தயாராகுங்கள். பதிவுகள் மார்ச் 3 அன்று திறக்கப்படும்.',
      ctaButton: 'முகப்புக்கு திரும்பு',

      footerTitle: 'Synergy Circle 2026 — பிரதிநிதிகளின் கையேடு',
      footerOrganized: 'SLIIT ரோட்டராக்ட் கழகம் × SLIIT வணிக பள்ளி ஏற்பாடு செய்தது',
    },
  },
};
