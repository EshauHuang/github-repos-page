const getRepos = async (page) => {
  try {
    const res = await fetch(`http://localhost:4000/repos?page=${page}`);
    if (!res.ok) return [];
    return await res.json();
  } catch (err) {
    console.log(err);
    return [];
  }
};

export { getRepos };
