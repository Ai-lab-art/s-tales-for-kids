import { stories } from "@/data/stories";
import { StoryCard } from "@/components/StoryCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Star, Heart, Facebook, Twitter, MessageCircle, Share2 } from "lucide-react";

const Index = () => {
  const shareUrl = window.location.href;
  const shareText = "Check out these amazing magical stories for children!";
  
  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
        break;
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        break;
      case 'messenger':
        url = `https://www.facebook.com/dialog/send?link=${encodeURIComponent(shareUrl)}`;
        break;
      default:
        return;
    }
    window.open(url, '_blank', 'width=600,height=400');
  };

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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Discover wonderful tales filled with adventure, friendship, and important life lessons
            </p>
            
            {/* Share Buttons */}
            <div className="flex justify-center items-center gap-3">
              <span className="text-sm text-muted-foreground mr-2">Share:</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('facebook')}
                className="hover:bg-blue-50 hover:border-blue-300"
              >
                <Facebook className="w-4 h-4 text-blue-600" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('twitter')}
                className="hover:bg-sky-50 hover:border-sky-300"
              >
                <Twitter className="w-4 h-4 text-sky-500" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('whatsapp')}
                className="hover:bg-green-50 hover:border-green-300"
              >
                <MessageCircle className="w-4 h-4 text-green-600" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('messenger')}
                className="hover:bg-blue-50 hover:border-blue-300"
              >
                <Share2 className="w-4 h-4 text-blue-500" />
              </Button>
            </div>
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
