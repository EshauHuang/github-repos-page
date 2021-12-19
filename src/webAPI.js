const getRepos = async (page) => {
  try {
    const res = await fetch(
      `https://limitless-tor-98287.herokuapp.com/repos?page=${page}`
    );
    if (!res.ok) return [];
    return await res.json();
  } catch (err) {
    console.log(err);
    return [];
  }
};

export { getRepos };
