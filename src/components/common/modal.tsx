import { XIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-start justify-center overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-background w-full max-w-6xl my-8 mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon-lg"
          className="absolute top-4 right-4 z-10"
          onClick={onClose}
        >
          <XIcon />
          <span className="sr-only">닫기</span>
        </Button>
        <main className="py-20 space-y-10 sm:space-y-15 inner">
          {children}
        </main>
      </div>
    </div>
  );
}