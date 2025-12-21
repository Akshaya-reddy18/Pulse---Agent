import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Building2, Shield, Zap, Users, MapPin, CheckCircle, Activity } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleNavigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        
        {/* Animated circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 animate-fade-in">
              <Activity className="w-4 h-4" />
              <span className="text-sm font-medium">Emergency Response System</span>
            </div>
            
            {/* Main heading */}
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Pulse<span className="text-primary">Connect</span>
            </h1>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: "0.2s" }}>
              AI-powered emergency blood & plasma response system
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button 
                variant="hero" 
                size="xl" 
                onClick={handleNavigateToLogin}
                className="w-full sm:w-auto"
              >
                <Heart className="w-5 h-5" />
                Donate Blood
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                onClick={handleNavigateToLogin}
                className="w-full sm:w-auto"
              >
                <Building2 className="w-5 h-5" />
                Hospital Login
              </Button>
              <Button 
                variant="secondary" 
                size="xl" 
                onClick={handleNavigateToLogin}
                className="w-full sm:w-auto"
              >
                <Shield className="w-5 h-5" />
                Admin Login
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A seamless process connecting hospitals with donors in critical moments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                icon: Building2,
                title: "Hospital Raises Emergency",
                description: "Healthcare facilities submit urgent blood or plasma requests through our platform"
              },
              {
                step: "02",
                icon: Zap,
                title: "AI Activates Donors",
                description: "Our intelligent system identifies and alerts compatible donors in real-time"
              },
              {
                step: "03",
                icon: Users,
                title: "Donor Responds",
                description: "Verified donors receive notifications and confirm their availability instantly"
              },
              {
                step: "04",
                icon: MapPin,
                title: "Navigation & Fulfillment",
                description: "Donors are guided to the nearest collection point for quick response"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full border border-border/50">
                  {/* Step number */}
                  <div className="text-6xl font-heading font-bold text-primary/10 absolute top-4 right-6">
                    {item.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Trust PulseConnect?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Built with cutting-edge technology for life-saving emergencies
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Powered by AI Agents",
                description: "Intelligent systems that match donors with urgent needs instantly"
              },
              {
                icon: Activity,
                title: "Real-time Donor Activation",
                description: "Immediate notifications ensure the fastest possible response times"
              },
              {
                icon: CheckCircle,
                title: "Hospital Verified System",
                description: "Trusted by healthcare institutions with rigorous verification protocols"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-b from-card to-secondary/20 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-primary" />
              <span className="font-heading text-xl font-bold text-foreground">
                PulseConnect
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              © PulseConnect
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
