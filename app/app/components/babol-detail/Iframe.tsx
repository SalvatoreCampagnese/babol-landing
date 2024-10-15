"use client"
import { useEffect, useRef } from "react";

export const Iframe = ({
  babolID
}:{
  babolID:string
}) => {
  
  const babolIframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(()=>{

    if (babolIframeRef.current && babolIframeRef.current.contentWindow) {

      babolIframeRef.current.contentWindow.postMessage("disableDashboardEdit", "*");

    }

  },[])
  return (
    <iframe
      ref={babolIframeRef}
      title="Babol"
      src={"https://bubble-dashboard.vercel.app/?bubbleId=" + babolID}
      className="w-full h-full min-w-full"
      style={{
        minHeight: "calc(100vh - 185px)",
        minWidth: "100%"
      }}
    />
  );
}