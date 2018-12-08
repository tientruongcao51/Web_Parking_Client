package com.parking.hibernate.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.parking.hibernate.entity.Customer;

@Component
@Transactional
public class CustomerDao {

	public List<Customer> list() {
		String uri = Constant.URI + "/getAllListCustomer";
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<List<Customer>> rateResponse = restTemplate.exchange(uri, HttpMethod.GET, null,
				new ParameterizedTypeReference<List<Customer>>() {
				});
		List<Customer> lst = rateResponse.getBody();
		return lst;

	}

	public List<Customer> list(int first, int max) {
		String uri = Constant.URI + "/getListCustomer/first=" + first + "&max=" + max;
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<List<Customer>> rateResponse = restTemplate.exchange(uri, HttpMethod.GET, null,
				new ParameterizedTypeReference<List<Customer>>() {
				});
		List<Customer> lstCateMem = rateResponse.getBody();
		return lstCateMem;
	}

	public Customer getById(int id) {
		String uri = Constant.URI + "/getCustomerById/" + id;
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<Customer> rateResponse = restTemplate.exchange(uri, HttpMethod.GET, null,
				new ParameterizedTypeReference<Customer>() {
				});
		Customer vocabularyguideline = rateResponse.getBody();
		return vocabularyguideline;
	}

	public void add(Customer cate) {
		String url = Constant.URI + "/addCustomer";
		RestTemplate restTemplate = new RestTemplate();
		Customer Customer = restTemplate.postForObject(url, cate, Customer.class);
	}

	public void update(Customer catemember) {
		final String uri = Constant.URI + "/updateCustomer";

		RestTemplate restTemplate = new RestTemplate();
		restTemplate.put(uri, catemember);
	}

	public void delete(int id) {
		String uri = Constant.URI + "/deleteCustomer/" + id;
		Map<String, Integer> params = new HashMap<String, Integer>();
		params.put("id", id);

		RestTemplate restTemplate = new RestTemplate();
		restTemplate.delete(uri, params);
	}

}
