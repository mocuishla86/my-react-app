import React from 'react';
import { render, cleanup, fireEvent } from "@testing-library/react";
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

    expect(component.baseElement.textContent).toContain('Add To Do');
    //Other version (maybe less generic and more coupled to implementation but also valid)
    //expect(component.queryByRole('button').textContent).toBe('Add To Do');
  });

  it('should not show any TO DO initially', () => {
    const component = render(<ToDoList></ToDoList>);

    expect(component.queryAllByRole('listitem').length).toBe(0);
  });

  // https://testing-library.com/docs/dom-testing-library/api-events
  it('should add a todo when the button is clicked', () => {
    const component = render(<ToDoList></ToDoList>);
    const button = component.queryByRole('button');

    fireEvent.click(button);

    expect(component.queryAllByRole('listitem').length).toBe(1);
  });

  it('concatenate arrays in a modernn way', () => {
    const intialArray = [1,2,3,4];

    const newArray = [...intialArray, 5, 6]

    expect(newArray).toEqual([1,2,3,4,5, 6]);
  });

  it ('should add todo as many times button is clicked', () => {
    const component = render(<ToDoList></ToDoList>);
    const button = component.queryByRole('button');

    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)

    expect(component.queryAllByRole('listitem').length).toBe(3);
  })
});