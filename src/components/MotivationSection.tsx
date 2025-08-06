import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Target, Users2 } from "lucide-react";

const MotivationSection = () => {
  return (
    <Card className="bg-gradient-card border-border shadow-card">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Heart className="w-7 h-7 text-primary" />
          Motivation & Engagement
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Target className="w-5 h-5 text-secondary mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Passion pour le serveur</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Je me connecte quotidiennement sur La Solve car j'apprécie vraiment l'ambiance 
                  et la communauté qui s'y trouve. Ce serveur fait partie de ma routine quotidienne.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Users2 className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Esprit d'équipe</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ma nature sociable et mon expérience dans la gestion des conflits me permettent 
                  de maintenir une atmosphère positive et respectueuse.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">Objectifs en tant que modérateur</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Maintenir un environnement de jeu sain et respectueux</li>
                <li>• Résoudre rapidement les conflits entre joueurs</li>
                <li>• Aider les nouveaux joueurs à s'intégrer</li>
                <li>• Faire respecter les règles avec fairplay</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
              <h4 className="font-semibold text-foreground mb-2">Engagement personnel</h4>
              <p className="text-sm text-muted-foreground">
                Disponible tous les soirs de 13h à 2h du matin, je suis présent aux heures 
                de forte affluence pour assurer une modération constante et efficace.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MotivationSection;