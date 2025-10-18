import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

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

    if (loading) return <p>Loading projects...</p>;

    return (
        <section className="projectsGrid" id="projects">
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
                        <a href={project.live_url} target="_blank" rel="noreferrer">Live</a>
                        <a href={project.github_url} target="_blank" rel="noreferrer">Code</a>
                    </div>
                </div>
            ))}
        </section>
    );
}
