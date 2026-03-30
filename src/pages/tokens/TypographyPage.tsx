import React from 'react';

export default function TypographyPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-text-primary">Typography</h1>
        <p className="text-xl text-text-secondary">
          We use Inter for its clarity and versatility across all platforms.
        </p>
      </header>

      <div className="space-y-12">
        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-border pb-4">Scale</h2>
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-xs text-text-secondary font-mono uppercase tracking-widest">Heading 1 / 48px</p>
              <h1 className="text-5xl font-bold tracking-tight">The quick brown fox jumps over the lazy dog</h1>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-text-secondary font-mono uppercase tracking-widest">Heading 2 / 36px</p>
              <h2 className="text-4xl font-bold tracking-tight">The quick brown fox jumps over the lazy dog</h2>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-text-secondary font-mono uppercase tracking-widest">Heading 3 / 24px</p>
              <h3 className="text-2xl font-bold">The quick brown fox jumps over the lazy dog</h3>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-text-secondary font-mono uppercase tracking-widest">Body Large / 18px</p>
              <p className="text-lg">The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-text-secondary font-mono uppercase tracking-widest">Body Base / 16px</p>
              <p className="text-base">The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-text-secondary font-mono uppercase tracking-widest">Body Small / 14px</p>
              <p className="text-sm">The quick brown fox jumps over the lazy dog</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
