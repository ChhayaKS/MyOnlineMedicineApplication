package org.capston.medicare.controller;

import java.util.List;

import org.capston.medicare.entity.Cart;
import org.capston.medicare.entity.Medicine;
import org.capston.medicare.entity.User;
import org.capston.medicare.exception.MedicineNotFoundException;
import org.capston.medicare.service.CartService;
import org.capston.medicare.service.MedicineService;
import org.capston.medicare.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4200/")
@RequestMapping("/cart")
public class CartController {
	 @Autowired
	 private CartService cartService;
	 
	 @Autowired
	 private UserService userService;
	 
	 @Autowired
	 private MedicineService medicineService;
	 
	 @GetMapping("/getAll/{userId}")
     public List<Cart> getCart(@PathVariable long userId)
     {
		return cartService.getAllByUserCart(userId);
		 
     }
	 
	@GetMapping("/add/{medicineId}/{userId}")
	 public ResponseEntity<Cart> addCart(@PathVariable("medicineId") long medicineId,@PathVariable("userId") long userId) throws MedicineNotFoundException
     {
		 Medicine medicine=medicineService.getMedicineById(medicineId);
		 User user=userService.getUserById(userId);
		 Cart cart=new Cart(user, medicine);
		 cart.setUnit(1);
		 cart.setTotalPrice(cart.getUnit()* ((Medicine) medicine).getPrice());
		 Cart addCart=cartService.addToCart(cart);
		 return new ResponseEntity<Cart>(addCart,HttpStatus.CREATED);	 
	 }
	 
		@DeleteMapping("/delete/{cartId}")
		public ResponseEntity<?> deleteCart(@PathVariable long cartId) {

			cartService.deleteCart(cartId);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		
		@PutMapping("/update-cart/{cid}")
		public void updateCart(@RequestBody Cart cart, @PathVariable long cid) {
			cartService.updateCart(cart, cid);
			
		}	 
}
