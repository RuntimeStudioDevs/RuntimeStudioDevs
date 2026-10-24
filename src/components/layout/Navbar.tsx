import { LogoNegroRuntimeStudioDevs } from "@/components/brand/Logo_Negro-RuntimeStudioDevs";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { layoutContent } from "@/content/layoutContent";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const { navbar } = layoutContent;

  return (
    <header
      id="main-nav"
      className="sticky top-0 z-50 flex h-[72px] w-full items-center border-b border-border bg-background/80 backdrop-blur-md transition-shadow"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] px-4 md:px-8">
        {/* LEFT: Logo */}
        <a
          href={navbar.homeHref}
          aria-label={navbar.logoAriaLabel}
          className="justify-self-start"
        >
          <LogoNegroRuntimeStudioDevs className="text-xl sm:text-2xl" />
        </a>

        {/* CENTER: Desktop nav */}
        <nav className="hidden justify-self-center items-center gap-4 xl:gap-6 lg:flex">
          {navbar.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-[width] after:duration-200 after:ease-out hover:after:w-full text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* RIGHT: Desktop actions */}
        <div className="hidden justify-self-end items-center gap-4 lg:flex">
          <ThemeToggle />

          <a
            href={navbar.ctaHref}
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-[transform,background-color] duration-150 ease-out hover:bg-primary/90 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {navbar.ctaLabel}
          </a>
        </div>

        {/* Mobile hamburger & Theme toggle */}
        <div className="flex items-center gap-2 justify-self-end lg:hidden">
          <ThemeToggle />
          <MobileMenu links={navbar.links} />
        </div>
      </div>
    </header>
  );
}
