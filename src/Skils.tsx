import {
    Zap,
    Code2,
    Layout,
    Lightbulb,
    GitBranch,
    Database,
    Server,
    Network,
    Wrench,
    Sparkles,
    Cpu,
    Loader,
    Cloud
} from "lucide-react";

export default function Skills() {
    return (
        <section className="skillsPage" id="skills">
            <h1>Skills and Expertise</h1>
            <p>Technologies and tools I've worked with</p>

            {/* Frontend Development Section */}
            <div className="techCategory">
                <h2>FrontEnd Development</h2>
                <p>Mastered Basic Frontend Web Technologies</p>
            </div>
            <div className="skillsContent">
                <div className="skillCard">
                    <Sparkles className="icon" />
                    <span>AI Development</span>
                </div>

                <div className="skillCard">
                    <Code2 className="icon" />
                    <span>JavaScript</span>
                </div>

                <div className="skillCard">
                    <Layout className="icon" />
                    <span>Html/CSS</span>
                </div>

                <div className="skillCard">
                    <Lightbulb className="icon" />
                    <span>React.Js</span>
                </div>

                <div className="skillCard">
                    <GitBranch className="icon" />
                    <span>Git-Hub</span>
                </div>
            </div>

            {/* Backend Development Section */}
            <div className="techCategory">
                <h2>Backend Development</h2>
                <p>Actively Mastering Sort after Backend Technologies</p>
            </div>
            <div className="skillsContent">
                <div className="skillCard">
                    <Database className="icon" />
                    <span>Database</span>
                </div>

                <div className="skillCard">
                    <Server className="icon" />
                    <span>SQL Tables</span>
                </div>

                <div className="skillCard">
                    <Network className="icon" />
                    <span>API</span>
                </div>

                <div className="skillCard">
                    <Wrench className="icon" />
                    <span>Supabase</span>
                </div>

            </div>

            {/* AI and Innovation Section */}
            <div className="techCategory">
                <h2>AI and Innovation Development</h2>
                <p>Actively migrating to emerging and sort after Ai technologies</p>
            </div>
            <div className="skillsContent">
                <div className="skillCard">
                    <Zap className="icon" />
                    <span>Supabase Integrations</span>
                </div>

                <div className="skillCard">
                    <Sparkles className="icon" />
                    <span>AI Development</span>
                </div>

                <div className="skillCard">
                    <Cpu className="icon" />
                    <span>Prompt Engineering</span>
                </div>

                <div className="skillCard">
                    <Cloud className="icon" />
                    <span>Loveable Cloud</span>
                </div>
            </div>
        </section>
    );
}