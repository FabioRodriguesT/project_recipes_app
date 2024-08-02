const switchConditionAPI = (condition: string) => {
  switch (condition) {
    case 'ingredient':
      return 'filter.php?i';
    case 'name':
      return 'search.php?s';
    case 'category':
      return 'list.php?c';
    case 'filter':
      return 'filter.php?c';
    default:
      return 'search.php?f';
  }
};

export default switchConditionAPI;
