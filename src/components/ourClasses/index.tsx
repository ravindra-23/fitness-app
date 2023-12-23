import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Transform your strength with our dynamic weight training classes. Led by skilled instructors, these sessions empower you to build muscle, boost metabolism, and achieve your fitness goals with confidence.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Discover serenity through our rejuvenating yoga classes. Immerse yourself in a harmonious blend of movement and mindfulness, guided by experienced instructors, fostering physical well-being and inner tranquility.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Carve a strong core in our ab-focused classes. Ignite your abdominal muscles with targeted exercises, expert guidance, and a supportive community, paving the way to a sculpted and resilient midsection",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Embark on thrilling adventures with our adrenaline-pumping classes. From rock climbing to obstacle courses, challenge your limits, build resilience, and unleash the adventurer within for an exhilarating fitness journey.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Elevate your fitness game with our specialized training classes. Tailored workouts, expert guidance, and a motivating atmosphere ensure a transformative experience, unlocking your full potential and achieving your fitness goals.",
    image: image6,
  },
];

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Dive into a world of fitness variety with our diverse classes.
              From high-intensity workouts to mindful practices, our expertly
              crafted classes cater to all fitness levels, ensuring an engaging
              and rewarding experience.
            </p>
          </div>
        </motion.div>

        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
