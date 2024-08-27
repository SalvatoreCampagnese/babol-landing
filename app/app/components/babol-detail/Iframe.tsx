export const Iframe = ({
  babolID
}:{
  babolID:string
}) => {
  return (
    <iframe
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