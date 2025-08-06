import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Clock, Award } from "lucide-react";

const ExperienceSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Expérience de modération */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-xl">
            <Shield className="w-6 h-6 text-primary" />
            Expérience de Modération
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <h4 className="font-semibold text-foreground mb-2">Okiro Solo Leveling</h4>
              <p className="text-muted-foreground text-sm mb-2">
                Modérateur expérimenté avec le plus grand nombre de BDA et tickets IG résolus
              </p>
              <Badge variant="secondary">Top Performer</Badge>
            </div>
            
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <h4 className="font-semibold text-foreground mb-2">SDA & Autres Serveurs</h4>
              <p className="text-muted-foreground text-sm mb-2">
                Modération sur plusieurs serveurs Garry's Mod, expérience diversifiée
              </p>
              <Badge variant="outline">Multi-serveurs</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Compétences et disponibilités */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-xl">
            <Users className="w-6 h-6 text-secondary" />
            Compétences & Disponibilités
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Disponibilité</p>
                <p className="text-sm text-muted-foreground">13h - 2h du matin (quotidien)</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
              <Award className="w-5 h-5 text-secondary" />
              <div>
                <p className="font-medium text-foreground">Qualités</p>
                <p className="text-sm text-muted-foreground">Sociable, efficace dans la résolution de conflits</p>
              </div>
            </div>
          </div>
          
          <div className="pt-2">
            <h4 className="font-medium text-foreground mb-3">Points forts :</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Résolution de tickets</Badge>
              <Badge variant="outline">Gestion BDA</Badge>
              <Badge variant="secondary">Communication</Badge>
              <Badge variant="outline">Disponibilité</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExperienceSection;