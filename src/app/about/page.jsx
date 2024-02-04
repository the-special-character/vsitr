const IconShape = ({ title, desc}) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{desc}</h3>
      <input className="border rounded-md" type="checkbox" />
    </div>
  );
};

const color = "red";
const backgroundColor = "blue";

const About = () => {
  return (
    <>
      <h1
        style={{
          color: color,
          backgroundColor: backgroundColor,
        }}
      >
        Hello About Page
      </h1>
      <IconShape title="abc" desc="lorem1" />
      <IconShape title="pqr" desc="lorem2" />
    </>
  );
};

export default About;
