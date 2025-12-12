import {ReactNode} from "react";
import {Container} from "./container";

export function Section({
  eyebrow,
  title,
  description,
  children
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? <div className="text-xs font-medium uppercase tracking-widest text-black/50">{eyebrow}</div> : null}
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
          {description ? <p className="mt-4 text-base text-black/70">{description}</p> : null}
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </Container>
    </section>
  );
}
