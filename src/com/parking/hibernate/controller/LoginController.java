package com.parking.hibernate.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController {
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public ModelAndView index(ModelMap model) {
		ModelAndView modelView = new ModelAndView("/login");
		return modelView;
	}
	
	@RequestMapping(value = "/loginaction", method = RequestMethod.GET)
	public ModelAndView login(ModelMap model,String username,String password) {
		ModelAndView modelView = new ModelAndView("redirect:/parking/customer");
		return modelView;
	}
}
