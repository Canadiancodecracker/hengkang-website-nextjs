import {Container} from "@/components/container";

export function MdPage({title, summary, body}: {title: string; summary: string; body: string}) {
  return (
    <main className="py-12">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-4 text-base text-black/70">{summary}</p>
        </div>
        <article className="prose prose-neutral mt-10 max-w-3xl">
          {body.split("\n").map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </article>
      </Container>
    </main>
  );
}
