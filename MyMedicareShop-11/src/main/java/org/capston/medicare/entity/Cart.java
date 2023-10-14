package org.capston.medicare.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Integer unit;
	private Double totalPrice;

	public Cart() {
		// TODO Auto-generated constructor stub
	}
	@OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JsonIgnore
	@JoinColumn(nullable = false, name = "user_id")
	private User user;

	@OneToOne
	@JsonIgnore
	private Medicine medicine;

	public Cart(Long id, Integer unit, Double totalPrice) {
		super();
		this.id = id;
		this.unit = unit;
		this.totalPrice = totalPrice;
	}
	
	
	public Cart(User user,Medicine medicine) {
		super();
		this.user = user;
		this.medicine = medicine;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public Integer getUnit() {
		return unit;
	}


	public void setUnit(Integer unit) {
		this.unit = unit;
	}


	public Double getTotalPrice() {
		return totalPrice;
	}


	public void setTotalPrice(Double totalPrice) {
		this.totalPrice = totalPrice;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public Medicine getMedicine() {
		return medicine;
	}


	public void setMedicine(Medicine medicine) {
		this.medicine = medicine;
	}



}
