import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Story } from "@/data/stories";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface StoryCardProps {
  story: Story;
}

export function StoryCard({ story }: StoryCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-gradient-to-br from-white to-story-secondary/20 border-2 border-story-secondary/30 hover:border-story-primary/50">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={story.image}
          alt={story.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-story-primary transition-colors">
          {story.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {story.summary}
        </p>
        <div className="mb-3 p-2 bg-story-warm/30 rounded-lg">
          <p className="text-xs font-medium text-story-primary">
            💡 Moral: {story.moral}
          </p>
        </div>
        <Link to={`/story/${story.id}`}>
          <Button className="w-full bg-story-primary hover:bg-story-primary/90 text-white font-medium py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <BookOpen className="w-4 h-4 mr-2" />
            Read Story
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}