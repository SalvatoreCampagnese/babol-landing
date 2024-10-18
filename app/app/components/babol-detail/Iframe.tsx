"use client";
import { useEffect, useRef } from "react";

export const Iframe = ({ babolID }: { babolID: string }) => {
  const babolIframeRef = useRef<HTMLIFrameElement>(null);
  const sendMessage = (message: string, payload = {}) => {
    if (babolIframeRef.current?.contentWindow) {
      babolIframeRef.current.contentWindow.postMessage(
        { message, payload },
        "*"
      );
    }
  };
  useEffect(() => {
    const iframe = babolIframeRef.current;
    if (iframe) {
      iframe.addEventListener("load", () => {
        sendMessage("disableDashboardEdit");
      });
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener("load", () => {});
      }
    };
  }, []);

  return (
    <iframe
      ref={babolIframeRef}
      title="Babol"
      src={"https://bubble-dashboard.vercel.app/?bubbleId=" + babolID}
      className="w-full h-full min-w-full"
      style={{
        minHeight: "calc(100vh - 185px)",
        minWidth: "100%",
      }}
    />
  );
};
