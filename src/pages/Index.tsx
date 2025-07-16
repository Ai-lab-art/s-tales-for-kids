import { stories } from "@/data/stories";
import { StoryCard } from "@/components/StoryCard";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Star, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-story-secondary/20 to-story-warm/20">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-story-secondary/30">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Developed by: Hom Bahadur Thapa</p>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-story-primary to-story-accent bg-clip-text text-transparent mb-4">
              Magical Stories for Children
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover wonderful tales filled with adventure, friendship, and important life lessons
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-white to-story-secondary/30 border-2 border-story-secondary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-0">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-story-primary" />
              <h3 className="text-2xl font-bold text-foreground mb-2">10 Stories</h3>
              <p className="text-muted-foreground">Amazing adventures await</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-white to-story-accent/30 border-2 border-story-accent/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-0">
              <Star className="w-12 h-12 mx-auto mb-4 text-story-accent" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Life Lessons</h3>
              <p className="text-muted-foreground">Learning through stories</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-white to-story-warm/30 border-2 border-story-warm/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-0">
              <Heart className="w-12 h-12 mx-auto mb-4 text-red-500" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Fun & Educational</h3>
              <p className="text-muted-foreground">Perfect for young minds</p>
            </CardContent>
          </Card>
        </div>

        {/* Stories Grid */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Choose Your Adventure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
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

export default Index;
