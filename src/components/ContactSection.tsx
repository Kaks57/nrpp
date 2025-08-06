import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle, Computer } from "lucide-react";

const ContactSection = () => {
  return (
    <Card className="bg-gradient-primary border-primary/20 shadow-glow">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-2xl text-primary-foreground">
          <MessageCircle className="w-7 h-7" />
          Contact & Informations
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm">
            <h4 className="font-semibold text-primary-foreground mb-2">Discord</h4>
            <p className="text-primary-foreground/80 text-sm">kais570</p>
          </div>
          
          <div className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm">
            <h4 className="font-semibold text-primary-foreground mb-2">Steam ID</h4>
            <p className="text-primary-foreground/80 text-sm">76561198386965030</p>
          </div>
          
          <div className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm">
            <h4 className="font-semibold text-primary-foreground mb-2">Âge</h4>
            <p className="text-primary-foreground/80 text-sm">18 ans</p>
          </div>
        </div>
        
        <div className="pt-4 text-center">
          <p className="text-primary-foreground/90 mb-4">
            Ticket Discord et dossier de candidature disponibles sur demande
          </p>
          <div className="flex gap-3 justify-center">
            <Button 
              variant="secondary" 
              className="gap-2"
              onClick={() => window.open('https://discord.com/channels/1196874607022571590/1401537640498729141', '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
              Ticket Discord
            </Button>
            <Button 
              variant="outline" 
              className="gap-2 bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20"
              onClick={() => window.open('https://steamcommunity.com/profiles/76561198386965030', '_blank')}
            >
              <Computer className="w-4 h-4" />
              Profil Steam
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactSection;