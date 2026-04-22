export const TYPOGRAPHY = {
  // ------- home page -------
  hero: {
    title:
      "text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold leading-snug",
  },
  section: {
    title: "text-5xl md:text-6xl lg:text-8xl font-semibold italic",
  },
  about: {
    introLead: "text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold",
    introHighlight:
      "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-relaxed",
    description:
      "text-base sm:text-lg md:text-xl font-medium leading-relaxed break-keep text-muted-foreground",
    skillTitle: "text-lg sm:text-xl md:text-2xl font-bold text-foreground",
    skillGroup:
      "text-sm sm:text-base md:text-base font-bold uppercase tracking-wide",
    skillBadge: "text-xs sm:text-sm font-medium",
  },
  project: {
    category:
      "text-xs md:text-sm font-medium tracking-wide text-muted-foreground",
    title:
      "text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight",
    description:
      "text-sm sm:text-base md:text-lg font-medium leading-relaxed break-keep text-muted-foreground",
    skillBadge: "text-xs md:text-sm lg:text-base font-medium",
  },
  footer: {
    headline:
      "text-6xl sm:text-7xl md:text-8xl font-black uppercase leading-none",
    link: "font-medium text-2xl md:text-4xl",
  },

  // ------- project detail page -------
  heading: {
    category:
      "text-[clamp(0.6rem,2vw,1rem)] sm:text-sm md:text-base font-medium text-muted-foreground leading-relaxed",
    title: "text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold",
    overview:
      "text-xs sm:text-sm md:text-lg font-medium break-keep text-muted-foreground",
  },
  description: {
    title: "text-xs md:text-sm font-bold tracking-widest text-muted-foreground",
    content: "text-sm sm:text-base md:text-lg font-medium text-foreground/90",
    list: "text-base md:text-lg font-medium leading-relaxed text-foreground ml-6 list-disc",
    badge: "px-2 py-1 bg-muted-foreground/10 text-sm",
  },
  challenge: {
    title: "text-xs md:text-sm font-bold tracking-widest text-muted-foreground",
    content: "text-base md:text-lg font-medium leading-relaxed text-foreground",
  },
  troubleShooting: {
    // 주제를 영어로
    subject:
      "text-xl lg:text-2xl font-bold uppercase break-keep",
    title: "text-xs md:text-sm font-bold tracking-widest text-muted-foreground",
    problem: "text-sm sm:text-base md:text-lg font-medium text-foreground/90 [&>b]:text-accent-foreground",
    solution: "text-sm sm:text-base md:text-lg font-medium text-foreground/90 [&>b]:text-accent-foreground",
  },

  video: {
    title: "text-xl lg:text-2xl font-bold",
    description: "text-muted-foreground lg:text-base text-xs",
  },

  // ------- ui -------
  ui: {
    nav: "text-sm md:text-base font-medium",
    button: "text-xs sm:text-sm font-medium",
    caption: "text-xs md:text-sm text-muted-foreground",
  },
} as const;

export type TypographyToken = typeof TYPOGRAPHY;
export type TypographyCategory = keyof typeof TYPOGRAPHY;
