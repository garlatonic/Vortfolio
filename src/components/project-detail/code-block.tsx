type CodeBlockProps = {
  fileName: string;
  code: string;
};

export function CodeBlock({ fileName, code }: CodeBlockProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/10 px-6 py-4">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
        <span className="ml-2 text-xs uppercase tracking-wide text-neutral-500">
          {fileName}
        </span>
      </div>

      <div className="overflow-x-auto px-6 py-5">
        <pre className="font-mono text-sm leading-7 text-neutral-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
