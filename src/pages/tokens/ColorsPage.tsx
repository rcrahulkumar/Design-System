import React from 'react';

const TokenSwatch = ({ name, value, className }: { name: string; value: string; className: string }) => (
  <div className="flex flex-col gap-2">
    <div className={`h-20 w-full rounded-lg border border-gray-200 ${className}`} />
    <div className="flex flex-col">
      <span className="text-sm font-medium text-gray-900">{name}</span>
      <span className="text-xs text-gray-500 uppercase">{value}</span>
    </div>
  </div>
);

export default function ColorsPage() {
  const orangeTokens = [
    { name: 'orange-100', value: '#FDF0E8', class: 'bg-orange-100' },
    { name: 'orange-200', value: '#F8D1B6', class: 'bg-orange-200' },
    { name: 'orange-300', value: '#F19B62', class: 'bg-orange-300' },
    { name: 'orange-500', value: '#F27521', class: 'bg-orange-500' },
    { name: 'orange-600', value: '#DC660F', class: 'bg-orange-600' },
    { name: 'orange-800', value: '#A74805', class: 'bg-orange-800' },
  ];

  const grayTokens = [
    { name: 'gray-100', value: '#F3F3F3', class: 'bg-gray-100' },
    { name: 'gray-200', value: '#D9D9D9', class: 'bg-gray-200' },
    { name: 'gray-300', value: '#AEAEAE', class: 'bg-gray-300' },
    { name: 'gray-400', value: '#868686', class: 'bg-gray-400' },
    { name: 'gray-900', value: '#383838', class: 'bg-gray-900' },
  ];

  return (
    <div className="p-10 max-w-5xl">
      <h1 className="text-3xl font-bold mb-2">Tokens</h1>
      <p className="text-gray-500 mb-10">The foundational colors of the JIVI design system.</p>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6">Orange (Primary)</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {orangeTokens.map((token) => (
            <TokenSwatch key={token.name} name={token.name} value={token.value} className={token.class} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-6">Gray (Neutral)</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {grayTokens.map((token) => (
            <TokenSwatch key={token.name} name={token.name} value={token.value} className={token.class} />
          ))}
        </div>
      </section>
    </div>
  );
}
