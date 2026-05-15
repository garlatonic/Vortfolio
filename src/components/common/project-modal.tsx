"use client";
import { useEffect } from "react";
import { projects } from "@/data/projects";
import Modal from "./modal";
import ProjectDetail from "../project-detail";

type ProjectModalProps = {
  slug: string | null;
  onClose: () => void;
};

export default function ProjectModal({ slug, onClose }: ProjectModalProps) {
  const project = slug ? projects.find((p) => p.slug === slug) : null;

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  if (!project) return null;

  return (
    <Modal onClose={onClose}>
      <ProjectDetail project={project} isModal />
    </Modal>
  );
}
