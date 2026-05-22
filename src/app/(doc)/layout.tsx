export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="doc-light-mode flex flex-col items-center bg-zinc-100 md:py-10 min-h-screen">
      {children}
    </div>
  );
}
