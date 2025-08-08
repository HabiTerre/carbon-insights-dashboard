import React, { createContext, useContext, useMemo } from "react";
import { useParams } from "react-router-dom";

export type ProjectContextValue = {
  projectSlug: string | null;
};

const ProjectContext = createContext<ProjectContextValue | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { projectSlug } = useParams<{ projectSlug: string }>();

  const value = useMemo<ProjectContextValue>(() => ({
    projectSlug: projectSlug ?? null,
  }), [projectSlug]);

  return (
    <ProjectContext.Provider value={value}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = (): ProjectContextValue => {
  const ctx = useContext(ProjectContext);
  if (!ctx) {
    throw new Error("useProject must be used within a ProjectProvider");
  }
  return ctx;
};
