import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({children, maxChars = 100} : Props) => {
    if (children.length <= maxChars) return <p>{children}</p>
    const [isExpanded, setExpanded] = useState(false);
    
    const text = isExpanded ? children : children.substring(0, maxChars);

  return (
    <>
      <p>{text}...</p>
      <button className="btn btn-primary" onClick={() => setExpanded(!isExpanded)}>{isExpanded ? "Collapse" : "Expand"}</button>
    </>
  );
};

export default ExpandableText;
