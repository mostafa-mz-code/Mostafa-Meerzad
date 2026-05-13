import Link from "next/link";
import { socialMedia } from "./constants/socialMedia";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row max-md:gap-8 justify-between items-center border-t pb-12 p-8 px-3 md:px-8 lg:px-12 bg-darkblue text-muted-foreground">
      <h2 className="font-courier text-sm tracking-widest text-muted-foreground/50">
        Mostafa Meerzad{" "}
        <span className={"hidden md:visible"}>· Full Stack Developer</span>
      </h2>
      <ul className="flex justify-center gap-5">
        {socialMedia
          .slice(0, 4)
          .map(({ Img, hover, href, opts: { ariaLabel, rel, target } }) => (
            <li key={href}>
              <Link
                href={href}
                rel={rel}
                target={target}
                aria-label={ariaLabel}
                className={"border py-2 px-3 text-sm font-courier rounded-sm"}
              >
               
                {hover}
                
              </Link>
            </li>
          ))}
      </ul>
    </footer>
  );
};

export default Footer;
