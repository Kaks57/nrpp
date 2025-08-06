import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Tv2, Power } from "lucide-react";
import konohaSymbol from "@/assets/konoha-symbol.png";
import shurikenIcon from "@/assets/shuriken-icon.png";

const Index = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isOn, setIsOn] = useState(false);
  
  const menuItems = [
    "01. PROFIL",
    "02. CONNAISSANCE NARUTO",
    "03. EXPERIENCE RP/STAFF", 
    "04. DISPONIBILITES",
    "05. MOTIVATIONS",
    "06. PREFERENCES SUIVI",
    "07. CONTACT"
  ];

  const content = [
    // Profil MJ
    <div className="space-y-4 font-mono">
      <div className="text-center space-y-3">
        <div className="text-2xl text-primary">░░░ CANDIDAT MAITRE DU JEU ░░░</div>
        <div className="text-lg">kais570</div>
        <div className="text-sm text-muted-foreground">
          {'>>>'} AGE: 18 ans<br/>
          {'>>>'} VILLAGE: Konoha<br/>
          {'>>>'} STEAM: 76561198386965030<br/>
          {'>>>'} DISCORD: kais570<br/>
          {'>>>'} SPECIALITE: Suivi RP et narration
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <img src={konohaSymbol} alt="Konoha" className="w-8 h-8 opacity-60" />
          <img src={shurikenIcon} alt="Ninja" className="w-6 h-6 opacity-60" />
        </div>
      </div>
    </div>,
    
    // Connaissance Naruto
    <div className="space-y-4 font-mono text-sm">
      <div className="text-primary text-lg">░░░ CONNAISSANCE NARUTO ░░░</div>
      <div className="space-y-3">
        <div>
          <div className="text-secondary">► EXPERTISE UNIVERS</div>
          <div className="text-muted-foreground pl-4">
            - Naruto regarde 2 fois completement<br/>
            - Actuellement sur Boruto<br/>
            - Liens forts avec l'univers<br/>
            - Connaissance approfondie du lore
          </div>
        </div>
        <div>
          <div className="text-secondary">► COMPREHENSION RP</div>
          <div className="text-muted-foreground pl-4">
            - Maitrise des clans et dojutsu<br/>
            - Connaissance des jutsus<br/>
            - Comprehension des enjeux narratifs
          </div>
        </div>
      </div>
    </div>,
    
    // Experience RP/Staff
    <div className="space-y-4 font-mono text-sm">
      <div className="text-primary text-lg">░░░ EXPERIENCE RP/STAFF ░░░</div>
      <div className="space-y-3">
        <div>
          <div className="text-secondary">► EXPERIENCE STAFF</div>
          <div className="text-muted-foreground pl-4">
            - OKIRO SOLO LEVELING: RM/MJS<br/>
            - Plus grand nombre de BDA resolus<br/>
            - Record de tickets IG traites<br/>
            - Experience moderation confirmee
          </div>
        </div>
        <div>
          <div className="text-secondary">► EXPERIENCE RP</div>
          <div className="text-muted-foreground pl-4">
            - OKIRO SOLO LEVELING<br/>
            - SDA / AOT / ALL BLUE<br/>
            - FSC / RYUKAI / FOC (Tokyo Ghoul)<br/>
            - Variete d'univers maitrisee
          </div>
        </div>
      </div>
    </div>,
    
    // Disponibilites
    <div className="space-y-4 font-mono text-sm">
      <div className="text-primary text-lg">░░░ DISPONIBILITES ░░░</div>
      <div className="space-y-3">
        <div>
          <div className="text-secondary">► HORAIRES QUOTIDIENS</div>
          <div className="text-muted-foreground pl-4">
            - Tous les jours: 11h - 2h matin<br/>
            - Travail possible hors connexion<br/>
            - Tickets traites rapidement<br/>
            - Tres haute disponibilite
          </div>
        </div>
        <div>
          <div className="text-secondary">► FLEXIBILITE</div>
          <div className="text-muted-foreground pl-4">
            - Adaptation aux besoins serveur<br/>
            - Suivi continu des RP<br/>
            - Reactivite optimale
          </div>
        </div>
      </div>
    </div>,
    
    // Motivations
    <div className="space-y-4 font-mono text-sm">
      <div className="text-primary text-lg">░░░ MOTIVATIONS ░░░</div>
      <div className="space-y-3">
        <div>
          <div className="text-secondary">► PASSION POUR LA SOLVE</div>
          <div className="text-muted-foreground pl-4">
            - Connexion quotidienne 18h pile<br/>
            - Presque un mois d'assiduite<br/>
            - Whitelist de longue date<br/>
            - Moments inoubliables vecus
          </div>
        </div>
        <div>
          <div className="text-secondary">► OBJECTIFS MJ</div>
          <div className="text-muted-foreground pl-4">
            - Enrichir l'experience RP<br/>
            - Accompagner les joueurs<br/>
            - Developper des intrigues<br/>
            - Maintenir la qualite narrative
          </div>
        </div>
      </div>
    </div>,
    
    // Preferences Suivi
    <div className="space-y-4 font-mono text-sm">
      <div className="text-primary text-lg">░░░ PREFERENCES SUIVI ░░░</div>
      <div className="space-y-3">
        <div>
          <div className="text-secondary">► DOMAINES PREFERES</div>
          <div className="text-muted-foreground pl-4">
            - Nature de Chakra (si possible Suiton)<br/>
            - Medecin<br/>
            - Kenjutsu / Arme<br/>
            - Taijutsu
          </div>
        </div>
        <div>
          <div className="text-secondary">► ADAPTABILITE</div>
          <div className="text-muted-foreground pl-4">
            - Pret pour tous domaines<br/>
            - Selon besoins du serveur<br/>
            - Flexibilite totale<br/>
            - Apprentissage continu
          </div>
        </div>
      </div>
    </div>,
    
    // Contact MJ
    <div className="space-y-4 font-mono text-sm">
      <div className="text-primary text-lg">░░░ CONTACT ░░░</div>
      <div className="space-y-4">
        <div>
          <div className="text-secondary">► DISCORD</div>
          <div className="text-muted-foreground pl-4 mb-2">kais570</div>
          <Button asChild size="sm" className="ml-4 bg-accent text-accent-foreground hover:bg-accent/80">
            <a href="https://discord.com/channels/1196874607022571590/1402570517621248080" target="_blank" rel="noopener noreferrer">
              ACCEDER AU TICKET
            </a>
          </Button>
        </div>
        <div>
          <div className="text-secondary">► STEAM</div>
          <div className="text-muted-foreground pl-4 mb-2">76561198386965030</div>
          <Button asChild size="sm" className="ml-4 bg-secondary text-secondary-foreground hover:bg-secondary/80">
            <a href="https://steamcommunity.com/profiles/76561198386965030" target="_blank" rel="noopener noreferrer">
              VOIR PROFIL STEAM
            </a>
          </Button>
        </div>
      </div>
    </div>
  ];

  if (!isOn) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="relative">
          {/* TV Frame when off */}
          <div className="w-96 h-80 bg-gradient-retro rounded-2xl p-8 shadow-tv">
            <div className="w-full h-full bg-black rounded-lg flex items-center justify-center relative">
              <div className="w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
              
              {/* Subtle decorative elements when off */}
              <div className="absolute top-4 left-4 opacity-10">
                <img src={konohaSymbol} alt="" className="w-6 h-6" />
              </div>
              <div className="absolute bottom-4 left-4 opacity-10">
                <img src={shurikenIcon} alt="" className="w-4 h-4" />
              </div>
            </div>
            
            {/* Power Button */}
            <Button 
              onClick={() => setIsOn(true)}
              className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-muted hover:bg-primary"
            >
              <Power className="w-6 h-6" />
            </Button>
          </div>
          
          {/* Brand when off */}
          <div className="text-center mt-4">
            <div className="text-muted-foreground font-mono text-xs opacity-50">
              ░░░ CANDIDATURE-TV MODEL 2024 ░░░<br/>
              NARUTO RP "LA SOLVE"
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-5xl mx-auto">
        {/* Retro TV Frame */}
        <div className="relative bg-gradient-retro p-12 rounded-3xl shadow-tv">
          {/* TV Screen */}
          <div className="relative bg-gradient-screen border-4 border-muted rounded-lg p-8 min-h-[500px] shadow-tv">
            {/* Scanlines overlay */}
            <div className="absolute inset-0 bg-scanlines pointer-events-none rounded-lg"></div>
            
            {/* TV Static Effect */}
            <div className="absolute top-2 right-2 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            
            {/* Channel Display */}
            <div className="absolute top-4 right-4 bg-background/20 backdrop-blur-sm rounded px-3 py-1 font-mono text-xs">
              <Tv2 className="w-3 h-3 inline mr-1" />
              CH {selectedMenu + 1}
            </div>

            {/* Menu Selection */}
            <div className="grid md:grid-cols-2 gap-8 h-full">
              {/* Left Menu */}
              <div className="space-y-2">
                <div className="text-primary font-mono text-lg mb-6">
                  ░░░ MAITRE DU JEU ░░░
                </div>
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedMenu(index)}
                    className={`block w-full text-left p-3 rounded font-mono text-sm transition-all duration-200 ${
                      selectedMenu === index 
                        ? 'bg-primary text-primary-foreground shadow-md' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                    }`}
                  >
                    {selectedMenu === index ? '► ' : '  '}{item}
                  </button>
                ))}
              </div>

              {/* Right Content */}
              <div className="border-l border-muted-foreground/30 pl-6">
                <div 
                  key={selectedMenu}
                  className="animate-fade-in"
                >
                  {content[selectedMenu]}
                </div>
              </div>
            </div>
          </div>

          {/* TV Brand */}
          <div className="text-center mt-6">
            <div className="text-muted-foreground font-mono text-sm">
              ░░░ CANDIDATURE-TV MODEL 2024 ░░░<br/>
              NARUTO RP "LA SOLVE"
            </div>
          </div>
          
          {/* Back/Power Button */}
          <Button 
            onClick={() => setIsOn(false)}
            className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-muted hover:bg-destructive transition-colors flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
