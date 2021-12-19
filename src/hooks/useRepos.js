import { useEffect, useCallback, useState } from "react";
import { getRepos } from "../webAPI";

const useRepos = (reposPage) => {
  const [repos, setRepos] = useState([]);
  const fetchRepo = useCallback(async () => {
    const page = reposPage.current;
    const data = await getRepos(page);
    if (data.length === 0) return;
    const repos = data.map((repo) => ({
      title: repo.name,
      description: repo.description,
      url: repo.html_url,
      author: repo.owner.login,
      created_at: repo.created_at,
      updated_at: repo.updated_at,
    }));
    setRepos(repos);
  }, [reposPage]);
  useEffect(() => {
    fetchRepo();
  }, [fetchRepo]);
  return [repos, setRepos];
};

export default useRepos;
