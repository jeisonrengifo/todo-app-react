package com.rest.services.restful.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

/**
 * 
 * @author Alex Rengifo August 2020
 *
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoResource {

	@Autowired
	private TodoHardCodedService todoService;

	/**
	 * getAllTodos
	 * 
	 * @param username
	 * @return
	 */
	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username) {
		return todoService.findAll();

	}

	/**
	 * geTodo
	 * 
	 * @param username
	 * @param id
	 * @return
	 */
	@GetMapping("/users/{username}/todos/{id}")
	public Todo geTodo(@PathVariable String username, @PathVariable long id) {
		return todoService.findById(id);

	}

	/**
	 * Update todo
	 * 
	 * @param user
	 * @param id
	 * @param todo
	 * @return
	 */
	@PutMapping("/users/{user}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String user, @PathVariable long id, @RequestBody Todo todo) {

		Todo todoUpdate = todoService.saveTodo(todo);
		return new ResponseEntity<Todo>(todoUpdate, HttpStatus.OK);
	}

	@PostMapping("/users/{user}/todos")
	public ResponseEntity<Void> createTodo(@PathVariable String user, @RequestBody Todo todo) {
		Todo todoCreated = todoService.saveTodo(todo);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(todoCreated.getId())
				.toUri();
		
		return ResponseEntity.created(uri).build();

	}

	/**
	 * deleteTodo
	 * 
	 * @param username
	 * @param id
	 * @return
	 */
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {

		Todo todo = todoService.deleteById(id);
		if (todo != null) {
			return ResponseEntity.noContent().build();
		}

		return ResponseEntity.notFound().build();

	}

}
