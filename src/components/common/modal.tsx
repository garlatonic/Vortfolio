import { XIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60"
      onClick={onClose}
    >
      <div
        className="bg-background relative mx-4 my-8 w-full max-w-7xl lg:mx-8"
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
        <main className="inner space-y-10 py-20 sm:space-y-15">{children}</main>
      </div>
    </div>
  );
}
