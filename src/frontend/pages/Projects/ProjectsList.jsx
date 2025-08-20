function ProjectsList() {
  return (
    <div>
      <h2 className="sm:text-4x1 text-3x1 font-medium title-font mb-4 text-white">
        Here are some Web Applications I have built
      </h2>
      <section className="lg:w-2/3 mx-auto leading-relaxed text-base">
        The apps I built are as follows:
        <div className="border-2 border-indigo-600">
          <ol>ReadMe Generator- JQuery / NodeJS</ol>
          <ol>Password Generator- HTML / Javascript</ol>
          <ol>
            Sunshine Places Recommendation App- Javascript / HTML / Bootstrap /
            API
          </ol>
          <br></br>
        </div>
      </section>
    </div>
  );
}

export default ProjectsList;
