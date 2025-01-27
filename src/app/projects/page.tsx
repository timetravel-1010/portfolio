import { ProjectsSection } from "@/components/projects-section";

export default function Projects() {
    return (
        <>
            <h1 className="text-4xl font-bold">Projects</h1>
            <div className="space-y-4 text-lg">
                <p>
                    Below you can find some personal projects I have done before.
                </p>
                <p>
                    Some are toy projects for fun, others are for learning purposes and
                    maybe many of them are still under construction or unfinished.
                </p>
            </div>
            <ProjectsSection layout="list" />
        </>
    );
}
