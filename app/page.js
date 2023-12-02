import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <>
      <main>
        <div className="hero">
          <header className="container mx-auto flex px-10">
            <section className="w-1/2 flex justify-center flex-col context">
              <div>
                {" "}
                <h1 className="text-6xl font-bold">
                  Hi, I'm <span className="text-accent">Abdul-Rauf.</span>
                </h1>
                <p className="text-2xl mt-10">
                  I'm a software engineer based in Ghana
                </p>
                <Link href="mailto:abdulraufalhassan101010@gmail.com">
                  <button className="bg-accent hover:bg-secondary text-white font-bold rounded-full p-5 px-10 mt-10">
                    Contact Me
                  </button>
                </Link>
                <div className="mt-10">
                  <div>
                    <small>Connect with me at</small>
                  </div>
                  <div className="flex gap-10">
                    {" "}
                    <div>
                      <Link
                        href="https://github.com/AbdulRaufAl-hassan101010"
                        target="_blank"
                      >
                        <i className="fa-brands fa-github fa-2xl"></i>
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="https://www.linkedin.com/in/abdul-rauf-alhassan-b1b4a2225/"
                        target="_blank"
                      >
                        <i className="fa-brands fa-linkedin fa-2xl"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-1/2 bg-secondary flex justify-center flex-col hero-img pt-20 pl-20 ">
              <Image
                src="/assets/imgs/hero.png"
                alt="Hero"
                className="w-full"
                width={400}
                height={200}
              />
            </section>
          </header>
        </div>

        <section
          className="about container mx-auto px-10 py-20 mb-5"
          id="about"
        >
          <div className="wrapper">
            <h2 className="header mb-10 text-accent">About Me.</h2>
            <p className="mb-20" id="about">
              I am a software engineer based in Ghana. , I started my
              programming journey in 2019 as a self taught developer and I have
              been learning and building ever since. I am currently an{" "}
              <span className="text-accent">
                alumnus student of Alx (2022-2023)
              </span>{" "}
              . I have a passion for developing software solutions that solve
              real world problems. I am proficient in JavaScript and I have
              experience working with React, React Native, NodeJS, ExpressJS,
              MongoDB, mysql, nextjs, python , flask, no my way around the linux
              distribution system like (ubuntu). I can create secure rest apis
              and host and config servers with load balancers. I am currently
              learning automation with python and machine learning and I am very
              interested in learning more about machine learning.
            </p>

            <div>
              <h3 className="header text-accent">My Skills.</h3>
              <li>Javascript, Reactjs, Nextjs</li>
              <li>Redux And Reduxtoolkit</li>
              <li>HTLM, CSS And Boostrap</li>
              <li>React Native</li>
              <li>Nodejs And Express</li>
              <li>MongoDb and Mongoose</li>
              <li>Mysql</li>
              <li>Python And Flask</li>
              <li>Linux Distrubution Like (Ubuntu)</li>
              <li>Automation With Bash And Python</li>
              <li>Nginx And HAproxy</li>
              <li>Version Control Such As (Git And Github)</li>
            </div>
          </div>
        </section>

        <section
          className="container mx-auto bg-accent py-20 px-10 text-white mb-20"
          id="portfolio"
        >
          <h3 className="header mb-10">Portfolio Projects</h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-10">
            <article className="">
              <Image
                src="/assets/imgs/Clippy.png"
                alt="Hero"
                className="mb-10 w-full"
                width={200}
                height={200}
              />
              <div className="flex gap-5">
                {" "}
                <Link
                  href={"https://clippy-phi.vercel.app/"}
                  target="_blank"
                  className="bg-white text-accent p-5 rounded-full"
                >
                  Visit Clippy
                </Link>
                <Link
                  href={"https://github.com/AbdulRaufAl-hassan101010/clippy"}
                  target="_blank"
                  className="bg-white text-accent p-5 rounded-full"
                >
                  Github Repo
                </Link>
              </div>
            </article>

            <article className="">
              <Image
                src="/assets/imgs/Clippy.png"
                alt="Hero"
                className="mb-10 w-full"
                width={400}
                height={200}
              />
              <div className="flex gap-5">
                <Link
                  href={"https://bonifytech.tech"}
                  target="_blank"
                  className="bg-white text-accent p-5 rounded-full"
                >
                  Visit freelance
                </Link>
                <Link
                  href={"https://github.com/AbdulRaufAl-hassan101010/freelance"}
                  target="_blank"
                  className="bg-white text-accent p-5 rounded-full"
                >
                  Github Repo
                </Link>
              </div>
            </article>

            <article className="">
              <Image
                src="/assets/imgs/Clippy.png"
                alt="Hero"
                className="mb-10 w-full"
                width={200}
                height={200}
              />
              <div className="flex gap-5">
                <Link
                  href={
                    "https://drive.google.com/file/d/1oXLmyQnG1_KieBnRgh1CUfRM6ylM471C/view?usp=sharing"
                  }
                  target="_blank"
                  className="bg-white text-accent p-5 rounded-full"
                >
                  Retail App Demo
                </Link>
                <Link
                  href={"https://github.com/AbdulRaufAl-hassan101010/aught"}
                  target="_blank"
                  className="bg-white text-accent p-5 rounded-full"
                >
                  Github Repo
                </Link>
              </div>
            </article>

            <article className="">
              <Image
                src="/assets/imgs/Clippy.png"
                alt="Hero"
                className="mb-10 w-full"
                width={200}
                height={200}
              />
              <div className="flex gap-5">
                <Link
                  href={"https://www.youtube.com/watch?v=iov99BA7VeU"}
                  target="_blank"
                  className="bg-white text-accent p-5 rounded-full"
                >
                  Online store Demo
                </Link>
                <Link
                  href={"https://github.com/AbdulRaufAl-hassan101010/ghantrade"}
                  target="_blank"
                  className="bg-white text-accent p-5 rounded-full"
                >
                  Github Repo
                </Link>
              </div>
            </article>
          </div>
          <div className="header">
            NB: I couldn't upload some projects because of the hosting fees,
            please checkout my github for more projects
          </div>
        </section>

        <section className="container mx-auto mb-20 py-20 px-10">
          <h3 className="header mb-20">Certificates</h3>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <div className="bg-secondary">
              <Image
                src={"/assets/imgs/alx.png"}
                className="w-full"
                alt="cert image"
                width={600}
                height={200}
              ></Image>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-secondary">
        <div className="container mx-auto py-20 px-10">
          <h4 className="header">Contacts</h4>
          <div className="grid sm:grid-cols-1 md:grid-cols-2">
            <address>
              <ul className="list-none">
                <li className="mb-3">
                  <Link href="mailto:abdulraufalhassan101010@gmail.com">
                    Email: abdulraufalhassan101010@gmail.com
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="+233202511342">Phone: +233202511342</Link>
                </li>
                <li className="mb-3">
                  <Link href="+233202511342">City: Greater-Accra</Link>
                </li>
                <li className="mb-3">
                  <Link href="+233202511342">Country: Ghana 🇬🇭</Link>
                </li>
              </ul>
            </address>
            <div className="flex gap-5 justify-end">
              <Link href="mailto:abdulraufalhassan101010@gmail.com">
                <button className="bg-accent hover:bg-secondary text-white font-bold rounded-full p-5 px-10 mt-10">
                  Resume
                </button>
              </Link>
              <Link href="mailto:abdulraufalhassan101010@gmail.com">
                <button className="bg-accent hover:bg-secondary text-white font-bold rounded-full p-5 px-10 mt-10">
                  A Job Will Be Nice 😃
                </button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default page;
