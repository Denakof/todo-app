import React, { useEffect, useState } from "react";
import useForm from "../hooks/form.js";
import Form from "./Form.js";
import List from "./List.js";
import { v4 as uuid } from "uuid";
import Header from "./Header.js";
import { SettingsContext } from '../../context/settings';
import { useContext } from "react";
const ToDo = () => {
  const settings = useContext(SettingsContext);


  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(settings.itemNumber);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  function pagination() {
    let result = list.slice(startPage, endPage);
    return result;
  }

  function next() {
    setStartPage(startPage + settings.itemNumber);
    setEndPage(endPage + settings.itemNumber);
  }
  function previous() {
    setEndPage(endPage - settings.itemNumber);
    setStartPage(startPage - settings.itemNumber);
  }
  return (
    <>
      <Header incomplete={incomplete} />
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
      <List
        list={list}
        pagination={pagination}
        next={next}
        previous={previous}
        toggleComplete={toggleComplete}
        deleteItem={deleteItem}
      />
    </>
  );
};

export default ToDo;
