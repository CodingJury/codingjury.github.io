import { cn, parseDescription } from "../../utils";
import ImageCarousel from "./ImageCarousel";

const RepoCard = ({ name, description, html_url, homepage }: { name: string; description: string; html_url: string; homepage: string }) => {
    const parsed = parseDescription(description);
    const images = (parsed.img as string[]) || [];
    const parsedDescription = parsed.description || "";

    return (
        <div className={cn(
            "group relative flex flex-col",
            "p-6 rounded-lg border border-gray-200",
            "bg-white shadow-sm",
            "hover:shadow-md hover:border-gray-300",
            "transition-all duration-200"
        )}>
            {/* Card Header */}
            <div className="flex-1">
                <h2 className={cn(
                    "text-xl font-semibold mb-2",
                    "text-gray-900",
                    "group-hover:text-blue-600",
                    "transition-colors duration-200"
                )}>
                    {name}
                </h2>
                
                {parsedDescription && (
                    <p className={cn(
                        "text-sm text-gray-600 mb-4",
                        "line-clamp-3"
                    )}>
                        {parsedDescription}
                    </p>
                )}

                {/* Image Carousel */}
                <ImageCarousel 
                    images={images} 
                    alt={name}
                    className="mb-4"
                />
            </div>

            {/* Card Footer - Links */}
            <div className="flex gap-3 pt-4 border-t border-gray-100">
                <a 
                    href={html_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={cn(
                        "flex-1 text-center px-4 py-2",
                        "text-sm font-medium",
                        "bg-gray-100 text-gray-700",
                        "hover:bg-gray-200",
                        "rounded-md transition-colors duration-200"
                    )}
                >
                    GitHub
                </a>
                <a 
                    href={homepage} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={cn(
                        "flex-1 text-center px-4 py-2",
                        "text-sm font-medium",
                        "bg-blue-600 text-white",
                        "hover:bg-blue-700",
                        "rounded-md transition-colors duration-200"
                    )}
                >
                    Live Demo
                </a>
            </div>
        </div>
    )
};

export default RepoCard;