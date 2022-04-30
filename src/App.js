import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "kupić mydło", done: true },
  { id: 2, content: "zjeść jabłko", done: false },
];

const doneTasksHidden = false;

function App() {
  return (
    <Container>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} doneTasksHidden={doneTasksHidden} />}
        extraHeaderContent={<Buttons tasks={tasks} doneTasksHidden={doneTasksHidden} />}
      />
    </Container>
  );
}
export default App;
