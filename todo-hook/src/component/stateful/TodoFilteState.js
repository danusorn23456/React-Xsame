import { useState } from "react";

export default initialValue => {
  const [FilterWith, setFilterWith] = useState(initialValue);

  return {
    FilterWith,
    FilteredList: todos => {
      switch (FilterWith) {
        case "all":
          return todos;
        case "pending":
          return todos.filter(item => item.isComplete === false);
        case "complete":
          return todos.filter(item => item.isComplete === true);
        default:
          break;
      }
    },
    Filter: type => {
      setFilterWith(type);
    }
  };
};
