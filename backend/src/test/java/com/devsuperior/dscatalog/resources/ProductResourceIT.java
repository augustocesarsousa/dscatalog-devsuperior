package com.devsuperior.dscatalog.resources;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
public class ProductResourceIT {
	
	@Autowired
	private MockMvc mockMvc;
	
	private Long existingId;
	private Long noExistingId;
	private Long countTotalProducts;
	
	@BeforeEach
	void setUp() throws Exception {
		existingId = 1L;
		noExistingId = 1000L;
		countTotalProducts = 25L;		
	}
	
	@Test
	public void findAllShouldReturnSortedPageWhenSortByName() throws Exception{
		mockMvc.perform(get("/products?page=0&size=12&sort=name,asc", noExistingId))
			.andExpect(status().isOk())
			.andExpect(jsonPath("$.totalElements").value(countTotalProducts))
			.andExpect(jsonPath("$.content").exists())
			.andExpect(jsonPath("$.content[0].name").value("Macbook Pro"))
			.andExpect(jsonPath("$.content[1].name").value("PC Gamer"))
			.andExpect(jsonPath("$.content[2].name").value("PC Gamer Alfa"));
	}
	
}
