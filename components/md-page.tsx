import { Container } from "@/components/container";
import { PageHero } from "@/components/section";

interface MdPageProps {
  title: string;
  subtitle?: string;
  description?: string;
  body?: string;
  locale?: string;
  breadcrumb?: { label: string; href?: string }[];
}

export function MdPage({ title, subtitle, description, body, locale, breadcrumb }: MdPageProps) {
  return (
    <main>
      <PageHero
        title={title}
        subtitle={subtitle}
        description={description}
        breadcrumb={breadcrumb}
      />
      {body && (
        <div className="py-12 lg:py-16 bg-white">
          <Container>
            <article className="prose prose-lg prose-neutral max-w-4xl mx-auto prose-headings:text-primary prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-primary prose-table:text-sm">
              <div dangerouslySetInnerHTML={{ __html: markdownToHtml(body) }} />
            </article>
          </Container>
        </div>
      )}
    </main>
  );
}

// Simple markdown to HTML converter for basic formatting
function markdownToHtml(md: string): string {
  let html = md
    // Headers
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mt-8 mb-4">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-10 mb-6">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-12 mb-6">$1</h1>')
    // Bold and italic
    .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
    // Lists
    .replace(/^\- (.*$)/gm, '<li class="ml-4">$1</li>')
    .replace(/(<li.*<\/li>\n?)+/g, '<ul class="list-disc list-inside my-4">$&</ul>')
    // Tables
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim());
      const isHeader = match.includes('---');
      if (isHeader) return '';
      const tag = 'td';
      return '<tr>' + cells.map(c => `<${tag} class="border px-4 py-2">${c.trim()}</${tag}>`).join('') + '</tr>';
    })
    // Blockquotes
    .replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-green-500 pl-4 italic my-4">$1</blockquote>')
    // Horizontal rules
    .replace(/^---$/gm, '<hr class="my-8 border-border" />')
    // Paragraphs
    .replace(/\n\n/g, '</p><p class="my-4">')
    // Code
    .replace(/`(.*?)`/g, '<code class="bg-subtle px-1.5 py-0.5 rounded text-sm">$1</code>');

  // Wrap in paragraph if not already wrapped
  if (!html.startsWith('<h') && !html.startsWith('<ul') && !html.startsWith('<blockquote')) {
    html = '<p class="my-4">' + html + '</p>';
  }

  return html;
}
