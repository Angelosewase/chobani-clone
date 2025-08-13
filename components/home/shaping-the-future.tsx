import React from "react";
import Image from "next/image";

const chobaniInitiatives = [
  {
    title: "Community Wellness",
    description:
      "By volunteering our time, donating our products, and supporting impactful charitable programs, we're strengthening our communities and helping those in need.",
    buttonText: "Read more",
    image:
      "https://images.ctfassets.net/01to7kbtr3az/6d8N5fWbVJozdSfVErReSy/c2be29d61a13885372ee41334a54667a/Sustainability7.svg",
  },
  {
    title: "Inclusivity",
    description:
      "At Chobani, we champion inclusion and belonging. Inclusion and belonging are a foundational part of our ethos, our policies, and our guiding voice—and will remain as we move on the path forward.",
    buttonText: "Read more",
    image:
      "https://images.ctfassets.net/01to7kbtr3az/zJLIam0ILZb3pWe1ieumR/d5f867b6373ee0fad65b2fef86be07ee/Nutritional_CHO_Shape_Illus_HealthWellness_MoreThanFood_RGB.svg",
  },
  {
    title: "Food Insecurity",
    description:
      "We believe access to good food is a right, not a privilege, which is why we are actively fighting to eradicate food insecurity in America - especially in the communities where we operate.",
    buttonText: "Read more",
    image:
      "https://images.ctfassets.net/01to7kbtr3az/40F3UTN2tvh9m2aRKNj3Cl/cb9f5675e08f966adabbea6dcee835b8/Social_Strengthening_rural_communities_website.svg",
  },
  {
    title: "Sustainability",
    description:
      "At Chobani, we strive to make a positive impact on the people, communities and environment around us because we believe it is business’ responsibility.",
    buttonText: "Read more",
    image:
      "https://images.ctfassets.net/01to7kbtr3az/4HXijcinYStxzmKxowkrNU/ad9651ed78d2cc62459e2a9648f88878/Environmental_Zero_waste_to_landfill_A_website.svg",
  },
];

export default function ShapingTheFuture() {
  return (
    <div
      className="bg-no-repeat bg-cover min-h-screen  container mx-auto pt-20"
      style={{
        backgroundImage: `url(https://images.ctfassets.net/01to7kbtr3az/1qBB8DT0vw5hCWueGMp3rQ/18082c9c7302037b49ba1d304a917e5f/Shapingthefuture.svg?w=1258)`,
      }}
    >
      <h1 className="text-[69px] leading-20  font-thin text-center text-white ">
        Chobani is Shaping <br /> the Future of Food
      </h1>
      <div className="gap-12 flex items-center justify-center  mt-24 px-40">
        {chobaniInitiatives.map((initiative, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image
              src={initiative.image}
              alt={initiative.title}
              width={150}
              height={150}
            />
            <h2 className="text-white text-xl mb-4 mt-4">{initiative.title}</h2>
            <p className="text-white  tex-center text-sm  mb-8">{initiative.description}</p>
            <button className=" border-white border-2 text-white py-1 px-2  rounded">
              {initiative.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
