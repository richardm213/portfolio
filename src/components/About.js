import "./style.css";
export const About = () => {
  return (
    <div>
      <div
        className="center"
        style={{ fontSize: "32px", marginTop: "1.3em", marginBottom: "0.5em" }}
      >
        Richard Meng
      </div>
      <img src="richard.jpeg" alt="Richard" width="200" />
      <div class="center text1" style={{ marginTop: "0.5em" }}>
        I’m currently a 3rd year Computer Science major at UC Irvine. Some of my
        hobbies include tennis, chess, photography, and long walks at the beach.
      </div>
      <div class="center" style={{ marginTop: "1em", marginBottom: "2em" }}>
        <a href="mailto:rmeng3@uci.edu">rmeng3@uci.edu</a> &nbsp;
        <a href="https://github.com/richardm213">GitHub</a> &nbsp;
        <a href="https://www.linkedin.com/in/richard-meng-92348b194">
          Linkedin
        </a>
      </div>
    </div>
  );
};
