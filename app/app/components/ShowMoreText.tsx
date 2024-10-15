import React, { useState } from "react";
import { Button } from "./Button";

const ShowMoreText = ({
  text,
  maxLength,
}: {
  text: string;
  maxLength: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleIsExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Check if text exceeds the max length
  const isTooLong = text.length > maxLength;

  return (
    <div>
      <p>
        {isTooLong && !isExpanded ? text.substring(0, maxLength) + "..." : text}
      </p>
      {isTooLong && (
        <Button
          kind="link"
          text={isExpanded ? "Show Less" : "Show More info"}
          customClasses="text-white mt-0"
          onClickFn={toggleIsExpanded}
        />
      )}
    </div>
  );
};

export default ShowMoreText;
