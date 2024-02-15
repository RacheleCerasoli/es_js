function uncompletedNotes(notes) {
  // ...
  const uncompletedTodos = [];


  notes.forEach(note => {

    const uncompleted = note.todos.filter(todo => !todo.done);


    if (uncompleted.length > 0) {
      uncompletedTodos.push({
        id: note.id,
        description: note.description,
        todos: uncompleted,
      });
    }
  });

  return uncompletedTodos;
}

const notes = [
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: false,
      },
    ],
  },
];

// uncompletedNotes(notes);
const uncompleted = uncompletedNotes(notes);
console.log(uncompleted);
