import Image from "next/image";
import {
  teamContent,
  type TeamContent,
  type TeamMember,
} from "@/content/teamContent";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function TeamSection() {
  return (
    <section
      id="equipo"
      aria-labelledby="team-title"
      className="bg-background py-16 text-foreground lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <TeamHeader content={teamContent} />
        <TeamGrid members={teamContent.members} />
      </div>
    </section>
  );
}

function TeamHeader({ content }: Readonly<{ content: TeamContent }>) {
  const parts = content.title.split(content.highlightedPart);

  return (
    <ScrollReveal className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary dark:bg-primary/10">
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-primary" />
        </span>
        {content.badge}
      </p>

      <h2
        id="team-title"
        className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl"
      >
        {parts[0]}
        <span className="text-primary">{content.highlightedPart}</span>
        {parts[1]}
      </h2>

      <p className="mt-4 text-sm leading-6 text-foreground/70 sm:text-base">
        {content.description}
      </p>
    </ScrollReveal>
  );
}

function TeamGrid({ members }: Readonly<{ members: TeamMember[] }>) {
  return (
    <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      {members.map((member, index) => (
        <ScrollReveal
          key={member.name}
          delay={index * 100}
          className="h-full"
        >
          <TeamMemberCard member={member} />
        </ScrollReveal>
      ))}
    </div>
  );
}

function TeamMemberCard({ member }: Readonly<{ member: TeamMember }>) {
  return (
    <SpotlightCard className="h-full">
      <div className="flex flex-col">
        {/* Avatar header */}
        <div className="flex items-center justify-between">
          <div className="relative size-16 shrink-0 overflow-hidden rounded-2xl bg-primary/10 ring-1 ring-black/5 transition-colors group-hover:bg-primary/20">
            {member.avatarUrl ? (
              <Image
                src={member.avatarUrl}
                alt={`${teamContent.labels.avatarAltPrefix} ${member.name}`}
                width={96}
                height={96}
                loading="lazy"
                className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="flex size-full items-center justify-center text-2xl font-bold text-primary">
                {member.avatarFallback}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            {member.social.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${teamContent.labels.linkedinAriaPrefix} ${member.name}`}
                className="flex size-10 items-center justify-center rounded-full border border-border/40 text-foreground/60 transition-[transform,background-color,border-color,color] duration-150 ease-out hover:border-primary hover:bg-primary/5 hover:text-primary active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <svg className="size-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                </svg>
              </a>
            )}

            <a
              href={member.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${teamContent.labels.githubAriaPrefix} ${member.name}`}
              className="flex size-10 items-center justify-center rounded-full border border-border/40 text-foreground/60 transition-[transform,background-color,border-color,color] duration-150 ease-out hover:border-primary hover:bg-primary/5 hover:text-primary active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Member info */}
        <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          {member.name}
        </h3>

        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          {member.role}
        </p>

        <p className="mt-1 text-xs italic text-foreground/60">
          {member.specialty}
        </p>

        <p className="mt-3 text-xs leading-5 text-foreground/70 sm:text-sm">
          {member.bio}
        </p>
      </div>

      {/* Skills tags pinned at bottom */}
      <div className="mt-6 border-t border-border/30 pt-4">
        <div className="flex flex-wrap gap-1.5">
          {member.primarySkills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-border/80 bg-muted/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </SpotlightCard>
  );
}
