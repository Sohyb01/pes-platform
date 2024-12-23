"use client";

import FormAddProject from "@/components/pes-custom/forms/FormAddProject";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { exampleProjects } from "@/lib/data";
import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const PortfolioProjects = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-h2">Projects</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button size="sm">
              <Plus size={16} />
              Add
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Project</DialogTitle>
              <FormAddProject />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {exampleProjects.map((project) => (
          <Link
            className="flex flex-col justify-between p-8 border bg-background rounded-[1rem] group hover:border-primary transition"
            href={project.project_url}
            key={project.project_id}
          >
            <div>
              <h3 className="text-h3">{project.project_name}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
            <ArrowRight className="ml-auto group-hover:stroke-primary group-hover:translate-x-1 transition" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PortfolioProjects;
