export const IS_BOLD = 1;
export const IS_ITALIC = 1 << 1;
export const IS_STRIKETHROUGH = 1 << 2;
export const IS_UNDERLINE = 1 << 3;
export const IS_CODE = 1 << 4;
export const IS_SUBSCRIPT = 1 << 5;
export const IS_SUPERSCRIPT = 1 << 6;

export type TextNode = {
  type: "text";
  text: string;
  format: number;
  version: number;
};

export type ElementNode = {
  type:
    | "root"
    | "paragraph"
    | "heading"
    | "quote"
    | "list"
    | "listitem"
    | "link";
  children: LexicalNode[];
  direction?: "ltr" | "rtl";
  format?: number;
  indent?: number;
  version: number;
  tag?: string;
  listType?: "bullet" | "number";
  url?: string;
};

export type LexicalNode = TextNode | ElementNode;
