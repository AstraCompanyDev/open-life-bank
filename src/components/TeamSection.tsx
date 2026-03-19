import team1 from "@/assets/team/team-1.avif";
import team2 from "@/assets/team/team-2.avif";
import team3 from "@/assets/team/team-3.avif";
import team4 from "@/assets/team/team-4.avif";
import team5 from "@/assets/team/team-5.avif";
import kyleKemper from "@/assets/team/kyle-kemper.png";
import team7 from "@/assets/team/team-7.avif";

const teamMembers = [
  { name: "Emmanuel Quezada", role: "Founder & CEO", bio: "Founder of U-topia", image: team6, linkedin: "https://ae.linkedin.com/in/emmanuel-quezada/en" },
  { name: "Owen Man Cheong Ma", role: "Co-Founder & CRO", bio: "Co-founder of U-topia", image: team3, linkedin: "https://sg.linkedin.com/in/omcma" },
  { name: "Maissa Ballout", role: "Chief Financial Officer", bio: "Financial strategy leader", image: team4, linkedin: "https://il.linkedin.com/in/maissa-ballout-shamshoum" },
  { name: "Ian Stirling", role: "Chief Strategy Officer", bio: "Strategic growth expert", image: team1, linkedin: "https://uk.linkedin.com/in/ianscottstirling" },
  { name: "Danosch Zahedi", role: "Regional Network Advisor", bio: "Regional network specialist", image: team2, linkedin: "https://ae.linkedin.com/in/danoschzahedi" },
];

const TeamSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Led by Fintech Veterans{" "}
            <span className="gradient-text">& Builders</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
            U-topia is built by pioneers in fintech, crypto, and traditional finance.
            This isn't our first breakthrough. But it might be yours.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
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
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
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
