import React from "react";
import { serializeLexical } from "./serializeLexical";
import { LexicalNode } from "./lexicalNodeFormat";

// If you have a utility for class names, import it here
// import { cn } from '@/utilities/cn';

// If you don't have the cn utility, you can use this simple function:
const cn = (...classes: (string | boolean | undefined | null)[]): string => {
  return classes.filter(Boolean).join(" ");
};

type Props = {
  className?: string;
  content: Record<string, any>;
  enableGutter?: boolean;
  enableProse?: boolean;
};

const RichText: React.FC<Props> = ({
  className,
  content,
  enableGutter = true,
  enableProse = true,
}) => {
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
      {content &&
        !Array.isArray(content) &&
        typeof content === "object" &&
        "root" in content &&
        serializeLexical({ nodes: content?.root?.children as LexicalNode[] })}
    </div>
  );
};

export default RichText;
