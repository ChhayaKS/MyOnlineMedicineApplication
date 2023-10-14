package org.capston.medicare.service;

import java.util.List;

import org.capston.medicare.entity.Cart;
import org.capston.medicare.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService {
	@Autowired
	private CartRepository cartRepository;

	public Cart addToCart(Cart cart) {
		return cartRepository.save(cart);
	}

	public List<Cart> getAllByUserCart(long id) {
		return cartRepository.findAllByUserId(id);
	}

	public void updateCart(Cart cart, long id) {
		Cart cartUpdate = cartRepository.findById(id).get();
		cartUpdate = cart;
		cartRepository.save(cartUpdate);
	}

	public void deleteCart(long id) {
		cartRepository.deleteById(id);
	}

}
