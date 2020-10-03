const search = (data, name) => {
  let found = [];
  data.forEach((game) => {
    if (game.Name.toLowerCase().includes(name.toLowerCase())) {
      found.push(game);
    }
  });

  return found;
};

export default search;
