package com.rest.services.restful.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;
/**
 * 
 * @author Alex Rengifo
 * Sept 2020
 */
@Service
public class TodoHardCodedService {

	private static List<Todo>todos=new ArrayList();
	private static int idCounter=0;
	
	static {
		todos.add(new Todo(++idCounter, "alex", "Learn React", new Date(), false));
		todos.add(new Todo(++idCounter, "alex", "Learn MicroServices", new Date(), false));
		todos.add(new Todo(++idCounter, "alex", "Learn CloudComputing", new Date(), false));
	}
	
	/**
	 * findAll todos
	 * @return
	 */
	public List<Todo>findAll(){
		return todos;
	}
	
	/**
	 * findById todo
	 * @param id
	 * @return
	 */
	public Todo findById(long id) {
		for(Todo todo: todos) {
			if(todo.getId()==id) {
				return todo;
			}
		}
		return null;		
	}
	
	/**
	 * deleteById todo
	 * @param id
	 * @return
	 */
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if(todo==null) 
			return null;
					else 
			todos.remove(todo);
		return todo;
		
		
	}
	
	/**
	 * Save todo
	 * @param todo
	 * @return
	 */
	public Todo saveTodo(Todo todo) {
		
		if(todo.getId()==-1 || todo.getId()==0) {
			todo.setId(++idCounter);
			todos.add(todo);
		}else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		
		return todo;
		
	}
	
}
