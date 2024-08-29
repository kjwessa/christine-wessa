import React from "react";
import { serializeLexical } from "./serializeLexical";
import { LexicalNode } from "./lexicalNodeFormat";

// Simple utility function to concatenate class names
// This can be replaced with a more robust solution if needed
const cn = (...classes: (string | boolean | undefined | null)[]): string => {
  return classes.filter(Boolean).join(" ");
};

// Props interface for the RichText component
type Props = {
  className?: string;
  content: Record<string, any>;
  enableGutter?: boolean;
  enableProse?: boolean;
};

// RichText component for rendering Lexical content
const RichText: React.FC<Props> = ({
  className,
  content,
  enableGutter = true,
  enableProse = true,
}) => {
  // Return null if no content is provided
  if (!content) {
    return null;
  }

  return (
    <div
      className={cn(
        enableGutter ? "container" : "max-w-none",
        enableProse ? "prose mx-auto dark:prose-invert" : "",
        className,
      )}
    >
      {/* Render the content if it's a valid Lexical structure */}
      {content &&
        !Array.isArray(content) &&
        typeof content === "object" &&
        "root" in content &&
        serializeLexical({ nodes: content?.root?.children as LexicalNode[] })}
    </div>
  );
};

export default RichText;
