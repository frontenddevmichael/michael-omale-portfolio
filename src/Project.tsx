import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import toast from "react-hot-toast";
import projectImg from './assets/prrojectImg.png';

// Initialize Supabase client
const supabaseUrl = "https://hleoxybfoudmqkclviiu.supabase.co";
const supabaseKey = "sb_publishable_ux4j4nP0hOtY7VW2vileGw_eOmoN4Rb"; // NOT secret key
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            const { data, error } = await supabase.from("projects").select("*");

            if (error) {
                console.error("Error fetching projects:", error);
            } else {
                setProjects(data);
            }
            setLoading(false);
        };

        fetchProjects();
    }, []);

    const handlePrivateClick = () => {
        toast("Access restricted — Private project 🔒" , {
            style: {
                borderRadius: "10px",
                background: "#cc0000ff",
                color: "#fff",
                fontWeight: '400',
                fontSize: '.7rem',
            },
        });
    };

    if (loading) return <p>Loading projects...</p>;
    
    return (
        
      <>
    <div className="projectsHeading">
                <h1>Projects</h1>
                <p>some of my most recent projects</p>
    </div>
            <section className="projectsGrid" id="projects">
                {/* Render fetched projects */}
                {projects.map((project) => (
                    <div key={project.id} className="projectCard">
                        <img src={project.image_url} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="techStack">
                            {project.tech_stack?.map((tech, index) => (
                                <span key={index}>{tech}</span>
                            ))}
                        </div>
                        <div className="links">
                            <a href={project.live_url} target="_blank" rel="noreferrer">
                                Live
                            </a>
                            <a href={project.github_url} target="_blank" rel="noreferrer">
                                Code
                            </a>
                        </div>
                    </div>
                ))}

                {/* Hardcoded Private Project */}
                <div className="projectCard">
                    <img
                        src={projectImg}
                    />
                    <h3>Africa Ai hackathon</h3>
                    <p>AI Hackathon Africa – Web Platform
                        Contributed as part of a cross-functional team to build the front­end and integration for the official hackathon web portal.</p>
                    <div className="techStack">
                        <span>React</span>
                        <span>Tailwind</span>
                        <span>Supabase</span>
                    </div>
                    <div className="links flex gap-3">
                        {/* Code button (restricted) */}
                        <button
                            onClick={handlePrivateClick}
                            className="px-4 py-2 bg-[#2d2d2d] text-white rounded-md hover:bg-[#444] transition font-medium shadow-sm"
                        >
                            Code
                        </button>

                        {/* Live button (styled differently) */}
                        <a
                            href="https://www.aihackathon.africa/"
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 bg-[#00c853] text-black rounded-md hover:bg-[#00e676] transition font-semibold shadow-md"
                        >
                            Live
                        </a>
                    </div>

                </div>
            </section>
            </>
    );
}
