import React from 'react';
import { Upload, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function UploadPage() {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12">
      <Heading 
        title="Upload" 
        description="Drag and drop file upload component." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Basic Upload"
          description="A standard file upload component with helper text."
          code={`<Upload label="Upload Document" helperText="PDF, DOCX up to 10MB" />`}
        >
          <div className="max-w-md w-full">
            <Upload label="Upload Document" helperText="PDF, DOCX up to 10MB" />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="With Error"
          description="An upload component displaying an error state."
          code={`<Upload label="With Error" error="File size exceeds 10MB limit" />`}
        >
          <div className="max-w-md w-full">
            <Upload label="With Error" error="File size exceeds 10MB limit" />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
