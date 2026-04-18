import team1 from "@/assets/team/team-1.avif";
import team2 from "@/assets/team/team-2.avif";
import team3 from "@/assets/team/team-3.avif";
import team4 from "@/assets/team/team-4.avif";
import team5 from "@/assets/team/team-5.avif";
import team6 from "@/assets/team/team-6.avif";
import kyleKemper from "@/assets/team/kyle-kemper.png";
import team7 from "@/assets/team/team-7.avif";
import mayaNicks from "@/assets/team/maya-nicks.jpg";

const teamMembers = [
  { name: "Emmanuel Quezada", role: "Founder & CEO", bio: "Founder of U-topia", image: team6, linkedin: "https://ae.linkedin.com/in/emmanuel-quezada/en" },
  { name: "Owen Man Cheong Ma", role: "Co-Founder & CRO", bio: "Co-founder of U-topia", image: team3, linkedin: "https://sg.linkedin.com/in/omcma" },
  { name: "Kyle Kemper", role: "President", bio: "President of U-topia", image: kyleKemper, linkedin: "#" },
  { name: "Maya Nicks", role: "CAIO – Chief A.I. Officer", bio: "Chief A.I. Officer of U-topia", image: mayaNicks, linkedin: "#" },
];

const TeamSection = () => {
  return (
    <section className="pt-20 pb-10 md:pt-28 md:pb-14 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Led by Fintech Veterans{" "}
            <span className="gradient-text">& Builders</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
            Built by experienced fintech operators with a track record of launching, scaling, and delivering real-world financial products.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {teamMembers.map((member) => (
            <a
              key={member.name}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl bg-secondary aspect-[3/4] mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 grayscale"
                />
              </div>
              <h3 className="font-semibold text-foreground text-base mb-0.5">{member.name}</h3>
              <p className="text-sm font-medium text-foreground/80 mb-1">{member.role}</p>
              <p className="text-xs text-muted-foreground">{member.bio}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
