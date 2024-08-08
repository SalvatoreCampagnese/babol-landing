export const LabelAndSublabel = ({
  label,
  sublabel,
}: {
  label: string;
  sublabel: string;
}) => {
  return (
    <div className="flex flex-col gap-xs">
      <label className="text-7 leading-7 text-black font-satoshiBold">{label}</label>
      <label className="text-5 leading-5 text-black" dangerouslySetInnerHTML={{__html: sublabel}}></label>
    </div>
  );
};
