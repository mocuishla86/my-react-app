import React from 'react';
import { render, cleanup } from "@testing-library/react";
import ToDoList from "./to-do-list"

describe('<ToDoList />', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should show a text indicating that is a todo list', () => {
    const component = render(<ToDoList></ToDoList>);

    expect(component.baseElement.textContent).toContain('Esto es una todo')
  });

  it('should show a button called Add To Do', () => {
    const component = render(<ToDoList></ToDoList>);

    //expect(component.baseElement.textContent).toContain('Add To Do');
    expect(component.queryByRole('button').textContent).toBe('Add To Do');
  });

  it('should not show any TO DO initially', () => {
    const component = render(<ToDoList></ToDoList>);

    expect(component.queryAllByRole('listitem').length).toBe(0);
  });
});