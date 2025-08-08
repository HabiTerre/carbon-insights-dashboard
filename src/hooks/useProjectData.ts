import { useProject } from "@/context/ProjectContext";
import { useState, useEffect } from 'react';

// This hook will handle fetching project-specific data based on the URL slug
export const useProjectData = () => {
  const { projectSlug } = useProject();
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      if (!projectSlug) {
        setError('No project slug provided');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        // TODO: Replace with actual API call to fetch project data
        // For now, simulate API call with timeout
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Mock project data - replace with actual API call
        const mockProjectData = {
          id: projectSlug,
          name: `Project ${projectSlug.charAt(0).toUpperCase() + projectSlug.slice(1)}`,
          description: `Life Cycle Assessment data for ${projectSlug}`,
        };
        
        setProjectData(mockProjectData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch project data');
        console.error('Error fetching project data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
  }, [projectSlug]);

  return {
    projectSlug,
    projectData,
    loading,
    error,
  };
};