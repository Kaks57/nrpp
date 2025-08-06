import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import bannerImage from "@/assets/naruto-banner.jpg";
import avatarImage from "@/assets/moderator-avatar.jpg";

const ProfileHeader = () => {
  return (
    <div className="relative">
      {/* Banner */}
      <div 
        className="w-full h-64 bg-cover bg-center relative overflow-hidden rounded-t-lg"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <h1 className="text-4xl font-bold text-foreground mb-2 drop-shadow-lg">
            Candidature Modération
          </h1>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Serveur Naruto RP - La Solve
          </Badge>
        </div>
      </div>

      {/* Profile Info */}
      <Card className="relative -mt-16 mx-6 p-6 bg-gradient-card border-border shadow-card">
        <div className="flex items-start gap-6">
          <Avatar className="w-24 h-24 border-4 border-primary shadow-glow">
            <AvatarImage src={avatarImage} alt="Avatar modérateur" />
            <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
              K
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl font-bold text-foreground">kais570</h2>
              <Badge className="bg-gradient-primary text-primary-foreground">
                Candidat Modérateur
              </Badge>
            </div>
            
            <div className="flex flex-wrap gap-3 text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                18 ans
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                Discord: kais570
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                SteamID: 76561198386965030
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileHeader;