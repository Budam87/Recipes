import "../css/About.css";
import about from "../assets/cupcake.jpg";
import pan from "../assets/pan.webp";
import cookingcoding from "../assets/cookingcoding.jpg";

export function About() {
  return (
    <div className="about-wrapper">
      <div className="column-content">
        <h1>ABOUT</h1>
        <img src={about} alt="cupcake-buddah" />
        <h2>ABOUT FOODIE BUDDHA</h2>
        <p>
          Hello, my name is Mindaugas Buda and this recipe project is just a
          final project in my Code Academy course. I have picked this project
          because it is possible to find some points of contact in preparing the
          food and writing lines of code. One involves writing lines of code to
          create software, while the other involves combining ingredients to
          create culinary masterpieces. However, both require a mix of
          creativity and precision, following recipes or algorithms, and the
          ability to troubleshoot when things don’t go as planned. Let’s delve
          into how these two fields are strikingly similar and explore how
          mastering one can provide insights into the other.
        </p>
        <img src={pan} alt="guy-with-the-pan" />
        <p>
          A recipe in cooking is much like an algorithm in programming. It
          provides a step-by-step guide on how to achieve a specific result,
          whether that be a delectable dish or a functional piece of software.
          Both recipes and algorithms begin with a list of required
          resources—ingredients in cooking and inputs in programming.
        </p>
        <img src={cookingcoding} alt="cooking-like-coding" />
        <p>
          I have started to cook when i left my momma's house when i was 23, and
          now after 13 years i have started the journey in writing the code,
          these are the first steps in the coding school, let's hope i will find
          enough motivation and stubbornness to continue this way, because it is
          really interesting. :)
        </p>
      </div>
    </div>
  );
}
