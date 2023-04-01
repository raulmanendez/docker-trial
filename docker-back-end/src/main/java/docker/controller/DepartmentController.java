package docker.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import docker.entity.Department;
import docker.repository.DepartmentRepository;

@CrossOrigin
@RestController
@RequestMapping("department")
public class DepartmentController {

	@Autowired
	private DepartmentRepository repository;
	
	@PostMapping
	public Department add(@RequestBody Department department) {
		return repository.save(department);
	}
	
	@GetMapping
	public List<Department> getAll() {
		return (List<Department>) repository.findAll();
	}
	
	@DeleteMapping("{id}")
	public void delete(@PathVariable Long id) {
		repository.deleteById(id);
	}
	
}
