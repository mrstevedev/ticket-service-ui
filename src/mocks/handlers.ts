import { Event } from "@/types";
import { http, HttpResponse } from "msw";

export const handlers = [
    http.get("http://localhost:3000/events", ({ request }) => {
        const eventsData: Event[] = [
            {
                id: 1,
                title: "Orgy Concert",
                description:
                    "Orgy was formed in 1997 by vocalist Jay Gordon and guitarists Amir Derakh and Ryan Shuck. Bassist Paige Haley and drummer Bobby Hewitt soon completed the line-up. Derakh had previously gained some fame in the 1980s metal band Rough Cutt, and Hewitt was a former member of Electric Love Hogs. Gordon played bass in Deadsy due to the lack of a bass player, on their unreleased self-tilted album, splitting roles with his friend and the lead singer, Elijah Blue Allman. He then left Deadsy, to form Orgy. Gordon and Derakh were also experienced producers, having produced Coal Chamber's self-titled album.[1]",
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 / 100 available",
                price: 94.99,
                image: "/images/orgy-img-1.jpg",
                reserved: {
                    userId: 1
                }
            },
            {
                id: 2,
                title: "Korn Concert",
                description:
                    'Korn (stylized as KoЯn) is an American nu metal band from Bakersfield, California, originally formed in 1993 by James "Munky" Shaffer, Reginald "Fieldy" Arvizu and David Silveria, who were members of the band L.A.P.D. Their current lineup features Shaffer (guitar), Arvizu (bass), Brian "Head" Welch (guitar), Jonathan Davis (vocals), and Ray Luzier (drums), the last of whom replaced Silveria in 2007. The band is notable for pioneering and popularizing the nu metal genre.',
                date: "1/12/2025",
                location: "North Island Credit Union Amphitheatre",
                tickets: "100 / 100 available",
                price: 150,
                image: "/images/korn-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 3,
                title: "A Perfect Circle Concert",
                description:
                    "A Perfect Circle is an American rock band formed in Los Angeles, California in 1999 by guitarist Billy Howerdel and Tool vocalist Maynard James Keenan. A Perfect Circle released three of their four studio albums in the early 2000s: their debut Mer de Noms in 2000, a follow-up, Thirteenth Step in 2003; and an album of radically re-worked cover songs, Emotive, in 2004. Shortly after Emotive's release, the band went on hiatus; Keenan returned to Tool and started up solo work under the band name Puscifer, while Howerdel released a solo album, Keep Telling Myself It's Alright, under the moniker Ashes Divide. Band activity was sporadic in the following years; the band reformed in 2010, and played live shows on and off between 2010 and 2013, but fell into inactivity after the release of their greatest hits album, Three Sixty, and a live album box set, A Perfect Circle Live: Featuring Stone and Echo in late 2013. The band reformed in 2017 to record a fourth album, Eat the Elephant, which was released in 2018. After spending the rest of the year touring in support of the album, the band fell into inactivity until 2024 for a brief tour and one-off song \"Kindred.",
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 / 100 available",
                price: 200,
                image: "/images/apc-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 4,
                title: "Incubus Concert",
                description:
                    'Incubus is an American rock band from Calabasas, California. The band was formed in 1991 by vocalist Brandon Boyd, lead guitarist Mike Einziger, and drummer José Pasillas while enrolled in Calabasas High School and later expanded to include bassist Alex "Dirk Lance" Katunich, and Gavin "DJ Lyfe" Koppel; the latter two were eventually replaced by bassist Ben Kenney and DJ Kilmore, respectively. Nicole Row replaced Kenney in 2024.',
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 /100 available",
                price: 100,
                image: "/images/incubus-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 5,
                title: "Tool Concert",
                description:
                    "Tool is an American rock band formed in Los Angeles in 1990. It consists of vocalist Maynard James Keenan, guitarist Adam Jones, drummer Danny Carey and bassist Justin Chancellor, who replaced founding member Paul D'Amour in 1995. Tool has won four Grammy Awards,[1] performed worldwide tours, and produced albums topping charts in several countries.",
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 /100 available",
                price: 300,
                image: "/images/tool-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 6,
                title: "Pearl Jam Concert",
                description:
                    "Pearl Jam is an American rock band formed in Seattle, Washington, in 1990. The band's lineup consists of founding members Jeff Ament (bass guitar), Stone Gossard (rhythm guitar), Mike McCready (lead guitar), and Eddie Vedder (lead vocals, guitar), as well as Matt Cameron (drums), who joined in 1998. Keyboardist Boom Gaspar has also been a touring/session member with the band since 2002. Former members include Dave Krusen (an original member), Matt Chamberlain, Dave Abbruzzese, and Jack Irons, all of whom were the band's drummers from 1990 to 1998. Pearl Jam has outsold and outlasted many of its contemporaries from the early 1990s, and is considered one of the most influential bands from that decade,[1] dubbed \"the most popular American rock and roll band of the '90s\".[2]",
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 /100 available",
                price: 300,
                image: "/images/pearljam-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 7,
                title: "Smashing Pumpkins Concert",
                description:
                    "The Smashing Pumpkins (also simply known as Smashing Pumpkins)[note 1] is an American alternative rock band from Chicago. Formed in 1988 by frontman and guitarist Billy Corgan, guitarist James Iha, bassist D'arcy Wretzky and drummer Jimmy Chamberlin, the band has undergone several line-up changes since their reunion in 2006, with Corgan being the primary songwriter and sole constant member since its inception. The current lineup consists of Corgan, Chamberlin, and Iha. The band has a diverse, densely layered sound, which evolved throughout their career and has contained elements of gothic rock, heavy metal, grunge, psychedelic rock, progressive rock, shoegaze, dream pop, and electronica.",
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 / 100 available",
                price: 100,
                image: "/images/sp-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 8,
                title: "Pantera Concert",
                description:
                    "Pantera (/pænˈtɛrə/) is an American heavy metal band from Arlington, Texas, formed in 1981 by the Abbott brothers (guitarist Dimebag Darrell and drummer Vinnie Paul), and currently composed of vocalist Phil Anselmo, bassist Rex Brown, and touring musicians Zakk Wylde and Charlie Benante. The group's best-known lineup consisted of the Abbott brothers along with Brown and Anselmo, who joined in 1982 and 1986, respectively. The band is credited for developing and popularizing the subgenre of groove metal in the 1990s.[1][2][3] Regarded as one of the most successful and influential bands in heavy metal history, Pantera has sold around 20 million records worldwide[4] and has received four Grammy nominations.[5]",
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 / 100 available",
                price: 200,
                image: "/images/pantera-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 9,
                title: "No Doubt Concert",
                description:
                    "No Doubt is an American rock band formed in Anaheim, California in 1986. For most of its career, the band has consisted of vocalist and founding member Gwen Stefani, guitarist Tom Dumont, bassist Tony Kanal and drummer Adrian Young. Keyboardist Eric Stefani, Gwen's brother, was also a member when the band started to release albums in 1992. Since the mid-1990s, trombonist Gabrial McNair and trumpeter Stephen Bradley have performed with the band as session and touring musicians.",
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 /100 available",
                price: 400,
                image: "/images/nodoubt-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 10,
                title: "Filter Concert",
                description:
                    'Filter is an American rock band formed in 1993 in Cleveland, Ohio, by singer Richard Patrick, along with guitarist and programmer Brian Liesegang. The band was formed when Patrick desired to start his own band after leaving Nine Inch Nails as their touring guitarist. Their debut album, Short Bus (1995) received platinum certification by the Recording Industry Association of America (RIAA), supported by the single "Hey Man Nice Shot." After the album, the band would go through the first of many lineup changes, leaving Patrick as the only consistent member across all releases.',
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 / 100 available",
                price: 300,
                image: "/images/filter-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 11,
                title: "Rage Against the Machine Concert",
                description:
                    "Rage Against the Machine (often abbreviated as RATM or shortened to Rage) was an American rock band formed in Los Angeles, California in 1991. The band consisted of vocalist Zack de la Rocha, bassist and backing vocalist Tim Commerford, guitarist Tom Morello, and drummer Brad Wilk. They melded heavy metal and rap music, punk rock and funk with anti-authoritarian and revolutionary lyrics. As of 2010, they had sold over 16 million records worldwide.[1] They were inducted into the Rock and Roll Hall of Fame in 2023.[2][3]",
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 / 100 available",
                price: 200,
                image: "/images/rage-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 12,
                title: "Red Hot Chili Peppers Concert",
                description:
                    "The Red Hot Chili Peppers are an American rock band formed in Los Angeles in 1982,[1] comprising vocalist Anthony Kiedis, bassist Flea, drummer Chad Smith, and guitarist John Frusciante. Their music incorporates elements of alternative rock, funk, punk rock, hard rock, hip hop, and psychedelic rock. Their eclectic range has influenced genres such as funk metal,[2] rap metal,[3] rap rock,[4] and nu metal.[5][3] With over 120 million records sold worldwide, the Red Hot Chili Peppers are one of the top-selling bands of all time.[6] They hold the records for most number-one singles (15), most cumulative weeks at number one (91) and most top-ten songs (28) on the Billboard Alternative Songs chart.[7] They have won three Grammy Awards, were inducted into the Rock and Roll Hall of Fame in 2012, and in 2022 received a star on the Hollywood Walk of Fame.",
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 / 100 available",
                price: 400,
                image: "/images/rhcp-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 13,
                title: "No Doubt Concert",
                description:
                    "No Doubt is an American rock band formed in Anaheim, California in 1986. For most of its career, the band has consisted of vocalist and founding member Gwen Stefani, guitarist Tom Dumont, bassist Tony Kanal and drummer Adrian Young. Keyboardist Eric Stefani, Gwen's brother, was also a member when the band started to release albums in 1992. Since the mid-1990s, trombonist Gabrial McNair and trumpeter Stephen Bradley have performed with the band as session and touring musicians.",
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 /100 available",
                price: 400,
                image: "/images/nodoubt-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 14,
                title: "Filter Concert",
                description:
                    'Filter is an American rock band formed in 1993 in Cleveland, Ohio, by singer Richard Patrick, along with guitarist and programmer Brian Liesegang. The band was formed when Patrick desired to start his own band after leaving Nine Inch Nails as their touring guitarist. Their debut album, Short Bus (1995) received platinum certification by the Recording Industry Association of America (RIAA), supported by the single "Hey Man Nice Shot." After the album, the band would go through the first of many lineup changes, leaving Patrick as the only consistent member across all releases.',
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 / 100 available",
                price: 300,
                image: "/images/filter-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 15,
                title: "Rage Against the Machine Concert",
                description:
                    "Rage Against the Machine (often abbreviated as RATM or shortened to Rage) was an American rock band formed in Los Angeles, California in 1991. The band consisted of vocalist Zack de la Rocha, bassist and backing vocalist Tim Commerford, guitarist Tom Morello, and drummer Brad Wilk. They melded heavy metal and rap music, punk rock and funk with anti-authoritarian and revolutionary lyrics. As of 2010, they had sold over 16 million records worldwide.[1] They were inducted into the Rock and Roll Hall of Fame in 2023.[2][3]",
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 / 100 available",
                price: 200,
                image: "/images/rage-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 16,
                title: "Red Hot Chili Peppers Concert",
                description:
                    "The Red Hot Chili Peppers are an American rock band formed in Los Angeles in 1982,[1] comprising vocalist Anthony Kiedis, bassist Flea, drummer Chad Smith, and guitarist John Frusciante. Their music incorporates elements of alternative rock, funk, punk rock, hard rock, hip hop, and psychedelic rock. Their eclectic range has influenced genres such as funk metal,[2] rap metal,[3] rap rock,[4] and nu metal.[5][3] With over 120 million records sold worldwide, the Red Hot Chili Peppers are one of the top-selling bands of all time.[6] They hold the records for most number-one singles (15), most cumulative weeks at number one (91) and most top-ten songs (28) on the Billboard Alternative Songs chart.[7] They have won three Grammy Awards, were inducted into the Rock and Roll Hall of Fame in 2012, and in 2022 received a star on the Hollywood Walk of Fame.",
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 / 100 available",
                price: 400,
                image: "/images/rhcp-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 17,
                title: "No Doubt Concert",
                description:
                    "No Doubt is an American rock band formed in Anaheim, California in 1986. For most of its career, the band has consisted of vocalist and founding member Gwen Stefani, guitarist Tom Dumont, bassist Tony Kanal and drummer Adrian Young. Keyboardist Eric Stefani, Gwen's brother, was also a member when the band started to release albums in 1992. Since the mid-1990s, trombonist Gabrial McNair and trumpeter Stephen Bradley have performed with the band as session and touring musicians.",
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 /100 available",
                price: 400,
                image: "/images/nodoubt-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 18,
                title: "Filter Concert",
                description:
                    'Filter is an American rock band formed in 1993 in Cleveland, Ohio, by singer Richard Patrick, along with guitarist and programmer Brian Liesegang. The band was formed when Patrick desired to start his own band after leaving Nine Inch Nails as their touring guitarist. Their debut album, Short Bus (1995) received platinum certification by the Recording Industry Association of America (RIAA), supported by the single "Hey Man Nice Shot." After the album, the band would go through the first of many lineup changes, leaving Patrick as the only consistent member across all releases.',
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 / 100 available",
                price: 300,
                image: "/images/filter-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 19,
                title: "Rage Against the Machine Concert",
                description:
                    "Rage Against the Machine (often abbreviated as RATM or shortened to Rage) was an American rock band formed in Los Angeles, California in 1991. The band consisted of vocalist Zack de la Rocha, bassist and backing vocalist Tim Commerford, guitarist Tom Morello, and drummer Brad Wilk. They melded heavy metal and rap music, punk rock and funk with anti-authoritarian and revolutionary lyrics. As of 2010, they had sold over 16 million records worldwide.[1] They were inducted into the Rock and Roll Hall of Fame in 2023.[2][3]",
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 / 100 available",
                price: 200,
                image: "/images/rage-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 20,
                title: "Red Hot Chili Peppers Concert",
                description:
                    "The Red Hot Chili Peppers are an American rock band formed in Los Angeles in 1982,[1] comprising vocalist Anthony Kiedis, bassist Flea, drummer Chad Smith, and guitarist John Frusciante. Their music incorporates elements of alternative rock, funk, punk rock, hard rock, hip hop, and psychedelic rock. Their eclectic range has influenced genres such as funk metal,[2] rap metal,[3] rap rock,[4] and nu metal.[5][3] With over 120 million records sold worldwide, the Red Hot Chili Peppers are one of the top-selling bands of all time.[6] They hold the records for most number-one singles (15), most cumulative weeks at number one (91) and most top-ten songs (28) on the Billboard Alternative Songs chart.[7] They have won three Grammy Awards, were inducted into the Rock and Roll Hall of Fame in 2012, and in 2022 received a star on the Hollywood Walk of Fame.",
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 / 100 available",
                price: 400,
                image: "/images/rhcp-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 21,
                title: "No Doubt Concert",
                description:
                    "No Doubt is an American rock band formed in Anaheim, California in 1986. For most of its career, the band has consisted of vocalist and founding member Gwen Stefani, guitarist Tom Dumont, bassist Tony Kanal and drummer Adrian Young. Keyboardist Eric Stefani, Gwen's brother, was also a member when the band started to release albums in 1992. Since the mid-1990s, trombonist Gabrial McNair and trumpeter Stephen Bradley have performed with the band as session and touring musicians.",
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 / 100 available",
                price: 400,
                image: "/images/nodoubt-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 22,
                title: "Filter Concert",
                description:
                    'Filter is an American rock band formed in 1993 in Cleveland, Ohio, by singer Richard Patrick, along with guitarist and programmer Brian Liesegang. The band was formed when Patrick desired to start his own band after leaving Nine Inch Nails as their touring guitarist. Their debut album, Short Bus (1995) received platinum certification by the Recording Industry Association of America (RIAA), supported by the single "Hey Man Nice Shot." After the album, the band would go through the first of many lineup changes, leaving Patrick as the only consistent member across all releases.',
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 / 100 available",
                price: 300,
                image: "/images/filter-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 23,
                title: "Rage Against the Machine Concert",
                description:
                    "Rage Against the Machine (often abbreviated as RATM or shortened to Rage) was an American rock band formed in Los Angeles, California in 1991. The band consisted of vocalist Zack de la Rocha, bassist and backing vocalist Tim Commerford, guitarist Tom Morello, and drummer Brad Wilk. They melded heavy metal and rap music, punk rock and funk with anti-authoritarian and revolutionary lyrics. As of 2010, they had sold over 16 million records worldwide.[1] They were inducted into the Rock and Roll Hall of Fame in 2023.[2][3]",
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 / 100 available",
                price: 200,
                image: "/images/rage-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 24,
                title: "Red Hot Chili Peppers Concert",
                description:
                    "The Red Hot Chili Peppers are an American rock band formed in Los Angeles in 1982,[1] comprising vocalist Anthony Kiedis, bassist Flea, drummer Chad Smith, and guitarist John Frusciante. Their music incorporates elements of alternative rock, funk, punk rock, hard rock, hip hop, and psychedelic rock. Their eclectic range has influenced genres such as funk metal,[2] rap metal,[3] rap rock,[4] and nu metal.[5][3] With over 120 million records sold worldwide, the Red Hot Chili Peppers are one of the top-selling bands of all time.[6] They hold the records for most number-one singles (15), most cumulative weeks at number one (91) and most top-ten songs (28) on the Billboard Alternative Songs chart.[7] They have won three Grammy Awards, were inducted into the Rock and Roll Hall of Fame in 2012, and in 2022 received a star on the Hollywood Walk of Fame.",
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 / 100 available",
                price: 400,
                image: "/images/rhcp-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 25,
                title: "No Doubt Concert",
                description:
                    "No Doubt is an American rock band formed in Anaheim, California in 1986. For most of its career, the band has consisted of vocalist and founding member Gwen Stefani, guitarist Tom Dumont, bassist Tony Kanal and drummer Adrian Young. Keyboardist Eric Stefani, Gwen's brother, was also a member when the band started to release albums in 1992. Since the mid-1990s, trombonist Gabrial McNair and trumpeter Stephen Bradley have performed with the band as session and touring musicians.",
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 / 100 available",
                price: 400,
                image: "/images/nodoubt-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 26,
                title: "Filter Concert",
                description:
                    'Filter is an American rock band formed in 1993 in Cleveland, Ohio, by singer Richard Patrick, along with guitarist and programmer Brian Liesegang. The band was formed when Patrick desired to start his own band after leaving Nine Inch Nails as their touring guitarist. Their debut album, Short Bus (1995) received platinum certification by the Recording Industry Association of America (RIAA), supported by the single "Hey Man Nice Shot." After the album, the band would go through the first of many lineup changes, leaving Patrick as the only consistent member across all releases.',
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 / 100 available",
                price: 300,
                image: "/images/filter-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 27,
                title: "Rage Against the Machine Concert",
                description:
                    "Rage Against the Machine (often abbreviated as RATM or shortened to Rage) was an American rock band formed in Los Angeles, California in 1991. The band consisted of vocalist Zack de la Rocha, bassist and backing vocalist Tim Commerford, guitarist Tom Morello, and drummer Brad Wilk. They melded heavy metal and rap music, punk rock and funk with anti-authoritarian and revolutionary lyrics. As of 2010, they had sold over 16 million records worldwide.[1] They were inducted into the Rock and Roll Hall of Fame in 2023.[2][3]",
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 / 100 available",
                price: 200,
                image: "/images/rage-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 28,
                title: "Red Hot Chili Peppers Concert",
                description:
                    "The Red Hot Chili Peppers are an American rock band formed in Los Angeles in 1982,[1] comprising vocalist Anthony Kiedis, bassist Flea, drummer Chad Smith, and guitarist John Frusciante. Their music incorporates elements of alternative rock, funk, punk rock, hard rock, hip hop, and psychedelic rock. Their eclectic range has influenced genres such as funk metal,[2] rap metal,[3] rap rock,[4] and nu metal.[5][3] With over 120 million records sold worldwide, the Red Hot Chili Peppers are one of the top-selling bands of all time.[6] They hold the records for most number-one singles (15), most cumulative weeks at number one (91) and most top-ten songs (28) on the Billboard Alternative Songs chart.[7] They have won three Grammy Awards, were inducted into the Rock and Roll Hall of Fame in 2012, and in 2022 received a star on the Hollywood Walk of Fame.",
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 / 100 available",
                price: 400,
                image: "/images/rhcp-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 29,
                title: "No Doubt Concert",
                description:
                    "No Doubt is an American rock band formed in Anaheim, California in 1986. For most of its career, the band has consisted of vocalist and founding member Gwen Stefani, guitarist Tom Dumont, bassist Tony Kanal and drummer Adrian Young. Keyboardist Eric Stefani, Gwen's brother, was also a member when the band started to release albums in 1992. Since the mid-1990s, trombonist Gabrial McNair and trumpeter Stephen Bradley have performed with the band as session and touring musicians.",
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 / 100 available",
                price: 400,
                image: "/images/nodoubt-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 30,
                title: "Filter Concert",
                description:
                    'Filter is an American rock band formed in 1993 in Cleveland, Ohio, by singer Richard Patrick, along with guitarist and programmer Brian Liesegang. The band was formed when Patrick desired to start his own band after leaving Nine Inch Nails as their touring guitarist. Their debut album, Short Bus (1995) received platinum certification by the Recording Industry Association of America (RIAA), supported by the single "Hey Man Nice Shot." After the album, the band would go through the first of many lineup changes, leaving Patrick as the only consistent member across all releases.',
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 / 100 available",
                price: 300,
                image: "/images/filter-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 31,
                title: "Rage Against the Machine Concert",
                description:
                    "Rage Against the Machine (often abbreviated as RATM or shortened to Rage) was an American rock band formed in Los Angeles, California in 1991. The band consisted of vocalist Zack de la Rocha, bassist and backing vocalist Tim Commerford, guitarist Tom Morello, and drummer Brad Wilk. They melded heavy metal and rap music, punk rock and funk with anti-authoritarian and revolutionary lyrics. As of 2010, they had sold over 16 million records worldwide.[1] They were inducted into the Rock and Roll Hall of Fame in 2023.[2][3]",
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 / 100 available",
                price: 200,
                image: "/images/rage-img-1.jpg",
                reserved: {
                    userId: null
                }
            },
            {
                id: 32,
                title: "Red Hot Chili Peppers Concert",
                description:
                    "The Red Hot Chili Peppers are an American rock band formed in Los Angeles in 1982,[1] comprising vocalist Anthony Kiedis, bassist Flea, drummer Chad Smith, and guitarist John Frusciante. Their music incorporates elements of alternative rock, funk, punk rock, hard rock, hip hop, and psychedelic rock. Their eclectic range has influenced genres such as funk metal,[2] rap metal,[3] rap rock,[4] and nu metal.[5][3] With over 120 million records sold worldwide, the Red Hot Chili Peppers are one of the top-selling bands of all time.[6] They hold the records for most number-one singles (15), most cumulative weeks at number one (91) and most top-ten songs (28) on the Billboard Alternative Songs chart.[7] They have won three Grammy Awards, were inducted into the Rock and Roll Hall of Fame in 2012, and in 2022 received a star on the Hollywood Walk of Fame.",
                date: "1/12/2025",
                location: "CalCoast Open Air Theatre",
                tickets: "100 / 100 available",
                price: 400,
                image: "/images/rhcp-img-1.jpg",
                reserved: {
                    userId: null
                }
            }
        ];

        const limit = new URL(request.url).searchParams.get("_limit");
        const events = limit ? eventsData.slice(0, Number(limit)) : eventsData;

        if (!limit) return HttpResponse.json(eventsData);

        return HttpResponse.json(events);
    })
];
