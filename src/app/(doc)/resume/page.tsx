"use client";

import { useEffect, useRef } from "react";
import DocPage from "../_components/doc-page";
import { Button } from "@/components/ui/button";
import { PrinterIcon } from "lucide-react";

export default function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);

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
      <DocPage ref={resumeRef} />
    </>
  );
}
