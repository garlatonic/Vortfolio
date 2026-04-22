"use client";

import { useEffect } from "react";
import { projects } from "@/data/projects";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Video from "@/components/ui/video";
import GithubIcon from "@/components/common/github-icon";
import SectionTitle from "@/components/common/section-title";
import SectionWrapper from "@/components/common/section-wrapper";
import ImageGrid from "@/app/projects/[slug]/_components/image-grid";
import Description from "@/app/projects/[slug]/_components/description";
import TroubleShooting from "@/components/project-detail/trouble-shooting";
import { Fragment } from "react/jsx-runtime";
import Modal from "./modal";
import Heading from "../project-detail/heading";
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
