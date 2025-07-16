import { stories } from "@/data/stories";
import { StoryCard } from "@/components/StoryCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Stories = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-story-secondary/20 to-story-warm/20">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-story-secondary/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" className="hover:bg-story-secondary/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">Developed by: Hom Bahadur Thapa</p>
          </div>
        </div>
      </div>

      {/* Stories Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-story-primary to-story-accent bg-clip-text text-transparent mb-4">
            Choose Your Adventure
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select a magical story to begin your reading journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 py-8">
          <p className="text-muted-foreground">
            Made with ❤️ for curious young minds
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stories;