const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      // Write the date check condition here and return the array
      // of overdue items accordingly.
      return all.filter(item => {
        const dueDate = new Date(item.dueDate);
        const today = new Date();
        return dueDate < today.setHours(0,0,0,0);
      })
    }
  
    const dueToday = () => {
      // Write the date check condition here and return the array
      // of todo items that are due today accordingly.
      return all.filter(item => {
        const dueDate = new Date(item.dueDate).toISOString().split("T")[0];
        const today = new Date().toISOString().split("T")[0];
        return dueDate==today;
      })
    }
  
    const dueLater = () => {
      // Write the date check condition here and return the array
      // of todo items that are due later accordingly.
      return all.filter(item => {
        const dueDate = new Date(item.dueDate);
        const today = new Date();
        return dueDate> today;
      })
    }
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string
      // as per the format given above.
      let show= list.map(item => {
        let check=item.completed?"[x]":"[ ]";
        const dueDate = new Date(item.dueDate).toISOString().split("T")[0];
        const today = new Date().toISOString().split("T")[0];
        return (dueDate==today)?`${check} ${item.title}` : `${check} ${item.title} ${item.dueDate}`
      })
      return show.join("\n");
    }
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList
    };
  };
  
module.exports=todoList;