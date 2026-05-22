"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { PrinterIcon } from "lucide-react";

export default function DocPage({ children }: { children: React.ReactNode }) {
  const docRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("print") !== "1") {
      return;
    }

    const timer = window.setTimeout(() => {
      window.print();
    }, 300);

    return () => window.clearTimeout(timer);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <main
        ref={docRef}
        className="max-w-4xl space-y-6 bg-white p-4 text-zinc-900 sm:px-6 sm:py-5 md:px-10 md:py-9 lg:px-14 lg:py-12 print:pt-0"
      >
        {children}
      </main>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed right-5 bottom-5">
          <Button
            size="icon"
            onClick={handlePrint}
            className="hover:cursor-pointer"
          >
            <PrinterIcon className="size-4" />
            <span className="sr-only">PDF 출력</span>
          </Button>
        </div>
      )}
    </>
  );
}
