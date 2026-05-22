"use client";

import { useEffect } from "react";

const PRINT_BLOCK_MESSAGE = "PDF 출력을 지원하지 않는 페이지입니다.";

export default function PrintBlocker() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      return;
    }

    const originalPrint = window.print.bind(window);
    let lastNotifiedAt = 0; // 마지막으로 알림을 표시한 시간 (중복 알림 방지)

    // 알림을 표시하는 함수
    const notifyBlocked = () => {
      const now = Date.now();

      if (now - lastNotifiedAt < 1000) {
        // 1초 이내에 중복 알림 방지
        return;
      }

      lastNotifiedAt = now;
      window.alert(PRINT_BLOCK_MESSAGE);
    };

    // window.print 함수를 오버라이드하여 인쇄 시도를 차단하고 알림을 표시
    window.print = () => {
      notifyBlocked();
    };

    // Ctrl+P 또는 Cmd+P 단축키를 감지하여 인쇄 시도를 차단하고 알림을 표시
    const handleKeyDown = (e: KeyboardEvent) => {
      const isPrintShortcut =
        (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "p";

      if (!isPrintShortcut) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      notifyBlocked();
    };

    // 인쇄 대화상자가 열리기 전에 알림을 표시하기 위한 이벤트 리스너
    const handleBeforePrint = () => {
      notifyBlocked();
    };

    // 이벤트 리스너 등록
    window.addEventListener("keydown", handleKeyDown, { capture: true }); // 키보드 이벤트
    document.addEventListener("keydown", handleKeyDown, { capture: true }); // 문서 전체 키보드 이벤트
    window.addEventListener("beforeprint", handleBeforePrint); // 인쇄 대화상자 열리기 전에 이벤트

    // 컴포넌트 언마운트 시 원래의 print 함수 복원 및 이벤트 리스너 제거
    return () => {
      window.print = originalPrint;
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
      document.removeEventListener("keydown", handleKeyDown, {
        capture: true,
      });
      window.removeEventListener("beforeprint", handleBeforePrint);
    };
  }, []);

  return null;
}
