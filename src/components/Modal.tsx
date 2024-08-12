"use client";

import { ReactNode } from "react";
import { Dialog, DialogOverlay, DialogContent } from "./ui/dialog";
import { useRouter } from "next/navigation";

export function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();

  const handleOpenChange = () => {
    router.back();
  };

  return (
    <Dialog defaultOpen open onOpenChange={handleOpenChange}>
      <DialogOverlay>
        <DialogContent className="overflow-y-hidden">{children}</DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
