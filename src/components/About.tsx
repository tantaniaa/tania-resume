
const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Tania at work"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-4">
              I'm an experienced Product Manager skilled in product development, pricing strategies, and leading cross-functional teams. My focus is on aligning products with business goals to enhance customer engagement and business performance.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              I hold a Bachelor of Business Commerce from Monash University. Beyond my professional roles, I've also taken leadership positions, such as serving as IBM Committee President, where I organized events to improve employee well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
