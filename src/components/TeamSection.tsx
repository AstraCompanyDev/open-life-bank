import team1 from "@/assets/team/team-1.avif";
import team2 from "@/assets/team/team-2.avif";
import team3 from "@/assets/team/team-3.avif";
import team4 from "@/assets/team/team-4.avif";
import team5 from "@/assets/team/team-5.avif";
import team6 from "@/assets/team/team-6.avif";
import team7 from "@/assets/team/team-7.avif";

const teamMembers = [
  { name: "Emmanuel Quezada", role: "Founder & Chief Executive Officer", image: team6, linkedin: "https://ae.linkedin.com/in/emmanuel-quezada/en" },
  { name: "Owen Man Cheong Ma", role: "Co-Founder & Chief Revenue Officer", image: team3, linkedin: "https://sg.linkedin.com/in/omcma" },
  { name: "Maissa Ballout", role: "Chief Financial Officer", image: team4, linkedin: "https://il.linkedin.com/in/maissa-ballout-shamshoum" },
  { name: "Ian Stirling", role: "Chief Strategy Officer", image: team1, linkedin: "https://uk.linkedin.com/in/ianscottstirling" },
  { name: "Danosch Zahedi", role: "Regional Network Advisor", image: team2, linkedin: "https://ae.linkedin.com/in/danoschzahedi" },
  { name: "Hitesh Mishra", role: "Chief Compliance Officer", image: team5, linkedin: "https://hk.linkedin.com/in/hitesh-mishra-080786" },
  { name: "Alexia Chen", role: "BD APAC", image: team7, linkedin: "https://ae.linkedin.com/in/alexia-chen-264078305" },
];

const TeamSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Meet the team behind <span className="whitespace-nowrap gradient-text">U-topia</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-3xl mx-auto">
            We're supported by high-powered builders who value creative freedom and doing their best work.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <a
              key={member.name}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group block animate-fade-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-secondary aspect-[3/4] card-clean">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="text-white font-semibold text-base md:text-lg mb-1">{member.name}</h3>
                  <p className="text-white/80 text-sm">{member.role}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
