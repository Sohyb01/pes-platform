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
export const MAX_FILE_SIZE_5MB = 5242880;

export function checkCVFileType(filename: string | undefined) {
  if (filename == undefined) return true; // The outside function will always return false if this value is undefined anyway

  const fileType = filename.split(".").pop();
  if (fileType === "docx" || fileType === "pdf") return true;
  return false;
}

export function checkAttachmentFileType(filename: string | undefined) {
  if (filename == undefined) return true; // The outside function will always return false if this value is undefined anyway

  const fileType = filename.split(".").pop();
  if (fileType === "py" || fileType === "js") return true;
  return false;
}

export function checkImageFileType(filename: string, required: boolean) {
  if (!required) return true;
  if (filename == undefined) return false;
  const fileType = filename.split(".").pop(); // Choose what attachment types are allowed
  if (
    fileType === "webp" ||
    fileType === "png" ||
    fileType === "jpg" ||
    fileType === "jpeg"
  )
    return true;
  return false;
}

export function shuffleArray(array: string[] | number[]) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the elements at i and randomIndex
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

export const str2bool = (value: string) => {
  if (value && typeof value === "string") {
    if (value.toLowerCase() === "true") return true;
    if (value.toLowerCase() === "false") return false;
  }
  return value;
};
