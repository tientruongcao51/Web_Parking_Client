package com.parking.hibernate.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

public class CarCard implements Serializable {
	private static final long serialVersionUID = 1L;

	private int id;
	private String code;
	private Date dateCreate;
	private String status;
	private String type;
	
	private Set<CardCustomer> listCardCustomer = new HashSet<CardCustomer>();

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public Date getDateCreate() {
		return dateCreate;
	}

	public void setDateCreate(Date dateCreate) {
		this.dateCreate = dateCreate;
	}

	public Set<CardCustomer> getListCardCustomer() {
		return listCardCustomer;
	}

	public void setListCardCustomer(Set<CardCustomer> listCardCustomer) {
		this.listCardCustomer = listCardCustomer;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

}
