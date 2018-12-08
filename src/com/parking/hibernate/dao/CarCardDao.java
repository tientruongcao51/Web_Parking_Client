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

import com.parking.hibernate.entity.CarCard;

@Component
@Transactional
public class CarCardDao {

	public List<CarCard> list() {
		String uri = Constant.URI + "/getAllListCarCard";
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<List<CarCard>> rateResponse = restTemplate.exchange(uri, HttpMethod.GET, null,
				new ParameterizedTypeReference<List<CarCard>>() {
				});
		List<CarCard> lst = rateResponse.getBody();
		return lst;

	}

	public List<CarCard> list(int first, int max) {
		String uri = Constant.URI + "/getListCarCard/first=" + first + "&max=" + max;
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<List<CarCard>> rateResponse = restTemplate.exchange(uri, HttpMethod.GET, null,
				new ParameterizedTypeReference<List<CarCard>>() {
				});
		List<CarCard> lstCateMem = rateResponse.getBody();
		return lstCateMem;
	}

	public CarCard getById(int id) {
		String uri = Constant.URI + "/getCarCardById/" + id;
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<CarCard> rateResponse = restTemplate.exchange(uri, HttpMethod.GET, null,
				new ParameterizedTypeReference<CarCard>() {
				});
		CarCard vocabularyguideline = rateResponse.getBody();
		return vocabularyguideline;
	}

	public void add(CarCard cate) {
		String url = Constant.URI + "/addCarCard";
		RestTemplate restTemplate = new RestTemplate();
		CarCard CarCard = restTemplate.postForObject(url, cate, CarCard.class);
	}

	public void update(CarCard catemember) {
		final String uri = Constant.URI + "/updateCarCard";

		RestTemplate restTemplate = new RestTemplate();
		restTemplate.put(uri, catemember);
	}

	public void delete(int id) {
		String uri = Constant.URI + "/deleteCarCard/" + id;
		Map<String, Integer> params = new HashMap<String, Integer>();
		params.put("id", id);

		RestTemplate restTemplate = new RestTemplate();
		restTemplate.delete(uri, params);
	}

}
