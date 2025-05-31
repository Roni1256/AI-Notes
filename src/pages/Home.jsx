import {
  BookText,
  Brain,
  FileText,
  LayoutDashboard,
  Sparkles,
  Star,
} from "lucide-react";
import React from "react";
import CategoryCard from "../components/Universal/CategoryCard";
import subjects from "../data/subjects";

const Home = () => {
  const NoteFormats = [
    {
      icon: <BookText size={30} />,
      title: "Full-Fludged Notes",
      desc: "Detailed explanations and in-depth coverage",
      color: "text-red-400 bg-red-200",
    },
    {
      icon: <Star size={30} />,
      title: "Last-Minute Revision Notes",
      desc: "Summarized key points for quick review",
      color: "text-yellow-400 bg-yellow-200",
    },
    {
      icon: <FileText size={30} />,
      title: "One-Pagers",
      desc: "Compact cheat sheets with key concepts only",
      color: "text-blue-400 bg-blue-200",
    },
    {
      icon: <Brain size={30} />,
      title: "Conceptual Overviews",
      desc: "Focus on understanding core concepts",
      color: "text-purple-400 bg-purple-200",
    },
  ];

  return (
    <div className="p-6 ">
      <section className="p-5 md:p-10 lg:p-20 bg-neutral-900 text-white rounded-lg">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold  ">
          Your <span className="text-red-400">AI-Powered</span> Study Companion
        </h1>
        <p className="text-md md:text-lg lg:text-xl mt-6 max-w-2/3 ">
          Discover AI-generated notes for any subject and organize your study
          materials all in one place.
        </p>
        <div className="flex items-center mt-8 gap-10">
          <button className="flex items-center gap-3 p-2 px-4 md:text-lg font-semibold text-white bg-red-400 rounded-lg">
            <Sparkles />
            Explore AI
          </button>
          <button className="flex items-center gap-3 p-2 px-4 md:text-lg font-semibold bg-white text-neutral-900 rounded-lg">
            <LayoutDashboard />
            My Workspace
          </button>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex  items-center justify-between">
          <h1 className="text-2xl font-semibold  ">Browse by Category</h1>
          <button className="text-neutral-800 hover:text-neutral-900 hover:underline cursor-pointer ">
            View all subjects
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 ">
          {subjects
            .slice(0, 5)
            .map(({ category, icon: Icon, subjects }, index) => {
              return (
                <CategoryCard
                  key={index}
                  icon={<Icon size={50} />}
                  title={category}
                  topics={subjects}
                  notes={category.length}
                />
              );
            })}
        </div>
      </section>
      <section className="mt-10">
        <div className="flex  items-center justify-between">
          <h1 className="text-2xl font-semibold  ">Choose Your Note Format</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {NoteFormats.map(({ icon, title, desc, color }, i) => {
            return (
              <div
                className="p-5 rounded-md border border-gray-200 flex flex-col items-center"
                key={i}
              >
                <div className={"p-3 rounded-md w-fit " + color}>{icon}</div>
                <h1 className="text-xl font-semibold mt-4">{title}</h1>
                <p className="text-md mt-1">{desc}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="mt-10">
        <div className="flex  items-center justify-between">
          <h1 className="text-2xl font-semibold  ">Trending Subjects</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
          {
            subjects.slice(0, 5).map(({ category, icon: Icon, subjects }, index) => {
              return (
                <CategoryCard
                  key={index}
                  icon={<Icon size={50} />}
                  title={category}
                  topics={subjects}
                  notes={category.length}
                />
              );
            })
          }
        </div>
      </section>
    </div>
  );
};

export default Home;
