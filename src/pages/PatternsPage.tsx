import React from 'react';
import { Card, Heading } from "@/src/components/ui";

export default function PatternsPage() {
  return (
    <div className="p-10">
      <Heading title="Dashboard" className="mb-6" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <Heading size="sm" title="Health Score" className="mb-2" />
          <div className="text-3xl font-bold text-primary">85%</div>
        </Card>
      </div>
    </div>
  );
}
