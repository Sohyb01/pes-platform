import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customtwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-h1",
        "text-h2",
        "text-h3",
        "text-h4",
        "text-large",
        "text-lead",
        "text-p",
        "text-p_ui",
        "text-p_ui_medium",
        "text-list",
        "text-body",
        "text-body_medium",
        "text-subtle",
        "text-subtle_medium",
        "text-subtle_semibold",
        "text-small",
        "text-detail",
        "text-badge",
        "text-blockquote",
        "text-table_head",
        "text-table_item",
        "text-kb_shortcut",
        "text-card_title",
      ],
      "text-color": [
        "text-background",
        "text-foreground",
        "text-shade",
        "text-whatsapp",
        "text-card",
        "text-card-foreground",
        "text-popover",
        "text-popover-foreground",
        "text-primary",
        "text-primary-foreground",
        "text-secondary",
        "text-secondary-foreground",
        "text-muted",
        "text-muted-foreground",
        "text-accent",
        "text-accent-foreground",
        "text-destructive",
        "text-destructive-foreground",
        "text-border",
        "text-input",
        "text-ring",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customtwMerge(clsx(inputs));
}

// File Validation
export const MAX_FILE_SIZE_5MB = 5 * 1024 * 1024;

export function checkCVFileType(file: File) {
  if (file?.name) {
    const fileType = file.name.split(".").pop();
    if (fileType === "docx" || fileType === "pdf") return true;
  }
  return false;
}

export function checkImageFileType(file: File) {
  if (file?.name) {
    const fileType = file.name.split(".").pop();
    if (
      fileType === "webp" ||
      fileType === "png" ||
      fileType === "jpg" ||
      fileType === "jpeg"
    )
      return true;
  }
  return false;
}
