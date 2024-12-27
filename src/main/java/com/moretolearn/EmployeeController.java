package com.moretolearn;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/employees")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

	@GetMapping
	public List<Employee> getEmployees(){
		ArrayList<Employee> arrayList = new ArrayList<>();
		arrayList.add(new Employee("Ram", 23, 454565.23));
		arrayList.add(new Employee("Ram", 23, 454565.23));
		arrayList.add(new Employee("Ram", 23, 454565.23));
		arrayList.add(new Employee("Ram", 23, 454565.23));
		arrayList.add(new Employee("Ram", 23, 454565.23));
		arrayList.add(new Employee("Ram", 23, 454565.23));
		return arrayList;
	}
}
