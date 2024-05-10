export default function Home() {
  return (
    <section className="flex flex-col mt-8">
      <header className="flex flex-col-reverse items-center md:flex-row justify-between lg:w-2/3 lg:m-auto p-8">
        {/* Name */}
        <section className="flex flex-col text-[#2b4257] font-serif items-center">
          <section className="flex flex-col items-center justify-center md:items-start md:pb-8 md:border-b-2 md:border-b-[#6da7cc]">
            <section className="text-6xl pb-4 tracking-wider">Ashwini </section>
            <section className="text-6xl tracking-wider"> Surve</section>
          </section>
          <section className="font-sans text-2xl pt-8">
            FULL-STACK DEVELOPER
          </section>
        </section>

        {/* Photo */}
        <section>
          <section>
            <img
              src="./images/ashwini.jpeg"
              className="h-60 w-60 rounded-full border-4 border-[#345e7d]"
            />
          </section>
        </section>
      </header>

      <main className="lg:w-2/3 m-auto border-t-2 border-t-[#6da7cc] flex flex-row p-auto font-sans text-[#2b4257]  tracking-wide">
        {/* Summary, Skills, Language, Location */}
        <aside className="w-2/3 md:w-3/5 lg:w-5/6 p-8 border-r-2 border-r-[#6da7cc]">
          <article className="pb-6">
            <h4 className="pb-4 text-xl font-medium">PROFILE</h4>
            <section className="m-1">
              A passionate programmer with 10 years of experience developing
              web-based applications using Javascript(ES6), Angular, React.js,
              Node.js, Python. Advanced Object-Oriented skills with a passion
              for writing clean code and utilizing emerging technologies to
              provide the best solutions. Proven records of excellent public
              speaking skills, utilized in various presentations and training.
            </section>
          </article>

          <article className="pb-6">
            <h4 className="pb-4 text-xl font-medium">SKILLS</h4>
            <section className="font-sans grid  gap-4 md:grid-cols-2 sm:grid-cols-1 2xl:grid-cols-3">
              <section className="m-1">
                <section className="font-medium pb-2"> Core</section>
                <section className="block">Javascript</section>
                <section className="block">HTML</section>
                <section className="block">CSS</section>
              </section>

              <section className="m-1">
                <section className="font-medium pb-2">JS frameworks</section>
                <section className="block">Angular</section>
                <section className="block">ReactJS</section>
              </section>

              <section className="m-1">
                <section className="font-medium pb-2">Backend</section>
                <section className="block">NodeJS</section>
                <section className="block">Python</section>
              </section>

              <section className="m-1">
                <section className="font-medium pb-2">Database</section>
                <section className="block">MongoDB</section>
                <section className="block">mySQL</section>
                <section className="block">PostgreSQL</section>
              </section>

              <section className="m-1">
                <section className="font-medium pb-2">CSS Frameworks</section>
                <section className="block">SASS</section>
                <section className="block">Styled Components</section>
                <section className="block">Tailwind CSS</section>
              </section>

              <section className="m-1">
                <section className="font-medium pb-2">JS Libraries</section>
                <section className="block">D3.js</section>
                <section className="block">jQuery</section>
              </section>

              <section className="m-1">
                <section className="font-medium pb-2">State Management</section>
                <section className="block">NgRx</section>
                <section className="block">Redux</section>
              </section>

              <section className="m-1">
                <section className="font-medium pb-2">UI Libraries</section>
                <section className="block">Angular Material</section>
                <section className="block">PrimeNG</section>
              </section>

              <section className="m-1">
                <section className="font-medium pb-2">Other</section>
                <section className="block">Mentoring</section>
                <section className="block">Client Demos</section>
              </section>
            </section>
          </article>

          <article className="pb-6">
            <h4 className="pb-4 text-xl font-medium">EDUCATION</h4>
            <section className="m-1">
              <section className="pb-4 font-medium">Mumbai University</section>
              <section className="pb-4">
                Masters of Computer Application
              </section>
              <section className="">2009 - 2012</section>
            </section>
          </article>

          <article className="pb-6">
            <h4 className="pb-4 text-xl font-medium">LANGUAGES</h4>
            <section className="font-sans m-1">English - Advanced</section>
          </article>
        </aside>

        {/* Contact, Experience, References */}
        <aside className="p-8">
          <article className="pb-6">
            <h4 className="pb-4 text-xl font-medium">CONNECT</h4>
            <section className="m-1">
              <section className="pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a
                  className="pl-4"
                  href="https://www.calendly.com/ashwini_surve"
                  target="_blank"
                >
                  Calendly
                </a>
              </section>
              <section className="pb-4">
                <img src="./images/linkedin.png" className="h-5 w-5 inline" />
                <a
                  className="pl-4"
                  href="https://www.linkedin.com/in/ashwinisurve/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </section>

              <section className="pb-4">
                <img src="./images/github.png" className="h-5 w-5 inline" />
                <a
                  className="pl-4"
                  href="https://www.github.com/surveashwini"
                  target="_blank"
                >
                  Github
                </a>
              </section>
              <section className="font-sans">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-1.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                    clipRule="evenodd"
                  />
                </svg>
                <a
                  className="pl-4"
                  href="https://ashwinisurve.medium.com/"
                  target="_blank"
                >
                  Blog
                </a>
              </section>
            </section>
          </article>

          <article className="pb-6">
            <h4 className="pb-4 text-xl font-medium">WORK EXPERIENCE</h4>
            <section className="m-1">
              <section className="pb-4">
                <section className="font-medium pb-2">Stratacache</section>
                <section className="block">Front-End Software Developer</section>
                <section className="block">Nov 2022 - April 2024</section>
              </section>
              <section className="pb-4">
                <section className="font-medium pb-2">Stradigi AI</section>
                <section className="block">Developer 1</section>
                <section className="block">April 2022 - June 2022</section>
              </section>
              <section className="pb-4">
                <section className="font-medium pb-2">Vanhack</section>
                <section className="block">Developer 1</section>
                <section className="block">Sept 2021 - March 2022</section>
              </section>
              <section className="pb-4">
                <section className="font-medium pb-2"> BMC Software</section>
                <section className="block">
                  Staff Specialist Product Developer
                </section>
                <section className="block">Apr 2020 - Sep 2021</section>
              </section>
              <section className="pb-4">
                <section className="font-medium pb-2"> Zensar</section>
                <section className="block">Senior Software Engineer</section>
                <section className="block">Apr 2019 - Apr 2020</section>
              </section>
              <section className="pb-4">
                <section className="font-medium pb-2"> Globant</section>
                <section className="block">Senior Software Engineer</section>
                <section className="block">Jan 2016 - Mar 2019</section>
              </section>
              <section className="pb-4">
                <section className="font-medium pb-2">Entrata</section>
                <section className="block">Senior Engineer</section>
                <section className="block">Apr 2014 - Jan 2016</section>
              </section>
              <section className="">
                <section className="font-medium pb-2">CCS Group</section>
                <section className="block">Trainee Engineer</section>
                <section className="block">Aug 2012 - Apr 2014</section>
              </section>
            </section>
          </article>

          <article className="pb-6">
            <h4 className="pb-4 text-xl font-medium">LOCATION</h4>
            <section className="font-sans m-1">
              Ottawa, Ontario, Canada
            </section>
          </article>

          <article className="pb-6">
            <h4 className="pb-4 text-xl font-medium">REFERENCES</h4>
            <section className="m-1">Available upon request</section>
          </article>
        </aside>
      </main>
    </section>
  );
}
