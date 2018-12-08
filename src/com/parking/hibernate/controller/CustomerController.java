package com.parking.hibernate.controller;

import java.util.ArrayList;
import java.util.Date;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.parking.hibernate.dao.CustomerDao;
import com.parking.hibernate.entity.Customer;

@Controller
public class CustomerController {

	@Autowired
	CustomerDao customerDao;

	@RequestMapping(value = "/parking/customer", method = RequestMethod.GET)
	public ModelAndView getList(ModelMap model) {
		ModelAndView modelView = new ModelAndView("/customer/list");
		ArrayList<Customer> lsCustomer = (ArrayList<Customer>) customerDao.list();
		modelView.addObject("listCustomer", lsCustomer);
		return modelView;
	}

	@RequestMapping(value = "/parking/addCustomer", method = RequestMethod.POST)
	public ModelAndView add(String name, String address, String carNumber, String phone) {
		Customer customer = new Customer();
		customer.setName(name);
		customer.setAddress(address);
		customer.setCarNumber(carNumber);
		customer.setPhone(phone);
		customer.setLastCheckIn(new Date());
		customerDao.add(customer);
		ModelAndView modelView = new ModelAndView("redirect:/parking/customer");
		ArrayList<Customer> lsCustomer = (ArrayList<Customer>) customerDao.list();
		modelView.addObject("listCustomer", lsCustomer);
		return modelView;
	}

	@RequestMapping(value = "/parking/updateCustomer", method = RequestMethod.POST)
	public ModelAndView update(String name, String address, String carNumber, String phone, int id) {
		Customer customer = customerDao.getById(id);
		customer.setName(name);
		customer.setAddress(address);
		customer.setCarNumber(carNumber);
		customer.setPhone(phone);
		customer.setLastCheckIn(new Date());
		customerDao.update(customer);
		ModelAndView modelView = new ModelAndView("redirect:/parking/customer");
		ArrayList<Customer> lsCustomer = (ArrayList<Customer>) customerDao.list();
		modelView.addObject("listCustomer", lsCustomer);
		return modelView;
	}

	@RequestMapping(value = "/parking/deleteCustomer", method = RequestMethod.GET)
	public ModelAndView delete(int id) {
		ModelAndView modelView = new ModelAndView("redirect:/parking/customer");
		customerDao.delete(id);
		ArrayList<Customer> lsCustomer = (ArrayList<Customer>) customerDao.list();
		modelView.addObject("listCustomer", lsCustomer);
		return modelView;
	}

	@RequestMapping(value = "/parking/deleteCustomer/deleteDad", method = RequestMethod.GET)
	@ResponseBody
	public String checkDadToDelelete(int id) throws Exception {
		Customer cus = customerDao.getById(id);
		if (cus.getListCardCustomer() == null || cus.getListCardCustomer().isEmpty()) {
			return "0";
		} else {
			return "1";
		}
	}

	@RequestMapping(value = "/parking/loadCustomer", method = RequestMethod.GET)
	@ResponseBody
	protected String loadOneCustomer(int id) throws JSONException {
		JSONObject obj = new JSONObject();
		Customer cus = customerDao.getById(id);
		obj.put("id", cus.getId());
		obj.put("name", cus.getName());
		obj.put("phone", cus.getPhone());
		obj.put("carNumber", cus.getCarNumber());
		obj.put("address", cus.getAddress());
		return obj.toString();
	}

}
