interface ParsedDescription {
  description: string;
  [key: string]: string | string[];
}

/**
 * Parse description string that may contain metadata in format:
 * "Text here{{key:value1}}{{key:value2}}{{anotherKey:value}}"
 * 
 * Returns an object with:
 * - description: The clean text without metadata tags
 * - [key]: Array of values for each key found in the metadata
 * 
 * Examples:
 * 
 * Multiple values for same key:
 * Input: "Web app{{img:url1.jpg}}{{img:url2.jpg}}{{tag:react}}"
 * Output: { description: "Web app", img: ["url1.jpg", "url2.jpg"], tag: ["react"] }
 * 
 * Single value for a key:
 * Input: "Web app{{img:url1.jpg}}{{tag:react}}"
 * Output: { description: "Web app", img: ["url1.jpg"], tag: ["react"] }
 */
export function parseDescription(rawDescription: string): ParsedDescription {
  if (!rawDescription) {
    return {
      description: ""
    };
  }

  // Regular expression to match {{key:value}} pattern
  const metadataPattern = /\{\{([^:]+):([^}]+)\}\}/g;
  
  // Object to store parsed metadata
  const metadata: Record<string, string[]> = {};
  let match;
  
  // Extract all metadata key-value pairs
  while ((match = metadataPattern.exec(rawDescription)) !== null) {
    const key = match[1].trim();
    const value = match[2].trim();
    
    // If key doesn't exist, create array, otherwise append to existing array
    if (!metadata[key]) {
      metadata[key] = [];
    }
    metadata[key].push(value);
  }
  
  // Remove all {{key:value}} patterns from the description
  const description = rawDescription.replace(metadataPattern, "").trim();
  
  return {
    description,
    ...metadata
  };
}
