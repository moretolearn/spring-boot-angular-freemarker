package com.moretolearn;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

	@GetMapping(value = "/")
    public String redirect(Model model) {
		model.addAttribute("landPage", "index");
        return "angular18/index";
    }
	
	@GetMapping(value = "/appinfo")
    public String redirect1() {
        return "appinfo";
    }
	
}
